"""Artifact storage for tool outputs.

Certain tools (notes, todo_list, document_editor) store their artifacts in DB
and return only artifact_id via SSE instead of the full data.
"""
import json
import logging
import uuid
from datetime import datetime, timezone
from typing import Any, Dict, Optional, Set

from application.core.mongo_db import MongoDB
from application.core.settings import settings

logger = logging.getLogger(__name__)


class ArtifactStorage:
    """Handles storing tool artifacts in DB and returning artifact references."""

    ARTIFACT_TOOLS: Set[str] = {"notes", "todo_list", "document_editor"}

    def __init__(self, user_id: Optional[str] = None):
        self.user_id = user_id or "local"
        db = MongoDB.get_client()[settings.MONGO_DB_NAME]
        self.collection = db["tool_artifacts"]

    def is_artifact_tool(self, tool_name: str) -> bool:
        """Check if tool should store artifacts in DB."""
        return tool_name in self.ARTIFACT_TOOLS

    def _serialize_result(self, result: Any) -> str:
        """Serialize result to string."""
        if isinstance(result, str):
            return result
        try:
            return json.dumps(result, default=str)
        except (TypeError, ValueError):
            return str(result)

    def store_artifact(
        self,
        result: Any,
        tool_name: str,
        action_name: str,
        call_id: str,
        tool_id: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Store tool result as artifact in DB."""
        artifact_id = str(uuid.uuid4())
        result_str = self._serialize_result(result)

        artifact_doc = {
            "artifact_id": artifact_id,
            "user_id": self.user_id,
            "tool_name": tool_name,
            "tool_id": tool_id,
            "action_name": action_name,
            "call_id": call_id,
            "data": result_str,
            "created_at": datetime.now(timezone.utc),
        }

        self.collection.insert_one(artifact_doc)
        logger.debug(f"Stored artifact {artifact_id} for tool {tool_name}/{action_name}")

        return {
            "artifact_id": artifact_id,
            "tool_name": tool_name,
            "action_name": action_name,
        }

    def get_artifact(self, artifact_id: str) -> Optional[Dict[str, Any]]:
        """Retrieve stored artifact by ID."""
        doc = self.collection.find_one({
            "artifact_id": artifact_id,
            "user_id": self.user_id
        })

        if not doc:
            return None

        return {
            "artifact_id": doc["artifact_id"],
            "tool_name": doc["tool_name"],
            "action_name": doc["action_name"],
            "data": doc["data"],
            "created_at": doc["created_at"].isoformat() if doc.get("created_at") else None,
        }

    def process_tool_result(
        self,
        result: Any,
        tool_name: str,
        action_name: str,
        call_id: str,
        tool_id: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Process a tool result - store in DB for artifact tools, return inline otherwise."""
        if self.is_artifact_tool(tool_name):
            artifact_info = self.store_artifact(
                result, tool_name, action_name, call_id, tool_id
            )
            return {
                "stored": True,
                "artifact_id": artifact_info["artifact_id"],
                "tool_name": tool_name,
                "action_name": action_name,
            }

        result_str = self._serialize_result(result)
        return {
            "stored": False,
            "display_result": result_str,
        }

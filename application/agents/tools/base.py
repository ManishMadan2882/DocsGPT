from abc import ABC, abstractmethod


class Tool(ABC):
    @abstractmethod
    def execute_action(self, action_name: str, **kwargs):
        pass

    @abstractmethod
    def get_actions_metadata(self):
        """
        Returns a list of JSON objects describing the actions supported by the tool.
        """
        pass

    @abstractmethod
    def get_config_requirements(self):
        """
        Returns a dictionary describing the configuration requirements for the tool.
        """
        pass

    def uses_artifact_storage(self) -> bool:
        """
        Returns True if this tool's results should be stored as artifacts in DB.
        Override in subclasses that need artifact storage.
        """
        return False

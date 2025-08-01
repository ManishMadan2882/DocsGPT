const endpoints = {
  USER: {
    CONFIG: '/api/config',
    NEW_TOKEN: '/api/generate_token',
    DOCS: '/api/sources',
    DOCS_CHECK: '/api/docs_check',
    DOCS_PAGINATED: '/api/sources/paginated',
    API_KEYS: '/api/get_api_keys',
    CREATE_API_KEY: '/api/create_api_key',
    DELETE_API_KEY: '/api/delete_api_key',
    AGENT: (id: string) => `/api/get_agent?id=${id}`,
    AGENTS: '/api/get_agents',
    CREATE_AGENT: '/api/create_agent',
    UPDATE_AGENT: (agent_id: string) => `/api/update_agent/${agent_id}`,
    DELETE_AGENT: (id: string) => `/api/delete_agent?id=${id}`,
    PINNED_AGENTS: '/api/pinned_agents',
    TOGGLE_PIN_AGENT: (id: string) => `/api/pin_agent?id=${id}`,
    SHARED_AGENT: (id: string) => `/api/shared_agent?token=${id}`,
    SHARED_AGENTS: '/api/shared_agents',
    SHARE_AGENT: `/api/share_agent`,
    REMOVE_SHARED_AGENT: (id: string) => `/api/remove_shared_agent?id=${id}`,
    AGENT_WEBHOOK: (id: string) => `/api/agent_webhook?id=${id}`,
    PROMPTS: '/api/get_prompts',
    CREATE_PROMPT: '/api/create_prompt',
    DELETE_PROMPT: '/api/delete_prompt',
    UPDATE_PROMPT: '/api/update_prompt',
    SINGLE_PROMPT: (id: string) => `/api/get_single_prompt?id=${id}`,
    DELETE_PATH: (docPath: string) => `/api/delete_old?source_id=${docPath}`,
    TASK_STATUS: (task_id: string) => `/api/task_status?task_id=${task_id}`,
    MESSAGE_ANALYTICS: '/api/get_message_analytics',
    TOKEN_ANALYTICS: '/api/get_token_analytics',
    FEEDBACK_ANALYTICS: '/api/get_feedback_analytics',
    LOGS: `/api/get_user_logs`,
    MANAGE_SYNC: '/api/manage_sync',
    GET_AVAILABLE_TOOLS: '/api/available_tools',
    GET_USER_TOOLS: '/api/get_tools',
    CREATE_TOOL: '/api/create_tool',
    UPDATE_TOOL_STATUS: '/api/update_tool_status',
    UPDATE_TOOL: '/api/update_tool',
    DELETE_TOOL: '/api/delete_tool',
    GET_CHUNKS: (
      docId: string,
      page: number,
      per_page: number,
      path?: string,
      search?: string,
    ) =>
      `/api/get_chunks?id=${docId}&page=${page}&per_page=${per_page}${
        path ? `&path=${encodeURIComponent(path)}` : ''
      }${search ? `&search=${encodeURIComponent(search)}` : ''}`,
    ADD_CHUNK: '/api/add_chunk',
    DELETE_CHUNK: (docId: string, chunkId: string) =>
      `/api/delete_chunk?id=${docId}&chunk_id=${chunkId}`,
    UPDATE_CHUNK: '/api/update_chunk',
    STORE_ATTACHMENT: '/api/store_attachment',
    DIRECTORY_STRUCTURE: (docId: string) =>
      `/api/directory_structure?id=${docId}`,
    MANAGE_SOURCE_FILES: '/api/manage_source_files',
  },
  CONVERSATION: {
    ANSWER: '/api/answer',
    ANSWER_STREAMING: '/stream',
    SEARCH: '/api/search',
    FEEDBACK: '/api/feedback',
    CONVERSATION: (id: string) => `/api/get_single_conversation?id=${id}`,
    CONVERSATIONS: '/api/get_conversations',
    SHARE_CONVERSATION: (isPromptable: boolean) =>
      `/api/share?isPromptable=${isPromptable}`,
    SHARED_CONVERSATION: (identifier: string) =>
      `/api/shared_conversation/${identifier}`,
    DELETE: (id: string) => `/api/delete_conversation?id=${id}`,
    DELETE_ALL: '/api/delete_all_conversations',
    UPDATE: '/api/update_conversation_name',
  },
};

export default endpoints;

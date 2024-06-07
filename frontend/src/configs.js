const env = import.meta.env;

export const serverUrl = env.VITE_SERVER_URL || "http://localhost:8080";

export const baseUrl = import.meta.env.VITE_APP_WEB_API_URL ?? "";
export const baseApiUrl = baseUrl.endsWith("/")
  ? `${baseUrl}api/`
  : `${baseUrl}/api/`;

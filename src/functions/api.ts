export const API_URL = "https://lti-server.azurewebsites.net";

export async function INFO() {
  return {
    url: API_URL + "/info",
  };
}

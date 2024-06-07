import axios from "axios";
const baseUrl =
  "https://jsonplaceholder.typicode.com";

export async function GET_SERVICE(endpoint: string) {
  const url = baseUrl + endpoint;
  const headers = await setHeaders();
  try {
    return await axios.get(url, { headers });
  } catch (error: any) {
    return error.response;
  }
}

export async function POST_SERVICE(body: any, endpoint: string) {
  const url = baseUrl + endpoint;
  const headers = await setHeaders();

  try {
    return await axios.post(url, body, { headers });
  } catch (error: any) {
    return error.response;
  }
}

async function setHeaders() {
  let headers;
  headers = {
    Authorization: "basic",
    "Content-Type": "application/json",
    username: "offer",
    password: "password012345",
  };
  return headers;
}

import axios from "axios";
import { host } from "../settings";

export const signInWithToken = async (token) => {
  const config = {
    headers: {
      'Authorization': token
    }
  }
  const response = await axios.post(host + '/auth/signin', {}, config);
  const data = response.data;
  const newToken = data.token;
  if (token) {
    window.sessionStorage.setItem('token', newToken);
    return true;
  }
  return false
}
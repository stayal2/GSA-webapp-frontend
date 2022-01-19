import axios from "axios";
import {host} from "../settings";

export const signInWithCredentials = async (email, password) => {
  const response = await axios.post(host + '/auth/signin', {email, password})
  return response.data
}

export const signInWithToken = async (token) => {
  const config = {
    headers: {
      'Authorization': token
    }
  }
  const response = await axios.post(host + '/auth/signin', {}, config);
  return response.data
}
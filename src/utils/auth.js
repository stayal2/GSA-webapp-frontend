import axios from "axios";
import {host} from "../settings";

export const signInWithCredentials = async (email, password) => {
  try {
    const response = await axios.post(host + '/auth/signin', {email, password})
    return response.data
  } catch (e) {
    return null
  }
}

export const signInWithToken = async (token) => {
  const config = {
    headers: {
      'Authorization': token
    }
  }
  try {
    const response = await axios.post(host + '/auth/signin', {}, config);
    return response.data
  } catch (e) {
    return null
  }
}
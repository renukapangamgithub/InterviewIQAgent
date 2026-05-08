import axios from "axios";
import { serverURL } from "../App";

export async function googleAuthService(userData) {
  return await axios.post(`${serverURL}/api/auth/google`, userData, {
    withCredentials: true,
  });
}

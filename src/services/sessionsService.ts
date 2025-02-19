import axios from "axios";
import { SessionPayload } from "../interfaces/session";

export const validateToken = async (data: SessionPayload): Promise<boolean> => {
  const authUrl = `${import.meta.env.VITE_AUTH_API}/users/token`;

  try {
    const response = await axios.post(authUrl, data);
    return response.data.valid;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
};

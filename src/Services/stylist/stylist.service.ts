import axios from "axios";
import { API_URL } from "../../config";

export async function getStylistProfile(stylistId?: string) {
  try {
    const result = await axios.get(`${API_URL}/stylists/76a644f7-90e4-42b6-9435-3564201a05ea`);

    return result.data;
  } catch (error: any) {
    if (error?.response) {
      alert(error?.response?.data.error);
    }
    return;
  }
}
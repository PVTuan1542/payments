import axios from "axios";
import { API_URL, tokenCustomer } from "../../config";

export async function getStylistService(stylistId?: string) {
  try {
    const result = await axios.get(`${API_URL}/services`, {
      headers: {
        Authorization: `Bearer ${tokenCustomer}`,
      },
      params: {
        stylistId: '76a644f7-90e4-42b6-9435-3564201a05ea',
        status: 'ENABLE'
      },
    });

    return result.data;
  } catch (error: any) {
    if (error?.response) {
      alert(error?.response?.data.error);
    }
    return;
  }
}
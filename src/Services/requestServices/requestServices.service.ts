import axios from "axios";
import { API_URL, tokenCustomer } from "../../config";

export async function getRequestServices(status?: string) {
  try {
    const result = await axios.get(`${API_URL}/requestServices`, {
      headers: {
        Authorization: `Bearer ${tokenCustomer}`,
      },
      params: {
        status,
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

export async function acceptRequestService(requestServiceId?: string) {
  try {
    await axios.put(
      `${API_URL}/requestServices/${requestServiceId}/accept`,
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
      }
    );

    return;
  } catch (error: any) {
    if (error?.response) {
      alert(error?.response?.data.error);
    }
    return;
  }
}

import axios from "axios";
import { API_URL, tokenCustomer } from "../../config";

export async function createRequestServiceAppointment(
  requestServiceId: string,
  fromDate?: Date,
  toDate?: Date
) {
  try {
    const result = await axios.post(
      `${API_URL}/requestServices/${requestServiceId}/appointment`,
      {
        fromDate: "2024-05-19 11:00:00.001",
        toDate: "2024-05-19 13:00:00.001",
      },
      {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
      }
    );

    return result.data;
  } catch (error: any) {
    if (error?.response) {
      alert(error?.response?.data.error);
    }
    return;
  }
}

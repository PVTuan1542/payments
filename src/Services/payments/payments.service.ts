import axios from "axios";
import { API_URL, tokenCustomer } from "../../config";

export async function createAppointmentPay(
  dataPayment: any,
  paymentMethodId: string
) {
  try {
    const result = await axios.post(
      `${API_URL}/payment/intent`,
      {
        appointmentId: dataPayment?.appointmentId,
        tip: 10,
        paymentMethodId,
        currency: 'USD'
      },
      {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
      }
    );

    await axios.post(
      `${API_URL}/payment/${result?.data?.paymentId}/confirm`,
      {
        transactionId: result?.data?.transaction?.transactionId,
      },
      {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
      }
    );

    return true;
  } catch (error: any) {
    if (error?.response) {
      alert(error?.response?.data.error);
    }
    return null
  }
}

export async function createPaymentDeposit(
  dataPayment: any,
  paymentMethodId: string
) {
  try {
    const result = await axios.post(
      `${API_URL}/payments/deposit`,
      {
        appointmentId: dataPayment?.appointmentId,
        paymentMethodId,
        description: "Payment deposit for appointment",
      },
      {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
      }
    );

    await axios.post(
      `${API_URL}/payment/${result?.data?.paymentId}/confirm`,
      {
        transactionId: result?.data?.transaction?.transactionId,
      },
      {
        headers: {
          Authorization: `Bearer ${tokenCustomer}`,
        },
      }
    );
    return true;
  } catch (error: any) {
    if (error?.response) {
      alert(error?.response?.data.error);
    }
    return;
  }
}

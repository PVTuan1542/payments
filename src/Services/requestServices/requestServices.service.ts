import axios from "axios";
import { API_URL, tokenCustomer } from "../../config";
import {
  ICreateRequestServiceService,
  IMakeOfferRequestServiceService,
  IModifyRequestServiceService,
} from "./requestService.type";

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

export async function modifyRequestService({
  data,
}: IModifyRequestServiceService) {
  try {
    const { requestServiceId, ...newData } = data;
    await axios.put(
      `${API_URL}/requestServices/${data.requestServiceId}`,
      { ...newData },
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

export async function makeOffer({ data }: IMakeOfferRequestServiceService) {
  try {
    await axios.put(
      `${API_URL}/requestServices/${data.requestServiceId}/makeOffer`,
      { offer: data.offer },
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

export async function createRequestService({
  data,
}: ICreateRequestServiceService) {
  try {
    await axios.post(
      `${API_URL}/requestServices`,
      { ...data },
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

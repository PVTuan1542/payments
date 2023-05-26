import axios from "axios";
import { API_URL } from "../../config";

export async function uploadImageToS3(file: any) {
  try {
    const response = await getPresignedUrl(file?.name, file?.type);

    axios.put(
      response.signedUrl,
      file,
      {
        headers: {
          "Content-Type": file?.type,
        },
      }
    );

    return response.returnUrl;
  } catch (error: any) {
    if (error?.response) {
      alert(error?.response?.data.error);
    }
    return;
  }
}

async function getPresignedUrl(fileName: string, fileExtension: string) {
  try {
    const result = await axios.post(`${API_URL}/s3/presignedUrl`, {
      fileName,
      fileExtension,
    });

    return result.data;
  } catch (error: any) {
    if (error?.response) {
      alert(error?.response?.data.error);
    }
    return;
  }
}

import axiosClient from "../axiosClient";
import // UPLOAD_IMAGE_ENDPOINT,
"../../const/endpoint.const";

// const api_endpoint = "https://api-stag.innovaz.io/v1/storage/user"

export const uploadService = {
  uploadImage: (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    // return axiosClient.post(UPLOAD_IMAGE_ENDPOINT, formData);
  },

  // uploadImageType: (file:any) => {
  //   let formData = new FormData();
  //   formData.append("image", file);
  //   let endpoint =`${process.env.NEXT_PUBLIC_API_ENDPOINT}storage/user${UPLOAD_IMAGE_ENDPOINT}`;
  //   return axiosClient.post(endpoint, formData);
  // },
};

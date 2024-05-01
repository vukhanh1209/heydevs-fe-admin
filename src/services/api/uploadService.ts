import // UPLOAD_IMAGE_ENDPOINT,
"../../const/endpoint.const";
import axios from "axios";

const CLOUD_NAME = "dh8gztcr3";
const UPLOAD_PRESET = "job-network";
const API_KEY = "162811136575288";
const FOLDER = "pdf";

const CLOUDINARY = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

export const uploadService = {
  uploadPDF: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("api_key", API_KEY);
    formData.append("folder", FOLDER);

    return axios.post(CLOUDINARY, formData);
  },
};

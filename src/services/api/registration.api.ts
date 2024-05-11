import {
  GET_REGISTRATION_LIST,
  SEND_ACCOUNT_TO_RECRUITER,
} from "@/const/endpoint.const";
import axiosClient from "../axiosClient";
import { RegistrationRES } from "../registration/registration.respone";
import { PaginationRES } from "@/types/response.type";
import { RegistrationListREQ } from "../registration/registration.request";

export const getRegistrationList = (
  params: RegistrationListREQ
): Promise<PaginationRES<RegistrationRES[]>> =>
  axiosClient.get(GET_REGISTRATION_LIST, { params });

export const getRegistrationDetail = (id: string): Promise<RegistrationRES> =>
  axiosClient.get(`${GET_REGISTRATION_LIST}/${id}`);

export const sendAccountToRecruiter = (id: string) =>
  axiosClient.post(`${SEND_ACCOUNT_TO_RECRUITER}/${id}`);

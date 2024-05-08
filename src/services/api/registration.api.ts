import { GET_REGISTRATION_LIST } from "@/const/endpoint.const";
import axiosClient from "../axiosClient";
import { RegistrationRES } from "../registration/registration.respone";
import { PaginationRES } from "@/types/response.type";
import { RegistrationListREQ } from "../registration/registration.request";

export const getRegistrationList = (
  params: RegistrationListREQ
): Promise<PaginationRES<RegistrationRES[]>> =>
  axiosClient.get(GET_REGISTRATION_LIST, { params });

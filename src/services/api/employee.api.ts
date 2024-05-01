import {
  ACTIVATE_USER,
  DEACTIVATE_USER,
  GET_ALL_USER,
  GET_USER_BY_ID,
} from "@/const/endpoint.const";
import axiosClient from "../axiosClient";
import { UserProfileRES } from "../employee/employee.respone";
import { PaginationRES } from "@/types/response.type";
import { AllUsersREQ } from "../employee/employee.request";

export const getEmployeeDetail = (id: string): Promise<UserProfileRES> =>
  axiosClient.get(`${GET_USER_BY_ID}/${id}`);

export const getAllEmployees = (
  params: AllUsersREQ
): Promise<PaginationRES<UserProfileRES[]>> =>
  axiosClient.get(GET_ALL_USER, { params });

export const deactivateEmployee = (id: number) =>
  axiosClient.post(`${DEACTIVATE_USER}/${id}`);

export const activateEmployee = (email: string) =>
  axiosClient.post(`${ACTIVATE_USER}`, { email });

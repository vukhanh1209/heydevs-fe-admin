import {
  EMPLOYEE_STATUS,
  GET_ALL_USER,
  GET_USER_BY_ID,
} from "@/const/endpoint.const";
import axiosClient from "../axiosClient";
import { UserProfileRES } from "../employee/employee.respone";
import { PaginationRES } from "@/types/response.type";
import {
  AllUsersREQ,
  ChangeAccountStatusREQ,
} from "../employee/employee.request";

export const getEmployeeDetail = (id: string): Promise<UserProfileRES> =>
  axiosClient.get(`${GET_USER_BY_ID}/${id}`);

export const getAllEmployees = (
  params: AllUsersREQ
): Promise<PaginationRES<UserProfileRES[]>> =>
  axiosClient.get(GET_ALL_USER, { params });

export const changeEmployeeStatus = (body: ChangeAccountStatusREQ) =>
  axiosClient.post(EMPLOYEE_STATUS, body);

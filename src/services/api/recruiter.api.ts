import { GET_ALL_RECRUITER, GET_RECRUITER_BY_ID } from "@/const/endpoint.const";
import axiosClient from "../axiosClient";
import { PaginationRES } from "@/types/response.type";
import { RecruiterRES } from "../recruiter/recruiter.respone";
import { AllRecruitersREQ } from "../recruiter/recruiter.request";

export const getRecruiterDetail = (id: number): Promise<RecruiterRES> =>
  axiosClient.get(`${GET_RECRUITER_BY_ID}/${id}`);

export const getAllRecruiter = (
  params: AllRecruitersREQ
): Promise<PaginationRES<RecruiterRES[]>> =>
  axiosClient.get(GET_ALL_RECRUITER, { params });

// export const deactivateEmployee = (id: number) =>
//   axiosClient.post(`${DEACTIVATE_USER}/${id}`);

// export const activateEmployee = (email: string) =>
//   axiosClient.post(`${ACTIVATE_USER}`, { email });

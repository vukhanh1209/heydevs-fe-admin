import {
  GET_APPLICATIONS_BY_JOB,
  GET_APPLICATION_DETAIL,
  UPDATE_APPLICATION_STATUS,
} from "@/const/endpoint.const";
import axiosClient from "../axiosClient";
import {
  ApplicationDetailREQ,
  ApplicationsREQ,
} from "../application/application.request";
import {
  ApplicationDetailRES,
  ApplicationByJobRES,
} from "../application/application.respone";
import { PaginationRES } from "@/types/response.type";

export const getAllApplicationsByJob = ({
  jobId,
  ...params
}: ApplicationsREQ): Promise<PaginationRES<ApplicationByJobRES[]>> =>
  axiosClient.get(`${GET_APPLICATIONS_BY_JOB}/${jobId}`, { params });

export const getApplicationDetail = ({
  jobId,
  applicationId,
}: ApplicationDetailREQ): Promise<ApplicationDetailRES> =>
  axiosClient.get(`${GET_APPLICATION_DETAIL}/${jobId}/${applicationId}`);

export const updateApplicationStatus = (jobId: number) =>
  axiosClient.post(`${UPDATE_APPLICATION_STATUS}/${jobId}`);

import { GET_ALL_JOBS } from "@/const/endpoint.const";
import axiosClient from "../axiosClient";
import { JobRES } from "../job/job.response";
import { JobsREQ } from "../job/job.request";
import { PaginationRES } from "@/types/response.type";

export const getAllJobs = (params: JobsREQ): Promise<PaginationRES<JobRES[]>> =>
  axiosClient.get(GET_ALL_JOBS, { params });

import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import {
  getAllApplicationsByJob,
  getApplicationDetail,
} from "@/services/api/application.api";
import {
  ApplicationDetailREQ,
  ApplicationsREQ,
} from "@/services/application/application.request";

export const applicationsByJob = createAsyncThunk(
  "applications-by-job",
  async (params: ApplicationsREQ) => {
    return await getAllApplicationsByJob(params);
  }
);

export const applicationById = createAsyncThunk(
  "application-by-id",
  async (params: ApplicationDetailREQ) => {
    return await getApplicationDetail(params);
  }
);

import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { JobsREQ } from "@/services/job/job.request";
import { getAllJobs } from "@/services/api/job.api";

export const allJobs = createAsyncThunk("jobs", async (params: JobsREQ) => {
  return await getAllJobs(params);
});

export type ApplicationDetailREQ = {
  jobId: number;
  applicationId: number;
};

export type ApplicationsREQ = {
  jobId: number;
  page: number;
  size?: number;
};

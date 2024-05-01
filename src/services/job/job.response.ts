export type JobRES = {
  jobId: number;
  title: string;
  companyId: number;
  companyName: string;
  minSalary: number;
  maxSalary: number;
  jobType: string;
  location: string;
  address: string;
  skills: string[];
  description: string;
  createdDate: string;
  expiredDate: string;
  requirements: string;
  totalApplications: number;
};

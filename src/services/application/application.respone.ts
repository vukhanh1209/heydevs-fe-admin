import { APPLICATION_STATUS } from "@/enums/application.enum";

export type ApplicationByJobRES = {
  id: number;
  linkCV: string;
  jobId: number;
  jobTitle: string;
  candidateName: string;
  phoneNumber: string;
  email: string;
  submittedAt: string;
  coverLetter: string;
  status: APPLICATION_STATUS;
  candidateId: number;
  birthdate: string;
  address: string;
};

export type ApplicationDetailRES = {
  id: number;
  linkCV: string;
  jobId: number;
  jobTitle: string;
  candidateName: string;
  phoneNumber: string;
  email: string;
  submittedAt: string;
  coverLetter: string;
  status: APPLICATION_STATUS;
  candidateId: number;
  birthdate: string;
  address: string;
  jobDescription: string;
  jobRequirement: string;
};

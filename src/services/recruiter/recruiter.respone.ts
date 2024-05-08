import {
  COMPANY_TYPE,
  RECRUITER_STATUS,
  RECRUITER_TYPE,
} from "@/enums/recruiter.enum";

export type RecruiterRES = {
  recruiterId: number;
  companyName: string;
  companyAddress: string;
  minCompanySize: number;
  maxCompanySize: number;
  phoneNumber: string;
  overTimePolicy: string;
  recruitmentProcedure: string;
  benefit: string;
  introduction: string;
  fbUrl: string;
  websiteUrl: string;
  linkedInUrl: string;
  status: RECRUITER_STATUS;
  username: string;
  birthDate: string;
  nickname: string;
  type: RECRUITER_TYPE;
  country: string;
  companyType: keyof typeof COMPANY_TYPE;
  workingFrom: string;
  workingTo: string;
  companyLogo: string;
  companyKeySkills: {
    id: number;
    title: string;
  }[];
  techDescription: string;
};

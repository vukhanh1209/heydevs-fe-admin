import { RECRUITER_TYPE } from "@/enums/recruiter.enum";

export type AllRecruitersREQ = {
  page: number;
  size?: number;
  type: RECRUITER_TYPE;
};

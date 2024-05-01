import { EMPLOYEE_STATUS, GENDER } from "@/enums/employee.enum";
import {
  CandidateEducationRES,
  CandidateExperienceRES,
} from "./employee.respone";

export type UserProfileDTO = {
  id: number;
  info: {
    address: string;
    birthdate: string;
    email: string;
    fullName: string;
    gender: GENDER;
    phoneNumber: string;
    position: string;
    location: string;
    linkWebsiteProfile: string;
    city: string;
    avatar: string;
  };
  aboutMe: string;
  skills: string[];
  education: CandidateEducationRES;
  experience: CandidateExperienceRES[];
  userStatus: EMPLOYEE_STATUS;
};

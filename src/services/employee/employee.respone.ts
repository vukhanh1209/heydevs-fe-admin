import { EMPLOYEE_STATUS, GENDER } from "@/enums/employee.enum";

export type CandidateEducationRES = {
  id: number;
  major: string;
  school: string;
  startDate: string;
  endDate: string;
};

export type CandidateExperienceRES = {
  id: number;
  companyName: string;
  jobTitle: string;
  startTime: string;
  endTime: string;
};

export type UserProfileRES = {
  id: number;
  aboutMe: string;
  fullName: string;
  email: string;
  location: string;
  address: string;
  position: string;
  phoneNumber: string;
  // @JsonFormat(pattern = "dd/MM/yyyy")
  birthdate: string;
  linkWebsiteProfile: string;
  skills: string[];
  city: string;
  gender: keyof typeof GENDER;
  education: CandidateEducationRES;
  experience: CandidateExperienceRES[];
  avatar: string;
  userStatus: EMPLOYEE_STATUS.ACTIVE | EMPLOYEE_STATUS.INACTIVE;
};

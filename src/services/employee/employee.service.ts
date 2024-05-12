import { UserProfileDTO } from "./employee.dto";
import { UserProfileRES } from "./employee.respone";

export const getUserProfileDTO = (data: UserProfileRES): UserProfileDTO => ({
  id: data.id,
  info: {
    address: data.address,
    birthdate: data.birthdate,
    email: data.email,
    fullName: data.fullName,
    gender: data.gender,
    phoneNumber: data.phoneNumber,
    position: data.position,
    location: data.location,
    linkWebsiteProfile: data.linkWebsiteProfile,
    city: data.city,
    avatar: data.avatar,
  },
  aboutMe: data.aboutMe,
  skills: data.skills,
  education: data.education,
  experience: data.experience,
  userStatus: data.userStatus,
});

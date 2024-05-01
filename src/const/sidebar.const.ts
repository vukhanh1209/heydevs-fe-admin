import ApplicationIcon from "@/images/customer/application.svg";
import PostIcon from "@/images/customer/post.svg";
import ProfileIcon from "@/images/customer/profile.svg";
import MangeIcon from "@/images/customer/manage.svg";
import PasswordIcon from "@/images/customer/password.svg";
import { PATH } from "./path.const";

export const SIDEBAR_TAB = [
  {
    title: "Phê duyệt đơn ứng tuyển",
    href: PATH.JOBS.get(),
    icon: ApplicationIcon,
  },
  {
    title: "Đơn đăng ký",
    href: PATH.REGISTRATION.get(),
    icon: ProfileIcon,
  },
  {
    title: "Quản lý nhà tuyển dụng",
    href: PATH.RECRUITER.get(),
    icon: MangeIcon,
  },
  {
    title: "Quản lý ứng viên",
    href: PATH.EMPLOYEE.get(),
    icon: MangeIcon,
  },
];

import { EMPLOYEE_STATUS } from "@/enums/employee.enum";

export type AllUsersREQ = {
  page: number;
  size?: number;
  status: EMPLOYEE_STATUS;
};

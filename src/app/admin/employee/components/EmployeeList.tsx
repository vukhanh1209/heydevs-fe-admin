"use client";
import { useMemo, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Empty from "@/images/my-job/empty.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import { PaginationRES } from "@/types/response.type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GENDER, EMPLOYEE_STATUS } from "@/enums/employee.enum";
import { getAllEmployees } from "@/services/api/employee.api";
import { UserProfileRES } from "@/services/employee/employee.respone";
import EmployeeCard from "./EmployeeCard";

const EMPLOYEE_STATUSES = [EMPLOYEE_STATUS.ACTIVE, EMPLOYEE_STATUS.DEACTIVATED];

const DUMMY_DATA = Array.from({ length: 5 }).map(() => ({
  id: 1,
  aboutMe: "Hello I'm...",
  fullName: "Nguyen Hong Vu Khanh",
  email: "nghvukhanh@gmail.com",
  location: "48 Ung Van Khiem, Binh Thanh Dicstrict, Ho Chi Minh City",
  address: "48 Ung Van Khiem, Binh Thanh Dicstrict, Ho Chi Minh City",
  position: "Frontend Engineer",
  phoneNumber: "0986354614",
  // @JsonFormat(pattern = "dd/MM/yyyy")
  birthdate: "12/09/2001",
  linkWebsiteProfile: "facebook.com",
  skills: ["HTML", "CSS", "ReactJS", "NextJS", "Docker", "CI/CD"],
  city: "Ho Chi Minh City",
  gender: GENDER.MALE,
  education: {
    id: 1,
    major: "Software Engineer",
    school: "HCMUTE",
    startDate: "2019",
    endDate: "2024",
  },
  experience: [
    {
      id: 1,
      companyName: "Esol Labs",
      jobTitle: "Frontend Developer",
      startTime: "07/2023",
      endTime: "12/2023",
    },
    {
      id: 2,
      companyName: "WALA ICT",
      jobTitle: "Frontend Engineer",
      startTime: "12/2023",
      endTime: "--",
    },
  ],
  avatar: "",
  userStatus: EMPLOYEE_STATUS.ACTIVE,
}));

export default function EmployeeList() {
  const [selectedStatus, setSelectedStatus] = useState<EMPLOYEE_STATUS>(
    EMPLOYEE_STATUS.ACTIVE
  );
  const searchParams = useSearchParams();
  const currentPage = useMemo(
    () =>
      Number(searchParams.get("page")) > 1
        ? Number(searchParams.get("page")) - 1
        : 0,
    [searchParams.get("page")]
  );

  const { isLoading, data: employeeListData } = useQuery({
    queryKey: ["list-employee", { currentPage, selectedStatus }],
    queryFn: () =>
      getAllEmployees({ page: currentPage, size: 10, status: selectedStatus }),
    select: (response: PaginationRES<UserProfileRES[]>) => {
      return {
        data: response.content,
        total: response.totalPages,
        currentPage: response.number,
        totalAccount: response.totalElements,
      };
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  return (
    <section className="w-full py-6">
      <div className="flex gap-5 mb-10">
        {EMPLOYEE_STATUSES.map((status: EMPLOYEE_STATUS, index: number) => (
          <button
            key={index}
            onClick={() => setSelectedStatus(status)}
            className={`${
              status === selectedStatus
                ? "border-primary-red text-primary-red bg-white-red"
                : "border-dark-grey text-dark-grey hover:text-primary-red hover:border-primary-red "
            } px-3 py-1 rounded-lg border-2 text-lg  transition-all`}
          >
            {status}
          </button>
        ))}
      </div>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <ClipLoader color="#ed1b2f" size={50} />
        </div>
      ) : employeeListData && employeeListData.data.length >= 0 ? (
        <>
          <h5 className="text-3xl font-bold text-left text-primary-black mb-8">
            {employeeListData.totalAccount} ứng viên được tìm thấy
          </h5>
          {employeeListData.data.map((employee: UserProfileRES) => (
            <EmployeeCard key={employee.id} data={employee} />
          ))}
          <Pagination
            total={employeeListData.total}
            currentPage={employeeListData.currentPage + 1}
          />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
          <Image src={Empty} width={153} height={153} alt="empty" />
          <p className="text-rich-grey text-xl text-center">
            Không có ứng viên nào
          </p>
        </div>
      )}
    </section>
  );
}

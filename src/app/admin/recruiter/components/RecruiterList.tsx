"use client";
import { useMemo, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Empty from "@/images/my-job/empty.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import { PaginationRES } from "@/types/response.type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllRecruiter } from "@/services/api/recruiter.api";
import { RECRUITER_STATUS, RECRUITER_TYPE } from "@/enums/recruiter.enum";
import { RecruiterRES } from "@/services/recruiter/recruiter.respone";
import RecruiterCard from "./RecruiterCard";
import { RecruiterDTO } from "@/services/recruiter/recruiter.dto";

const RECRUITER_TYPES = Object.values(RECRUITER_TYPE);

// const DUMMY_DATA = Array.from({ length: 5 }).map(() => ({
//   recruiterId: 1,
//   companyName: "KMS Technology",
//   companyAddress: "55 Nam Ky Khoi Nghia, Disctrict 1, Ho Chi Minh City",
//   phoneNumber: "0123456789",
//   status: RECRUITER_STATUS.ACTIVE,
//   username: "abc@gmail.com",
//   type: RECRUITER_TYPE.BASIC,
//   minCompanySize: 1000,
//   maxCompanySize: 1000,
//   overTimePolicy: "No OT",
//   recruitmentProcedure: "",
//   benefit: "",
//   introduction: "",
//   fbUrl: "",
//   websiteUrl: "",
//   linkedInUrl: "",
//   birthDate: "",
//   nickname: "",
// }));

export default function RecruiterList() {
  const [selectedType, setRecruiterType] = useState<RECRUITER_TYPE>(
    RECRUITER_TYPE.BASIC
  );
  const searchParams = useSearchParams();
  const currentPage = useMemo(
    () =>
      Number(searchParams.get("page")) > 1
        ? Number(searchParams.get("page")) - 1
        : 0,
    [searchParams.get("page")]
  );

  const { isLoading, data: recruiters } = useQuery({
    queryKey: ["list-recruiter", { currentPage, selectedType }],
    queryFn: () =>
      getAllRecruiter({ page: currentPage, size: 10, type: selectedType }),
    select: (response: PaginationRES<RecruiterRES[]>) => {
      console.log("Log ~ RecruiterList ~ response:", response);
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
        {RECRUITER_TYPES.map((type: RECRUITER_TYPE, index: number) => (
          <button
            key={index}
            onClick={() => setRecruiterType(type)}
            className={`${
              type === selectedType
                ? "border-primary-red text-primary-red bg-white-red"
                : "border-dark-grey text-dark-grey hover:text-primary-red hover:border-primary-red "
            } px-3 py-1 rounded-lg border-2 text-lg  transition-all`}
          >
            {type}
          </button>
        ))}
      </div>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <ClipLoader color="#ed1b2f" size={50} />
        </div>
      ) : recruiters && recruiters.data.length >= 0 ? (
        <>
          <h5 className="text-3xl font-bold text-left text-primary-black mb-8">
            {recruiters.totalAccount} nhà tuyển dụng được tìm thấy
          </h5>
          {recruiters.data.map((recruiter: RecruiterDTO) => (
            <RecruiterCard key={recruiter.recruiterId} data={recruiter} />
          ))}
          <Pagination
            total={recruiters.total}
            currentPage={recruiters.currentPage + 1}
          />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
          <Image src={Empty} width={153} height={153} alt="empty" />
          <p className="text-rich-grey text-xl text-center">
            Không có nhà tuyển dụng nào
          </p>
        </div>
      )}
    </section>
  );
}

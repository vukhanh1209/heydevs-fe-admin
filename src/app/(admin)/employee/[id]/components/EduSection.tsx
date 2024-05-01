"use client";

import { CandidateEducationRES } from "@/services/employee/employee.respone";

export default function EduSection({
  education,
}: {
  education: CandidateEducationRES;
}) {
  return (
    <div className="flex flex-col mt-6 px-6 pt-6 pb-8 rounded-lg bg-white text-primary-black">
      <div className="flex justify-between w-full items-center">
        <span className="text-xl md:text-2xl font-bold ">Học vấn</span>
      </div>
      {education ? (
        <div className="border-t-2 border-silver-grey pt-6 mt-4 text-base">
          <p className="font-bold text-lg mb-2">{education?.school}</p>
          <p className="mb-2">{education?.major}</p>
          {education?.startDate && (
            <p className="mt-1 uppercase">
              {education?.startDate} - {education?.endDate || "Hiện tại"}
            </p>
          )}
        </div>
      ) : (
        <span className="text-base text-dark-grey  mt-[10px]">
          Ứng viên chưa nhập học vấn
        </span>
      )}
    </div>
  );
}

"use client";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useMemo, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Empty from "@/images/my-job/empty.svg";
import Image from "next/image";
import JobCard from "./JobCard";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import { PaginationRES } from "@/types/response.type";
import { JobRES } from "@/services/job/job.response";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllJobs } from "@/services/api/job.api";

export default function JobList() {
  const searchParams = useSearchParams();
  const currentPage = useMemo(
    () =>
      Number(searchParams.get("page")) > 1
        ? Number(searchParams.get("page")) - 1
        : 0,
    [searchParams]
  );

  const { isLoading, data: jobs } = useQuery({
    queryKey: ["list-job", { currentPage }],
    queryFn: () => getAllJobs({ page: currentPage, size: 10 }),
    select: (response: PaginationRES<JobRES[]>) => {
      return {
        data: response.content,
        total: response.totalPages,
        currentPage: response.number,
        totalJob: response.totalElements,
      };
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ClipLoader color="#ed1b2f" size={50} />
      </div>
    );

  return (
    <section className="w-full py-6">
      {jobs && jobs.data.length > 0 ? (
        <>
          <h5 className="text-3xl font-bold text-left text-primary-black mb-8">
            {jobs.totalJob} bài tuyển dụng được tìm thấy
          </h5>
          {jobs.data.map((job: JobRES, index: number) => (
            <JobCard key={index} data={job} />
          ))}
          <Pagination total={jobs.total} currentPage={jobs.currentPage + 1} />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
          <Image src={Empty} width={153} height={153} alt="empty" />
          <p className="text-rich-grey text-xl text-center">
            Không có đơn ứng tuyển cần phê duyệt
          </p>
        </div>
      )}
    </section>
  );
}

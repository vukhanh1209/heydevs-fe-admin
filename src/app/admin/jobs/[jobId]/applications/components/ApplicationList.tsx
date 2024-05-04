"use client";
import { useAppDispatch } from "@/redux/hook";
import { useEffect, useMemo, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Empty from "@/images/my-job/empty.svg";
import Image from "next/image";
import ApplicationCard from "./ApplicationCard";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllApplicationsByJob } from "@/services/api/application.api";
import { PaginationRES } from "@/types/response.type";
import { ApplicationByJobRES } from "@/services/application/application.respone";

export default function ApplicationList({ jobId }: { jobId: number }) {
  const searchParams = useSearchParams();
  const currentPage = useMemo(
    () =>
      Number(searchParams.get("page")) > 1
        ? Number(searchParams.get("page")) - 1
        : 0,
    [searchParams]
  );

  const { isLoading, data: applications } = useQuery({
    queryKey: ["list-application", { jobId, currentPage }],
    queryFn: () =>
      getAllApplicationsByJob({ jobId, page: currentPage, size: 10 }),
    select: (response: PaginationRES<ApplicationByJobRES[]>) => {
      return {
        data: response.content,
        total: response.totalPages,
        currentPage: response.number,
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
      {applications && applications?.data.length > 0 ? (
        <>
          <h5 className="text-3xl font-bold text-left text-primary-black mb-8">
            {applications?.total} bài tuyển dụng được tìm thấy
          </h5>
          {applications?.data.map((application: ApplicationByJobRES) => (
            <ApplicationCard
              key={application.id}
              data={application}
              jobId={jobId}
            />
          ))}
          <Pagination
            total={applications?.total}
            currentPage={applications?.currentPage + 1}
          />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
          <Image src={Empty} width={153} height={153} alt="empty" />
          <p className="text-rich-grey text-xl text-center">
            Không có đơn ứng tuyển nào
          </p>
        </div>
      )}
    </section>
  );
}

"use client";
import { getRegistrationList } from "@/services/api/registration.api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ClipLoader } from "react-spinners";
import Empty from "@/images/my-job/empty.svg";
import Pagination from "@/components/Pagination/Pagination";
import { RegistrationRES } from "@/services/registration/registration.respone";
import RegistrationCard from "./RegistrationCard";

export default function RegistrationList() {
  const searchParams = useSearchParams();
  const currentPage = useMemo(
    () =>
      Number(searchParams.get("page")) > 1
        ? Number(searchParams.get("page")) - 1
        : 0,
    [searchParams.get("page")]
  );

  const { isLoading, data: registrationList } = useQuery({
    queryKey: ["list-registration", currentPage],
    queryFn: () => getRegistrationList({ page: currentPage }),
    select: (response) => {
      return {
        data: response.content,
        total: response.totalPages,
        currentPage: response.number,
        totalItem: response.totalElements,
      };
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  return (
    <section className="w-full py-6">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <ClipLoader color="#ed1b2f" size={50} />
        </div>
      ) : registrationList && registrationList.data.length >= 0 ? (
        <>
          <h5 className="text-3xl font-bold text-left text-primary-black mb-8">
            {registrationList.totalItem} đơn đăng kí được tìm thấy
          </h5>
          {registrationList.data.map((registration: RegistrationRES) => (
            <RegistrationCard
              key={registration.recruiterId}
              data={registration}
            />
          ))}
          <Pagination
            total={registrationList.total}
            currentPage={registrationList.currentPage + 1}
          />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
          <Image src={Empty} width={153} height={153} alt="empty" />
          <p className="text-rich-grey text-xl text-center">
            Không có đơn đăng kí
          </p>
        </div>
      )}
    </section>
  );
}

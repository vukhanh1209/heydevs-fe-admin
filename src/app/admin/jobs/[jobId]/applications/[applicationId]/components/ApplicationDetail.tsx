"use client";

import Image from "next/image";
import Link from "next/link";

import BlueEye from "@/images/blue-eye.svg";
import { ClipLoader } from "react-spinners";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import {
  getApplicationDetail,
  updateApplicationStatus,
} from "@/services/api/application.api";
import { ApplicationDetailRES } from "@/services/application/application.respone";
import { notifyErrors, notifySuccess } from "@/utils/notification";
import { useRouter } from "next/navigation";
import { PATH } from "@/const/path.const";

export default function ApplicationDetail({
  jobId,
  applicationId,
}: {
  jobId: number;
  applicationId: number;
}) {
  const router = useRouter();
  const { isLoading, data: applicationDetail } = useQuery({
    queryKey: ["application-detail", { jobId, applicationId }],
    queryFn: () => getApplicationDetail({ jobId, applicationId }),
    select: (response: ApplicationDetailRES) => {
      return response;
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  const { isPending: isApproving, mutate: approveApplication } = useMutation({
    mutationKey: ["application-status"],
    mutationFn: (applicationId: number) =>
      updateApplicationStatus(applicationId),
    onSuccess: (data: any) => {
      notifySuccess(
        "Phê duyệt thành công. Đơn ứng tuyển sẽ được gửi đến nhà tuyển dụng"
      );
      setTimeout(() => {
        router.replace(PATH.JOBS.getApplications(jobId));
      }, 500);
    },
    onError: () => {
      notifyErrors("Phê duyệt không thành công");
    },
  });

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ClipLoader color="#ed1b2f" size={50} />
      </div>
    );
  return (
    <section className="relative flex flex-col gap-8  bg-white w-full h-fit pt-10 lg:p-8 lg:rounded-xl text-primary-black">
      {applicationDetail && (
        <>
          <div className="flex flex-col lg:flex-row justify-between gap-5 lg:items-center w-full">
            <Link
              href={`/customer/posted-job?id=${applicationDetail?.jobId}`}
              className="text-2xl font-bold hover:text-hyperlink"
            >
              {applicationDetail?.jobTitle}
            </Link>
            <div
              className={`border-gray-600 text-gray-600 font-medium px-3 py-2 rounded-lg border text-sm w-fit md:mt-2`}
            >
              {applicationDetail?.status}
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-xl mb-3 font-medium">Mô tả công việc:</h5>
            <div className="flex gap-5 border border-silver-grey rounded-lg p-6">
              <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: applicationDetail?.jobDescription,
                }}
              ></div>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-xl mb-3 font-medium">Yêu cầu công việc:</h5>
            <div className="flex gap-5 border border-silver-grey rounded-lg p-6">
              <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: applicationDetail?.jobRequirement,
                }}
              ></div>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-xl mb-3 font-medium">Thông tin ứng viên:</h5>
            <div className="flex gap-5 border border-silver-grey rounded-lg p-6">
              <div className="flex flex-col gap-2 min-w-[120px]">
                <span>Tên ứng viên:</span>
                <span>Email: </span>
                <span>Số điện thoại: </span>
                <span>Ngày sinh: </span>
                <span>Địa chỉ: </span>
              </div>
              <div className="flex flex-col gap-2 w-full overflow-hidden text-ellipsis">
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationDetail?.candidateName}
                </p>
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationDetail?.email}
                </p>
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationDetail?.phoneNumber}
                </p>
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationDetail?.birthdate}
                </p>
                <p className="text-ellipsis max-w-full overflow-hidden">
                  {applicationDetail?.address}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <h5 className="font-medium text-xl whitespace-nowrap">Link CV:</h5>
            <Link
              href={`${applicationDetail?.linkCV}`}
              target="_blank"
              className="flex gap-2 items-center text-hyperlink hover:bg-blue-100 w-fit px-2 py-1 rounded-lg transition-all"
            >
              <p className="">Xem CV ứng viên</p>
              <Image src={BlueEye} alt="eye" width={24} height={24} />
            </Link>
          </div>
          {applicationDetail?.coverLetter ? (
            <div className="flex flex-col">
              <h3 className="text-xl mb-3 font-medium">Thư xin việc</h3>
              <p className="w-full text-primary-black border border-silver-gray rounded-lg px-4 py-3">
                {applicationDetail?.coverLetter}
              </p>
            </div>
          ) : null}
          <div className="flex justify-center pb-10 mt-5">
            <button
              onClick={() => approveApplication(applicationId)}
              className="text-white bg-primary-red text-base font-medium lg:text-lg py-3 px-8 rounded-lg hover:bg-dark-red w-fit transition-all"
            >
              Phê duyệt
            </button>
          </div>
        </>
      )}
    </section>
  );
}

"use client";
import { JobRES } from "@/services/job/job.response";
import { calculateElapsedDate } from "@/utils/lib";
import Link from "next/link";
import CompanyAvatar from "@/images/search/companyAvatar.png";
import Image from "next/image";
import GreenCoin from "@/images/search/greenCoin.svg";
import RemoteIcon from "@/images/search/remote.svg";
import LocationPin from "@/images/location-pin.svg";
import { PATH } from "@/const/path.const";

export default function JobCard({ data }: { data: JobRES }) {
  return (
    <Link
      href={PATH.JOBS.getApplications(data?.jobId)}
      className={`relative w-full h-full`}
    >
      <div
        className={`bg-white py-5 px-6 mb-4 flex flex-col w-full divide-y divide-dashed divide-silver-grey hover:drop-shadow-lg border border-gray-200 rounded-lg transition-all`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-end justify-between w-full">
            <span className="text-sm font-medium text-dark-grey">
              {`Đăng ${calculateElapsedDate(data?.createdDate)} ngày trước`}
            </span>
            <span className="text-sm font-medium text-dark-grey">
              {data.totalApplications} đơn ứng tuyển
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center shrink-0 bg-white rounded-lg border border-silver-grey overflow-hidden">
              <Image
                src={CompanyAvatar}
                className="w-16 h-w-16"
                alt={data?.companyName}
              />
            </div>

            <div className="w-fit">
              <h1 className="text-lg font-bold text-primary-black w-fit">
                {data?.title}
              </h1>
              <p className="text-base text-rich-grey font-medium">
                {data?.companyName}
              </p>
            </div>
          </div>

          {/* <div className="flex items-center">
            <div className="flex items-center shrink-0 w-5 h-5">
              <Image src={GreenCoin} className="w-5 h-5" alt="coin" />
            </div>
            <span className="pl-2 text-available-green text-base font-medium">
              {data?.minSalary
                ? `${data?.minSalary} - ${data?.maxSalary} USD`
                : "You'll love it"}
            </span>
          </div> */}
        </div>
        {/* <div className="flex flex-col py-2 w-full ">
          <div className="flex items-center mt-1 text-sm text-rich-grey">
            <div className="flex items-center shrink-0 ">
              <Image src={RemoteIcon} className="w-4 h-4" alt="remote" />
            </div>
            <span className="pl-2">{data?.jobType}</span>
          </div>

          <div className="flex items-center mt-1 text-sm text-rich-grey">
            <div className="flex items-center shrink-0">
              <Image src={LocationPin} className="w-4 h-4" alt="location" />
            </div>
            <span className="pl-2">{data?.address}</span>
          </div>

          {data?.skills?.length > 0 && (
            <div className="flex flex-wrap w-full items-center gap-2 mt-3 mb-2">
              {data?.skills?.map((skill: any, index: number) => (
                <div
                  key={index}
                  className="py-1 px-[10px] text-xs rounded-full bg-white text-rich-grey border border-silver-grey"
                >
                  {skill?.title || String(skill)}
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </Link>
  );
}

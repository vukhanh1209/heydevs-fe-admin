"use client";
import Image from "next/legacy/image";
import Link from "next/link";

import GreenCoin from "@/images/search/greenCoin.svg";
import RemoteIcon from "@/images/search/remote.svg";
import LocationPin from "@/images/location-pin.svg";
import SuperHot from "@/images/search/super-hot.svg";
import { calculateElapsedDate } from "@/utils/lib";
import CompanyAvatar from "@/images/search/companyAvatar.png";
import { useRouter, useSearchParams } from "next/navigation";

import CheckCircle from "@/images/check-circle.svg";
import { useMemo } from "react";

interface JobCardProps {
  data: any;
  isSelected: boolean;
  paddingClassName?: string;
}

const fakeData = {
  appliedDate: 10,
  title: "[Remote] - Shopify App Dev (ReactJS, Laravel,Hidrogen)",
  companyAvatar: CompanyAvatar,
  companyName: "Yet Company",
  minSalary: 1000,
  maxSalary: 1500,
  isRemote: false,
  location: "Ho Chi Minh",
  jobSkills: ["ReactJS", "English", "Lavarel"],
  hot_level: 2,
  benefits: [
    "Salary review twice a year",
    "13th month salary",
    "Working model : Remote",
  ],
};

const JobCard = ({
  data,
  isSelected = false,
  paddingClassName,
}: JobCardProps) => {
  const router = useRouter();
  const jobItemData = data?.job || data;

  const isSuperHot = useMemo(() => {
    if (jobItemData?.level && jobItemData.level === "SUPER_HOT") return true;
    return false;
  }, [jobItemData?.level]);

  const isHot = useMemo(() => {
    if (jobItemData?.level && jobItemData.level === "HOT") return true;
    return false;
  }, [jobItemData?.level]);

  let padding = paddingClassName ? paddingClassName : "px-3 py-2";

  const createSubTitle = () => {
    const postedDate = jobItemData?.createdAt || jobItemData?.createdDate;
    const appliedDate = data?.appliedDate;
    if (postedDate) {
      return `Đăng ${calculateElapsedDate(postedDate)} ngày trước`;
    }
    if (appliedDate) {
      return "Ngày ứng tuyển: " + appliedDate;
    }
  };

  const onClickJobCard = () => {
    router.push(`job-detail?id=${jobItemData?.jobId}`);
  };

  return (
    <section
      onDoubleClick={onClickJobCard}
      className={`${isSelected && "job-card--selected"} ${
        isSuperHot && "job-card--super-hot"
      } bg-white relative mb-4 rounded-lg w-full h-full cursor-pointer shadow-md`}
    >
      <div
        className={`flex flex-col ${padding} w-full divide-y divide-dashed divide-silver-grey`}
      >
        <div className="flex flex-col pb-3 gap-3 ">
          <div className="flex items-end justify-between w-full">
            <span className="text-sm font-medium text-dark-grey">
              {createSubTitle()}
            </span>
            {isSuperHot ? (
              <div className="flex items-center rounded-l-md bg-primary-red px-3 py-1 translate-x-3 job-label--super-hot">
                <div className="flex items-center shrink-0 w-4 h-[15px]">
                  <Image src={SuperHot} className="w-4 h-[15px]" alt="fire" />
                </div>
                <span className="uppercase text-white text-sm font-semibold">
                  Super hot
                </span>
              </div>
            ) : isHot ? (
              <div className="flex items-center rounded-l-md bg-[#ff9119] px-3 py-1 translate-x-3 job-label--hot">
                <span className="uppercase text-white text-sm font-semibold">
                  Hot
                </span>
              </div>
            ) : null}
          </div>
          <Link href={`/job-detail?id=${jobItemData?.jobId}`} className="w-fit">
            <h1 className="text-lg font-bold text-primary-black w-fit">
              {jobItemData?.title}
            </h1>
          </Link>
          <div className="flex items-center">
            <div className="flex items-center shrink-0 w-12 h-12 bg-white rounded-lg border border-silver-grey">
              <Link href={`/recruiter?id=${jobItemData?.companyId}`}>
                <Image
                  src={fakeData?.companyAvatar}
                  className="w-12 h-12"
                  alt={jobItemData?.company?.name || jobItemData?.companyName}
                />
              </Link>
            </div>
            <Link
              href={`/recruiter?id=${jobItemData?.companyId}`}
              className="text-sm ml-2 text-rich-grey"
            >
              {jobItemData?.company?.name || jobItemData?.companyName}
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center shrink-0 w-5 h-5">
              <Image src={GreenCoin} className="w-5 h-5" alt="coin" />
            </div>
            <span className="pl-2 text-available-green text-base font-medium">
              {jobItemData?.minSalary
                ? `${jobItemData?.minSalary} - ${jobItemData?.maxSalary} USD`
                : "You'll love it"}
            </span>
          </div>
        </div>
        <div className="flex flex-col py-2 w-full ">
          <div className="flex items-center mt-1 text-sm text-rich-grey">
            <div className="flex items-center shrink-0 ">
              <Image src={RemoteIcon} className="w-4 h-4" alt="remote" />
            </div>
            <span className="pl-2">{jobItemData?.jobType}</span>
          </div>

          <div className="flex items-center mt-1 text-sm text-rich-grey">
            <div className="flex items-center shrink-0">
              <Image src={LocationPin} className="w-4 h-4" alt="location" />
            </div>
            <span className="pl-2">
              {jobItemData?.company?.address || jobItemData?.address}
            </span>
          </div>

          {jobItemData?.skills?.length > 0 && (
            <div className="flex flex-wrap w-full items-center gap-2 mt-3 mb-2">
              {jobItemData?.skills?.map((skill: any, index: number) => (
                <div
                  key={index}
                  className="py-1 px-[10px] text-xs rounded-full bg-white text-rich-grey border border-silver-grey"
                >
                  {skill?.title || String(skill)}
                </div>
              ))}
            </div>
          )}
        </div>
        {fakeData?.benefits && (
          <ul className="py-3">
            {fakeData.benefits.map((benefit: any, index: number) => (
              <li
                key={index}
                className="flex items-center gap-3 text-sm text-primary-black font-medium mb-1"
              >
                <div className="w-[5px] h-[5px] rounded-full bg-primary-red"></div>
                {benefit}
              </li>
            ))}
          </ul>
        )}
      </div>
      {jobItemData?.isApplied && (
        <div className="flex gap-2 items-center w-full bg-[#eaf9e9] py-2 px-3 text-sm text-primary-black">
          <Image src={CheckCircle} width={24} height={24} alt="check-circle" />
          Đã ứng tuyển {jobItemData?.appliedAt}
        </div>
      )}
    </section>
  );
};

export default JobCard;

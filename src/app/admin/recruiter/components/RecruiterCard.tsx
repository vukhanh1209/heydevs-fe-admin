"use client";
import Link from "next/link";
import CompanyAvatar from "@/images/search/companyAvatar.png";
import { PATH } from "@/const/path.const";
import { RecruiterDTO } from "@/services/recruiter/recruiter.dto";
import Image from "next/image";

export default function RecruiterCard({ data }: { data: RecruiterDTO }) {
  return (
    <Link
      href={PATH.RECRUITER.getDetail(data?.recruiterId)}
      className={`relative w-full h-full`}
    >
      <div
        className={`bg-white py-4 px-6 mb-4 flex gap-8 items-center w-full hover:drop-shadow-lg border border-gray-200 rounded-lg transition-all`}
      >
        <Image
          src={CompanyAvatar}
          width={40}
          height={40}
          alt={data.companyName}
          className="h-14 w-14 aspect-square object-cover rounded-md"
        />
        <div className="flex flex-col text-rich-grey">
          <h5 className="text-primary-black font-semibold text-lg">
            {data.companyName}
          </h5>
          <span>{data.username}</span>
          <span>{data.companyAddress}</span>
          <span>{data.phoneNumber}</span>
        </div>
      </div>
    </Link>
  );
}

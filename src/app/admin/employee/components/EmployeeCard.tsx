"use client";
import Link from "next/link";
import CompanyAvatar from "@/images/search/companyAvatar.png";
import { PATH } from "@/const/path.const";
import Image from "next/image";
import { UserProfileRES } from "@/services/employee/employee.respone";

export default function EmployeeCard({ data }: { data: UserProfileRES }) {
  return (
    <Link
      href={PATH.EMPLOYEE.getDetail(data?.id)}
      className={`relative w-full h-full`}
    >
      <div
        className={`bg-white py-4 px-6 mb-4 flex gap-8 items-center w-full hover:drop-shadow-lg border border-gray-200 rounded-lg transition-all`}
      >
        {data?.avatar ? (
          <Image
            src={data.avatar}
            width={80}
            height={80}
            alt={data.avatar}
            className="h-20 w-20 aspect-square object-cover rounded-md"
          />
        ) : (
          <div className="flex mb-5 md:mb-0 items-center justify-center h-full w-[80px] aspect-square shrink-0 rounded-full border border-rich-grey bg-dark-grey">
            <p className="leading-[100%] text-4xl font-semibold  text-white">
              {data.fullName ? data.fullName[0] : ""}
            </p>
          </div>
        )}

        <div className="flex flex-col text-rich-grey">
          <h5 className="text-primary-black font-semibold text-lg">
            {data.fullName}
          </h5>
          <span>{data.email}</span>
          <span>{data.phoneNumber}</span>
          <span>{data.address}</span>
        </div>
      </div>
    </Link>
  );
}

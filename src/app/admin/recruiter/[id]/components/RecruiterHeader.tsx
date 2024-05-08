"use client";
import LocationPin from "@/images/location-pin.svg";
import Phone from "@/images/profile/phone.svg";
import Profile from "@/images/profile/profile.svg";
import Image from "next/image";

type RecruiterHeader = {
  companyName: string;
  address: string;
  username: string;
  phoneNumber: string;
  companyLogo: string;
};

const RecruiterHeader = ({
  companyName,
  address,
  username,
  phoneNumber,
  companyLogo,
}: RecruiterHeader) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6">
        <div className="flex items-center border border-silver-grey w-[120px] lg:w-[160px] aspect-square rounded-lg p-[2px]">
          <Image
            src={companyLogo || ""}
            alt="logo"
            width={120}
            height={120}
            className="w-[120px] h-[120px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-3xl font-bold pb-2 text-center lg:text-left text-rich-grey">
            {companyName}
          </h2>
          <div className="flex flex-col gap-3 text-rich-grey text-base font-normal lg:font-medium">
            <div className="flex gap-2 items-center  ">
              <Image src={LocationPin} width={16} height={16} alt="location" />
              {address}
            </div>
            <div className="flex gap-2 items-center  ">
              <Image src={Profile} width={16} height={16} alt="username" />
              {username}
            </div>
            <div className="flex gap-2 items-center  ">
              <Image src={Phone} width={16} height={16} alt="phone" />
              {phoneNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterHeader;

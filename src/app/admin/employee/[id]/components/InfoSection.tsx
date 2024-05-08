"use client";
import Image from "next/image";

import Email from "@/images/profile/email.svg";
import Gift from "@/images/profile/gift.svg";
import Phone from "@/images/profile/phone.svg";
import LocationPin from "@/images/profile/location-pin.svg";
import Profile from "@/images/profile/profile.svg";
import { GENDER } from "@/enums/employee.enum";

type InfoSectionProps = {
  info: {
    fullName: string;
    position: string;
    email: string;
    birthdate: string;
    address: string;
    phoneNumber: string;
    gender: keyof typeof GENDER;
    avatar: string;
  };
};

export default function InfoSection({
  info: {
    avatar,
    address,
    birthdate,
    email,
    fullName,
    gender,
    phoneNumber,
    position,
  },
}: InfoSectionProps) {
  return (
    <div className="relative flex flex-col items-start md:flex-row  px-6 pt-6 pb-8 rounded-lg bg-white">
      {avatar ? (
        <Image
          src={avatar}
          width={80}
          height={80}
          alt={avatar}
          className="h-[120px] w-[120px] aspect-square object-cover rounded-md"
        />
      ) : (
        <div className="flex mb-5 md:mb-0 items-center justify-center h-full w-[120px] md:h-full aspect-square shrink-0 rounded-full border border-rich-grey bg-dark-grey">
          <p className="leading-[100%] text-6xl font-semibold  text-white">
            {fullName ? fullName[0] : ""}
          </p>
        </div>
      )}

      <div className=" md:ml-8 flex flex-col w-full text-rich-grey">
        <span className="font-bold text-2xl md:text-3xl uppercase text-primary-black text-center md:text-left">
          {fullName}
        </span>

        <span className="font-bold text-lg mt-2 text-center md:text-left border-b-2 border-silver-grey md:border-b-0 pb-4 md:pb-0">
          {position}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 ">
          <div className="flex flex-col gap-4 w-full col-span-1">
            <div className="flex gap-2 items-center">
              <Image src={Email} width={16} height={16} alt="email" />
              <span>{email}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={Gift} width={16} height={16} alt="gift" />
              <span>{birthdate}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={LocationPin} width={16} height={16} alt="location" />
              <span>{address}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full col-span-1">
            <div className="flex gap-2 items-center">
              <Image src={Phone} width={16} height={16} alt="phone" />
              <span>{phoneNumber}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={Profile} width={16} height={16} alt="profile" />
              <span>{GENDER[gender]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

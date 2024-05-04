"use client";
import Image from "next/legacy/image";
import NAB from "@/images/NAB.png";
import LocationPin from "@/images/location-pin.svg";
import Phone from "@/images/profile/phone.svg";
import Profile from "@/images/profile/profile.svg";

const recruiter = {
  name: "NAB Innovation Centre Vietnam",
  avatar: NAB,
  location: "District 4, Ho Chi Minh",
  job_amount: 4,
};

const topReasons = [
  "Salary review twice a year",
  "13th month salary",
  "Working model : Remote",
];
const jobDescription = [
  "Join Shopify's new Hidrogen-powered project",
  "Use Laravel to develop Shopify applications",
  "Work in groups and coordinate work based on the team leader's work assignments",
];

const requirements = [
  "At least 2 years of React experience",
  "Experience with Shopify (Hidrogen) is advantageous",
  "Know Laravel and use it properly",
  "Has enthusiasm, responsibility for work and good teamwork skills",
  "Communication in English, knowing Japanese is advantageous",
  "Priority given to English CVs",
];

const reasonsForWorking = [
  "After a 2-month probationary, working model will be decided at the office, remote or hybrid",
  "Salary review twice a year",
  "Monthly party, and birthday gifts given to employees whose birthdays are that month",
  "Female employee's gifts on March 8 and October 20",
  "Allowances:",
  "Lunch: 50,000 VND",
  "Gasoline, bus, parking fees",
  "Snacks, drinks",
];

type RecruiterHeader = {
  companyName: string;
  address: string;
  username: string;
  phoneNumber: string;
};

const RecruiterHeader = ({
  companyName,
  address,
  username,
  phoneNumber,
}: RecruiterHeader) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6">
        <div className="flex items-center border border-silver-grey w-[120px] lg:w-[160px] aspect-square rounded-lg p-[2px]">
          <Image
            src={recruiter.avatar}
            alt="logo"
            className="w-[120px] h-[120px] lg:w-[120px] lg:h-[120px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-3xl font-bold pb-2 text-center lg:text-left text-rich-grey">
            {companyName}
          </h2>
          <div className="flex flex-col gap-3 text-rich-grey text-sm font-normal lg:font-medium">
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

"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import Globe from "@/images/globe.svg";
import Facebook from "@/images/facebook.svg";

const overview = {
  content: [
    "The NAB Innovation Centre Vietnam is owned by NAB - Australia’s largest business bank.",
    "The NAB Innovation Centre Vietnam is part of National Australia Bank (NAB) Technology & Enterprise Operations division. The mission of the NICV is to connect the talents of Vietnam to NAB and together improve the lives of those in the Vietnam technology community.",
    "As Australia’s largest business bank, NAB is focused on delivering great experiences for customers. To do this it uses modern technologies, alongside great technology talent including leading software engineers, cloud experts and quality engineers.",
    "We’re working on interesting projects to help NAB’s 8 million customers: By joining us, local software engineers will have access to a wide variety of projects and opportunities, working closely with colleagues in Australia and with global partners such as AWS and Microsoft to take advantage of the latest modern technologies.",
    "We’re investing in you: We strive to create not only a great place to work, but also the best technology centre for tech engineers to thrive.",
    "It’s more than just a career!",
    "We believe in people with ideas and dreams, and we want you to achieve your aspirations. If you have an appetite to learn, grow and elevate others around you, this is the place for you!",
  ],
  url: [
    {
      type: "website",
      url: "https://careers-vietnam.nab.com.au/jobs/search",
    },
    {
      type: "facebook",
      url: "https://www.facebook.com/NABVietnam",
    },
  ],
};

type OverviewProps = {
  description: string;
  website: string;
};

export default function Overview({ description, website }: OverviewProps) {
  return (
    <div className="divide-y divide-dashed divide-silver-grey bg-white w-full rounded-lg border border-silver-grey text-rich-grey px-6 pt-6 pb-8">
      <h1 className="text-xl lg:text-2xl text-primary-black pb-4 font-bold">
        Giới thiệu công ty
      </h1>
      <div className="w-full py-4 leading-7 text-primary-black">
        {description}
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 pt-4">
        {website && (
          <Link
            target="_blank"
            href={website}
            className="flex gap-2 items-center text-hyperlink text-base"
          >
            <Image src={Globe} width={20} height={20} alt="website" />
            <span className="">Website công ty</span>
          </Link>
        )}
        {/* {
                    companyData?.facebook &&
                    <Link target="_blank" href={companyData?.facebook} className="flex gap-2 items-center text-hyperlink text-base">
                        <Image src={Facebook} width={20} height={20} alt="facebook"/>
                        <span className="">Fanpage Facebook</span>
                    </Link>
                } */}
      </div>
    </div>
  );
}

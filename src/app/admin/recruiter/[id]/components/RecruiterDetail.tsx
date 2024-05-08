"use client";
import { getRecruiterDetail } from "@/services/api/recruiter.api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import RecruiterHeader from "./RecruiterHeader";
import Information from "./Information";
import Overview from "./Overview";
import KeySkills from "./KeySkills";
import Benefits from "./Benefits";
import RecruitmentProcedure from "./RecruitmentProcedure";

// const DUMMY_DATA = {
//   recruiterId: 1,
//   companyName: "KMS Technology",
//   companyAddress: "55 Nam Ky Khoi Nghia, Disctrict 1, Ho Chi Minh City",
//   phoneNumber: "0123456789",
//   status: RECRUITER_STATUS.ACTIVE,
//   username: "abc@gmail.com",
//   type: RECRUITER_TYPE.BASIC,
//   minCompanySize: 500,
//   maxCompanySize: 1000,
//   overTimePolicy: "No OT",
//   recruitmentProcedure: "Tuyển thẳng",
//   benefit: "Lương thấp nhất 100 củ",
//   introduction: "Rung đùi lụm 100 củ",
//   fbUrl: "facebook.com",
//   websiteUrl: "facebook.com",
//   linkedInUrl: "facebook.com",
//   birthDate: "",
//   nickname: "",
// };

// const RECRUITER_TYPES = Object.values(RECRUITER_TYPE);

export default function RecruiterDetail({ id }: { id: number }) {
  // const [currentType, setCurrentType] = useState<RECRUITER_TYPE>(
  //   RECRUITER_TYPE.BASIC
  // );

  const { isLoading, data } = useQuery({
    queryKey: ["recruiter-detail", id],
    queryFn: () => getRecruiterDetail(id),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  // useEffect(() => {
  //   if (data) setCurrentType(data.type);
  // }, [data]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ClipLoader color="#ed1b2f" size={50} />
      </div>
    );
  }

  return (
    <section className="w-full flex flex-col py-10 px-6">
      <div className="flex items-start justify-between  py-8">
        <RecruiterHeader
          companyName={data?.companyName || ""}
          address={data?.companyAddress || ""}
          username={data?.username || ""}
          phoneNumber={data?.phoneNumber || ""}
          companyLogo={data?.companyLogo || ""}
        />

        {/* <div className="relative group text-base">
          <button
            className={`px-5 py-2 rounded-lg border border-rich-grey text-rich-grey font-semibold w-[120px]`}
          >
            {currentType}
          </button>
          <div className="h-3 w-full absolute top-[100%]"></div>
          <ul className="absolute top-[100%] group-hover:visible group-hover:opacity-100 invisible opacity-0 transition-opacity w-full flex duration-500 border border-dropdown-border mt-2 flex-col bg-white rounded-lg p-2 z-50 shadow-lg text-rich-grey">
            {RECRUITER_TYPES.filter((type) => type != currentType).map(
              (type: any, index: number) => (
                <li
                  onClick={() => setCurrentType(type)}
                  key={index}
                  className={`px-3 py-2 hover:bg-light-grey cursor-pointer rounded-lg`}
                >
                  {type}
                </li>
              )
            )}
          </ul>
        </div> */}
      </div>
      {data && (
        <section className=" flex flex-col gap-6 col-span-full lg:col-span-8">
          <Information
            overtimePolicy={data.overTimePolicy}
            minCompanySize={data.minCompanySize}
            maxCompanySize={data.maxCompanySize}
            country={data.country}
            type={data.companyType}
            workingFrom={data.workingFrom}
            workingTo={data.workingTo}
          />
          <Overview
            description={data?.introduction || ""}
            website={data?.websiteUrl || ""}
          />
          <KeySkills
            skills={data.companyKeySkills}
            description={data.techDescription}
          />
          <RecruitmentProcedure data={data?.recruitmentProcedure || ""} />
          <Benefits data={data?.benefit || ""} />
        </section>
      )}

      {/* <div className="flex justify-center pb-10 mt-5">
        <button
          onClick={() => {}}
          className="text-white bg-primary-red text-base font-medium lg:text-lg py-3 px-8 rounded-lg hover:bg-dark-red w-fit transition-all"
        >
          Lưu thay đổi
        </button>
      </div> */}
    </section>
  );
}

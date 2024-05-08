import Link from "next/link";
import { PATH } from "@/const/path.const";
import { RegistrationRES } from "@/services/registration/registration.respone";

export default function RegistrationCard({ data }: { data: RegistrationRES }) {
  return (
    <Link
      href={PATH.REGISTRATION.getDetail(data?.recruiterId)}
      className={`relative w-full h-full`}
    >
      <div
        className={`bg-white py-4 px-6 mb-4 flex gap-8 items-center w-full hover:drop-shadow-lg border border-gray-200 rounded-lg transition-all`}
      >
        <div className="flex flex-col text-rich-grey">
          <h5 className="text-primary-black font-semibold text-lg">
            {data.companyName}
          </h5>
          <span>{data.username}</span>
          <span>{data.companyLocation}</span>
          <span>{data.phoneNumber}</span>
        </div>
      </div>
    </Link>
  );
}

"use client";
import { PATH } from "@/const/path.const";
import { ApplicationByJobRES } from "@/services/application/application.respone";
import Link from "next/link";

export default function ApplicationCard({
  jobId,
  data,
}: {
  jobId: number;
  data: ApplicationByJobRES;
}) {
  return (
    <Link
      href={PATH.JOBS.getApplicationDetail(jobId, data?.id)}
      className={`bg-white relative flex flex-col justify-center text-primary-black mb-4 p-6 w-full h-fit hover:drop-shadow-lg border border-gray-200 rounded-lg transition-all`}
    >
      <span className="text-dark-grey text-sm">
        Ứng tuyển ngày {data.submittedAt}
      </span>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
        <h5 className="font-semibold text-xl mt-2 mb-">{data.jobTitle}</h5>

        <button
          className={`border-gray-600 text-gray-600 font-medium px-3 py-2 rounded-lg border text-sm w-fit md:mt-2`}
        >
          {data.status}
        </button>
      </div>
      <span className="">{data.candidateName}</span>
    </Link>
  );
}

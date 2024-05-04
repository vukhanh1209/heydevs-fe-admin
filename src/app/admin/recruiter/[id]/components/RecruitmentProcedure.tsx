export default function RecruitmentProcedure({ data }: { data: string }) {
  return (
    <div className="divide-y divide-dashed divide-silver-grey bg-white w-full rounded-lg border border-silver-grey text-rich-grey px-6 p-6">
      <h1 className="text-xl lg:text-2xl text-primary-black pb-4 font-bold">
        Quy trình tuyển dụng
      </h1>
      <div
        className="w-full pt-4 text-primary-black whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </div>
  );
}

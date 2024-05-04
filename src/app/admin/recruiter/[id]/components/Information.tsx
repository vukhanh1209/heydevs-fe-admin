const companyProfile = {
  type: "Sản phẩm",
  size: "1000+",
  country: "Australia",
  working_day: "Thứ 2 - Thứ 6",
  ot_policy: "Không có OT",
};

type InformationProps = {
  minCompanySize: number;
  maxCompanySize: number;
  overtimePolicy: string;
};

export default function Information({
  overtimePolicy,
  maxCompanySize,
  minCompanySize,
}: InformationProps) {
  return (
    <div className="divide-y divide-dashed divide-silver-grey bg-white w-full rounded-lg border border-silver-grey text-rich-grey px-6 pt-6 pb-8">
      <h1 className="text-xl lg:text-2xl text-primary-black pb-4 font-bold">
        Thông tin chung
      </h1>
      <div className="divide-y divide-dashed divide-silver-grey lg:divide-y-0 grid grid-cols-3 w-full lg:gap-y-4 lg:pt-4">
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">
            Mô hình công ty
          </h5>
          <span className="text-base text-primary-black">
            {companyProfile.type}
          </span>
        </div>
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">
            Quy mô công ty
          </h5>
          <span className="text-base text-primary-black">
            {`${minCompanySize} - ${maxCompanySize}`}
          </span>
        </div>
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">Quốc gia</h5>
          <span className="text-base text-primary-black">
            {companyProfile.country}
          </span>
        </div>
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">
            Thời gian làm việc
          </h5>
          <span className="text-base text-primary-black">
            {companyProfile.working_day}
          </span>
        </div>
        <div className="flex justify-between lg:flex-col col-span-full lg:col-span-1 py-2 lg:py-0 lg:pr-4">
          <h5 className="text-base lg:text-sm text-dark-grey">
            Làm việc ngoài giờ
          </h5>
          <span className="text-base text-primary-black">
            {overtimePolicy || companyProfile.ot_policy}
          </span>
        </div>
      </div>
    </div>
  );
}

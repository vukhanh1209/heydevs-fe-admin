"use client";

export default function IntroSection({
  introduction,
}: {
  introduction: string;
}) {
  return (
    <div className="flex flex-col mt-6 px-6 pt-6 pb-8 rounded-lg bg-white text-primary-black">
      <div className="flex justify-between w-full items-center">
        <span className="text-xl md:text-2xl font-bold ">
          Giới thiệu bản thân
        </span>
      </div>
      {introduction ? (
        <p className="border-t-2 border-silver-grey pt-6 mt-4">
          {introduction}
        </p>
      ) : (
        <span className="text-base text-dark-grey  mt-[10px]">
          Tóm tắt kinh nghiệm chuyên môn, chú ý làm nổi bật các kỹ năng và điểm
          mạnh
        </span>
      )}
    </div>
  );
}

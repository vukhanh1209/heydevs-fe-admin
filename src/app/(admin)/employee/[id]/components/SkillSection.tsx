"use client";

export default function SkillsSection({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-col mt-6 px-6 pt-6 pb-8 rounded-lg bg-white">
      <div className="flex justify-between w-full items-center">
        <span className="text-xl md:text-2xl font-bold text-primary-black">
          Kỹ năng
        </span>
      </div>
      {skills?.length > 0 ? (
        <div className="flex flex-wrap w-full gap-2 mt-5">
          {skills?.map((skill: string, index: number) => (
            <div
              key={index}
              className="py-[6px] px-3 border border-dark-grey rounded-full text-rich-grey"
            >
              {skill}
            </div>
          ))}
        </div>
      ) : (
        <span className="text-base text-dark-grey mt-[10px]">
          Ứng viên chưa nhập kỹ năng
        </span>
      )}
    </div>
  );
}

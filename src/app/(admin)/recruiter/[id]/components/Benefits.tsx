const benefits = {
  topBenefits: [
    "Very competitive remuneration package",
    "Build products for millions of users in Australia",
    "Hybrid and flexible working environment",
  ],
  content: [
    "1. Generous compensation and benefit package",

    "Attractive salary and benefits",
    "20-day annual leave and 7-day sick leave, etc.",
    "13th month salary and Annual Performance Bonus",
    "Premium healthcare for yourself and family members",
    "Monthly allowance for team activities",
    "Premium welcome kit and frequent appreciation gifts ",
    "Extra benefits for long-term employees",
    "2. Exciting career and development opportunities ",

    "Large scale products with modern technologies in banking domain",
    "Clear roadmap for career advancement in both technical and leadership pathways",
    "Well-structured  learning and development programs (technical and soft skills) ",
    "Sponsored certificates in both IT and banking/finance",
    "Premium accounts on Udemy/A Cloud /Coursera, etc.",
    "English learning with native teachers",
    "Opportunity for traveling & training in Australia",
    "3. Professional and engaging working environment",

    "Hybrid working model and good work-life balance ",
    "Well-equipped & modern Agile office with fully stocked pantry",
    "Special programs to improve your physical and mental health",
    "Annual company trip and events ",
    "A solid talented team behind you – great people who love what they do",
    "If this excites you, let's have a chat over a cup of coffee!",
  ],
};

export default function Benefits() {
  return (
    <div className="divide-y divide-dashed divide-silver-grey bg-white w-full rounded-lg border border-silver-grey text-rich-grey px-6 p-6">
      <h1 className="text-xl lg:text-2xl text-primary-black pb-4 font-bold">
        Tại sao bạn sẽ yêu thích làm việc tại đây?
      </h1>
      <div className="w-full pt-4 text-primary-black">
        {renderList(benefits.topBenefits)}
        {renderContent(benefits.content)}
      </div>
    </div>
  );
}

const renderList = (listData: any) => {
  return (
    <ul className="my-2">
      {listData.map((data: any, index: number) => (
        <li
          key={index}
          className="flex gap-3 items-start lg:items-center text-base text-primary-black py-[6px]"
        >
          <div className="w-[6px] h-[6px] mt-2 lg:mt-0 rounded-full bg-primary-red"></div>
          {data}
        </li>
      ))}
    </ul>
  );
};

const renderContent = (contentList: any) => {
  return (
    <div className="">
      {contentList.map((data: any, index: number) => (
        <p key={index} className="leading-7">
          {data}
        </p>
      ))}
    </div>
  );
};

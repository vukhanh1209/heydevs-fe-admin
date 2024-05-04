import Link from "next/link";

const data = {
  skills: ["NodeJS", "ReactJS", "Java", "Agile", "DevOps", "Cloud"],
  content: [
    {
      title: "Languages & Frameworks",
      des: "JavaScript ES6, TypeScript, Node.js, React - Redux, Java, Spring Boot, Serverless, .NET",
    },
    {
      title: "Cloud Services - AWS, Azure",
      des: "Lambda, Postgres, S3, API Gateway, CLI, SNS/SQS, EC2, ECS, Cloud Watch, Splunk, SignalFX, AppDynamics",
    },
    {
      title: "DevOps",
      des: "Jenkins, Artifactory, SonarQube, GitHub, CloudFormation, Kubernetes, CHEF, Hashicorp Sentinel, Packer, Terraform, Harshicorp Vault, KONG gateway, Venafi",
    },
    {
      title: "Collaboration",
      des: "Microsoft Outlook, JIRA, Confluence, Microsoft Teams, ServiceNow, Rally",
    },
  ],
};

export default function KeySkills() {
  return (
    <div className="divide-y divide-dashed divide-silver-grey bg-white w-full rounded-lg border border-silver-grey text-rich-grey px-6 pt-6 pb-8">
      <h1 className="text-xl lg:text-2xl text-primary-black pb-4 font-bold">
        Chuyên môn của chúng tôi
      </h1>
      <div className="flex flex-col gap-4 pt-4 w-full">
        {renderKeySkills(data.skills)}
        {renderSkillContent(data.content)}
      </div>
    </div>
  );
}

const renderKeySkills = (skillList: any) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {skillList.map((skill: string, index: number) => (
        <Link
          key={index}
          href="/"
          className="flex items-center py-1 px-[10px] h-full text-xs rounded-full bg-white text-rich-grey border border-silver-grey hover:border-rich-grey"
        >
          {skill}
        </Link>
      ))}
    </div>
  );
};

const renderSkillContent = (skillContent: any) => {
  return (
    <div>
      {skillContent.map((item: any, index: number) => (
        <div key={index} className="text-primary-black leading-7">
          <h5 className="font-bold ">{item.title}</h5>
          <p className="">{item.des}</p>
        </div>
      ))}
    </div>
  );
};

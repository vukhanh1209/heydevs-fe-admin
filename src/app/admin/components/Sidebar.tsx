"use client";
import Link from "next/link";
import LogoutIcon from "@/images/customer/logout.svg";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SIDEBAR_TAB } from "@/const/sidebar.const";
import { PATH } from "@/const/path.const";
import { deleteCookie } from "@/utils/cookie.helper";
import { TOKEN } from "@/const/auth.constant";

type SideBar = {
  title: string;
  href: string;
  icon: any;
};

export default function Sidebar() {
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie(TOKEN);
    router.push(PATH.SIGN_IN.get());
  };

  return (
    <nav className="hidden md:block fixed w-full max-w-[350px] h-screen mb-[344px]">
      <div className="flex flex-col gap-1 h-full border-r border-silver-grey px-3 py-3">
        {SIDEBAR_TAB.map((tab: SideBar, index: number) => (
          <Link
            className={`${
              pathName.includes(tab.href) ? "bg-[#e7e7e7]" : ""
            } flex items-center gap-4 w-full text-primary-black py-3 px-[18px] hover:bg-[#e7e7e7] rounded-lg transition-all`}
            key={index}
            href={tab.href}
          >
            <Image src={tab.icon} width={24} height={24} alt={tab.title} />
            <span className="text-lg font-medium">{tab.title}</span>
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className={`flex items-center gap-4 w-full text-primary-black py-3 px-[18px] hover:bg-[#e7e7e7] rounded-lg transition-all`}
        >
          <Image src={LogoutIcon} width={24} height={24} alt="log out" />
          <span className="text-lg font-medium">Đăng xuất</span>
        </button>
      </div>
    </nav>
  );
}

"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LocalStorage } from "@/utils/localStorage";

import { UNAUTH_SIDEBAR_TAB } from "@/const/employee";

type SideBar = {
  title: string;
  href: string;
  icon: any;
};

export default function SidebarMobile({
  isOpeningSidebar,
  setIsOpeningSidebar,
}: any) {
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    LocalStorage.clearToken();
    router.push("/");
  };

  return (
    <>
      <section
        onClick={() => setIsOpeningSidebar(false)}
        className={`${
          isOpeningSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        } delay-200 transition-opacity md:!hidden  bg-blur-form flex h-screen w-full fixed z-[100]`}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`${
            isOpeningSidebar ? "translate-x-0" : "-translate-x-[100%]"
          } h-full w-fit bg-white shadow-md transition-transform delay-200`}
        >
          <div className="flex flex-col h-full border-r border-silver-grey px-3 py-3">
            {UNAUTH_SIDEBAR_TAB.map((tab: any, index: number) => (
              <Link
                onClick={() => setIsOpeningSidebar(false)}
                className={`${
                  pathName === tab.href ? "bg-[#e7e7e7]" : ""
                } flex items-center gap-4 w-full text-primary-black py-3 px-[18px] hover:bg-[#e7e7e7] rounded-lg`}
                key={index}
                href={tab.href}
              >
                <span className="text-lg font-medium">{tab.title}</span>
              </Link>
            ))}
            {/* <button
              onClick={handleLogout}
              className={`flex items-center gap-4 w-full text-primary-black py-3 px-[18px] hover:bg-[#e7e7e7] rounded-lg`}
            >
              <Image src={LogoutIcon} width={24} height={24} alt="log out" />
              <span className="text-lg font-medium">Đăng xuất</span>
            </button> */}
          </div>
        </nav>
      </section>
    </>
  );
}

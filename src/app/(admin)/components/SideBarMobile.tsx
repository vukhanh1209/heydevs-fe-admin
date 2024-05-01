"use client";
import Link from "next/link";
import LogoutIcon from "@/images/customer/logout.svg";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LocalStorage } from "@/utils/localStorage";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  onDisplaySidebar,
  selectIsOpeningSidebar,
} from "@/redux/reducers/adminSlice";
import { SIDEBAR_TAB } from "@/const/sidebar.const";

type SideBar = {
  title: string;
  href: string;
  icon: any;
};

export default function SidebarMobile() {
  const pathName = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isOpeningSidebar = useAppSelector(selectIsOpeningSidebar);

  const handleLogout = () => {
    LocalStorage.clearToken();
    router.push("/for-recruiter/sign-in");
  };

  const onHideSidebar = () => {
    dispatch(onDisplaySidebar());
  };

  return (
    <>
      <section
        onClick={onHideSidebar}
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
            {SIDEBAR_TAB.map((tab: SideBar, index: number) => (
              <Link
                className={`${
                  pathName === tab.href ? "bg-[#e7e7e7]" : ""
                } flex items-center gap-4 w-full text-primary-black py-3 px-[18px] hover:bg-[#e7e7e7] rounded-lg`}
                key={index}
                href={tab.href}
              >
                <Image src={tab.icon} width={24} height={24} alt={tab.title} />
                <span className="text-lg font-medium">{tab.title}</span>
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className={`flex items-center gap-4 w-full text-primary-black py-3 px-[18px] hover:bg-[#e7e7e7] rounded-lg`}
            >
              <Image src={LogoutIcon} width={24} height={24} alt="log out" />
              <span className="text-lg font-medium">Đăng xuất</span>
            </button>
          </div>
        </nav>
      </section>
    </>
  );
}

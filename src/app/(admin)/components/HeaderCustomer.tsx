"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/header/logo-2.svg";
import Hamburger from "@/images/hamburger.svg";

import { useAppDispatch } from "@/redux/hook";
import { onDisplaySidebar } from "@/redux/reducers/adminSlice";

const HeaderCustomer = () => {
  const dispatch = useAppDispatch();

  const onClickMenuIcon = () => {
    dispatch(onDisplaySidebar());
  };

  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-5 lg:px-[1.875rem] h-[5.5rem] primary-gradient border-b border-neutral-800 z-50">
      <button onClick={onClickMenuIcon} className="p-2 rounded-full md:hidden">
        <Image src={Hamburger} width={24} height={24} alt="menu" />
      </button>
      <div className="flex shrink-0">
        <Link href="/customer">
          <Image
            src={Logo}
            width={0}
            height={0}
            alt="logo"
            className=" w-[120px] lg:w-[152px] "
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderCustomer;

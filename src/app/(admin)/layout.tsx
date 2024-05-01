import SidebarMobile from "@/components/SideBarMobile";
import HeaderCustomer from "./components/HeaderCustomer";
import Sidebar from "./components/Sidebar";

export default function CustomerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderCustomer />
      <div className="flex w-full h-fit bg-white mt-[5.5rem] ">
        <Sidebar />
        <SidebarMobile />

        <div className="md:ml-[350px] w-full flex justify-center">
          {children}
        </div>
      </div>
    </>
  );
}

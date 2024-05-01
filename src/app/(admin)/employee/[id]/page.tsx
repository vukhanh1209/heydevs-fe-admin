"use client";
import isAuth from "@/components/isAuth";
import EmployeeDetail from "./components/EmployeeDetail";

function EmployeeDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]">
      <EmployeeDetail id={params.id} />
    </main>
  );
}

export default isAuth(EmployeeDetailPage);

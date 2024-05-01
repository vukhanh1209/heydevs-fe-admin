"use client";
import isAuth from "@/components/isAuth";
import EmployeeList from "./components/EmployeeList";

function EmployeePage() {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]">
      <EmployeeList />
    </main>
  );
}

export default isAuth(EmployeePage);

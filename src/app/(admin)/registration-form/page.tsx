"use client";
import isAuth from "@/components/isAuth";

function RegistrationPage() {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]"></main>
  );
}

export default isAuth(RegistrationPage);

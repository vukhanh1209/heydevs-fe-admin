"use client";

import isAuth from "@/components/isAuth";
import JobList from "./components/JobList";

function Jobs() {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]">
      <JobList />
    </main>
  );
}

export default isAuth(Jobs);

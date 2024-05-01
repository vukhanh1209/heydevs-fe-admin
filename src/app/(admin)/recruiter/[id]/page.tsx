"use client";
import isAuth from "@/components/isAuth";
import RecruiterDetail from "./components/RecruiterDetail";

function RecruiterDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]">
      <RecruiterDetail id={Number(params.id)} />
    </main>
  );
}

export default isAuth(RecruiterDetailPage);

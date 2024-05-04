import ApplicationList from "./components/ApplicationList";

function ApplicationController({ params }: { params: { jobId: string } }) {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]">
      <ApplicationList jobId={Number(params.jobId)} />
    </main>
  );
}

export default ApplicationController;

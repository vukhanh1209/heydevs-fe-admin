import ApplicationDetail from "./components/ApplicationDetail";

function ApplicationDetailPage({
  params,
}: {
  params: { applicationId: string; jobId: string };
}) {
  return (
    <main className="flex w-full min-h-screen bg-white px-5 lg:px-[1.875rem] max-w-[1200px]">
      <ApplicationDetail
        jobId={Number(params.jobId)}
        applicationId={Number(params.applicationId)}
      />
    </main>
  );
}
export default ApplicationDetailPage;

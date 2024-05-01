import SignInForm from "./components/SignInForm";

export default function SignIn() {
  return (
    <div className="bg-white flex items-center justify-center h-full min-h-screen w-full">
      <div className="mx-auto max-w-[640px] w-full h-fit">
        <div className="flex flex-col items-start w-full pt-[0.875rem] pb-[6.25rem] px-5 gap-8">
          <h1 className="text-primary-black text-3xl font-bold">Admin</h1>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

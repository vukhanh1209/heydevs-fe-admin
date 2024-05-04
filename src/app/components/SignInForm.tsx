"use client";
import InputBox from "../../components/InputBox/InputBox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginREQ } from "@/services/auth/auth.request";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { authSignIn } from "@/redux/actions/auth.action";
import { PATH } from "@/const/path.const";
import { useEffect } from "react";
import { deleteCookie, getCookie } from "@/utils/cookie.helper";
import { AUTH_STATUS, UNAUTHORIZED } from "@/const/auth.constant";
import { notifyErrors, notifyWarning } from "@/utils/notification";

const schema = yup.object().shape({
  password: yup.string().required("Bạn chưa nhập mật khẩu"),
  username: yup
    .string()
    .required("Bạn chưa nhập Email")
    .email("Email không hợp lệ"),
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onLoginSubmit = async (data: LoginREQ) => {
    if (data) {
      const res = await dispatch(authSignIn(data));
      if (res.meta.requestStatus === "fulfilled") {
        setTimeout(() => {
          router.push(PATH.JOBS.get());
        }, 500);
      }
    }
  };

  useEffect(() => {
    if (getCookie(AUTH_STATUS) === UNAUTHORIZED) {
      notifyWarning("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại");
      deleteCookie(AUTH_STATUS);
    }
  }, []);

  return (
    <form
      className="flex flex-col items-center gap-8 mt-5 md:mt-0 w-full"
      onSubmit={handleSubmit(onLoginSubmit)}
    >
      <div className="flex flex-col w-full">
        <InputBox
          register={register("username")}
          error={errors.username}
          title="Tên đăng nhập"
          placeholder="Tên đăng nhập"
          name="username"
          required={true}
          delay="1"
        />
        <InputBox
          register={register("password")}
          error={errors.password}
          title="Mật khẩu"
          placeholder="Mật khẩu"
          required={true}
          name="password"
          type="password"
        />
      </div>
      <button
        type="submit"
        className={`hover:bg-[#c82222] flex items-center justify-center py-3 px-6 w-full rounded-lg  bg-[#ed1b2f] transition-all duration-100 text-base font-semibold text-white mb-4`}
      >
        Đăng nhập
      </button>
    </form>
  );
};

export default SignInForm;

"use client";
import { useState, useMemo, useCallback } from "react";
import ImageLegacy from "next/legacy/image";
import LockedEye from "@/images/locked-eye.svg";
import Eye from "@/images/eye.svg";
import { useFormContext } from "react-hook-form";

const InputBox = ({ title, placeholder, name, delay, required, type }: any) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const delayClassName = delay ? `delay-${delay}` : "";
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordInput = useMemo(() => type === "password", [type]);

  const handleClickShowPassword = useCallback(
    (e: any) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    },
    [showPassword]
  );

  return (
    <div
      className={`relative flex flex-col animate-duration-1500 ContactFadeInRight ${delayClassName} w-full`}
    >
      <h5 className="text-sm font-medium text-[#121212] mb-2">
        {title}
        {required && <span className="text-[#ed1b2f] ml-1">*</span>}
      </h5>
      <div className="relative flex items-center h-fit">
        <input
          {...register(name)}
          type={isPasswordInput && !showPassword ? "password" : "text"}
          className={`${
            errors[name] ? "border-[#ed1b2f]" : "border-[#dedede]"
          } text-sm w-full rounded-lg bg-transparent outline-none text-[#121212] placeholder:text-[#656881] py-3 px-4 border`}
          placeholder={placeholder}
          name={name || ""}
        />
        {isPasswordInput && (
          <button
            type="button"
            onClick={handleClickShowPassword}
            className="absolute right-4 h-full flex items-center"
          >
            {!showPassword ? (
              <ImageLegacy src={LockedEye} />
            ) : (
              <ImageLegacy src={Eye} />
            )}
          </button>
        )}
        {/* <div
          className={`${
            errors[name] ? "block" : "hidden"
          } absolute right-4 h-full flex items-center`}
        >
          <ImageLegacy src={requiredIcon} />
        </div> */}
      </div>
      <p
        className={`${
          errors[name] ? "opacity-1" : "opacity-0"
        } text-xs text-[#FF3D54] first-letter:uppercase min-h-[16px] my-1`}
      >
        {errors[name]?.message as string}
      </p>
    </div>
  );
};

export default InputBox;

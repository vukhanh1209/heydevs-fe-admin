"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import requiredIcon from "@/images/sign-in/requireIcon.svg";
import ImageLegacy from "next/legacy/image";
import LockedEye from "@/images/locked-eye.svg";
import Eye from "@/images/eye.svg";

const InputBox = ({
  title,
  placeholder,
  setInputValue,
  error,
  register,
  name,
  delay,
  required,
  type,
}: any) => {
  const delayClassName = delay ? `delay-${delay}` : "";
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordInput = useMemo(() => type === "password", [type]);

  const handleChangeInput = useCallback((e: any) => {
    setValue(String(e.target.value));
  }, []);

  const handleClickShowPassword = useCallback(
    (e: any) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    },
    [showPassword]
  );

  useEffect(() => {
    if (setInputValue) {
      const inputTimeout = setTimeout(() => {
        setInputValue(value);
      }, 500);
      return () => {
        clearTimeout(inputTimeout);
      };
    }
  }, [setInputValue, value]);

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
          {...register}
          type={isPasswordInput && !showPassword ? "password" : "text"}
          onChange={(e) => handleChangeInput(e)}
          className={`${
            error ? "border-[#ed1b2f]" : "border-[#dedede]"
          } text-sm w-full rounded-lg bg-transparent outline-none text-[#121212] placeholder:text-[#656881] py-3 px-4 border`}
          placeholder={placeholder}
          name={name || ""}
        />
        {isPasswordInput && (
          <button
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
        <div
          className={`${
            error ? "block" : "hidden"
          } absolute right-4 h-full flex items-center`}
        >
          <ImageLegacy src={requiredIcon} />
        </div>
      </div>
      <p
        className={`${
          error ? "opacity-1" : "opacity-0"
        } text-xs text-[#FF3D54] first-letter:uppercase min-h-[16px] my-1`}
      >
        {error?.message}
      </p>
    </div>
  );
};

export default InputBox;

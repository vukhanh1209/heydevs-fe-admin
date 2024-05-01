"use client";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const useSearch = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      keyword: "",
      location: "",
    },
  });

  const onBlurInput = useCallback(() => {
    setFocus(false);
  }, []);

  const onFocusInput = useCallback(() => {
    setFocus(true);
  }, []);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  const onRemoveSearchText = useCallback(() => {
    setValue("");
  }, []);

  const onSubmit = useCallback(
    (data: any) => {
      // const valueLowerCase = value.toLowerCase();
      const keyword = data?.keyword;
      const keywordQuery = `key=${keyword}`;
      const location = data?.location;
      const locationQuery = `location=${location}`;

      if (keyword || location)
        router.push(`/search?${keywordQuery}&${locationQuery}`);
      else router.push("/search");
    },
    [value]
  );

  return useMemo(() => {
    return {
      value,
      setValue,
      setFocus,
      handleSubmit,
      onSubmit,
      focus,
      register,
      onBlurInput,
      onFocusInput,
      onInputChange,
      onRemoveSearchText,
    };
  }, [
    focus,
    handleSubmit,
    onBlurInput,
    onFocusInput,
    onInputChange,
    onRemoveSearchText,
    onSubmit,
    register,
    value,
  ]);
};

export default useSearch;

import { useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

type EditorWrapper = {
  onChange: (value: string) => void;
  error?: string;
  defaultValue?: string;
};

export default function EdtiorWrapper({
  onChange,
  error = "",
  defaultValue = "",
}: EditorWrapper) {
  const [value, setValue] = useState(defaultValue || "");
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  useEffect(() => {
    const changeValueTimeout = setTimeout(() => {
      onChange(value);
    }, 500);
    return () => {
      clearTimeout(changeValueTimeout);
    };
  }, [value]);

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="text-sm"
      />
      {!value && error && (
        <span className="absolute text-primary-red text-sm left-0 top-[105%]">
          {error}
        </span>
      )}
    </>
  );
}

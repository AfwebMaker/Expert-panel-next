import React, { useEffect, useRef, useState } from "react";
// react Icons
import { HiExclamation, HiBadgeCheck } from "react-icons/hi";
// components
import Multiple from "@/app/_components/inputs/uploadFile/Multiple";
import Only from "@/app/_components/inputs/uploadFile/Only";

function UploadFile({
  state,
  title,
  placeholder,
  type,
  className,
  id,
  name,
  required,
  formik,
  inputType,
}) {
  const errorCondition = formik.touched[name] && formik.errors[name];
  const activeInputCondition =
    (required && state !== "None" && state !== "Medium") || !required;
  //   const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const [selfState, setSelfState] = useState(state);
  const parentElem = useRef(null);

  //get click out side of element
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (parentElem.current && !parentElem.current.contains(event.target)) {
        setFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //click on custom input body
  const clickHandler = () => {
    if (state !== "None" && state !== "Medium") {
      setSelfState("Low");
    }

    if ((required && state !== "None" && state !== "Medium") || !required) {
      setFocus(true);
    }
  };

  const getRingStyle = () => {
    if (focus) return errorCondition ? "uploadBorder-e" : "uploadBorder_active";
    if (!focus && required) {
      switch (selfState) {
        case "None":
          return "uploadBorder_active";
        case "Medium":
          return "uploadBorder-w";
        case "High":
          return "uploadBorder-e";
        default:
          return "uploadBorder";
      }
    }
    return "uploadBorder";
  };

  return (
    <div ref={parentElem} className={className}>
      <div
        onClick={clickHandler}
        className={`transition-all duration-200 min-h-[150px] relative fcc flex-col rounded-md overflow-hidden ${getRingStyle()} ${
          activeInputCondition ? "cursor-pointer" : "cursor-not-allowed"
        } ${activeInputCondition ? "bg-white" : "bg-gray-100"}`}
      >
        {inputType === "uploadFile" ? (
          <Only
            id={id}
            disabled={!activeInputCondition}
            name={name}
            value={formik.values[name]}
            type={type}
            state={state}
            focus={focus}
            placeholder={placeholder}
            formik={formik}
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
            }}
            className={`w-full absolute bottom-0 fcc px-4 pb-2 pl-16 font-medium text-sm ${
              activeInputCondition ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          />
        ) : (
          <Multiple
            id={id}
            disabled={!activeInputCondition}
            name={name}
            value={formik.values[name]}
            type={type}
            state={state}
            focus={focus}
            placeholder={placeholder}
            formik={formik}
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
            }}
            className={`w-full absolute bottom-0 fcc px-4 pb-2 pl-16 font-medium text-sm ${
              activeInputCondition ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          />
        )}
      </div>
      <div className="flex text-error rounded-[4px] mt-2 pr-2 font-bold text-xs">
        {errorCondition ? <div>{formik.errors[name]}</div> : null}
      </div>
    </div>
  );
}

export default UploadFile;

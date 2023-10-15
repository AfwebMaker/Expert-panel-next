import React, { useEffect, useState } from "react";
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

  //when click on custom component focus on html input
  // useEffect(() => {
  //     focus && inputRef.current.focus()
  // }, [focus])

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

  const getIconColor = () => {
    if (formik.values[name].length && !focus) {
      if (errorCondition) return "text-error";
      switch (selfState) {
        case "Medium":
          return "text-warning";
        case "High":
          return "text-error";
        default:
          return "text-primary-500";
      }
    }
    return "text-cf-300";
  };

  const getRequiredIcon = () => {
    if (!required) return "اختیاری";
    switch (selfState) {
      case "None":
        return <HiBadgeCheck className="text-primary-500" size={20} />;
      case "Medium":
        return <div className="text-warning">در انتظار تایید</div>;
      case "High":
        return <HiExclamation className="text-error" size={20} />;
      default:
        return required === undefined ? "" : "اجباری";
    }
  };

  return (
    <div className={className}>
      <div
        onClick={clickHandler}
        className={`transition-all duration-200 min-h-[150px] relative fcc flex-col rounded-md overflow-hidden ${getRingStyle()} ${
          activeInputCondition ? "cursor-pointer" : "cursor-not-allowed"
        } ${activeInputCondition ? "bg-white" : "bg-gray-100"}`}
      >
        {/* <div className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${getIconColor()} ${(formik.values[name].length || focus) ? 'top-2 text-sm font-normal transition-all duration-200' : ''}`}>
                    {title}
                </div> */}

        {/* <div className={`left-4 absolute font-bold text-xs z-20 ${getIconColor()}`}>
                    {getRequiredIcon()}
                </div> */}

        {inputType === "uploadFile" ? (
          <Only
            id={id}
            disabled={!activeInputCondition}
            name={name}
            // ref={inputRef}
            value={formik.values[name]}
            type={type}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={(e) => {
              setFocus(false);
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
            // ref={inputRef}
            value={formik.values[name]}
            type={type}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={(e) => {
              setFocus(false);
              formik.handleBlur(e);
            }}
            className={`w-full absolute bottom-0 fcc px-4 pb-2 pl-16 font-medium text-sm ${
              activeInputCondition ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          />
        )}

        {/* {(formik.values[name].length || focus) &&
                    <input
                        id={id}
                        disabled={!activeInputCondition}
                        name={name}
                        ref={inputRef}
                        value={formik.values[name]}
                        type={type}
                        placeholder={placeholder}
                        onChange={formik.handleChange}
                        onBlur={(e) => { setFocus(false); formik.handleBlur(e) }}
                        className={`w-full absolute bottom-0 fcc px-4 pb-2 pl-16 font-medium text-sm ${activeInputCondition ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    />
                } */}
      </div>
      <div className="flex text-error rounded-[4px] mt-2 pr-2 font-bold text-xs">
        {errorCondition ? <div>{formik.errors[name]}</div> : null}
      </div>
    </div>
  );
}

export default UploadFile;

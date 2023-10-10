import React, { useRef, useState, useEffect } from "react";
//react icons
import { HiOutlineChevronDown, HiBadgeCheck } from "react-icons/hi";
// component
import ComboboxMultiple from "./ComboboxMultiple";

function CheckBox({
  state,
  title,
  placeholder,
  className,
  id,
  name,
  required,
  formik,
  forceOpen,
}) {
  const errorCondition = formik.touched[name] && formik.errors[name];
  const activeInputCondition =
    (required && state !== "None" && state !== "Medium") || !required;
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const parentElem = useRef(null);
  const [focus, setFocus] = useState(false);
  const [selfState, setSelfState] = useState(state);
  const [selected, setSelected] = useState([]);
  const [forceOpenInput, setForceOpenInput] = useState(forceOpen);

  const items = {
    list: [
      { id: 1, text: "تهران" },
      { id: 2, text: "شیراز" },
      { id: 3, text: "کرمان" },
      { id: 4, text: "دماونددماونددماونددماوندv" },
      { id: 5, text: "قزوین" },
      { id: 6, text: "سیستان" },
    ],
    active: [1, 2],
  };

  //focus handler
  useEffect(() => {
    focus && inputRef.current.focus();
  }, [focus]);

  useEffect(() => {
    selected.length ? setForceOpenInput(true) : setForceOpenInput(false);
  }, [selected]);

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

  const clickHandler = (e) => {
    if (e.target !== parentElem.current) {
    }

    if (state !== "None" && state !== "Medium") {
      setSelfState("Low");
    }

    if (activeInputCondition) {
      buttonRef.current.click();
      setFocus(true);
    }
  };

  const getRingStyle = () => {
    if (focus)
      return errorCondition ? "ring-2 ring-error" : "ring-primary-500 ring-2";
    if (!focus && required) {
      switch (selfState) {
        case "None":
          return "ring-primary-500 ring-2";
        case "Medium":
          return "border-dashed border-warning border-2";
        case "High":
          return "ring-error ring-2";
        default:
          return "ring-1 ring-cf-200";
      }
    }
    return "ring-1 ring-cf-200";
  };

  const getIconColor = () => {
    if (selected.length && !focus) {
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
    if (!required)
      return <HiOutlineChevronDown className="h-4 w-4 text-gray-400" />;
    switch (selfState) {
      case "None":
        return <HiBadgeCheck className="text-primary-500" size={20} />;
      case "Medium":
        return <div className="text-warning">در انتظار تایید</div>;
      case "High":
        return <HiOutlineChevronDown className="h-4 w-4 text-error" />;
      default:
        return required === undefined ? (
          ""
        ) : (
          <HiOutlineChevronDown className="h-4 w-4 text-gray-400" />
        );
    }
  };

  return (
    <div ref={parentElem} className={`${className}`}>
      {/* <div onClick={(e) => { setFocus(false)}} className="w-screen h-screen top-0 right-0 absolute bg-black"></div> */}
      <div
        onClick={clickHandler}
        className={`transition-all duration-200 min-h-[60px] relative fcc flex-col rounded-md ${getRingStyle()} ${
          activeInputCondition ? "cursor-pointer" : "cursor-not-allowed"
        } ${activeInputCondition ? "bg-white" : "bg-gray-100"}`}
      >
        <div
          className={`flex items-center justify-between absolute z-10 right-4 text-cf-300 font-medium text-base ${getIconColor()} ${
            formik.values[name] !== "" || focus || forceOpenInput
              ? "top-2 text-sm font-normal transition-all duration-200"
              : ""
          }`}
        >
          {title}
        </div>

        <div
          className={`left-4 absolute font-bold text-xs z-10 ${getIconColor()}`}
        >
          {getRequiredIcon()}
        </div>

        <ComboboxMultiple
          id={id}
          name={name}
          activeInput={!activeInputCondition}
          inputRef={inputRef}
          buttonRef={buttonRef}
          className={
            formik.values[name] !== "" || focus || forceOpenInput
              ? "opacity-100"
              : "opacity-0"
          }
          value={formik.values[name]}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={(e) => {
            formik.handleBlur(e);
          }}
          formik={formik}
          data={items}
          focus={focus}
          setFocus={setFocus}
          state={selfState}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="flex text-error rounded-[4px] mt-2 pr-2 font-bold text-xs">
        {errorCondition ? <div>{formik.errors[name]}</div> : null}
      </div>
    </div>
  );
}

export default CheckBox;

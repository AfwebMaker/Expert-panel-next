"use client";

//react
import React from "react";
//components
import InputText from "@/app/_components/inputs/inputText/InputText";
import DatePicker from "@/app/_components/inputs/datePicker/CustomDatePicker";
import CheckBox from "@/app/_components/inputs/checkBox/CheckBox";
import CheckBoxMultiple from "@/app/_components/inputs/checkBoxMultiple/CheckBoxMultiple";
import InputTextarea from "@/app/_components/inputs/inputTextarea/InputTextarea";
import UploadFile from "@/app/_components/inputs/uploadFile/UploadFile";

function DynamicInputs({ state, title, placeholder, className, id, name, required, inputType, formik }) {
  return (
    <>
      {inputType === "text" && (
        <InputText
          inputType={inputType}
          title={title}
          state={state}
          required={required}
          className={className}
          placeholder={placeholder}
          id={id}
          name={name}
          formik={formik}
        />
      )}

      {(inputType === "dropDown_Icon" || inputType === "dropDown") && (
        <CheckBox
          inputType={inputType}
          title={title}
          state={state}
          required={required}
          className={className}
          placeholder={placeholder}
          name={name}
          formik={formik}
        />
      )}

      {inputType === "checkBoxMultiple" && (
        <CheckBoxMultiple
          inputType={inputType}
          title={title}
          state={state}
          required={required}
          className={className}
          placeholder={placeholder}
          id={id}
          name={name}
          formik={formik}
          forceOpen={true}
        />
      )}

      {inputType === "inputTextarea" && (
        <InputTextarea
          inputType={inputType}
          title={title}
          state={state}
          required={required}
          className={className}
          placeholder={placeholder}
          id={id}
          name={name}
          formik={formik}
        />
      )}

      {inputType === "datePicker" && (
        <DatePicker
          title={title}
          state={state}
          required={required}
          className={className}
          placeholder={placeholder}
          name={name}
          formik={formik}
        />
      )}
      {(inputType === "uploadFile" || inputType === "uploadFile_multiple") && (
        <UploadFile
          inputType={inputType}
          title={title}
          state={state}
          required={required}
          className={className}
          placeholder={placeholder}
          id={id}
          name={name}
          formik={formik}
          forceOpen={true}
        />
      )}
    </>
  );
}

export default DynamicInputs;

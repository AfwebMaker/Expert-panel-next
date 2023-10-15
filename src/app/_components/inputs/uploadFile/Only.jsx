import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
// components
// import Upload from "@/app/_components/Upload"
//react icons
import { HiOutlineCloudUpload, HiCheckCircle } from "react-icons/hi";
// functions
import getCookie from "@/src/functions/getCookie";
// axios
import axios from "axios";
import ProgressBar from "./ProgressBar";

function Only({
  name,
  onBlur,
  disabled,
  inputRef,
  formik,
  focus,
  value,
  state,
  id,
}) {
  const [files, setFiles] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [imageSrc, setImageSrc] = useState([]);
  useEffect(() => {
    console.log(value);
    setImageSrc(value);
  }, []);

  useEffect(() => {
    if (imageSrc) {
      const imageSelect = imageSrc.map((item) => {
        return item;
      });

      formik.setFieldValue(name, imageSelect);
    }
  }, [imageSrc]);

  const inputFileHandler = (e) => {
    setImageSrc([]);
    // setShowProgress(true);
    const files = Array.from(e.target.files);
    console.log(files);
    if (!files.length) return;
    const fileName =
      files[0].name.length > 12
        ? `${files[0].name.slice(0, 12 - 1) + " ..."}`
        : files[0].name;

    const formData = new FormData();
    formData.append("file", files[0]);

    setFiles([{ name: fileName, loading: 0 }]);
    setShowProgress(true);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_file_kg_local}/admin/category/UploadImage`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${getCookie("TOKEN")}`,
          },
          onUploadProgress: ({ loaded, total }) => {
            console.log(total);
            setFiles((pre) => {
              const newFiles = [...pre];
              newFiles[newFiles.length - 1].loading = Math.floor(
                (loaded / total) * 100
              );
              return newFiles;
            });
            if (loaded == total) {
              const sizeFile =
                total < 1024
                  ? `${total} KB`
                  : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
              setUploadFiles([{ name: fileName, size: sizeFile }]);
              setFiles([]);
              // setShowProgress(false);
            }
          },
        }
      )
      .then((res) => {
        console.log(formData.values);
        setImageSrc([res.data.data]);
      })
      .catch(console.error);
  };
  return (
    <div
      className={`w-full h-auto rounded-lg border-cf-400 relative overflow-hidden fcc ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        id={id}
        type="file"
        name={name}
        // value={formik.values[name]}
        className={`absolute w-full h-full opacity-0  right-0 z-20 ${
          disabled ? "cursor-not-allowed -z-20" : "cursor-pointer"
        }`}
        onChange={inputFileHandler}
        disabled={disabled}
        ref={inputRef}
        // onBlur={(e) => { setFocus(false); formik.handleBlur(e) }}
      />
      <div className="w-full h-full flex flex-col items-start justify-center p-5">
        <div
          className={`flex justify-start items-center w-full h-full p-5 z-10 ${
            imageSrc.length ? "text-white" : "text-gray-500"
          }`}
        >
          <div className="ml-2">
            <HiOutlineCloudUpload
              strokeWidth={1}
              size={70}
              className={`${
                showProgress
                  ? "text-primary-500"
                  : imageSrc.length
                  ? "text-white"
                  : "text-gray-500"
              }`}
            />
          </div>
          <div>
            <div className="font-bold text-sm flex items-center gap-x-1">
              {showProgress ? (
                <>
                  <span className="text-primary-500">فایل بارگذاری شد.</span>
                  <HiCheckCircle className="text-primary-500 text-lg" />
                </>
              ) : (
                <span>آپلود کردن عکس</span>
              )}
            </div>
          </div>
        </div>
        {showProgress && (
          <div className="h-full w-full fcc bg-gray-200 rounded-lg z-10">
            {files.map((file, i) => (
              <ProgressBar key={i} progress={file.loading} />
            ))}
          </div>
        )}

        {!!imageSrc.length && (
          <div className="h-full w-full fcc rounded-lg absolute top-0 right-0">
            {imageSrc.map((item, i) => {
              console.log(item);
              return (
                <Image
                  key={i}
                  width={150}
                  height={150}
                  onLoad={() => setShowProgress(false)}
                  quality={50}
                  className="brightness-75 fcc w-[98%] h-[95%] absolute object-cover rounded-lg"
                  src={item}
                  alt="doc"
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Only;

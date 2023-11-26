import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
//react icons
import { HiOutlineCloudUpload, HiCheckCircle, HiXCircle } from "react-icons/hi";
// functions
import getCookie from "@/src/functions/getCookie";
// axios
import axios from "axios";
// components
import ProgressBar from "./ProgressBar";

function Only({
  name,
  onBlur,
  disabled,
  inputRef,
  formik,
  id,
}) {
  const [files, setFiles] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [imageSrc, setImageSrc] = useState([]);
  const [isError, setIsError] = useState(false);

  const shortText = (text, value) => {
    if (String(text) && String(text).length > value) {
      return `${String(text).slice(0, value - 1) + " ..."}`;
    } else {
      return String(text);
    }
  };

  useEffect(() => {
    imageSrc != formik.values[name] && setImageSrc([formik.values[name]]);
  }, [formik.values[name]]);

  useEffect(() => {
    if (imageSrc) {

      imageSrc != formik.values[name] && formik.setFieldValue(name, imageSelect[0]);
    }
  }, [imageSrc]);

  const inputFileHandler = (e) => {
    setImageSrc([]);

    const files = Array.from(e.target.files);

    if (!files.length) return;

    const fileName = shortText(files[0].name, 12);
    const formData = new FormData();

    formData.append("file", files[0]);

    setFiles([{ name: fileName, loading: 0 }]);
    setShowProgress(true);

    axios
      .post(`${process.env.NEXT_PUBLIC_FILE_KG_LOCAL}/uploadFile`, formData, {
        headers: {
          Authorization: `Bearer ${getCookie("TOKEN")}`,
        },
        onUploadProgress: ({ loaded, total }) => {
          setFiles((pre) => {
            const newFiles = [...pre];
            newFiles[newFiles.length - 1].loading = Math.floor(
              (loaded / total) * 100
            );
            return newFiles;
          });
          if (loaded == total) {
            setUploadFiles([{ name: fileName, size: total }]);
            setIsError(false);
            // setFiles([]);
            // setShowProgress(false);
          }
        },
      })
      .then((res) => {
        setImageSrc([res.data.data]);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return (
    <div
      className={`w-full h-auto rounded-lg border-cf-400 relative overflow-hidden fcc ${disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
    >
      <input
        id={id}
        type="file"
        name={name}
        className={`absolute w-full h-full opacity-0  right-0 z-20 ${disabled ? "cursor-not-allowed -z-20" : "cursor-pointer"
          }`}
        onChange={inputFileHandler}
        disabled={disabled}
        ref={inputRef}
        onBlur={(e) => { onBlur(e) }}
      />
      <div className="w-full h-full flex flex-col items-start justify-center p-1">
        <div
          className={`flex flex-col justify-start items-center w-full h-full p-9 z-10 rounded-lg ${imageSrc.length && !showProgress
            ? "text-white bg-black bg-opacity-50"
            : "text-gray-500 "
            }`}
        >
          <div className="ml-2">
            <HiOutlineCloudUpload
              strokeWidth={1}
              size={70}
              className={`${showProgress
                ? isError
                  ? "text-red-500"
                  : "text-primary-500"
                : imageSrc.length
                  ? "text-white"
                  : "text-gray-500"
                }`}
            />
          </div>
          <div>
            <div className="font-bold text-sm flex items-center gap-x-1">
              {showProgress ? (
                isError ? (
                  <>
                    <span className="text-red-500">فایل بارگذاری نشد.</span>
                    <HiXCircle className="text-red-500 text-lg" />
                  </>
                ) : (
                  <>
                    <span className="text-primary-500">فایل بارگذاری شد.</span>
                    <HiCheckCircle className="text-primary-500 text-lg" />
                  </>
                )
              ) : (
                <span>آپلود کردن عکس</span>
              )}
            </div>
          </div>
          {showProgress && (
            <div className="h-full w-full fcc bg-gray-200 rounded-lg z-10 mt-5">
              <ProgressBar progress={files[0].loading} />
            </div>
          )}
        </div>

        {formik.values[name] && formik.values[name].url && (
          <div className="h-full w-full fcc rounded-lg absolute top-0 right-0">
            <Image
              width={150}
              height={150}
              onLoad={() => setShowProgress(false)}
              quality={50}
              className="brightness-75 fcc w-[98%] h-[95%] absolute object-cover rounded-lg"
              src={formik.values[name].url}
              alt="doc"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Only;

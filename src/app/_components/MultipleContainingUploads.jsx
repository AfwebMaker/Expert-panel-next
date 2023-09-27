import Image from "next/image";
import React, { useState, useRef } from "react";
//components
import ProgressBar from "@/app/_components/ProgressBar";
//react icons
import { HiOutlineCloudUpload, HiCheckCircle } from "react-icons/hi";
//axios
import axios from "axios";

function UploadContain({ multiple, accept }) {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const inputFileHandler = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length) {
      setIsUploading(true);
      if (multiple) {
        setUploadedImages((prevState) => [
          ...prevState,
          ...files.map((file) => ({
            src: URL.createObjectURL(file),
            name: file.name,
          })),
        ]);
      } else {
        setUploadedImages([
          { src: URL.createObjectURL(files[0]), name: files[0].name },
        ]);
      }

      let data = new FormData();
      data.append("file", files[0]);
      await axios.post("/upload", data, {
        onUploadProgress: (progressEvent) => {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });
      setIsUploading(false);
    }
    console.log(files);
  };
  console.log(uploadedImages.length);
  console.log(uploadedImages);
  console.log(uploadProgress);
  return (
    <div
      className={`uploadBorder w-full cursor-pointer h-auto rounded-lg border-cf-400 relative overflow-hidden fcc ${
        !uploadedImages.length ? "text-gray-400" : "text-white"
      }`}
    >
      <input
        onChange={inputFileHandler}
        className="absolute z-10 w-full h-full opacity-0 cursor-pointer right-0"
        type="file"
        multiple={multiple}
        accept={accept}
      />
      <div className="w-full h-full flex flex-col items-start justify-center p-5">
        <div className="flex justify-start items-center w-full h-full p-5 text-gray-500">
          <div className="ml-2">
            <HiOutlineCloudUpload
              className={`${
                isUploading ? "text-primary-500" : "text-gray-500"
              }`}
              strokeWidth={1}
              size={70}
            />
          </div>
          <div>
            {isUploading ? (
              <div className="font-bold text-sm text-primary-500">در حال آپلود کردن عکس</div>
            ) : (
              <div className="font-bold text-sm">آپلود کردن عکس</div>
            )}
          </div>
        </div>
        <div className={`flex items-center justify-start gap-3 flex-wrap w-full ${uploadedImages.length ? "mb-10" : ""}`}>
          {uploadedImages.map((data, index) =>
            multiple ? (
              <div
                key={index}
                className="h-[41px] w-[148px] fcc bg-gray-200 rounded-lg "
              >
                {isUploading && (
                  <HiCheckCircle className="text-primary-500 ml-2" />
                )}
                <p className="text-cf-500 text-xs h-full fcc">
                  {data && data.name.length > 15
                    ? "..." + data.name.slice(0, 15 - 1)
                    : data.name}
                </p>
              </div>
            ) : (
              <div
                key={index}
                className="h-full w-full fcc bg-gray-200 rounded-lg"
              >
                <Image
                  width={150}
                  height={150}
                  className="brightness-75 fcc w-[98%] h-[95%] absolute object-cover rounded-lg"
                  src={data.src}
                  alt="doc"
                />
              </div>
            )
          )}
        </div>
        {isUploading && <ProgressBar progress={uploadProgress} />}
      </div>
    </div>
  );
}

export default UploadContain;

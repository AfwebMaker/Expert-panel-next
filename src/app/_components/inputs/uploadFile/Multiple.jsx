import React, { useState, useRef } from "react";
// components
//react icons
import { HiOutlineCloudUpload, HiCheckCircle } from "react-icons/hi";
// axios
import axios from "axios";
import getCookie from "@/src/functions/getCookie";

function MultipleContainingUploads({ accept }) {
  const [files, setFiles] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [showProgress, setShowProgress] = useState([]);

  const inputFileHandler = (e) => {
    const filesVar = Array.from(e.target.files);
    if (!filesVar) return;

    //create files
    filesVar.forEach((item, i) => {
      const fileName =
        item.name.length > 12
          ? `${item.name.slice(0, 12 - 1) + " ..."}`
          : item.name;

      const formData = new FormData();
      formData.append("file", item);
      setFiles((pre) => [...pre, { name: fileName, loading: 0 }]);
      setShowProgress((pre) => [...pre, true]);

      axios
        .post(
          `${process.env.NEXT_PUBLIC_file_kg_local}/admin/category/UploadImage`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${getCookie("TOKEN")}`,
            },
            onUploadProgress: ({ loaded, total }) => {
              setFiles((pre) => {
                const newFiles = [...pre];
                newFiles[i].loading = Math.floor((loaded / total) * 100);
                console.log(newFiles);
                return newFiles;
              });

              if (loaded == total) {
                setUploadFiles((pre) => [
                  ...pre,
                  { name: fileName, size: total },
                ]);

                setShowProgress((pre) => {
                  const newProgress = [...pre];
                  newProgress[i] = false
                  return newProgress;
                });
              }
            },
          }
        )
        .then((res) => console.log(res))
        .catch(console.error);
    });
  };

  console.log(showProgress);

  return (
    <div
      className={`uploadBorder w-full cursor-pointer h-auto rounded-lg border-cf-400 relative overflow-hidden fcc`}
    >
      <input
        onChange={inputFileHandler}
        className="absolute z-10 w-full h-full opacity-0 cursor-pointer right-0"
        type="file"
        name="file"
        multiple={true}
        accept={accept}
      />
      <div className="w-full h-full flex flex-col items-start justify-center p-5">
        <div className="flex justify-start items-center w-full h-full p-5 text-gray-500">
          <div className="ml-2">
            <HiOutlineCloudUpload strokeWidth={1} size={70} />
          </div>
          <div>
            <div className="font-bold text-sm">آپلود کردن عکس</div>
          </div>
        </div>

        <ul className="flex flex-wrap gap-2 mb-2">
          {files.map((file, i) =>
              showProgress[i] && (
                <li
                  key={i}
                  className="h-[41px] w-[148px] bg-gray-200 rounded-lg "
                >
                  <div
                    className={`h-full fcc ${
                      file.loading === 100 ? "bg-green-500" : "bg-orange-500"
                    } rounded-lg`}
                    style={{ width: `${file.loading}%` }}
                  />
                </li>
              )
          )}
        </ul>

        <ul className="uploading-area flex flex-wrap gap-2">
          {uploadFiles.map((file, i) => (
            <li
              key={i}
              className="h-[41px] w-[148px] fcc bg-gray-200 rounded-lg "
            >
              <HiCheckCircle className="text-primary-500 ml-2" />
              <p className="text-cf-500 text-xs h-full fcc">
                {file.name && file.name > 15
                  ? "..." + file.name.slice(0, 15 - 1)
                  : file.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultipleContainingUploads;

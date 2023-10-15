import React, { useState, useEffect } from "react";
// components
import Upload from "@/app/_components/inputs/uploadFile/Upload";
//react icons
import { HiOutlineCloudUpload, HiCheckCircle } from "react-icons/hi";
// functions
import getCookie from "@/src/functions/getCookie";
// axios
import axios from "axios";

function Multiple({ accept }) {
  const [files, setFiles] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [total, setTotal] = useState(1);
  const [fileName, setFileName] = useState("");

  const inputFileHandler = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    if (!files) return;

    files.forEach((file) => {
      const fileName =
        file.name.length > 12
          ? `${file.name.slice(0, 12 - 1) + " ..."}`
          : file.name;
      setFileName(fileName);
      const formData = new FormData();
      formData.append("file", file);
      setFiles((pre) => [...pre, { name: fileName, loading: 0 }]);
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
              setFiles((pre) => {
                const newFiles = [...pre];
                newFiles[newFiles.length - 1].loading = Math.floor(
                  (loaded / total) * 100
                );
                return newFiles;
              });
              setLoaded(loaded);
              setTotal(total);
              // if (loaded == total) {
              //     const sizeFile = total < 1024 ? `${total} KB` : `${(loaded / (1024 * 1024)).toFixed(2)} MB`
              //     setUploadFiles([...uploadFiles, { name: fileName, size: sizeFile }]);
              //     setFiles([]);
              //     setShowProgress(false);
              // }
            },
          }
        )
        .then((res) => console.log(res))
        .catch(console.error);
    });
  };

  useEffect(() => {
    if (loaded === total) {
      const sizeFile =
        total < 1024
          ? `${total} KB`
          : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
      setUploadFiles([...uploadFiles, { name: fileName, size: sizeFile }]);
      setFiles([]);
      setShowProgress(false);
      console.log(uploadFiles);
    }
  }, [loaded, total]);

  console.log(uploadFiles);

  return (
    <div
      className={`w-full cursor-pointer h-auto rounded-lg relative overflow-hidden fcc`}
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
        {showProgress && (
          <ul className="">
            {files.map((file, i) => (
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
            ))}
          </ul>
        )}

        <ul className="uploading-area flex gap-2">
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

export default Multiple;

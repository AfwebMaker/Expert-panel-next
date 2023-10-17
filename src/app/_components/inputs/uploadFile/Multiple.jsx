import React, { useState, useEffect, useRef } from "react";
//react icons
import {
  HiOutlineCloudUpload,
  HiCheckCircle,
  HiOutlineTrash,
  HiOutlinePlusSm,
} from "react-icons/hi";
// axios
import axios from "axios";
import getCookie from "@/src/functions/getCookie";

function MultipleContainingUploads({
  name,
  onBlur,
  disabled,
  inputRef,
  formik,
  focus,
  value,
  state,
  id,
  accept,
}) {
  const [files, setFiles] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [showProgress, setShowProgress] = useState([]);
  const [srcImages, setSrcImages] = useState([]);
  const fileInputRef = useRef();

  useEffect(() => {
    setUploadFiles(formik.values[name]);
  }, []);

  //set formik value
  useEffect(() => {
    let passArray = [];
    uploadFiles.find((item) => {
      if (item.status === "error") {
        return passArray = []
      } else {
        passArray.push(item)
      }
    });

    formik.setFieldValue(name, passArray);
    console.log(passArray);
  }, [uploadFiles]);

  const handleAddFileClick = () => {
    fileInputRef.current.click();
  };

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
        .post(`${process.env.NEXT_PUBLIC_file_kg_local}/uploadFile`, formData, {
          headers: {
            Authorization: `Bearer ${getCookie("TOKEN")}`,
          },
          onUploadProgress: ({ loaded, total }) => {
            setFiles((pre) => {
              const newFiles = [...pre];
              newFiles[files.length + i].loading = Math.floor(
                (loaded / total) * 100
              );
              return newFiles;
            });

            if (loaded == total) {
              setUploadFiles((pre) => [
                ...pre,
                { name: fileName, size: total, status: "ok" },
              ]);

              setShowProgress((pre) => {
                const newProgress = [...pre];
                newProgress[files.length + i] = false;
                return newProgress;
              });
            }
          },
        })
        .then((res) => {
          const fileName =
            res.data.data.name.length > 12
              ? `${res.data.data.name.slice(0, 12 - 1) + " ..."}`
              : res.data.data.name;
          setSrcImages((pre) => [
            ...pre,
            { id: fileName, url: res.data.data.url },
          ]);
        })
        .catch(() => {
          setSrcImages((pre) => [...pre, {}]);

          setUploadFiles((pre) => {
            const newUploadFiles = [...pre];
            newUploadFiles[(uploadFiles.length ? uploadFiles.length - 1 : uploadFiles.length) + i].status = "error";
            return newUploadFiles;
          });
        });
    });
  };

  console.log(srcImages);
  console.log(uploadFiles);

  const handleDeleteItem = (id) => {
    const newUploadFiles = [...uploadFiles];
    newUploadFiles.splice(id, 1);
    setUploadFiles(newUploadFiles);
  };

  const openImage = (id) => {
    const foundItem = srcImages.find((item) => item.id === id);

    if (foundItem) {
      window.open(foundItem.url);
    }
  };

  return (
    <div
      className={`w-full h-auto rounded-lg border-cf-400 relative overflow-hidden fcc ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        ref={fileInputRef}
        onChange={inputFileHandler}
        className={`absolute w-full h-full max-h-[140px] opacity-0 top-0 right-0 ${
          disabled ? "cursor-not-allowed -z-20" : "cursor-pointer"
        }`}
        type="file"
        name="file"
        multiple={true}
        accept={accept}
        disabled={disabled}
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
          {files.map(
            (file, i) =>
              showProgress[i] && (
                <li
                  key={i}
                  className="h-[41px] w-[165px] bg-gray-200 rounded-lg relative overflow-hidden"
                >
                  <div className="w-full h-full absolute top-0 right-0">
                    <p className="text-cf-300 text-xs h-full fcc">
                      {file.name && file.name.length > 12
                        ? file.name.slice(0, 12 - 1) + " ..."
                        : file.name}
                    </p>
                  </div>
                  <div
                    className={`h-full fcc ${
                      file.loading === 100 ? "bg-green-500" : "bg-secondary-300"
                    }`}
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
              className={`h-[41px] w-[165px] fcc rounded-lg ${
                !file.status || file.status === "ok"
                  ? "bg-gray-200"
                  : "bg-red-200"
              }`}
              onClick={() => openImage(`${file.name}`)}
            >
              <div className="h-full w-[20%] fcc">
                <HiCheckCircle className="text-primary-500 text-lg" />
              </div>
              <p className="text-cf-300 text-xs h-full w-[55%] fcc">
                {file.name && file.name.length > 12
                  ? file.name.slice(0, 12 - 1) + " ..."
                  : file.name}
              </p>
              {!disabled && (
                <div className="h-full w-[25%] fcc">
                  <div
                    onClick={() => handleDeleteItem(i)}
                    className="hover:bg-red-200 p-1.5 rounded-md transition-all duration-300"
                  >
                    <HiOutlineTrash className="text-red-500 font-light text-lg" />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {!(!uploadFiles.length || disabled) && (
          <div className="w-full h-8 flex items-center justify-end mt-5">
            <div
              onClick={() => handleAddFileClick()}
              className={`bg-primary-500 h-8 w-8 fcc rounded-lg text-white cursor-pointer `}
            >
              <HiOutlinePlusSm className="text-2xl font-bold" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultipleContainingUploads;

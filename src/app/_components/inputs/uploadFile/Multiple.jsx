import React, { useState, useEffect, useRef } from "react";
//react icons
import {
  HiOutlineCloudUpload,
  HiCheckCircle,
  HiOutlineTrash,
  HiOutlinePlusSm,
  HiXCircle,
} from "react-icons/hi";
// axios
import axios from "axios";
import getCookie from "@/src/functions/getCookie";

function MultipleContainingUploads({
  name,
  onBlur,
  disabled,
  formik,
  accept,
}) {
  const [files, setFiles] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [showProgress, setShowProgress] = useState([]);
  const [srcImages, setSrcImages] = useState([]);
  const fileInputRef = useRef();

  const shortText = (text, value) => {
    if (String(text) && String(text).length > value) {
      return `${String(text).slice(0, value - 1) + " ..."}`;
    } else {
      return String(text);
    }
  };

  useEffect(() => {
    setUploadFiles(formik.values[name]);
    formik.values[name].forEach((item) => {
      setSrcImages((pre) => [
        ...pre,
        { id: shortText(item.name, 12), url: item.url },
      ]);
    });
  }, []);

  //set formik value
  useEffect(() => {
    let passArray = [];
    uploadFiles.find((item) => {
      if (item.status === "error") {
        formik.setFieldTouched(name)
        return (passArray = [undefined]);
      } else {
        passArray.push(item);
      }
    });

    formik.setFieldValue(name, passArray);
  }, [uploadFiles]);

  const handleAddFileClick = () => {
    fileInputRef.current.click();
  };

  const inputFileHandler = (e) => {
    const filesVar = Array.from(e.target.files);
    if (!filesVar) return;

    //create files
    filesVar.forEach((item, i) => {
      const fileName = shortText(item.name, 12);
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

            if (loaded === total) {
              setUploadFiles((pre) => [
                ...pre,
                { id: i, name: item.name, size: total, status: "ok" },
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
          const fileName = shortText(res.data.data.name, 12);
          setSrcImages((pre) => [
            ...pre,
            { id: fileName, url: res.data.data.url },
          ]);
        })
        .catch(() => {
          setSrcImages((pre) => [...pre, {}]);
          setUploadFiles((pre) => {
            const newUploadFiles = [...pre];
            newUploadFiles.forEach((it) => {
              if (it.name === item.name) it.status = "error";
            });
            return newUploadFiles;
          });
        });
    });
  };

  const handleDeleteItem = (id, event) => {
    event.stopPropagation();
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
      className={`w-full h-auto rounded-lg border-cf-400 relative overflow-hidden fcc ${disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
    >
      <input
        ref={fileInputRef}
        onChange={inputFileHandler}
        className={`absolute w-full h-full max-h-[140px] opacity-0 top-0 right-0 ${disabled ? "cursor-not-allowed -z-20" : "cursor-pointer"
          }`}
        type="file"
        name="file"
        multiple={true}
        accept={accept}
        disabled={disabled}
        onBlur={(e) => { onBlur(e) }}
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
                      {shortText(file.name, 12)}
                    </p>
                  </div>
                  <div
                    className={`h-full fcc ${file.loading === 100 ? "bg-green-500" : "bg-secondary-300"
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
              className={`h-[41px] w-[165px] fcc rounded-lg ${!file.status || file.status === "ok"
                  ? "bg-gray-200"
                  : "bg-red-200 relative"
                }`}
              onClick={() => openImage(`${shortText(file.name, 12)}`)}
            >
              <div className="h-full w-[20%] fcc">
                {!file.status || file.status === "ok" ? (
                  <HiCheckCircle className="text-primary-500 text-lg" />
                ) : (
                  <HiXCircle className="text-red-500 text-lg" />
                )}
              </div>
              <p className="text-cf-300 text-xs h-full w-[55%] fcc">
                {shortText(file.name, 12)}
              </p>
              {!disabled && (
                <div className="h-full w-[25%] fcc">
                  <div
                    onClick={(event) => handleDeleteItem(i, event)}
                    className="hover:bg-red-200 p-1.5 rounded-md transition-all duration-300"
                  >
                    <HiOutlineTrash className="text-red-500 font-light text-lg" />
                  </div>
                </div>
              )}
              {/* {!file.status || file.status === "ok" ? (
                ""
              ) : (
                <div className="flex absolute right-1 -bottom-3.5 text-error font-bold text-[9px]">
                  <div>فایل مورد نظر آپلود نشد</div>
                </div>
              )} */}
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

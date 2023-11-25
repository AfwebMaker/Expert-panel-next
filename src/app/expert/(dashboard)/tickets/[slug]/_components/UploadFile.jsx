import React, { useState, useEffect, useRef } from "react";
//react icons
import {
    HiOutlineCloudUpload,
    HiCheckCircle,
    HiOutlineTrash,
    HiOutlinePlusSm,
    HiXCircle,
    HiOutlinePaperClip,
    HiOutlinePaperAirplane
} from "react-icons/hi";
// axios
import axios from "axios";
import getCookie from "@/src/functions/getCookie";
// components
import ClipModule from "./ClipModal"
// function
import customToast from '@/src/functions/customToast';

function UploadFile({
    disabled,
    isOpen,
    setIsOpen
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
        if (!uploadFiles.length) {
           setIsOpen(false) 
        }
    },[uploadFiles])

    
    const handleAddFileClick = () => {
        fileInputRef.current.click();
    };

    const inputFileHandler = (e) => {
        const filesVar = Array.from(e.target.files);
        if (!filesVar) return;
        
        if (filesVar.length > 4) {
            customToast("err", "شما بیشتر از 4 فایل نمی توانید آپلود کنید")
            return;
        }

        setIsOpen(true)

        //create files
        filesVar.forEach((item, i) => {
            const fileName = shortText(item.name, 12);
            const formData = new FormData();
            formData.append("file", item);
            setFiles((pre) => [...pre, { name: fileName, loading: 0 }]);
            setShowProgress((pre) => [...pre, true]);

            axios
                .post(`${process.env.NEXT_PUBLIC_FILE_KG_LOCAL}/uploadFile`, formData, {
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
            className={`absolute left-0 top-0 w-10 h-[58px] overflow-hidden fcc cursor-pointer`}
        >
            <input
                ref={fileInputRef}
                onChange={inputFileHandler}
                className={`absolute w-full h-full max-h-[140px] opacity-0 top-0 right-0 cursor-pointer`}
                type="file"
                name="file"
                multiple={true}
                disabled={disabled}
            />
            <HiOutlinePaperClip
                role="button"
                className="text-2xl text-gray-500 cursor-pointer"
            />
            <ClipModule setFiles={setFiles} setUploadFiles={setUploadFiles} isOpen={isOpen} setIsOpen={setIsOpen} w={"w-[500px]"} h={"h-auto"} >
                <div className="w-full h-full flex flex-col items-start justify-center">
                    <ul className="flex flex-wrap gap-2 mb-2 w-full h-auto">
                        {files.map(
                            (file, i) =>
                                showProgress[i] && (
                                    <li
                                        key={i}
                                        className="h-12 items-center flex justify-start w-full bg-gray-200 rounded-lg relative overflow-hidden"
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
                    <ul className="uploading-area flex flex-wrap gap-2 w-full h-auto">
                        {uploadFiles.map((file, i) => (
                            <li
                                key={i}
                                className={`h-12 px-3 items-center flex justify-between w-full fcc rounded-lg ${!file.status || file.status === "ok"
                                    ? "bg-gray-200"
                                    : "bg-red-200 relative"
                                    }`}
                                onClick={() => openImage(`${shortText(file.name, 12)}`)}
                            >
                                <div className="flex items-center gap-x-2">
                                    <div className="h-full fcc">
                                        {!file.status || file.status === "ok" ? (
                                            <HiCheckCircle className="text-primary-500 text-lg" />
                                        ) : (
                                            <HiXCircle className="text-red-500 text-lg" />
                                        )}
                                    </div>
                                    <p className="text-cf-300 text-xs h-full fcc">
                                        {shortText(file.name, 12)}
                                    </p>
                                </div>
                                {!disabled && (
                                    <div className="h-full fcc">
                                        <div
                                            onClick={(event) => handleDeleteItem(i, event)}
                                            className="hover:bg-red-200 p-1.5 rounded-md transition-all duration-300"
                                        >
                                            <HiOutlineTrash className="text-red-500 font-light text-lg" />
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full h-16 bg-gray-100 pl-12 py-2 relative rounded-lg mt-4">
                    <textarea
                        // value={value}
                        // onChange={changeHandler}
                        // onKeyDown={handleKeyDown}
                        placeholder="پیام خود را بنویسید ..."
                        className="w-full h-full px-2 pt-[10px] border-none outline-none bg-transparent resize-none scroll_custom text-sm caret-primary-500"
                    />
                    <div className="fcc absolute left-2 top-3.5 p-2 rounded-md text-cf-300 hover:text-primary-500 transition-all duration-300">
                        <HiOutlinePaperAirplane size={18} className="-rotate-45" />
                    </div>
                </div>
            </ClipModule>
        </div>
    );
}

export default UploadFile;

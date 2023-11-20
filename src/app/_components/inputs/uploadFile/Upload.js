import React, { useEffect, useState } from 'react'
//axios
import axios from "axios";

function Upload({ file, setUploadedImages, files }) {
    const [uploadProgress, setUploadProgress] = useState(0);

    useEffect(() => {
        const uploadImage = async () => {
            let data = new FormData();
            data.append("file", file);
            await axios.post(
                `${process.env.NEXT_PUBLIC_file_kg_local}admin/category/UploadImage`,
                data,
                {
                    onUploadProgress: (progressEvent) => {
                        let percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setUploadProgress(percentCompleted);
                    },
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
                .then((res) => {})
        };

        uploadImage().then((res) => {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>Upload-{uploadProgress}</div>
    )
}

export default Upload
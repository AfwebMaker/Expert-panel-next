import {
    HiOutlineDocumentText,
    HiOutlinePhotograph,
    HiOutlineDocumentReport,
    HiOutlineExclamation,
    HiOutlineMusicNote,
    HiOutlineFilm,
    HiOutlinePresentationChartBar
} from 'react-icons/hi';

function getFileIcon(url) {

    if (!url) return <HiOutlineExclamation />;
    
    const mimeType = url.split('.').pop();

    const icons = {
        'jpg': <HiOutlinePhotograph />,
        'jpeg': <HiOutlinePhotograph />,
        'png': <HiOutlinePhotograph />,
        'gif': <HiOutlinePhotograph />,
        'bmp': <HiOutlinePhotograph />,
        'tiff': <HiOutlinePhotograph />,
        'ico': <HiOutlinePhotograph />,
        'pdf': <HiOutlineDocumentText />,
        'doc': <HiOutlineDocumentReport />,
        'docx': <HiOutlineDocumentReport />,
        'xls': <HiOutlineDocumentReport />,
        'xlsx': <HiOutlineDocumentReport />,
        'ppt': <HiOutlinePresentationChartBar />,
        'pptx': <HiOutlinePresentationChartBar />,
        'txt': <HiOutlineDocumentText />,
        'csv': <HiOutlineDocumentReport />,
        'mp3': <HiOutlineMusicNote />,
        'wav': <HiOutlineMusicNote />,
        'mp4': <HiOutlineFilm />,
        'avi': <HiOutlineFilm />,
        'mov': <HiOutlineFilm />,
    };

    return icons[mimeType] || <HiOutlineExclamation />;
}

export default getFileIcon;
import { HiX } from "react-icons/hi";
import { useState, useEffect } from 'react';

function Modal({ isOpen, setIsOpen, w, h, children }) {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setIsAnimating(false), 200);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };


    return (
        <div
            onClick={handleClose}
            className={`w-screen h-screen fixed top-0 right-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 bg-black z-[1000] items-center justify-center md:px-5 transition-all duration-300 
        ${isOpen ? (isAnimating ? 'opacity-0 flex' : 'opacity-100 flex') : 'hidden'}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                // style={{ width: w, height: h }}
                className={`${w} ${h} bg-gray-50 md:rounded-xl relative px-5 pb-5 pt-8 transition-all duration-300 transform ${isAnimating ? (isOpen ? 'scale-90 opacity-0' : 'scale-100 opacity-100') : 'scale-100 opacity-100'} origin-center`}>
                {children}
                <div
                    className="w-6 h-6 fcc cursor-pointer text-gray-500 absolute top-1.5 left-1.5"
                    onClick={handleClose}
                >
                    <HiX />
                </div>
            </div>
        </div>
    )
}

export default Modal;

import React from "react";
// react icons
import { HiOutlineExclamation } from "react-icons/hi";

function WarningCard({ styleCustom, bgColor, children }) {
    return (
        <div style={{ backgroundColor: `${bgColor ? bgColor : "#FEE2E2"}` }} className={`${styleCustom} flex items-center justify-start text-xs leading-6 sm:text-sm p-2 sm:p-4 sm:leading-7 rounded-lg`}>
            <div className="h-full px-3 sm:px-3 flex items-start justify-center">
                <HiOutlineExclamation className="text-xl h-full" />
            </div>
            <div>{children}</div>
        </div>
    );
}

export default WarningCard;

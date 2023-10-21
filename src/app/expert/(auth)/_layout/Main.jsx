"use client";

import React from "react";
//redux
import { useSelector } from "react-redux";

function Main({ children }) {
    //redux
    const isLoading = useSelector(state => state.layoutConfig.isLoading)

    return (
        <div className="w-full flex">
            {isLoading && <div className="w-[100vw] h-screen bg-pink-300 top-0 left-0 fixed z-[100] fcc">loading...</div>}
            {children}
        </div>
    );
}

export default Main;
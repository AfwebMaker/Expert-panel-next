"use client";

import React from "react";
//redux
import { useSelector } from "react-redux";
//components
import Loading from '/src/app/_components/Loading'

function Main({ children }) {
    //redux
    const isLoading = useSelector(state => state.layoutConfig.isLoading)

    return (
        <div className="w-full flex">
            {isLoading && <Loading />}
            {children}
        </div>
    );
}

export default Main;
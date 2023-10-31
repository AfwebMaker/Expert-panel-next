"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// react icons
import { HiOutlineChevronRight, HiOutlineUser } from "react-icons/hi";
//components
import NotPreferEdit from "./_components/notPreferEdit/NotPreferEdit";
import PreferEdit from "./_components/PreferEdit";
//redux
import { useSelector } from "react-redux";

function Page() {
    const [stateForm, setStateForm] = useState(false);
    const router = useRouter();
    const activeDataLocal = useSelector(state => state.getExpertInfo.activeData)

    return (
        <div className="flex w-full flex-col pb-5">
            <div className="flex w-full h-[calc(100vh-130px)] md:bg-white md:h-[calc(100vh-200px)] lg:h-[calc(100vh-180px)] rounded-lg flex-col items-center justify-start py-5 px-3 sm:px-5 overflow-y-scroll hideScroll">
                <div className="w-full h-auto flex flex-col items-center justify-start">
                    <div className="flex items-center justify-between md:justify-end w-full">
                        <Link
                            href="/expert/deputy"
                            className="flex md:hidden items-center justify-start text-cf-300 text-sm font-bold"
                        >
                            <HiOutlineChevronRight className="ml-1 text-base" />
                            <h1>نماینده من</h1>
                        </Link>
                    </div>
                    <div className="w-full fcc md:hidden gap-x-2 mb-5 text-primary-500 mt-10">
                        <h1>ویرایش نماینده من</h1>
                        <HiOutlineUser className="text-xl" />
                    </div>
                    <div className="w-full flex items-center justify-between text-primary-500 mt-1 mb-10">
                        <div className="fcc gap-x-2">
                            <h1>نماینده من</h1>
                            <HiOutlineUser className="text-xl" />
                        </div>
                        <div className={`${stateForm ? "text-cf-300 cursor-not-allowed" : "text-primary-500 cursor-pointer"}`} role="button" onClick={() => setStateForm(true)}>
                            ویرایش
                        </div>
                    </div>
                    <div className="w-full">
                        {
                            activeDataLocal && activeDataLocal.isMyself ?
                                <PreferEdit stateForm={stateForm} />
                                :
                                <NotPreferEdit stateForm={stateForm} setStateForm={setStateForm} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

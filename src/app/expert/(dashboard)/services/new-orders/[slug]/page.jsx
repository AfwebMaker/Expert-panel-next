"use client"
import React from 'react'
// components
import MasterCarousel from "./_components/carousel/MasterCarousel"
import TitleBox from "./_components/TitleBox"
import BasicDescriptionBox from "./_components/BasicDescriptionBox"
import DescriptionBox from "./_components/descriptionBox/DescriptionBox"
//redux
import { useSelector } from "react-redux";


const data = [
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
    { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
]

function page() {
    const type_job = useSelector(state => state.staticVariable.type_job)

    const type = (requestType) => {
        const result = type_job.find((item) => item.id === requestType)
        return result.text;
    }

    return (
        <div className="flex w-full flex-col pb-20 lg:pb-0 text bg-orange-300">
            <div className="w-full h-full bg-red-400 flex flex-col items-center justify-start">
                <MasterCarousel />
                <div className='grid grid-cols-12 bg-emerald-300 w-full gap-5 mt-5'>
                    <div className='bg-fuchsia-300 col-span-12 lg:col-span-6'>
                        <TitleBox title={"نصب و اجرای شیشه دو جداره"} address={"تهران، منطقه ۷، سهرودی شمالی"} />
                        <BasicDescriptionBox serviceType={type(1)} meterage={"۸ متر در ارتفاع ۳ متر"} expertLevel={"مجرب"} />
                        <DescriptionBox data={data} title={"نوع شیشه"} description={"دو جداره - سکوریت"} />
                    </div>
                    <div className='bg-fuchsia-400 col-span-12 lg:col-span-6 p-5'></div>
                </div>
            </div>
        </div>
    )
}

export default page;
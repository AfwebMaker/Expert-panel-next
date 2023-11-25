"use client"
import React from 'react'
// components
import MasterCarousel from "../../_components/slug/carousel/MasterCarousel"
import TitleBox from "../../_components/slug/TitleBox"
import ContractorBox from "./_components/ContractorBox"
import BasicDescriptionBox from "../../_components/slug/BasicDescriptionBox"
import DescriptionBox from "../../_components/slug/descriptionBox/DescriptionBox"
import FurtherDetailsBox from "../../_components/slug/furtherDetails/FurtherDetailsBox"
import ExecutionTimeBox from "../../_components/slug/executionTimeBox/ExecutionTimeBox"
import AddressBox from "./_components/addressBox/AddressBox"
//redux
import { useSelector } from "react-redux";


const data = [
  { id: 1, title: "نوع شیشه", description: "دو جداره - سکوریت" },
]

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores quo incidunt, earum aliquam veniam cumque alias dolore amet delectus a nulla, vitae magni optio totam distinctio molestiae ea et quam natus temporibus perferendis iusto magnam illum! Commodi error explicabo eos deleniti maxime amet in eveniet nam velit ut, magni quasi. Quia eaque et eos iure. Pariatur hic quisquam accusamus tenetur maxime! Culpa, ex ratione, eaque maxime perferendis totam error ullam ipsam eos nemo architecto minus voluptatibus repellendus, dolorum neque temporibus obcaecati impedit? Architecto, facere perferendis voluptas consequuntur esse dignissimos optio alias facilis debitis, culpa quam porro ducimus, enim doloremque."

function Page() {
  const type_job = useSelector(state => state.staticVariable.type_job)

  const type = (requestType) => {
    const result = type_job.find((item) => item.id === requestType)
    return result.text;
  }

  return (
    <div className="flex w-full flex-col mt-5 pb-[200px] lg:pb-0">
      <div className="w-full h-full flex flex-col items-center justify-start">
        <MasterCarousel />
        <div className='grid grid-cols-12 w-full gap-0 lg:gap-5 mt-0 lg:mt-5 mb-5'>
          <div className='col-span-12 lg:col-span-6 flex flex-col'>
            <TitleBox title={"نصب و اجرای شیشه دو جداره"} address={"تهران، منطقه ۷، سهرودی شمالی"} />
            <ContractorBox imageProfile={""} familyName={"علی جباری"} number={"09106686121"}/>
            <ExecutionTimeBox date={""} />

          </div>
          <div className='col-span-12 lg:col-span-6 flex flex-col'>
            <BasicDescriptionBox serviceType={type(1)} meterage={"۸ متر در ارتفاع ۳ متر"} expertLevel={"مجرب"} />
            <DescriptionBox data={data} />
            <FurtherDetailsBox text={text} />
          </div>
          <div className='col-span-12 flex flex-col'>
            <AddressBox address={"تهران سهرودی منطقه ۸ خیابان آذری پلاک ۱۹ واحد ۲"} mapLocation={[51.42047, 35.729054]} />
            {/* <TenderBoxPhone time={2 * 24 * 60 * 60 * 1000} minPrice={20000000} maxPrice={50000000} link={"#"} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
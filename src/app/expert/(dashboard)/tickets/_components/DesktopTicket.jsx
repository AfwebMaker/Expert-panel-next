"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// components
import SendNewTicketBtn from "./SendNewTicketBtn";
import MasterTicket from "./MasterTicket";
import Loading from "@/app/_components/Loading"
// react icons
import { HiOutlineChat, HiOutlineTicket } from "react-icons/hi";
// scroll
import ScrollContainer from 'react-indiana-drag-scroll'
// services
import fetchTickets from "@/src/services/ticket_kg_local/fetchTickets";
import fetchDepartment from "@/src/services/ticket_kg_local/fetchDepartment";
// react-loader-spinner
import { ThreeDots } from 'react-loader-spinner'

function DesktopNavigation() {
  const [dataTickets, setDataTickets] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetchTickets()
      .then((res) => {
        console.log(res.data.data.tickets.results)
        setDataTickets(res.data.data.tickets.results);

        // fetchDepartment()
        //   .then((response) => {
        //     console.log("fetchDepartment", response.data.data)
        //     res.data.data.tickets.results.map(item => {
        //       const dep = response.data.data.find(dep => dep.id === item.departmentId)
        //       const subDep = dep.subjects.find(sub => sub.id === item.subjectId)
        //       console.log(dep)
        //       console.log(subDep)
              
        //     })
        //     // setDepartments();
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
        //   .finally(() => {
        //     // setLoadingPage(false)
        //   })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, []);


  const navigation_data = [
    {
      id: 0,
      title: "",
      description: "",
      status: "",
      ticketNumber: "",
      createdAt: "",
      slug: "/expert/notification/orders",
    },
    {
      id: 1,
      title: "",
      description: "",
      status: "",
      ticketNumber: "",
      createdAt: "",
      slug: "/expert/notification/orders",
    },
    {
      id: 2,
      title: "",
      description: "",
      status: "",
      ticketNumber: "",
      createdAt: "",
      slug: "/expert/notification/orders",
    },
    {
      id: 3,
      title: "",
      description: "",
      status: "",
      ticketNumber: "",
      createdAt: "",
      slug: "/expert/notification/orders",
    },
  ];

  const SendNewTicketHandler = () => {
    console.log("first");
    router.push("/expert/tickets/new-ticket");
  };

  return (
    <>

      <div className="hidden md:block ml-5 xl:w-[390px] py-5 xl:py-0">
        <div>
          <div className="text-cf-300 text-sm flex items-center justify-between mb-2 px-5 lg:px-0">
            <div className="flex">
              <HiOutlineChat className="ml-1 text-base" />
              <h2>تیکت های من</h2>
            </div>
            <div className="flex xl:hidden">
              <SendNewTicketBtn SendNewTicketHandler={SendNewTicketHandler} />
            </div>
          </div>
          <div className="overflow-x-scroll xl:overflow-y-scroll hideScroll xl:h-[calc(100vh-210px)]">
            {
              isLoading ?
                (
                  <div className="h-auto xl:h-full p-5 font-medium text-lg fcc flex-row xl:w-[388px] xl:flex-col flex-nowrap gap-x-3 xl:items-center xl:justify-center">
                    <ThreeDots
                      height="60"
                      width="60"
                      radius="9"
                      color="#45B649"
                      ariaLabel="three-dots-loading"
                      visible={true}
                    />
                  </div>
                )
                :
                (
                  dataTickets?.length ?
                    (
                      <ScrollContainer className='scroll-container whitespace-nowrap' >
                        <ul className="h-auto xl:h-full font-medium text-lg flex flex-nowrap gap-x-3 xl:flex-wrap xl:gap-x-0 justify-between ">
                          <MasterTicket
                            navigationData={dataTickets}
                            SendNewTicketHandler={SendNewTicketHandler}
                          />
                        </ul>
                      </ScrollContainer>

                    )
                    :
                    (
                      <div className="h-auto xl:h-full p-5 font-medium text-lg flex flex-row xl:w-[388px] xl:flex-col flex-nowrap gap-x-3 xl:items-center xl:justify-center">

                        <div className="rounded-full bg-primary-200 w-20 h-20 fcc text-5xl text-primary-500">
                          <HiOutlineTicket />
                        </div>
                        <div className="w-[calc(100%-100px)] xl:items-center h-full xl:h-auto flex flex-col mr-5 xl:mr-0 xl:w-full">
                          <h1 className="text-sm font-bold text-primary-500 mt-3">
                            پشتیبانی و ارسال تیکت
                          </h1>
                          <p className="text-xs mt-2 leading-7 flex w-full">
                            احراز هویت در گارگشا قدم اول شما برای مشغول شدن به کار می باشد شما
                            ابتدا باید به احراز اطلاعات کاربریتان سپس یک شماره شبا برای احراز
                            بانکی و در نهایت احراز محل سکونتتان بپردازید.
                          </p>
                        </div>
                      </div>
                    )
                )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default DesktopNavigation;

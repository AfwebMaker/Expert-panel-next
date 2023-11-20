"use client"
import React, { useReducer, useEffect } from 'react';
// components
import NoContent from "../_components/NoContent";
import NewOrders from "./_components/NewOrders";
import Loading from "@/app/_components/Loading";
import ShowMoreButton from "../_components/ShowMoreButton";
// react icons
import { HiOutlineClipboardCopy, HiBadgeCheck } from 'react-icons/hi';
// services
import fetchServices from "@/services/core_kg_local/fetchServices";

const initialState = {
  data: [],
  count: [],
  page: 1,
  searchInput: "-",
  loadingPage: true,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: [...state.data, ...action.payload] };
    case 'SET_COUNT':
      return { ...state, count: Math.ceil(action.payload / 10) };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_LOADING_PAGE':
      return { ...state, loadingPage: action.payload };
    default:
      throw new Error();
  }
}

function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });
    fetchServices(state.page, 10, 1, state.searchInput)
      .then((res) => {
        dispatch({ type: 'SET_DATA', payload: res.data.data.lstData });
        dispatch({ type: 'SET_COUNT', payload: res.data.data.count });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({ type: 'SET_LOADING_PAGE', payload: false });
        dispatch({ type: 'SET_LOADING', payload: false });
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.page]);

  return (
    <>
      {state.loadingPage && <Loading />}
      <div className="w-[100%] h-[calc(100vh-280px)] sm:h-[calc(100vh-280px)] md:h-[calc(100vh-450px)] lg:h-[calc(100vh-170px)] rounded-lg bg-white flex flex-col items-center justify-start p-3 sm:p-5  overflow-y-scroll hideScroll">
        <div className="w-full h-auto flex flex-col items-center justify-center">
          {
            state.data && state.data.length ?
              (
                <>
                  <NewOrders data={state.data} />
                  <ShowMoreButton page={state.page} dispatch={dispatch} count={state.count} loading={state.loading} />
                </>
              )
              :
              (<NoContent
                icon={<HiOutlineClipboardCopy className="text-5xl" />}
                title={"متاسفانه هیچ سفارش جدید یافت نشد!"}
                description={"در حال حاضر هیچ سفارشی در ضمینه هایی که شما در آن احراز صلاحیت کردید وجود ندارد شما می توانید در قست احراز صلاحیت > اضافه کردن سرویس جدید ، سرویس جدید اضافه کنید یا سرویس های قبلیتان را ویرایش کنید تا سفارش های موجود را ببینید."}
                textBtn={"احراز طلاحیت سرویس جدید"}
                iconBtn={<HiBadgeCheck className="text-lg" />}
                href={"#"}
              />)
          }
        </div>
      </div>
    </>
  )
}

export default Page;

"use client"
import React, { useReducer, useEffect } from 'react'
// components
import NoContent from "../_components/NoContent"
import Tenders from "./_components/Tenders"
import Loading from "@/app/_components/Loading"
import ShowMoreButton from "../_components/ShowMoreButton";
// react icons
import { HiOutlineClipboardList, HiOutlineClipboardCopy } from 'react-icons/hi'
// services
import fetchServices from "@/src/services/core_kg_local/fetchServices";

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
      return { ...state, count: Math.ceil(action.payload / 4) };
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
    fetchServices(state.page, 4, 1, state.searchInput)
      .then((res) => {
        console.log("New", res.data.data);
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
  }, [state.page]);

  return (
    <>
      {state.loadingPage && <Loading />}
      <div className="w-[100%] h-[calc(100vh-135px)] md:h-[calc(100vh-190px)] rounded-lg bg-white flex flex-col items-center justify-start py-10 px-5 overflow-y-scroll hideScroll">
        <div className="w-full h-auto flex flex-col items-center justify-start">
          {
            state.data && state.data.length ?
              (
                <>
                  <Tenders data={state.data} />
                  <ShowMoreButton page={state.page} dispatch={dispatch} count={state.count} loading={state.loading} />
                </>
              )
              :
              (<NoContent
                icon={<HiOutlineClipboardList className="text-5xl" />}
                title={"شما در هیچ مناقصه ای شرکت نکردید!"}
                description={"در حال حاضر شما در هیچ مناقصه ای شرکت نکردید و یا قیمت پیشنهادیتان را وارد نکردید برای شرکت از منوی سمت راست سفارشات جدید را انتخاب کنید و با انتخاب یک سفارش در مناقصه شرکت کنید. پش از شرکت در مناقصه یا مناقصات وضعیت مناقصات فعال را در این اینجا می توانید مشاهده کنید."}
                textBtn={"مشاهده سفارشات جدید"}
                iconBtn={<HiOutlineClipboardCopy className="text-lg" />}
                href={"#"}
              />)
          }
        </div>
      </div>
    </>

  )
}

export default Page
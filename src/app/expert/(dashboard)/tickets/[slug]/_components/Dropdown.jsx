"use client";

import { Fragment } from "react";
//headlessui
import { Listbox, Transition } from "@headlessui/react";
//react-icons
import { HiOutlineXCircle, HiOutlineDotsCircleHorizontal, HiOutlineCheckCircle, HiOutlineDotsHorizontal } from "react-icons/hi";


function Dropdown({ Problem, number, status, removeTicketHandler }) {
  // status = answered, pending, *

  const shortText = (text, value) => {
    if (String(text) && String(text).length > value) {
      return `${String(text).slice(0, value - 1) + " ..."}`;
    } else {
      return String(text);
    }
  };

  return (
    <div className="w-auto fcc rounded-md hover:bg-gray-200 transition-all duration-300 text-cf-300 font-extrabold cursor-pointer relative">
      <div className="w-full h-full z-10 col-span-8 flex items-center justify-start">
        <Listbox>
          <div className="relative">
            <Listbox.Button className="relative flex items-center justify-start w-full cursor-pointer text-cf-300 py-2 px-2 text-right focus:outline-none text-xs transition-all duration-300 outline-none border-left-dashed">
              <span className="pointer-events-none inset-y-0 flex items-center">
                <HiOutlineDotsHorizontal size={20} className="text-sm" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute -left-5 mt-1 max-h-48 cursor-default w-60 sm:w-64 flex flex-col items-start justify-start overflow-auto rounded-lg bg-white p-2 text-xs md:text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hideScroll font-normal">
                <Listbox.Option className="relative select-none p-2 flex items-center justify-between w-full">
                  {shortText(Problem, 25)}
                </Listbox.Option>
                <Listbox.Option className="relative select-none p-2 flex items-center justify-between w-full">
                  شماره تیکت: {number}
                </Listbox.Option>
                <Listbox.Option className="relative select-none p-2 flex items-center justify-start w-full">
                  وضعیت تیکت :
                  {status === "pending" ? (
                    <div className="flex text-warning fcc px-2 text-sm">
                      <span>در انتظار پاسخ</span>
                      <HiOutlineDotsCircleHorizontal className="mr-1" />
                    </div>
                  ) : status === "answered" ? (
                    <div className="flex text-success fcc px-2">
                      <span>پاسخ داده شده</span>
                      <HiOutlineCheckCircle className="mr-1" />
                    </div>
                  ) : (
                    <div className="flex text-error fcc px-2">
                      <span>بسته شده</span>
                      <HiOutlineXCircle className="mr-1" />
                    </div>
                  )}
                </Listbox.Option>
                <Listbox.Option onClick={removeTicketHandler} className="relative rounded-lg transition-all text-red-500 duration-300 hover:bg-red-500 hover:text-white select-none p-2 flex items-center cursor-pointer justify-start gap-x-1 w-full">
                  <HiOutlineXCircle className="text-lg" />
                  <span className="flex ">بستن تیکت</span>
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}

export default Dropdown;

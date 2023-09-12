import React from "react";
import Link from "next/link";

const dataMenu = [
  { id: 1, title: "گزارشات", href: "#" },
  { id: 2, title: "امتیازات و صلاحیت", href: "#" },
  { id: 3, title: "نماینده من", href: "#" },
  { id: 4, title: "اخبار", href: "#" },
  { id: 5, title: "دیده شو", href: "#" },
];

function DropDownMenu({ showMenu }) {
  return (
    <div
      className={` transition-all duration-500 w-full absolute -top-[1000px] fcc p-4 text-white ${
        showMenu ? "top-14 bg-dark transition-all duration-500 -z-10" : "bg-white"
      }`}
    >
      <ul className="w-full flex flex-col items-start justify-center gap-y-3 text-sm mt-5">
        {dataMenu &&
          dataMenu.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        <div className="h-[1px] mt-10 mb-5 bg-white w-full bg-gradient-to-r from-[#111827] via-[#8b9bbb] to-[#111827]"></div>
        <li>
          <Link href="#">
            <span>خروج از حساب</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;

import Link from "next/link";
import React from "react";

const dataNavigationBar = [
  { id: 1, title: "اعلان ها", href: "#" },
  { id: 2, title: "پشتیبانی", href: "#" },
  { id: 3, title: "خانه", href: "#" },
  { id: 4, title: "سفارشات", href: "#" },
  { id: 5, title: "پروفایل", href: "#" },
];
function NavigationBar() {
  return (
    <div className="">
      <div className="h-14"></div>
      <nav
        style={{ boxShadow: "0px -3px 15px rgba(38, 38, 38, 0.1)" }}
        className="fixed z-10 bottom-0 right-0 w-full h-20 flex items-center px-4  justify-start transition-all duration-500 delay-[30ms] bg-white"
      >
        <ul className="flex items-center justify-between w-full h-full">
          {dataNavigationBar &&
            dataNavigationBar.map((item) => (
              <li className="bg-red-200 w-14 h-full fcc text-xs cursor-pointer text-cf-300" key={item.id}>
                <Link href={item.href}>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;

import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
// react router dom

function ProfileDropDown(props) {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-around w-full text-sm font-medium focus:outline-none focus-visible:ring-2 hover:hover:text-color-font-3">
            <span className="w-[2px] h-7 rounded-full bg-gray-300 block ml-3"></span>
            <div className="bg-black w-10 h-10 rounded-full">
              {/* <Image
                width={10}
                height={10}
                className="inline-block h-9 w-h-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              /> */}
            </div>
            <span className="mx-2 text-sm text-color-font-1 hover:text-color-font-3">
              محمد جوادی
            </span>
            <RiArrowDownSLine
              className="h-5 w-5 text-color-font-2 hover:text-color-font-3"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 px-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="#"
                    className={`${
                      active ? "bg-color-3 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mx-2 h-5 w-5 text-teal-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mx-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    پروفایل کاربری
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="#"
                    className={`${
                      active ? "bg-color-3 text-white" : "text-color-font-1"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mx-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mx-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    خروج از حساب
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M18 10.5C18 14.9183 14.4183 18.5 10 18.5C5.58172 18.5 2 14.9183 2 10.5C2 6.08172 5.58172 2.5 10 2.5C14.4183 2.5 18 6.08172 18 10.5ZM12 7.5C12 8.60457 11.1046 9.5 10 9.5C8.89543 9.5 8 8.60457 8 7.5C8 6.39543 8.89543 5.5 10 5.5C11.1046 5.5 12 6.39543 12 7.5ZM9.99993 11.5C7.98239 11.5 6.24394 12.695 5.45374 14.4157C6.55403 15.692 8.18265 16.5 9.99998 16.5C11.8173 16.5 13.4459 15.6921 14.5462 14.4158C13.756 12.695 12.0175 11.5 9.99993 11.5Z"
        fill="#45B649"
      />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M18 10.5C18 14.9183 14.4183 18.5 10 18.5C5.58172 18.5 2 14.9183 2 10.5C2 6.08172 5.58172 2.5 10 2.5C14.4183 2.5 18 6.08172 18 10.5ZM12 7.5C12 8.60457 11.1046 9.5 10 9.5C8.89543 9.5 8 8.60457 8 7.5C8 6.39543 8.89543 5.5 10 5.5C11.1046 5.5 12 6.39543 12 7.5ZM9.99993 11.5C7.98239 11.5 6.24394 12.695 5.45374 14.4157C6.55403 15.692 8.18265 16.5 9.99998 16.5C11.8173 16.5 13.4459 15.6921 14.5462 14.4158C13.756 12.695 12.0175 11.5 9.99993 11.5Z"
        fill="#fff"
      />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M3 3.5C3.55229 3.5 4 3.94771 4 4.5L4 16.5C4 17.0523 3.55228 17.5 3 17.5C2.44771 17.5 2 17.0523 2 16.5L2 4.5C2 3.94771 2.44772 3.5 3 3.5ZM10.7071 6.79289C11.0976 7.18342 11.0976 7.81658 10.7071 8.20711L9.41421 9.5L17 9.5C17.5523 9.5 18 9.94771 18 10.5C18 11.0523 17.5523 11.5 17 11.5L9.41421 11.5L10.7071 12.7929C11.0976 13.1834 11.0976 13.8166 10.7071 14.2071C10.3166 14.5976 9.68342 14.5976 9.29289 14.2071L6.29289 11.2071C6.10536 11.0196 6 10.7652 6 10.5C6 10.2348 6.10536 9.98043 6.29289 9.79289L9.29289 6.79289C9.68342 6.40237 10.3166 6.40237 10.7071 6.79289Z"
        fill="#DC2626"
      />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M3 3.5C3.55229 3.5 4 3.94771 4 4.5L4 16.5C4 17.0523 3.55228 17.5 3 17.5C2.44771 17.5 2 17.0523 2 16.5L2 4.5C2 3.94771 2.44772 3.5 3 3.5ZM10.7071 6.79289C11.0976 7.18342 11.0976 7.81658 10.7071 8.20711L9.41421 9.5L17 9.5C17.5523 9.5 18 9.94771 18 10.5C18 11.0523 17.5523 11.5 17 11.5L9.41421 11.5L10.7071 12.7929C11.0976 13.1834 11.0976 13.8166 10.7071 14.2071C10.3166 14.5976 9.68342 14.5976 9.29289 14.2071L6.29289 11.2071C6.10536 11.0196 6 10.7652 6 10.5C6 10.2348 6.10536 9.98043 6.29289 9.79289L9.29289 6.79289C9.68342 6.40237 10.3166 6.40237 10.7071 6.79289Z"
        fill="#fff"
      />
    </svg>
  );
}

export default ProfileDropDown;

// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function Header() {
  return (
    <div className="h-20 w-[100%] flex items-center  justify-between  border lg:px-[100px] px-6">
      <div className="text-[hsl(0,0%,18%)] text-xl font-semibold ">
        <h1>logo</h1>
      </div>
      <div className=" text-[#2D2D2D]   gap-10 hidden md:flex ">
        <h1>About</h1>
        <h1>Work</h1>
        <h1>Contact</h1>
      </div>
      <div className=" md:hidden ">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md /20 px-4 py-2">
            <img
              width={25}
              height={25}
              src="./src/assets/images/Menu.png"
              alt=""
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as={"div"}
              className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none flex flex-col text-center"
            >
              <Menu.Item>
                {() => (
                  <a
                    className="hover:bg-[#f3f3f3]  p-3"
                    href="/account-settings"
                  >
                    About
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <a
                    className="hover:bg-[#f3f3f3] p-3"
                    href="/account-settings"
                  >
                    Work
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <a
                    className="hover:bg-[#f3f3f3] p-3"
                    href="/account-settings"
                  >
                    Contact
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Header;

"use client";

import { useState } from "react";
import NavigationItem from "./NavigationItem";
import useOutsideClick from "../_hooks/useOutsideClick";

const navigationItems = [
  { number: "00", text: "HOME", href: "/" },
  { number: "01", text: "DESTINATION", href: "/destination" },
  { number: "02", text: "CREW", href: "/crew" },
  { number: "03", text: "TECHNOLOGY", href: "/technology" },
];

function Navigations() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  const ref = useOutsideClick(closeMenu);
  return (
    <nav className="flex items-center xl:w-[55rem]">
      <div
        ref={ref}
        className={`${isOpenMenu ? "right-0" : "-right-60"} fixed top-0 my-auto ml-auto h-screen w-60 items-center justify-end overflow-hidden bg-white/5 bg-opacity-10 px-5 text-white backdrop-blur-2xl transition-all duration-1000 md:static md:block md:h-fit md:w-full md:px-6 md:duration-0 lg:px-16`}
      >
        <button
          onClick={toggleMenu}
          className="mb-20 ml-auto mt-5 block h-6 w-6 md:hidden"
        >
          <img src="/shared/icon-close.svg" alt="close icon" />
        </button>
        <ul className="flex flex-col justify-end gap-8 md:flex-row md:gap-10">
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={index}
              number={item.number}
              text={item.text}
              href={item.href}
            />
          ))}
        </ul>
      </div>
      <button onClick={toggleMenu} className="block h-6 w-6 md:hidden">
        <img src="/shared/icon-hamburger.svg" alt="menu icon" />
      </button>
    </nav>
  );
}

export default Navigations;

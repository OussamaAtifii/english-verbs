"use client";

import Link from "next/link";
import { useState } from "react";
import { bebasNeue } from "../fonts/fonts";
import { BurgerIcon, Home03Icon, Quiz01Icon } from "../icons/icons";
import NavLink from "./NavLink";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sticky top-0 bg-white border-b-2 border-gray-300 z-20">
      <Link href="/" className="flex items-center">
        <img src="/logo.webp" className="h-14" alt="VerbIt logo" />
        <span
          className={`${bebasNeue.className} text-3xl font-semibold whitespace-nowrap`}
        >
          VerbIt
        </span>
      </Link>
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={handleClick}
      >
        <BurgerIcon />
      </button>
      {isOpen && (
        <div className="w-full">
          <ul className="font-medium text-lg flex flex-col pt-8 space-y-2 border-gray-100 rounded-md">
            <li>
              <NavLink href="/" icon={<Home03Icon />} name="Home" />
            </li>
            <li>
              <NavLink href="/quiz" icon={<Quiz01Icon />} name="Quiz" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

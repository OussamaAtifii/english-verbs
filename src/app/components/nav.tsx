"use client";

import Link from "next/link";
import { useState } from "react";
import { bebasNeue } from "../fonts/fonts";
import NavLink from "./NavLink";
import {
  BookmarkIcon,
  HomeIcon,
  NumberedListIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sticky top-0 bg-gray-50 border-b-2 border-gray-400 z-20">
      {" "}
      {/* Cambiado bg-gray-100 a bg-gray-50 */}
      <Link href="/" className="flex items-center">
        <img src="/logo.webp" className="h-14" alt="VerbIt logo" />
        <span
          className={`${bebasNeue.className} text-3xl font-semibold whitespace-nowrap`}
        >
          VerbIt
        </span>
      </Link>
      <button className="btn btn-square btn-ghost" onClick={handleClick}>
        <Bars3Icon className="size-8" />
      </button>
      <div
        className={`w-full fixed top-[89.45px] left-0 h-full bg-gray-100 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="font-medium text-lg flex flex-col mt-8 px-4 gap-y-2 border-gray-100 rounded-md">
          <li onClick={handleClick}>
            <NavLink
              href="/"
              icon={<HomeIcon className="size-6" />}
              name="Home"
            />
          </li>
          <li onClick={handleClick}>
            <NavLink
              href="/quiz"
              icon={<QuestionMarkCircleIcon className="size-6" />}
              name="Quiz"
            />
          </li>
          <li onClick={handleClick}>
            <NavLink
              href="/word-counter"
              icon={<NumberedListIcon className="size-6" />}
              name="Word Counter"
            />
          </li>
          <li onClick={handleClick}>
            <NavLink
              href="/grammar-guide"
              icon={<BookmarkIcon className="size-6" />}
              name="Grammar Guide"
            />
          </li>
          <li onClick={handleClick}>
            <NavLink
              href="/user"
              icon={<UserCircleIcon className="size-6" />}
              name="Username"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

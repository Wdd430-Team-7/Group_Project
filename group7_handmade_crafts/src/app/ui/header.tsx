"use client";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import { patrick_hand } from "./fonts";
import Category from "./category";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex flex-col relative">
      <div className="flex flex-row p-4 items-center justify-between bg-amber-400 md:bg-white md:items-center">
        {/* Menu button hidden in desktop view */}
        <Bars3Icon className="w-6 md:hidden" onClick={toggleMenu} />
        {/* Site name */}
        <Link
          href="/"
          className="flex flex-row gap-4 items-center justify-center"
        >
          <Image
            src="./images/handcrafted_haven_logo.svg"
            width={80}
            height={80}
            alt="logo"
            className="hidden md:block bg-amber-400 rounded-lg hover:bg-amber-200"
          />
          <h1 className={`${patrick_hand.className} text-2xl md:text-6xl`}>
            Handcrafted Haven
          </h1>
        </Link>

        {/* login or account link c/o - Jeremy Troff later */}
        <UserCircleIcon className="w-6" />
      </div>
      <div
        className={`md:flex md:flex-row justify-center bg-amber-400 md:bg-white gap-2 p-4 ${
          isOpen ? "flex flex-col absolute top-full" : "hidden"
        }`}
      >
        <Category onClickEvent={closeMenu} />
        <Category onClickEvent={closeMenu} />
        <Category onClickEvent={closeMenu} />
        <Category onClickEvent={closeMenu} />
      </div>
    </header>
  );
}

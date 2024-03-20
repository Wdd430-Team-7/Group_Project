import Image from "next/image";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import SignIn from "./sign-in"
import { patrick_hand } from "./fonts";
import Category from "./category";

export default function Header() {
  return (
    <header className="flex flex-col relative">
      <div className="flex flex-row p-4 items-center justify-between bg-amber-400 md:bg-white md:items-center">
        {/* Site name */}
        <Link
          href="/"
          className="flex flex-row gap-4 items-center justify-center"
        >
          <Image
            src="/images/handcrafted_haven_logo.svg"
            width={80}
            height={80}
            alt="logo"
            className="hidden md:block bg-amber-400 rounded-lg hover:bg-amber-200"
          />
          <h1 className={`${patrick_hand.className} text-2xl md:text-6xl text-black`}>
            Handcrafted Haven
          </h1>
        </Link>

        <SignIn />
      </div>
      <div
        className={`flex flex-row flex-wrap justify-center bg-amber-400 md:bg-white gap-2 p-4`}
      >
        <Category />
      </div>
    </header>
  );
}

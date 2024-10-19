"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="mx-auto w-11/12 md:w-10/12 bg-blue-50 rounded-full px-6 border-t-0 border-b-2 border-r-2 border-l-2 border-blue-100 shadow-lg">
      <div className="hidden md:flex flex-row items-center justify-between py-3">
        <div className="flex flex-row justify-between w-7/12">
          <div className="text-neutral-900 text-3xl font-bold">
            <Link href="/">hr.</Link>
          </div>
          <div className="flex flex-row justify-between items-center font-bold text-[1rem] gap-x-6">
            <Link href="/" className="hover:underline delay-75 duration-300 ease-in-out">Services</Link>
            <Link href="/"className="hover:underline delay-75 duration-300 ease-in-out">About</Link>
            <Link href="/"className="hover:underline delay-75 duration-300 ease-in-out">Contact</Link>
          </div>
        </div>
        <div className="flex flex-row font-bold text-[1rem] justify-between items-center gap-x-6">
           <button className="py-2 px-5 rounded-full bg-blue-200">
           <Link href="/" className="">
              Let's talk
            </Link>
           </button>
        </div>
      </div>

      {/* Mobile Screens */}

      <div>
        <div className="flex md:hidden flex-row justify-between items-center py-3">
        <div className="text-xl font-semibold">
            <Link href="/">hr.</Link>
          </div>
          <div className="flex flex-row gap-x-3 items-center justify-center font-medium">
            <button onClick={handleToggle}>
              {isToggle ? (
                <AiOutlineClose className="w-5 h-4" />
              ) : (
                <SlMenu className="w-5 h-4" />
              )}
            </button>
          </div>
        </div>
        {isToggle && (
          <div className="fixed top-0 right-0 h-full  w-full bg-blue-50 z-30 flex flex-col justify-start items-start">
            <div className="flex flex-row justify-between items-center ">
              <h1
                className={`absolute top-7 left-5 text-xl font-semibold tracking-widest`}
              >
                <Link href="/" className="cursor-pointer">
                  hr.
                </Link>
              </h1>
              <button onClick={handleToggle} className="absolute top-9 right-5">
                <AiOutlineClose className="w-5 h-4" />
              </button>
            </div>
            <div className="mt-40 max-h-screen overflow-y-auto w-full">
              <div className="flex flex-col gap-7 items-start justify-start font-semibold text-xl px-5 ">
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  About
                </Link>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  Services
                </Link>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                 Contact
                </Link>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  Let's talk
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;

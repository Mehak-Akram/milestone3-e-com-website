"use client";

import Link from "next/link";
import React from "react";
import { NavigationMenuDemo } from "./navlinks";
import { FiWatch } from "react-icons/fi";
import { useAppSelector } from "@/app/store/hook";

const Navabar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"../"}>Home</Link>
              </li>
              <li>
                <details>
                  <summary>Watch</summary>
                  <ul className="p-2">
                    <li>
                      <Link href={"/men"}>Men</Link>
                    </li>
                    <li>
                      <Link href={"/women"}>Women</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <FiWatch className="text-2xl hover:animate-bounce text-myOrange hidden lg:block  ml-5" />
          <Link
            href={"./"}
            className="font-extrabold text-myblue text-2xl hidden lg:block italic"
          >
            TIME <span className="text-myOrange">VO</span>
          </Link>
        </div>
        <div className="navbar-center ">
          <FiWatch className="text-2xl hover:animate-bounce text-myOrange block lg:hidden" />
          <Link
            href={"./"}
            className="font-extrabold text-myblue text-2xl block lg:hidden italic"
          >
            TIME<span className="text-myOrange">VO</span>
          </Link>
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>{" "}
        </div>
        <div className="navbar-end">
          <Link href={"/cart"}>
            <div
              tabIndex={0}
              role="button"
              className="pr-5 cursor-pointer group"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 group-hover:text-myOrange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cart.length > 0 && (
                  <span className="badge badge-sm font-semibold indicator-item text-myWhite bg-myblue border-[1px] border-myOrange">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navabar;

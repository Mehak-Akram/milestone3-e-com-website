import React from "react";
import Image from "next/image";
import Link from "next/link";
import men1 from "../../public/images/men1.jpeg"
import men2 from "../../public/images/men2.jpeg"
import women1 from "../../public/images/women1.jpeg"
import women2 from "../../public/images/women-2.jpeg"


const Categories = () => {
  return (
    <div className=" mb-[90px] mt-[90px]">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-myBlack1">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/men"}>
            <Image
              src={men1}
              alt={"MEN"}
              width={350}
              height={350}
              className="rounded-xl duration-500 hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myOrange/70 text-center text-myWhite w-full">
              <h1>Men Watches</h1>
            </div>
            <div className="block lg:hidden absolute  duration-500 bottom-5 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myOrange/70 text-center text-myWhite w-full">
              <h1>Men Watches</h1>
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/women"}>
            <Image
              src={women1}
              alt={"WOMEN"}
              width={350}
              height={350}
              className="rounded-xl duration-500 hover:scale-125"
            />
            <div className=" hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myOrange/70 text-center text-myWhite w-full">
              <h1>Women Watches</h1>
            </div>
            <div className="block lg:hidden absolute  duration-500 bottom-5 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myOrange/70 text-center text-myWhite w-full">
              <h1>Men Watches</h1>
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/men"}>
            <Image
              src={men2}
              alt={"MEN"}
              width={350}
              height={350}
              className="rounded-xl duration-500 hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myOrange/70 text-center text-myWhite w-full">
              <h1>Men Watches</h1>
            </div>
            <div className="block lg:hidden absolute  duration-500 bottom-5 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myOrange/70 text-center text-myWhite w-full">
              <h1>Women Watches</h1>
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/women"}>
            <Image
              src={women2}
              alt={"WOMEN"}
              width={350}
              height={350}
              className="rounded-xl duration-500 hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myOrange/70 text-center text-myWhite w-full">
              <h1>Women Watches</h1>
            </div>
            <div className="block lg:hidden absolute  duration-500 bottom-5 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myOrange/70 text-center text-myWhite w-full">
              <h1>Women Watches</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;

"use client";

import React from "react";
import BestSellingCard from "./bestSellingCart";
import { useAppSelector } from "@/app/store/hook";

const BestSelling = () => {
  const product = useAppSelector((state) => state.product);
  const bestSell = product.slice(0, 3);
  return (
    <div className=" mb-[90px] mt-[90px]">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-myBlack1">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* //start */}
      <div className="flex flex-col  items-center lg:flex lg:flex-row  lg:flex-wrap lg:justify-center gap-5">
        {bestSell.map((items: any, index) => (
          <BestSellingCard
            key={index}
            src={items.image[0]}
            alt={items.alt}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;

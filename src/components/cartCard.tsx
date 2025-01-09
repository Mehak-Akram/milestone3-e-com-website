"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaHeart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { addCart, delItem, subtarctCart } from "@/app/store/features/cart";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((items, i) => (
          <div key={i} className="flex p-10 px-10 py-3">
            <Image
              src={items.image}
              alt={items.title}
              width={80}
              height={80}
              className="w-[120px] h-[120px]"
            />
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myBlack1">
                  {items.title}
                </h2>
                <p className="mt-2 text-sm text-myBlack2/80 leading-none line-clamp-1 font-semibold">
                  size:&nbsp;<span>{items.size}</span>
                </p>
                <p className="mt-2 text-sm text-myBlack2/80 leading-none line-clamp-1 font-semibold">
                  color:&nbsp;
                  <span>
                    <button
                      className="border-2 border-gray-300 rounded-full mr-1 w-3 h-3 focus:outline-none active:border-none focus:border-none"
                      style={{ backgroundColor: items.color }}
                    />
                  </span>
                </p>
                <div className="mt-2 flex items-center">
                  <Button
                    onClick={() => dispatch(subtarctCart(items))}
                    className="group group-hover:bg-myWhite bg-myBlack1 text-myWhite hover:text-myBlack1 w-fit h-fit rounded-lg text-xs  duration-300"
                  >
                    <FaMinus className="h-2 w-2 group-hover:text-myBlack1" />
                  </Button>
                  <div className="mx-2 scroll-m-2 text-sm font-semibold tracking-tight text-myBlack2/80">
                    {items.qty}
                  </div>
                  <Button
                    onClick={() => dispatch(addCart(items))}
                    className="group group-hover:bg-myWhite bg-myBlack1 text-myWhite hover:text-myBlack1 w-fit h-fit rounded-lg text-xs  duration-300"
                  >
                    <FaPlus className="h-2 w-2 group-hover:text-myBlack1" />
                  </Button>
                </div>
                <div className=" lg:hidden flex flex-col mt-2  gap-5">
                  <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlack1">
                    <span>Price:&nbsp;</span>$
                    {items.discount > 0
                      ? items.price -
                        ((items.price * items.discount) / 100) * items.qty
                      : items.price * items.qty}
                  </h3>
                  <FaTrash
                    onClick={() => dispatch(delItem(items.uuid))}
                    className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-end gap-5">
              <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlack1">
                <span>Price:&nbsp;</span>$
                {items.discount > 0
                  ? items.price -
                    ((items.price * items.discount) / 100) * items.qty
                  : items.price * items.qty}
              </h3>
              <FaTrash
                onClick={() => dispatch(delItem(items.uuid))}
                className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;

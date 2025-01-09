"use client";

import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/hook";

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const total = cartArray.reduce((total, arr) => {
    return total + (arr.price - (arr.price * arr.discount) / 100) * arr.qty;
  }, 0);
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 ">
      <div className="col-span-2">
        <CartCard />
      </div>
      <div className="bg-myBlack1/5 p-5 rounded-xl shadow-md">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlack1">
          Order Summary
        </h2>
        <div className="divider mt-0 mb-1"></div>
        <div className="text-myBlack2 text-sm font-medium tracking-tight">
          <div className="flex items-center justify-between capitalize">
            <h2>sub total</h2>
            <h2>${total}</h2>
          </div>
          <div className="flex items-center justify-between capitalize">
            <h2>delivery charges</h2>
            <h2>TBD</h2>
          </div>
          <div className="flex items-center justify-between capitalize">
            <h2>sales tax</h2>
            <h2>TBD</h2>
          </div>
        </div>
        <div className="divider mt-0 mb-1"></div>
        <div className="flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-myBlack1">
          <h2>estimated total</h2>
          <h2>${total}</h2>
        </div>
        <div className="divider mt-0 mb-1"></div>
        <div className="flex items-center justify-center w-full">
          <Button className="uppercase rounded-xl bg-myBlack1 hover:bg-transparent duration-300 text-myWhite hover:text-myBlack1 scroll-m-20 text-xs hover:shadow-md font-semibold tracking-tight">
            Proceed to checkout
          </Button>
        </div>
        <div className="divider mt-0 mb-1"></div>
        <p className="text-xs font-semibold tracking-tight text-myBlack1 w-[97%] text-center italic capitalize">
          {`*delivery charges and sells tax will be calculated in the checkout page`}{" "}
        </p>
      </div>
    </div>
  );
};

export default CartPage;

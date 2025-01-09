"use client";

import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";

const PopOver = ({ slug }: { slug: string }) => {
  const dispatchs = useAppDispatch();

  const product = useAppSelector((state) => state.product).find(
    (val) => val.slug == slug
  );
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image[0],
    slug: product?.slug,
    price: product?.price,
    discount: product?.discount,
    color: product?.color[0],
    category: product?.category,
    size: product?.size[0],
    qty: product?.qty,
  });
  const notify = () =>
    toast.info("Product Added successfuly", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group bg-myBlack1 hover:bg-transparent text-myWhite hover:text-myBlack1 scroll-m-20  font-semibold tracking-tight text-sm rounded-xl absolute bottom-2 right-2">
            <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="flex items-center">
            <span className="mr-3 text-myBlack1 font-semibold">Size</span>
            <label className="form-control w-full max-w-xs">
              <select
                onChange={(e) =>
                  setCartItem({ ...cartItem, size: e.target.value })
                }
                className="select select-bordered border-myblue"
              >
                <option disabled defaultValue={"select size"}>
                  Select size
                </option>
                {product?.size.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </label>
          </div>
          {/* color */}
          <div className="flex mt-5">
            <span className="mr-3 text-myBlack1 font-semibold">Color</span>
            {product?.color.map((item, i) => (
              <button
                key={i}
                onClick={() => setCartItem({ ...cartItem, color: item })}
                className="border-2 border-gray-300 rounded-full mr-1 w-6 h-6 focus:outline-none active:border-black focus:border-black"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          <br />
          {/* crt */}

          <div className="w-fit" onClick={notify}>
            <Button
              onClick={() => dispatchs(addToCart(cartItem))}
              className="group bg-myBlack1 mt-5 w-full  hover:bg-transparent text-myWhite hover:text-myBlack1 scroll-m-20  font-semibold tracking-tight text-sm rounded-xl "
            >
              <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange" />
              Add to Cart
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default PopOver;

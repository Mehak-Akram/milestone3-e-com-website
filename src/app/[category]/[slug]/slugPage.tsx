"use client";

import SlugComponents from "@/components/slugComponents";
import { Button } from "@/components/ui/button";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { useState } from "react";
import AddToCartToast from "@/components/addToCartToast";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.product);
  const slug = product.filter((value: { slug: string; }) => value.slug === params.slug);
  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image[0],
    slug: slug[0].slug,
    price: slug[0].price,
    discount: slug[0].discount,
    color: slug[0].color[0],
    category: slug[0].category,
    size: slug[0].size[0],
    qty: slug[0].qty,
  });

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <SlugComponents image={slug[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm mt-3 scroll-m-20 font-semibold text-myBlack2 tracking-widest uppercase">
              {slug[0].category}
            </h2>

            <h1 className="mt-3 scroll-m-20 text-3xl font-semibold tracking-tight text-myBlack1 mb-1 capitalize">
              {slug[0].title}
            </h1>
            <div className="mt-3 rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
            </div>

            <p className="leading-relaxed scroll-m-20 text-base font-normal tracking-tight text-myBlack2 mt-3">
              {slug[0].description}
            </p>
            <div className="flex mt-6 items-center mb-5">
              <div className="flex">
                <span className="mr-3 text-myBlack1 font-semibold">Color</span>
                {slug[0].color.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setCartItem({ ...cartItem, color: item })}
                    className="border-2 border-gray-300 rounded-full mr-1 w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>
              <div className="flex ml-6 items-center">
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
                    {slug[0].size.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-myBlack1 font-semibold">Quantity</span>
              <Button
                onClick={() =>
                  setCartItem({
                    ...cartItem,
                    qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                  })
                }
                className="group bg-myBlack1 hover:bg-transparent text-myWhite hover:text-myBlack1 scroll-m-20  font-semibold tracking-tight text-sm rounded-xl h-fit w-fit"
              >
                <FaMinus className="mr-2 h-4 w-4 group-hover:text-myOrange" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                {cartItem.qty}
              </div>
              <Button
                onClick={() =>
                  setCartItem({ ...cartItem, qty: ++cartItem.qty })
                }
                className="group bg-myBlack1 hover:bg-transparent text-myWhite hover:text-myBlack1 scroll-m-20  font-semibold tracking-tight text-sm rounded-xl h-fit w-fit"
              >
                <FaPlus className="mr-2 h-4 w-4 group-hover:text-myOrange" />
                Plus
              </Button>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <div>
                <span
                  className={`title-font font-medium text-2xl text-myBlack1
               ${
                 cartItem.discount > 0 &&
                 "line-through decoration-2 decoration-myOrange/70"
               }`}
                >
                  ${cartItem.price}
                </span>
                {cartItem.discount > 0 && (
                  <span className="ml-3 title-font font-medium text-2xl text-myBlack1">
                    $
                    {(cartItem.price -
                      (cartItem.price * cartItem.discount) / 100) *
                      cartItem.qty}
                  </span>
                )}
              </div>

              <AddToCartToast cartItem={cartItem} />
            </div>
            <Button className="w-full mt-2 group bg-myBlack1 hover:bg-transparent text-myWhite hover:text-myBlack1 scroll-m-20  font-semibold tracking-tight text-sm rounded-xl">
              <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;

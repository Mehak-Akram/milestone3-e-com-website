import { addToCart } from "@/app/store/features/cart";
import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "@/app/store/hook";

const AddToCartToast = ({ cartItem }: any) => {
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
  const dispatchs = useAppDispatch();

  return (
    <>
      <div className="w-fit" onClick={() => dispatchs(addToCart(cartItem))}>
        <Button
          onClick={notify}
          className="group bg-myBlack1 hover:bg-transparent text-myWhite hover:text-myBlack1 scroll-m-20  font-semibold tracking-tight text-sm rounded-xl"
        >
          <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange" />
          Add to Cart
        </Button>
      </div>
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

export default AddToCartToast;

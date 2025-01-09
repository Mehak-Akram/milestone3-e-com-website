import React from "react";
import Image from "next/image";
import van from "../../public/images/van.jpeg"
import money from "../../public/images/money.jpeg"
import customer from "../../public/images/customer.jpeg"


const Services = () => {
  return (
    <div>
      <section className=" body-font mb-[90px] mt-[90px]">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center mb-10">
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-myBlack1">
              Our Services
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image
                  src={van}
                  alt={"van"}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-grow">
                <h2 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl text-myOrange mb-3">
                  Free Delivery
                </h2>
                <p className="scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight text-myBlack2">
                  Free delivery on order obove $1000.
                </p>
              </div>
            </div>
            <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image
                  src={customer}
                  alt={"customer-service"}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-grow">
                <h2 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl text-myOrange mb-3">
                  24/7 Customer Service
                </h2>
                <p className="scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight text-myBlack2">
                  For Queries and Question feel free to contact.
                </p>
              </div>
            </div>
            <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image
                  src={money}
                  alt={"money back"}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-grow">
                <h2 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl text-myOrange mb-3">
                  Money Back Guarantee
                </h2>
                <p className="scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight text-myBlack2">
                  Get money back Guarantee on Damage paroducts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

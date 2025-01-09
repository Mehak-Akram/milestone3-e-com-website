import Image from "next/image";
import { Button } from "./ui/button";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import PopOver from "./popover";
const BestSellingCard = ({
  src,
  title,
  description,
  price,
  category,
  slug,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}) => {
  return (
    <div className="">
      <div className="lg:max-w-[450px] lg:h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group  duration-500">
        {/* //img */}
        <Link href={`/${category}/${slug}`}>
          <div className="h-[23rem] block  rounded overflow-hidden">
            <Image src={src} alt={"watch"} width={400} height={400} />
          </div>
          <div className="">
            {title && (
              <h2 className="scroll-m-20  text-lg text-myBlack1 font-semibold tracking-tight first:mt-0">
                {title}
              </h2>
            )}
            {description && (
              <p className="scroll-m-20  font-semibold tracking-tight text-sm text-myblue mt-2 capitalize line-clamp-1">
                {description}
              </p>
            )}
            {price && (
              <div className="flex gap-3">
                <p
                  className={`italic scroll-m-20  font-semibold tracking-tight text-xl text-myBlack1 mt-2 ${
                    discount > 0 &&
                    "line-through decoration-2 decoration-myOrange/70"
                  }`}
                >
                  ${price}
                </p>
                {discount > 0 && (
                  <p className="italic scroll-m-20  font-semibold tracking-tight text-xl text-myOrange mt-2">
                    ${price - (price * discount) / 100}
                  </p>
                )}
              </div>
            )}
          </div>
        </Link>
        <div>
          <PopOver slug={slug} />

          <Button className="group bg-myBlack1 hover:bg-transparent text-myWhite hover:text-myBlack1 scroll-m-20  font-semibold tracking-tight text-sm rounded-xl absolute bottom-2 left-2">
            <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange" />
            Buy Now
          </Button>
          {discount > 0 && (
            <div className="scroll-m-20 text-xs font-semibold tracking-tight text-myWhite bg-green-700 absolute top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-bl-xl myDiscount">{`${discount}% off`}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellingCard;

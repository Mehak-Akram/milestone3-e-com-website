"use client";

import BestSellingCard from "@/components/bestSellingCart";
import { useAppSelector } from "../store/hook";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const product = useAppSelector((state) => state.product);
  const bestSell = product.filter((value) => value.category == params.category);
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-myBlack1 capitalize">
          {params.category}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items: any, index) => (
          <BestSellingCard
            key={index}
            src={items.image[0]}
            alt={items.title}
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

export default CategoryPage;

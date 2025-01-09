"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from "./bestSellingCart";

const FeaturedProduct = () => {
  const bestSell = [
    {
      src: "/images/red.jpeg",
      alt: "watch",
      title: "Women Watch",
      description: "WaterProof luxury Watch for Women",
      price: 380,
      category: "women",
      slug: "red-watch",
    },
    {
      src: "/images/skin.jpeg",
      alt: "watch",
      title: "Classic Watch",
      description:
        "Classical buisness liesure rose gold automatic Watch for Men",
      price: 450,
      category: "men",
      slug: "skin",
    },
    {
      src: "/images/women3.jpeg",
      alt: "watch",
      title: "Bracelet Watch",
      description:
        "Watch Women New Fashion Luxury Stainless Steel Wristwatch Bracelet",
      price: 760,
      category: "women",
      slug: "bracelet ",
    },
    {
      src: "/images/steel (1).jpeg",
      alt: "watch",
      title: "Silver Watch",
      description: "Silver steel luxury Watch for men",
      price: 250,
      category: "men",
      slug: "silver-watch",
    },
    {
      src: "/images/women4.jpeg",
      alt: "watch",
      title: "Gold Watch",
      description: "Classical luxury rose gold automatic Watch for women",
      price: 450,
      category: "women",
      slug: "gold",
    },
    {
      src: "/images/steel (2).jpeg",
      alt: "watch",
      title: "Luxury Watch",
      description: "Silver Automatic Watch for men",
      price: 300,
      category: "men",
      slug: "steel-watch ",
    },
    {
      src: "/images/women5.jpeg",
      alt: "watch",
      title: "Women Watch",
      description: "1pc Square Pointer Quartz Watch & 1pc Bracelet for women",
      price: 450,
      category: "women",
      slug: "green",
    },
    {
      src: "/images/black.jpeg",
      alt: "watch",
      title: "black Watch",
      description: "black classic analog watch",
      price: 300,
      category: "men",
      slug: "square-black ",
    },
  ];
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: true,

          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="mb-[90px] mt-[90px]">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-myBlack1 text-center capitalize">
          Featured Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <Slider {...settings}>
        {bestSell.map((items, index) => (
          <BestSellingCard
            key={index}
            src={items.src}
            alt={items.alt}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={0}
          />
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProduct;

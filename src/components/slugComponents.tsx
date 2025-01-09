"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

const SlugComponents = ({
  image,
}: string | string[] | StaticImageData | any) => {
  const [path, setPath] = useState("");
  return (
    <div>
      <Image
        src={path ? path : image[0]}
        alt={"ecommerce"}
        width={400}
        height={400}
      />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        {image.map((items: string, i: number) => (
          <div key={i} className="w-16 h-16 cursor-pointer rounded-xl">
            <Image
              src={items}
              alt={"ecommerce"}
              width={60}
              height={60}
              onClick={() => setPath(items)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlugComponents;

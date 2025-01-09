import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="hero bg-myWhite min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <Image
            src={require("../../../public/images/women-2.jpeg")}
            className="max-w-sm rounded-xl shadow-2xl"
            alt={"watch"}
          />
          <div>
            <h1 className="text-5xl font-bold text-myOrange italic">
              About <span className="text-myBlack1">Us</span>
            </h1>
            <p className="py-6 text-myBlack2 italic font-medium">
              At <span className="">TIMEVO</span>, we believe that a watch is
              more than just a timepiece – it’s a reflection of your style,
              personality, and the moments you cherish. Established with a
              passion for precision and craftsmanship, our store is dedicated to
              curating a diverse collection of watches for both men and women.
              <br />
              <br />
              Our selection features timeless classics, modern designs, and
              cutting-edge technology to suit every lifestyle and occasion.
              Whether you're seeking a sophisticated accessory for the office, a
              reliable companion for your adventures, or a statement piece for
              special events, we’ve got something that fits your story.
            </p>
            <button className="bg-myblue h-11 w-36 mt-11 text-myWhite rounded-xl hover:bg-myblue/80 italic">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

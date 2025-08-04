import React from "react";
import { assets } from "../assets/assets.js"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <div className="flex flex-col pt-24 pb-24 md:flex-row md:mt-24 justify-center w-full items-center gap-4">
      <div className="flex flex-col w-full items-center md:items-start gap-4 md:flex-col md:ml-24 lg:ml-46 xl:ml-68">
        <div className="text-white flex gap-4 mt-20 md:border md:bg-[#ffffff3a] md:p-3 md:px-6 md:rounded-full  items-center">
          <img src={assets.polygon} alt="polygon" />
          <span>New Arrival</span>
        </div>
        {/* Small Image Display */}
        <div className="md:hidden w-full h-24 mt-54 flex justify-center items-start">
          <img
            className="absolute top-[200px] left-1/2 transform -translate-x-1/2"
            src={assets.productHome}
            alt=""
          />
          <div className="md:hidden bg-white w-full h-24"></div>
        </div>
        <div className="text-white mt-6 text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-center md:text-start max-w-2xs xl:max-w-xs">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div className="flex flex-col mt-4 items-center md:flex-row">
          <button className="bg-white cursor-pointer p-4 rounded-full">
            SHOP NOW
          </button>
          <p className="underline cursor-pointer text-white mt-6 md:mt-0 md:ml-6 text-xs">
            Specifications
          </p>
        </div>
      </div>
      {/* Medium Display */}
      <div className="hidden md:flex bg-white w-full max-w-[1000px] rounded-tl-4xl mt-64 h-[124px] relative">
        <img
          className="md:absolute left-1/3 bottom-38 h-auto -top-14 transform -translate-x-1/2 -translate-y-1/2"
          src={assets.productHome}
          alt=""
        />
        <div className="bg-white absolute"></div>
      </div>
    </div>
  );
};

export default HeroSection;

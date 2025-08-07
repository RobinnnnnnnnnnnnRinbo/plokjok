import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const HeroSection = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="pt-18 text-white h-screen bg-black flex flex-col items-center gap-12"
    >
      <div className="border rounded-full px-8 p-2 mt-12">New Arrival</div>
      <div className="flex h-[250px] w-full items-end relative">
        <div className="absolute left-5 lg:left-9">
          <img src={assets.productHome} alt="" />
        </div>
        <div className="h-1/2 bg-white w-full text-white">h</div>
      </div>
      <p className="px-8 -mt-3 text-center max-w-[375px] text-3xl font-bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="flex flex-col gap-5">
        <Link to={"/detail"}>
          <button className="bg-white text-pm rounded-full p-3 px-6">
            Shop Now
          </button>
        </Link>
        <button className="underline italic">Specifications</button>
      </div>
    </div>
  );
});

export default HeroSection;

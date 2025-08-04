import React from "react";
import { assets } from "../assets/assets";

const Category = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="flex flex-col md:flex-row items-center justify-center bg-white mt-24"
    >
      <div className="text-center md:text-start md:items-start md:ml-4 flex flex-col p-8 items-center">
        <p className="">Shop by</p>
        <p className="font-bold text-xl">Categories</p>
        <p className="mt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 place-items-center mb-18 md:flex md:mt-18 md:pr-12">
        <div className="bg-[#ededed] rounded-xl p-18 h-[175px] w-[150px] flex flex-col justify-center items-center md:max-w-[70px]">
          <img
            className="min-h-[120px] min-w-[100px] hover:min-w-[120px] cursor-pointer duration-300 max-w-full max-h-full object-contain"
            src={assets.mousecateg}
            alt=""
          />
          <span className="mb-4">Mice</span>
        </div>
        <div className="bg-[#ededed] rounded-xl p-18 h-[175px] w-[150px] md:w-[70px] flex flex-col justify-center items-center md:max-w-[70px]">
          <img
            className="min-h-[120px] min-w-[80px] hover:min-w-[100px] cursor-pointer duration-300 max-w-full max-h-full object-contain"
            src={assets.keyboardcateg}
            alt=""
          />
          <span className="mb-4">Keyboards</span>
        </div>
        <div className="bg-[#ededed] rounded-xl p-18 h-[175px] w-[150px] md:w-[70px] flex flex-col justify-center items-center md:max-w-[70px]">
          <img
            className="min-h-[120px] min-w-[80px] hover:min-w-[100px] cursor-pointer duration-300 max-w-full max-h-full object-contain"
            src={assets.controllercateg}
            alt=""
          />
          <span className="mb-4">Controllers</span>
        </div>
        <div className="bg-[#ededed] rounded-xl p-18 h-[175px] w-[150px] md:w-[70px] flex flex-col justify-center items-center md:max-w-[70px]">
          <img
            className="min-h-[120px] min-w-[80px] hover:min-w-[100px] cursor-pointer duration-300 max-w-full max-h-full object-contain"
            src={assets.nukecateg}
            alt=""
          />
          <span className="mb-4">Nukes</span>
        </div>
      </div>
    </div>
  );
});

export default Category;

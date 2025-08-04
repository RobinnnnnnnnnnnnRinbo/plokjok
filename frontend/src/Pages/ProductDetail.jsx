import React from "react";
import { assets } from "../assets/assets";
import ColorSelector from "../Components/ProductDetail/ColorOption";
import NavBar from "../Components/NavBar";

const ProductDetail = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-between">
      <NavBar />
      <div className="h-3/10 bg-pm mx-4"></div>
      <div className="h-1/10 flex gap-3 px-4">
        <div className="bg-green-200 h-full w-1/4"></div>
        <div className="bg-green-200 h-full w-1/4"></div>
        <div className="bg-green-200 h-full w-1/4"></div>
        <div className="bg-green-200 h-full w-1/4"></div>
      </div>
      <div className="flex justify-between items-center px-4">
        <span className="text-lg">Product Name</span>
        <span className="font-semibold text-lg">$923.23</span>
      </div>
      <div className="flex items-center gap-2 px-4">
        <img className="h-6" src={assets.star} alt="" />
        <span>4.5/5</span>
        <span className="italic text-gray-500 text-xs underline">
          168 - Reviews
        </span>
      </div>
      <div className="flex px-4">
        <ColorSelector />
      </div>
      <div className="flex gap-2 mb-18 px-4">
        <button className="border w-5/8 p-3 rounded-xl">ADD TO CART</button>
        <button className="bg-pm w-full text-white rounded-xl active:bg-white">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

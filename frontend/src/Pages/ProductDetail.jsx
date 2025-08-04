import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import ColorSelector from "../Components/ProductDetail/ColorOption";
import NavBar from "../Components/NavBar";

const ProductDetail = ({ handleAddToCart }) => {
  return (
    <div className="bg-white h-screen flex flex-col gap-8">
      <Link to={"/"}>
        <button className="self-start px-4 flex mt-6 gap-2 items-center">
          <img className="h-4" src={assets.back} alt="" />
          Go back
        </button>
      </Link>

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

      <div className="fixed bottom-0 left-0 h-16 z-50 w-full bg-white ">
        <div className="flex mx-4 gap-3 justify-between">
          <Link to={"/"}>
            <button
              onClick={handleAddToCart}
              className="p-3 border rounded-lg text-sm"
            >
              ADD TO CART
            </button>
          </Link>
          <button className="w-3/5 text-sm border rounded-lg bg-pm text-white">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

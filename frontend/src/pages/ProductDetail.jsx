import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import ColorSelector from "../components/product-detail/ColorOption";
import NavBar from "../components/NavBar";
import { useSelectedProduct } from "../hooks/useSelectedProduct";

const ProductDetail = ({ handleAddToCart, cartCount, selectedProduct }) => {
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(value) {
    if (value === "add") setQuantity((prev) => prev + 1);
    if (value === "minus") setQuantity((prev) => prev - 1);
  }

  return (
    <div className="bg-white h-screen flex flex-col gap-8">
      <NavBar cartCount={cartCount} />
      <div className="flex flex-col h-full gap-8 mt-18">
        <div className="h-[40vh] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center mx-4">
          <img
            className="max-w-full max-h-full object-contain"
            src={selectedProduct?.img_url}
            alt={selectedProduct?.name || "Product image"}
          />
        </div>
        <div className="h-1/10 -mt-5 flex gap-3 px-4">
          <div className="bg-gray-200 rounded h-full w-1/4 flex items-center justify-center">
            <img
              className="max-w-full max-h-full object-contain"
              src={selectedProduct?.img_url}
              alt={selectedProduct?.name || "Product image"}
            />
          </div>
          <div className="bg-gray-200 rounded h-full w-1/4 flex items-center justify-center">
            <img
              className="max-w-full max-h-full object-contain"
              src={selectedProduct?.img_url}
              alt={selectedProduct?.name || "Product image"}
            />
          </div>
          <div className="bg-gray-200 rounded h-full w-1/4 flex items-center justify-center">
            <img
              className="max-w-full max-h-full object-contain"
              src={selectedProduct?.img_url}
              alt={selectedProduct?.name || "Product image"}
            />
          </div>
          <div className="bg-gray-200 rounded h-full w-1/4 flex items-center justify-center">
            <img
              className="max-w-full max-h-full object-contain"
              src={selectedProduct?.img_url}
              alt={selectedProduct?.name || "Product image"}
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-4">
          <div className="">
            <span className="text-lg">{selectedProduct?.name}</span>
            <div className="flex items-center gap-2">
              <img className="h-4" src={assets.star} alt="" />
              <span className="text-xs">4.5/5</span>
              <span className="italic text-gray-500 text-[10px] underline">
                168 - Reviews
              </span>
            </div>
          </div>
          <span className="font-semibold text-lg">
            ${selectedProduct?.price}
          </span>
        </div>
        <div className="w-full ">
          <span className="px-4">Description:</span>
          <p className="text-sm px-8 italic text-gray-500">
            {selectedProduct?.description || "No description available."}
          </p>
        </div>

        <div className="flex px-4">
          <ColorSelector />
        </div>
        <div className="fixed bottom-4 left-0 h-16 z-50 w-full bg-white flex justify-between items-center px-4">
          <div className="w-1/2 flex items-center justify-evenly">
            <button onClick={() => handleQuantity("minus")}>
              <img className="h-8" src={assets.minus} alt="" />
            </button>
            <input
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={Number(quantity)}
              className="w-[25px] text-center outline-none"
              type="text"
            />

            <button onClick={() => handleQuantity("add")}>
              <img className="h-8" src={assets.plus} alt="" />
            </button>
          </div>
          <div className="flex gap-3 justify-evenly items-center">
            <Link to={"/"}>
              <button
                onClick={() => handleAddToCart(quantity)}
                className="border text-sm flex items-center justify-center"
              >
                <img className="h-12 p-2" src={assets.cartM} alt="" />
              </button>
            </Link>
            <button className="text-sm p-4 border bg-pm text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


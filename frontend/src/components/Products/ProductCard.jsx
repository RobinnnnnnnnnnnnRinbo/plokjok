import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { assets } from "../../assets/assets";
import ProductPrice from "./ProductPrice";

const ProductCard = ({
  name,
  price,
  img,
  item,
  handleAddToCart,
  setSelectedProduct,
}) => {
  function handleSelectProduct() {
    setSelectedProduct(item);
  }

  return (
    <div className="card bg-gray-100 w-48 h-80 shadow-sm flex flex-col">
      <Link to={"/detail"} onClick={handleSelectProduct}>
        <figure className="px-4 pt-4 flex-shrink-0 h-40">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl w-full h-full object-cover"
          />
        </figure>
      </Link>
      <div className="card-body items-center text-center flex-1 flex flex-col justify-between p-4">
        <div className="pt-10">
          <ProductPrice name={name} price={price} />
        </div>
        <div className="card-actions mt-auto w-full">
          <button
            onClick={() => handleAddToCart(1)}
            className="bg-pm text-white py-2 px-4 rounded w-full flex items-center justify-center gap-2"
          >
            <img className="h-6" src={assets.cartPlus} alt="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

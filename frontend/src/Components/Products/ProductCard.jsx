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
 
  setSelectedProduct,
}) => {
  function handleSelectProduct() {
    setSelectedProduct(item);
  }
  return (
    <div className="bg-white flex max-h-124">
      <div className="flex-col">
        <div className="bg-gradient-to-t from-[#8686B0] rounded-2xl min-h-60 max-w-40 flex flex-col justify-evenly">
          <Link to={"/detail"}>
            <div onClick={handleSelectProduct}>
              <img className="h-auto w-full" src={img} alt="" />
            </div>
          </Link>
          <div className="mx-2 -mb-4">
            <button className="bg-pm w-full p-2 flex justify-center rounded-xl">
              <img className="h-6" src={assets.cartPlus} alt="" />
            </button>
          </div>
        </div>
        <ProductPrice name={name} price={price} />
      </div>
    </div>
  );
};

export default ProductCard;

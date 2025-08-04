import React from "react";
import axois from "axios";

const ProductPrice = ({ name, price }) => {
  return (
    <div className="flex flex-col text-center">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default ProductPrice;

import React from "react";
import ProductGrid from "./Products/ProductGrid";

const ProductList = ({ onAddToCart }) => {
  return (
    <div>
      <div className="h-16 bg-[#040025] text-white text-sm flex items-center font-bold justify-center">
        Products
      </div>
      <ProductGrid onAddToCart={onAddToCart} />
    </div>
  );
};

export default ProductList;

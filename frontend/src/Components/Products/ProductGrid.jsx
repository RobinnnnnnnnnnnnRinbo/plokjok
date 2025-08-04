import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ onAddToCart, products }) => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-2 h-screen overflow-y-auto">
        {products.map((item, index) => (
          <ProductCard
            addToCart={onAddToCart}
            key={index}
            name={item.name}
            price={item.price}
            img={item.img_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({
  handleAddToCart,
  products,
  loading,
  error,
  setSelectedProduct,
}) => {
  return (
    <div className="bg-white">
      <div className="flex flex-wrap h-screen justify-center gap-6 overflow-y-auto">
        {/* FrontEnd  */}
        {loading && (
          <span className="loading loading-bars loading-xl">Loading...</span>
        )}
        {error && <span>{error}</span>}
        {products.map((item, index) => (
          <ProductCard
            item={item}
            setSelectedProduct={setSelectedProduct}
            handleAddToCart={handleAddToCart}
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

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
        {products.map((product, index) => (
          <ProductCard
            item={product}
            setSelectedProduct={setSelectedProduct}
            key={index}
            name={product.name}
            price={product.price}
            img={product.img_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

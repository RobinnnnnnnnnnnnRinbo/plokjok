import React, { useState } from "react";
import ProductGrid from "./Products/ProductGrid";
import FilterOption from "./Products/FilterOption";

const ProductList = React.forwardRef(({ onAddToCart }, ref) => {
  const [sortBy, setSortBy] = useState("name");

  let sortedProducts;

  if (sortBy === "name")
    sortedProducts = products
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));

  if (sortBy === "p-l-h")
    sortedProducts = products.sort((a, b) => a.price - b.price);

  if (sortBy === "p-h-l")
    sortedProducts = products.sort((a, b) => b.price - a.price);

  return (
    <div ref={ref}>
      <FilterOption sortBy={sortBy} setSortBy={setSortBy} />
      <ProductGrid onAddToCart={onAddToCart} products={sortedProducts} />
    </div>
  );
});

export default ProductList;

import React, { use, useEffect, useState } from "react";
import ProductGrid from "./Products/ProductGrid";
import FilterOption from "./Products/FilterOption";
import axios from "axios";

const ProductList = React.forwardRef(
  (
    {
      handleAddToCart,
      products,
      fetchProducts,
      loading,
      selectedProduct,
      setSelectedProduct,
    },
    ref
  ) => {
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
        <ProductGrid
          loading={loading}
          handleAddToCart={handleAddToCart}
          products={sortedProducts}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </div>
    );
  }
);

export default ProductList;

import React, { useEffect, useState } from "react";
import ProductGrid from "./Products/ProductGrid";
import FilterOption from "./Products/FilterOption";
import { useProductsStore } from "../stores/useProductsStore";

const ProductList = React.forwardRef(
  ({ handleAddToCart, setSelectedProduct }, ref) => {
    const { products, loading, error, fetchProducts } = useProductsStore();
    const [sortBy, setSortBy] = useState("default");

    useEffect(() => {
      fetchProducts();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    let sortedProducts = [...products];

    if (sortBy === "default") sortedProducts = products;

    if (sortBy === "name")
      sortedProducts = products
        .slice()
        .sort((a, b) => a.product_name.localeCompare(b.product_name));

    if (sortBy === "p-l-h")
      sortedProducts = products.sort((a, b) => a.price - b.price);

    if (sortBy === "p-h-l")
      sortedProducts = products.sort((a, b) => b.price - a.price);

    return (
      <div ref={ref}>
        <FilterOption sortBy={sortBy} setSortBy={setSortBy} />
        <ProductGrid
          loading={loading}
          error={error}
          setSelectedProduct={setSelectedProduct}
          handleAddToCart={handleAddToCart}
          products={sortedProducts}
        />
      </div>
    );
  }
);

export default ProductList;

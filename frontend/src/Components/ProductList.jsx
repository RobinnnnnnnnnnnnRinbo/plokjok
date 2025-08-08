import React, { useEffect, useState } from "react";
import ProductGrid from "./Products/ProductGrid";
import FilterOption from "./Products/FilterOption";
import axios from "axios";

const ProductList = React.forwardRef(({ onAddToCart }, ref) => {
  const [sortBy, setSortBy] = useState("name");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(products);

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

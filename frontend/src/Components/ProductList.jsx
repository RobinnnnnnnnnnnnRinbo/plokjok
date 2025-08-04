import React, { useState } from "react";
import ProductGrid from "./Products/ProductGrid";
import FilterOption from "./Products/FilterOption";

const ProductList = React.forwardRef(({ onAddToCart }, ref) => {
  const [sortBy, setSortBy] = useState("name");
  const products = [
    {
      id: 1,
      name: "AHeadset",
      price: 19.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "BHeadset",
      price: 29.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "CHeadset",
      price: 39.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "DHeadset",
      price: 49.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "EHeadset",
      price: 59.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "FHeadset",
      price: 69.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "GHeadset",
      price: 79.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
  ];

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
    <div>
      <div
        ref={ref}
        className="h-16 bg-[#040025] text-white text-sm flex items-center font-bold justify-center"
      >
        Products
      </div>
      <FilterOption sortBy={sortBy} setSortBy={setSortBy} />
      <ProductGrid onAddToCart={onAddToCart} products={sortedProducts} />
    </div>
  );
});

export default ProductList;

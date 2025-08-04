import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Headset",
      price: 29.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "Headset",
      price: 29.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "Headset",
      price: 29.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "Headset",
      price: 29.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "Headset",
      price: 29.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "Headset",
      price: 29.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
    {
      id: 1,
      name: "Headset",
      price: 29.99,
      img_url:
        "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
    },
  ];
  return (
    <div className="bg-white">
      <div className="grid grid-cols-2 h-screen overflow-y-auto">
        {products.map((item, index) => (
          <ProductCard
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

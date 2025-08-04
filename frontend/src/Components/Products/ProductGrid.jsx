import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const URL = "http://127.0.0.1:3000/api/products";

const ProductGrid = () => {
  const [products, setProducts] = useState(null); // Stores the fetched data
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(null); // Stores any error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setProducts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []);

  console.log("Products data:", products);
  console.log("Products length:", products);
  console.log("Loading:", loading);
  console.log("Error:", error);

  return (
    <div className="bg-white">
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error loading products: {error}</p>
      ) : products === 0 ? (
        <p>No products found</p>
      ) : (
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
      )}
    </div>
  );
};

export default ProductGrid;

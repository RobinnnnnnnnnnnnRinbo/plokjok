import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import NavBar from "../Components/NavBar";

const ProductInfo = () => {
  const [products, setProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      console.log(
        "Fetching products from:",
        "http://127.0.0.1:3000/api/products"
      );

      const response = await fetch("http://127.0.0.1:3000/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors", // Explicitly set CORS mode
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received data:", data);
      setProducts(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  function handleClickColor(color) {
    switch (color) {
      case "blue":
        return "bg-blue-500 text-white border-none";
      case "red":
        return "bg-red-500 text-white border-none";
      case "black":
        return "bg-black text-white border-none";
      default:
        return "";
    }
  }

  return (
    <div className="bg-white">
      {console.log(products)}
      <div>
        <NavBar className="p-0 m-0" />
      </div>
      <div className="bg-[#ededed] m-4 flex items-center justify-center rounded-xl">
        {products[0] && (
          <div>
            <img
              className="p-6 py-16"
              src={products[0].img_url}
              alt={products[0].name || ""}
            />
            {/* Add more fields as needed */}
          </div>
        )}
      </div>

      <div className="flex my-4 items-center justify-center gap-3">
        <div className="bg-[#ededed] flex justify-center items-center h-24 w-24 rounded-lg">
          A
        </div>
        <div className="bg-[#ededed] flex justify-center items-center h-24 w-24 rounded-lg">
          A
        </div>
        <div className="bg-[#ededed] flex justify-center items-center h-24 w-24 rounded-lg">
          A
        </div>
        <div className="bg-[#ededed] flex justify-center items-center h-24 w-24 rounded-lg"></div>
      </div>
      <div>
        {products[0] && (
          <div className="flex justify-between mx-8 text-xl font-bold">
            <span>{products[3].name}</span>
            <span>${products[3].price}</span>
          </div>
        )}
      </div>
      <div className="m-2 pl-6 flex items-center gap-3">
        <div className="rating rating-xs">
          <div
            className="bg-[#040025] mask mask-star "
            aria-label="1 star"
          ></div>
          <div
            className="bg-[#040025] mask mask-star"
            aria-label="2 star"
          ></div>
          <div
            className="bg-[#040025] mask mask-star"
            aria-label="3 star"
          ></div>
          <div
            className="bg-[#040025] mask mask-star"
            aria-label="4 star"
            aria-current="true"
          ></div>
          <div
            className="bg-[#040025] mask mask-star"
            aria-label="5 star"
          ></div>
        </div>
        <span>4.5/5</span>
        <span className="text-xs italic opacity-50">168 - Reviews</span>
      </div>
      <div className="m-2 pb-2 pl-6 flex items-center mt-6">
        <div>Colors:</div>
        <div className="flex">
          <div
            onClick={() => setSelectedColor("red")}
            className={`ml-4 text-red cursor-pointer w-16 h-7 border rounded-full text-xs flex items-center justify-center border-red-400 ${handleClickColor(
              selectedColor === "red" ? "red" : ""
            )}`}
          >
            Red
          </div>
          <div
            onClick={() => setSelectedColor("blue")}
            className={`ml-4 cursor-pointer w-16 border rounded-full text-xs flex items-center justify-center border-blue-400 ${handleClickColor(
              selectedColor === "blue" ? "blue" : ""
            )}`}
          >
            Blue
          </div>
          <div
            onClick={() => setSelectedColor("black")}
            className={`ml-4 cursor-pointer w-16 border rounded-full text-xs flex items-center justify-center border-gray-400 ${handleClickColor(
              selectedColor === "black" ? "black" : ""
            )}`}
          >
            Black
          </div>
        </div>
      </div>
      <div className="flex p-4 my-8 py-8">
        <div className="border h-18 w-2/3 flex items-center justify-center mx-2 rounded-xl">
          ADD TO CART
        </div>
        <div className="bg-[#040025] text-white w-full mx-2  flex items-center justify-center rounded-xl">
          BUY NOW
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

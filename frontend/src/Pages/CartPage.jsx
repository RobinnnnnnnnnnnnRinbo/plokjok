import React from "react";
import NavBar from "../components/NavBar";

const CartPage = ({ cartCount, handleAddToCart, setAddToCart }) => {
  return (
    <div className="h-screen bg-gray-100">
      <NavBar cartCount={cartCount} />
      <div className="flex flex-col items-center justify-center h-full font-bold text-xl w-full max-w-md text-center">
        <span className="text-black text-sm">Your cart quantity:</span>
        <span className="text-black">{cartCount}</span>
      </div>
    </div>
  );
};

export default CartPage;

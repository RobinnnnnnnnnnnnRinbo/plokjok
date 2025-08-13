import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AnimatedList from "../components/cart-page/AnimatedList";
import { useCartStore } from "../hooks/useCartStore";

const CartPage = ({ cartCount, setAddToCart}) => {
  
  return (
    <div className="h-screen bg-gray-100">
      <NavBar cartCount={cartCount} />
      <div className="h-[70vh] bg-red-400 mt-20 flex">
        <AnimatedList
          items={items}
          onItemSelect={(item, index) => console.log(item, index)}
          showGradients={false}
          enableArrowNavigation={true}
          displayScrollbar={false}
        />
      </div>
      <div className="flex fixed bottom-0 left-0 right-0 justify-between items-center px-4 py-2 bg-white shadow-md">
        <span className="text-lg font-semibold">
          Total: $
          {items.map((item) => item.price).reduce((acc, curr) => acc + curr)}
        </span>
        <button
          onClick={() => setAddToCart(true)}
          className="bg-pm text-white py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

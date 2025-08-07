import React from "react";
import NavBar from "../Components/NavBar";

const CartPage = ({ cartCount, handleAddToCart, setAddToCart }) => {
  return (
    <div className="h-screen">
      <NavBar cartCount={cartCount} />
    </div>
  );
};

export default CartPage;

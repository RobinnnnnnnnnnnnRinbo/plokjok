import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { assets } from "../assets/assets.js";
import AnimatedList from "../components/cart-page/AnimatedList";
import { useProductsStore } from "../stores/useProductsStore";
import CartList from "../components/cart-page/CartList.jsx";

const CartPage = ({ setAddToCart }) => {
  const { cart, getTotalPrice, clearCart, getTotalItems } = useProductsStore();
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex justify-between items-center p-6">
        <Link to={"/"}>
          <button>
            <img className="h-7" src={assets.back_cart} alt="" />
          </button>
        </Link>
        <span>My Cart</span>
        <div className="relative">
          <div className="absolute h-5 w-5 flex items-center justify-center text-[11px] font-bold text-white rounded-full bg-red-500 -top-1 -right-1">
            {getTotalItems()}
          </div>
          <img type="button" className="h-7" src={assets.cartM} alt="" />
        </div>
      </div>
      <div className="flex justify-between px-6 mb-3">
        <div>
          <input type="checkbox" />
          <label htmlFor=""> Select All</label>
        </div>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => clearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="h-[70vh] flex flex-col overflow-y-scroll scrollbar-hide">
        {cart.map((i) => (
          <CartList
            key={i.id}
            name={i.product_name}
            price={i.price}
            quantity={i.quantity}
            img={i.img_url}
          />
        ))}
      </div>
      <div className="flex fixed bottom-0 left-0 right-0 justify-between items-center px-4 py-2 bg-white shadow-md">
        <span className="text-lg font-semibold">
          Total: ${getTotalPrice().toFixed(2)}
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

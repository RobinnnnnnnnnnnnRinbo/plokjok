import React from "react";
import { assets } from "../../assets/assets";

const CartList = ({ name, price, quantity, img }) => {
  return (
    <div className="flex h-34 bg-gray-300 mx-4 my-2 rounded-xl relative">
      <button>
        <img
          className="absolute top-4 right-4 h-7"
          src={assets.delete}
          alt=""
        />
      </button>
      <button>
        <img className="mx-3" src={assets.tick} alt="" />
      </button>
      <div className="flex bg-white w-full rounded-xl">
        <div>
          <img className="w-34 h-34 object-cover p-6" src={img} alt="" />
        </div>
        <div className="flex flex-col justify-between py-4">
          <h3>{name}</h3>
          <p className="text-gray-500">Color:</p>
          <p className="font-semibold">${price}</p>
        </div>
        <div className="flex items-end justify-end ml-auto m-4">
          <label htmlFor="">Quantity:</label>
          <input
            className="w-16 text-center bg-gray-100 rounded-md ml-2 outline-none"
            value={quantity}
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default CartList;

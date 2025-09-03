import React from "react";
import { assets } from "../../assets/assets";
import { useProductsStore } from "../../stores/useProductsStore";

const CartList = ({
  name,
  price,
  quantity,
  img,
  id,
  isChecked,
  onCheckboxChange,
}) => {
  const { selectCartProduct, log, removeFromCart, updateQuantity } =
    useProductsStore();

  const handleToggleSelect = () => {
    onCheckboxChange(!isChecked);
    selectCartProduct(id);
    log();
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 1;
    updateQuantity(id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <div
      className={`flex h-34 ${
        isChecked ? `bg-pm` : `bg-gray-300`
      } mx-4 my-2 rounded-xl relative`}
    >
      <button
        onClick={() => {
          handleRemove();
        }}
      >
        <img
          className="absolute top-4 right-4 h-7"
          src={assets.delete}
          alt=""
        />
      </button>
      <button onClick={handleToggleSelect}>
        <img
          className="mx-3"
          src={isChecked ? assets.white_tick : assets.tick}
          alt=""
        />
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
            defaultValue={quantity}
            onChange={handleQuantityChange}
            onBlur={handleQuantityChange}
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

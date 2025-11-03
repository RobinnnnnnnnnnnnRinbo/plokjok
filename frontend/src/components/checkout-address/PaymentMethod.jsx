import React from "react";

const PaymentMethod = ({
  name,
  img1,
  img2,
  isSelected,
  onChange,
}) => {
  return (
    <div className="bg-[#f2f2f2] w-[90%] h-14 px-4 rounded-lg mt-2 flex items-center justify-between gap-4">
      <div className="flex gap-4">
        <input
          type="radio"
          name="payment-method"
          id={name}
          checked={isSelected}
          onChange={onChange}
          className="cursor-pointer"
        />
        <label htmlFor={name} className="text-sm cursor-pointer">
          {name}
        </label>
      </div>
      <div className="flex gap-2">
        {img1 && (
          <img
            className="bg-white h-8 w-12 rounded-sm"
            src={img1}
            alt={`${name} payment option 1`}
          />
        )}
        {img2 && (
          <img
            className="bg-white h-8 w-12 rounded-sm"
            src={img2}
            alt={`${name} payment option 2`}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;

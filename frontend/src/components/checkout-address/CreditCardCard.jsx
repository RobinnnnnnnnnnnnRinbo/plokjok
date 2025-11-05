import React from "react";

const CreditCardCard = ({ name, isSelected, onChange, img1, img2 }) => {
  return (
    <div
      className={`bg-[#f2f2f2] w-[90%] ${
        isSelected ? `h-44` : `h-14`
      } px-4 rounded-lg mt-2 flex flex-col justify-center gap-4`}
    >
      <div className="flex items-center gap-4 w-full justify-between">
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
          <img className="bg-white h-8 w-12 rounded-sm" src={img1} />
          <img className="bg-white h-8 w-12 rounded-sm" src={img2} />
        </div>
      </div>
      {isSelected && (
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Card Number"
            className="rounded-lg p-2 bg-white/10"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="MM/YY"
              className="rounded-lg p-2 bg-white/10 w-24"
            />
            <input
              type="text"
              placeholder="CVV"
              className="rounded-lg p-2 bg-white/10 w-20"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCardCard;

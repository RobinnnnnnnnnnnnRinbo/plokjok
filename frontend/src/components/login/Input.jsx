import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Input = ({
  value,
  setValue,
  icon,
  showPass,
  passwordVisible,
  setPasswordVisible,
  onBlur,
  ...props
}) => {
  const [onInput, setOnInput] = useState(true);

  return (
    <div className="flex relative">
      <img
        className={`transition-opacity duration-100 absolute top-1/2 left-4 h-4 -translate-y-1/2 ${
          onInput ? `opacity-100` : `opacity-0`
        }`}
        src={icon}
        alt=""
      />

      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setOnInput(false)}
        onBlur={onBlur}
        className={`bg-[#ededed] h-[50px] outline-none w-[75vw] ${
          onInput ? `pl-10 duration-100` : `pl-3 duration-100`
        } rounded-xl`}
      />
      {showPass &&
        (passwordVisible ? (
          <img
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            src={assets.hidePass}
            onClick={() => setPasswordVisible(false)}
            alt="Hide password"
          />
        ) : (
          <img
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            src={assets.showPass}
            onClick={() => setPasswordVisible(true)}
            alt="Show password"
          />
        ))}
    </div>
  );
};

export default Input;

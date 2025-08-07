import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Input = ({
  placeholder,
  icon,
  type,
  showPass,
  usernameInput,
  setUsernameInput,
  passwordInput,
  setPasswordInput,
}) => {
  const [onInput, setOnInput] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

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
        onChange={(e) => {
          if (type === "password") {
            setPasswordInput(e.target.value);
          } else {
            setUsernameInput(e.target.value);
          }
        }}
        onFocus={() => setOnInput(false)}
        onBlur={() => setOnInput(true)}
        className={`bg-[#ededed] h-[50px] outline-none w-[75vw] ${
          onInput ? `pl-10 duration-100` : `pl-3 duration-100`
        } rounded-xl`}
        type={type === "password" && !passwordVisible ? "password" : "text"}
        value={type === "password" ? passwordInput : usernameInput}
        placeholder={placeholder}
      />
      {showPass &&
        (passwordVisible ? (
          <img
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            src={assets.hidePass}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <img
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            src={assets.showPass}
            onClick={togglePasswordVisibility}
          />
        ))}
    </div>
  );
};

export default Input;

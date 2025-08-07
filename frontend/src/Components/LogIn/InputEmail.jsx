import React, { useState } from "react";
import { assets } from "../../assets/assets";

const InputEmail = ({ placeholder, icon, showPass, type }) => {
  const [onInput, setOnInput] = useState(true);
  const [input, setInput] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex relative">
      {onInput && (
        <img className="absolute top-35/100 left-4" src={icon} alt="" />
      )}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onFocus={() => setOnInput((prev) => !prev)}
        onBlur={() => setOnInput((prev) => !prev)}
        className={`bg-[#ededed] h-[50px] w-[75vw] ${
          onInput ? `pl-10` : `pl-3`
        } rounded-xl`}
        type={type === "password" && !passwordVisible ? "password" : "text"}
        value={input}
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

export default InputEmail;

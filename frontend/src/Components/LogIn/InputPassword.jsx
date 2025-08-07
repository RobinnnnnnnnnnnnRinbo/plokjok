import React from "react";

const InputPassword = ({ icon, placeholder, showPass }) => {
  return (
    <div className="flex relative">
      <img className="absolute top-35/100 left-4" src={icon} alt="" />
      <input
        className="bg-[#ededed] h-[50px] px-4 pl-10 rounded-xl"
        type="password"
        placeholder={placeholder}
        showPass={showPass}
      />
    </div>
  );
};

export default InputPassword;

import React from "react";

const AuthButton = ({ icon }) => {
  return (
    <div className="w-[75vw]">
      <button className="bg-pm p-3 w-full flex justify-center rounded-xl">
        <img src={icon} alt="" />
      </button>
    </div>
  );
};

export default AuthButton;

import React from "react";
import { assets } from "../assets/assets";

const Brand = () => {
  return (
    <div className="bg-white flex justify-center">
      <img className="pb-14 cursor-pointer p-12" src={assets.brand} alt="" />
    </div>
  );
};

export default Brand;

import React, { useState } from "react";
import { assets } from "../assets/assets.js"; // Adjust the path as necessary

const NavBar = ({ productRef, categoryRef, heroRef, cartCount }) => {
  const [isSearch, setIsSearch] = useState(false);
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className=" h-24 flex justify-center items-center bg-black">
      <div className="bg-white z-50 fixed w-95/100 ts:w-5/6  shadow-lg flex items-center p-6 rounded-2xl justify-between">
        <div className="flex items-center gap-4 lg:gap-6">
          <img className="h-8" src={assets.menuM} alt="" />
          <span>LOGO</span>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <img className="h-8" src={assets.search} alt="" />
          <div className="relative">
            <div className="absolute h-5 w-5 flex items-center justify-center text-white rounded-full bg-red-500 -top-1 -right-1">
              0
            </div>
            <img className="h-8" src={assets.cartM} alt="" />
          </div>
          <img className="h-8" src={assets.userM} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

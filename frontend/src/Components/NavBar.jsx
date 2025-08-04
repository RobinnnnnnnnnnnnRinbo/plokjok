import React, { useState } from "react";
import { assets } from "../assets/assets.js"; // Adjust the path as necessary

const NavBar = ({ productRef, categoryRef, heroRef, cartCount }) => {
  const [isSearch, setIsSearch] = useState(false);
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="h-24 flex justify-center items-center">
      <div className="bg-white fixed w-95/100 lg:w-3/4 shadow-lg fixed flex items-center p-6 rounded-2xl justify-between">
        <div className="flex items-center gap-4 plg:gap-6">
          <img className="h-8" src={assets.menuM} alt="" />
          <span>LOGO</span>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <img className="h-8" src={assets.search} alt="" />
          <img className="h-8" src={assets.cartM} alt="" />
          <img className="h-8" src={assets.userM} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

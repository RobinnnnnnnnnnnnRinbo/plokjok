import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js"; // Adjust the path as necessary

const NavBar = ({ productRef, categoryRef, heroRef, cartCount }) => {
  const [isSearch, setIsSearch] = useState(false);
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="h-28 flex justify-center items-center bg-black">
      <div className="bg-white h-22 z-50 fixed w-95/100 ts:w-5/6  shadow-lg flex items-center p-6 rounded-2xl justify-between">
        <div className="flex items-center gap-4 lg:gap-6">
          <img className="h-8 mr-1" src={assets.menuM} alt="" />
          <span>{!isSearch && "LOGO"}</span>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          {isSearch ? (
            <div className="w-2/3 flex bg-gray-100 rounded-full items-center">
              <input
                type="text"
                className="outline-none w-86/100 p-2 px-3"
                placeholder="Search products..."
                autoFocus
              />
              <label
                onClick={() => setIsSearch((prev) => !prev)}
                htmlFor=""
                className="font-bold"
              >
                x
              </label>
            </div>
          ) : (
            <img
              type="button"
              onClick={() => setIsSearch((prev) => !prev)}
              className="h-8"
              src={assets.search}
              alt=""
            />
          )}
          <div className="relative">
            <div className="absolute h-5 w-5 flex items-center justify-center text-[11px] font-bold text-white rounded-full bg-red-500 -top-1 -right-1">
              {cartCount}
            </div>
            <Link to={"/cart"}>
              <img type="button" className="h-8" src={assets.cartM} alt="" />
            </Link>
          </div>
          <Link to={"/user"}>
            <img type="button" className="h-8" src={assets.userM} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js"; // Adjust the path as necessary

const NavBar = ({ productRef, categoryRef, heroRef, aboutRef, cartCount }) => {
  const [isSearch, setIsSearch] = useState(false);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    const drawerCheckbox = document.getElementById("my-drawer");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  return (
    <div className="h-28 flex justify-center items-center bg-transparent">
      <div className="bg-white h-22 fixed z-50 w-95/100 ts:w-5/6  shadow-lg flex items-center p-6 rounded-2xl justify-between">
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button">
                <img
                  className="h-8 mr-1 cursor-pointer"
                  src={assets.menuM}
                  alt=""
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-2 bg-pm">
                {/* Sidebar content here */}
                <Link to={"/"}>
                  <li
                    onClick={() => handleScroll(heroRef)}
                    className="bg-white text-pm font-semibold rounded-lg"
                  >
                    <a>Home</a>
                  </li>
                </Link>
                <li
                  onClick={() => handleScroll(categoryRef)}
                  className="bg-white text-pm font-semibold rounded-lg"
                >
                  <a>Category</a>
                </li>
                <li
                  onClick={() => handleScroll(productRef)}
                  className="bg-white text-pm font-semibold rounded-lg"
                >
                  <a>Products</a>
                </li>
                <li className="bg-white text-pm font-semibold rounded-lg">
                  <a>Contact Us</a>
                </li>
                <li
                  onClick={() => handleScroll(aboutRef)}
                  className="bg-white text-pm font-semibold rounded-lg"
                >
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>
          <span
            className="cursor-pointer"
            type="button"
            onClick={() => handleScroll(heroRef)}
          >
            {!isSearch && (
              <Link to={"/"}>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="h-6"
                >
                  <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
              </Link>
            )}
          </span>
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
    </div>
  );
};

export default NavBar;

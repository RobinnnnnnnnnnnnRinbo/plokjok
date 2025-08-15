import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js"; // Adjust the path as necessary
import { useProductsStore } from "../stores/useProductsStore.js";

const TS_BREAKPOINT = 810;
const TL_BREAKPOINT = 1024;

const NavBar = ({ productRef, categoryRef, heroRef, aboutRef }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { getTotalItems } = useProductsStore();
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (ref, offset = 0) => {
    if (ref.current) {
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    const drawerCheckbox = document.getElementById("my-drawer");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  return (
    <div className="flex justify-center ">
      <div className="bg-white fixed z-50 w-full h-20 flex items-center justify-between px-8">
        <div className="flex  items-center gap-4 ts:gap-0">
          <div className="drawer ts:hidden">
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
                    onClick={() => handleScroll(heroRef, 80)}
                    className="bg-white text-pm font-semibold rounded-lg"
                  >
                    <span>Home</span>
                  </li>
                </Link>
                <li
                  onClick={() => handleScroll(categoryRef, 80)}
                  className="bg-white text-pm font-semibold rounded-lg"
                >
                  <a>Category</a>
                </li>
                <li
                  onClick={() => handleScroll(productRef, 80)}
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
            {(!isSearch || windowWidth >= TS_BREAKPOINT) && (
              <Link to={"/"}>
                <svg
                  onClick={() => handleScroll(heroRef, 80)}
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="h-6 w-6"
                >
                  <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
              </Link>
            )}
          </span>
        </div>

        <div className="hidden ts:flex justify-center gap-6">
          {!isSearch ? (
            <span>Home</span>
          ) : (
            windowWidth >= TL_BREAKPOINT && <span>Home</span>
          )}
          <span>Category</span>
          <span>Product</span>
          <span>Contact</span>
          <span>About</span>
        </div>

        <div className="flex items-center gap-4 lg:gap-6 justify-end">
          {isSearch ? (
            <div className="w-[45vw] ts:w-[30vw] flex bg-gray-100 rounded-full items-center">
              <input
                onBlurCapture={() => setIsSearch((prev) => !prev)}
                type="text"
                className="outline-none w-86/100 px-2 p-1 px-3"
                placeholder="Search products..."
                onFocus
                autoFocus
              />
              <svg
                onClick={() => setIsSearch((prev) => !prev)}
                className="h-4"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                stroke-width="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <defs>
                    {" "}
                    <style> .cls-1 </style>{" "}
                  </defs>{" "}
                  <path
                    id="cancel"
                    class="cls-1"
                    d="M936,120a12,12,0,1,1,12-12A12,12,0,0,1,936,120Zm0-22a10,10,0,1,0,10,10A10,10,0,0,0,936,98Zm4.706,14.706a0.951,0.951,0,0,1-1.345,0l-3.376-3.376-3.376,3.376a0.949,0.949,0,1,1-1.341-1.342l3.376-3.376-3.376-3.376a0.949,0.949,0,1,1,1.341-1.342l3.376,3.376,3.376-3.376a0.949,0.949,0,1,1,1.342,1.342l-3.376,3.376,3.376,3.376A0.95,0.95,0,0,1,940.706,112.706Z"
                    transform="translate(-924 -96)"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          ) : (
            <img
              type="button"
              onClick={() => setIsSearch((prev) => !prev)}
              className="h-7"
              src={assets.search}
              alt=""
            />
          )}
          <div className="relative">
            <div className="absolute h-5 w-5 flex items-center justify-center text-[11px] font-bold text-white rounded-full bg-red-500 -top-1 -right-1">
              {getTotalItems()}
            </div>
            <Link to={"/cart"}>
              <img type="button" className="h-7" src={assets.cartM} alt="" />
            </Link>
          </div>
          <Link to={"/login"}>
            <img type="button" className={`h-7`} src={assets.userM} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { assets } from "../assets/assets.js"; // Adjust the path as necessary

const NavBar = ({ productRef, categoryRef, heroRef, cartCount }) => {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full pt-4">
      <nav className="bg-white mx-2 flex items-center p-6 md:mx-8 lg:mx-34 xl:mx-48 rounded-2xl justify-between">
        <div className="">
          {/* DaisyUI Drawer */}
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer">
                <img
                  className="md:hidden cursor-pointer"
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
              <ul className="menu text-lg pt-10 bg-[#040025] text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleScroll(heroRef)}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <div className="">
                    <button
                      className="cursor-pointer"
                      onClick={() => handleScroll(categoryRef)}
                    >
                      Category
                    </button>
                    <div className="dropdown">
                      <label tabIndex={0} className="cursor-pointer">
                        <img
                          className="rotate-90 active:rotate-0 pl-4 absolute bottom-1/2 active:bottom- h-3"
                          src={assets.dropdown}
                          alt=""
                        />
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
                      >
                        <li>
                          <a>Mice</a>
                        </li>
                        <li>
                          <a>Keyboards</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleScroll(productRef)}
                  >
                    Product
                  </button>
                </li>
                <li>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleScroll(productRef)}
                  >
                    Product
                  </button>
                </li>
                <li>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleScroll(productRef)}
                  >
                    Product
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <p className="hidden cursor-pointer md:flex">Logo</p>
        </div>
        <div className="ml-[-64px] md:ml-0">
          <p className="md:hidden cursor-pointer">LOGO</p>
          <div className="hidden md:flex gap-8">
            <button
              className="cursor-pointer"
              onClick={() => handleScroll(heroRef)}
            >
              Home
            </button>
            <button
              className="cursor-pointer"
              onClick={() => handleScroll(categoryRef)}
            >
              Category
            </button>
            <button
              className="cursor-pointer"
              onClick={() => handleScroll(productRef)}
            >
              Product
            </button>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">About</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-8">
          <img className="cursor-pointer h-9" src={assets.search} alt="" />
          <div className="relative mx-auto my-auto">
            <div className="bg-red-500 text-white absolute left-1/3 bottom-1/2 px-1.5 text-sm rounded-full">
              {cartCount}
            </div>
            <img className="cursor-pointer h-8" src={assets.cartM} alt="" />
          </div>
          <img className="cursor-pointer h-8" src={assets.userM} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

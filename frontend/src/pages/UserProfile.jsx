import React from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const UserProfile = () => {
  const { authUser } = useAuthStore();
  console.log(authUser);

  return (
    <div className="h-screen text-white flex flex-col gap-4 bg-[#f2f2f2]">
      <div
        className="flex flex-col gap-4 bg-cover h-[38%] p-4 bg-[#040025] rounded-b-lg"
        style={{ backgroundImage: `url(${assets.background_gred_profile})` }}
      >
        <div className="flex items-center justify-between w-full px-6">
          <Link to={"/"}>
            <button>
              <img className="h-10" src={assets.back_profile_white} alt="" />
            </button>
          </Link>
          <Link to={"/settings"}>
            <button>
              <img className="h-10" src={assets.setting} alt="" />
            </button>
          </Link>
        </div>
        <div className="flex m-6 gap-4">
          <div>
            <img className="h-18" src={assets.blank_profile} alt="" />
          </div>
          <div className="flex flex-col">
            <div>
              <span className="font-bold">{authUser.username}</span>
            </div>
            <span className="text-[10px] text-gray-300 pb-1">
              Member since {authUser.created_at.slice(0, 4)}
            </span>
            <div className="bg-yellow-300 w-22 h-5 rounded-sm flex items-center justify-evenly">
              <img src={assets.diamond_membership} className="h-3" alt="" />
              <span className="text-xs text-black font-semibold">VIP USER</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around w-full px-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-3">
              <img className="h-5" src={assets.profile_wishlist} alt="" />
              <span className="text-sm">Wishlist</span>
            </div>
            <span className="text-xl">12</span>
          </div>
          <div className="h-10 border-l-1"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-3">
              <img className="h-5" src={assets.profile_coupon} alt="" />
              <span className="text-sm">Coupon</span>
            </div>
            <span className="text-xl">12</span>
          </div>
        </div>
      </div>
      <div
        className="h-1/4 bg-[#040025] mx-4 bg-cover rounded-lg"
        style={{ backgroundImage: `url(${assets.background_gred_profile})` }}
      >
        <div className="flex items-center justify-between w-full px-6 py-4">
          <span className="font-semibold">My Orders</span>
          <span className="text-sm text-gray-200">View All</span>
        </div>
        <div className="flex items-center justify-around w-full px-2 mt-5">
          <div className="p-[1px] h-20 w-20 rounded-lg bg-gradient-to-tr from-[#040025]/10 via-[#5d5794] to-white/70 overflow-hidden">
            <div className="flex flex-col items-center gap-2 h-full w-full j justify-center rounded-lg p-3 bg-[#040025]/80 backdrop-blur-sm">
              <div>
                <img className="h-8" src={assets.order_pending} alt="" />
              </div>
              <span className="text-xs">Pending</span>
            </div>
          </div>
          <div className="p-[1px] h-20 w-20 rounded-lg bg-gradient-to-tr from-[#040025]/10 via-[#5d5794] to-white/70 overflow-hidden">
            <div className="flex flex-col items-center gap-2 h-full w-full j justify-center rounded-lg p-3 bg-[#040025]/70 backdrop-blur-sm">
              <div>
                <img className="h-8" src={assets.order_shipped} alt="" />
              </div>
              <span className="text-xs">Shipped</span>
            </div>
          </div>
          <div className="p-[1px] h-20 w-20 rounded-lg bg-gradient-to-tr from-[#040025]/40 via-[#5d5794] to-white/70 overflow-hidden">
            <div className="flex flex-col items-center gap-2 h-full w-full justify-center rounded-lg p-3 bg-[#040025]/60 backdrop-blur-sm">
              <div>
                <img className="h-8" src={assets.order_review} alt="" />
              </div>
              <span className="text-xs">Review</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/5 bg-[#040025] mx-4 bg-cover rounded-lg bg-white">
        <div className="flex items-center justify-between w-full px-6 py-4">
          <span className="font-semibold text-pm">Services</span>
        </div>
        <div className="flex items-center justify-around w-full px-6 gap-4">
          <div className="flex flex-col items-center justify-center gap-2 ">
            <div className="h-10">
              <img
                className="h-full w-full"
                src={assets.payment_profile}
                alt=""
              />
            </div>
            <span className="text-pm text-xs">Payment</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 h-16">
            <div className="h-10">
              <img className="h-full w-full" src={assets.gps_profile} alt="" />
            </div>
            <span className="text-pm text-xs">Address</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 h-16">
            <div className="h-10">
              <img
                className="h-[90%] mt-1 w-full"
                src={assets.support_profile}
                alt=""
              />
            </div>
            <span className="text-pm text-xs">Support</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 h-16">
            <div className="h-10">
              <img
                className="h-full w-full"
                src={assets.about_us_profile}
                alt=""
              />
            </div>
            <span className="text-pm text-xs">About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

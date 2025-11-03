import React from "react";
import { assets } from "../../assets/assets";

const AddressCard = ({ isSelected, onClick }) => {
  console.log(isSelected);
  return (
    <div
      onClick={onClick}
      className="bg-[#040025] text-white p-4 m-6 rounded-lg flex flex-col gap-3 bg-cover cursor-pointer"
      style={{
        backgroundImage: `url(${assets.background_gred_profile})`,
      }}
    >
      <div className="flex justify-between">
        <p className="font-semibold">PlokJok User</p>
        <img className="h-6" src={assets.address_edit} alt="" />
      </div>
      <p className="text-sm">
        Sokha Pheng, No. 15, Street 271, 12301 Phnom Penh, CAMBODIA
      </p>
      <div className="flex gap-3 items-center">
        <img className="h-4" src={assets.tick_address} alt="" />
        <span className="italic text-sm text-white/80">Shipping Available</span>
      </div>
    </div>
  );
};

export default AddressCard;

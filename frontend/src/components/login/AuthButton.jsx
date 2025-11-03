import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const AuthButton = ({ icon }) => {
  return (
    <div className="w-[75vw]">
      <Link to={""}>
        <button
          className="bg-pm bg-cover active:bg-pmhover hover:bg-pmhover hover:duration-150 p-3 w-full flex justify-center rounded-xl"
          style={{
            backgroundImage: `url(${assets.background_grad_button})`,
          }}
        >
          <img src={icon} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default AuthButton;

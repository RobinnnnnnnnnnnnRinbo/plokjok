import React from "react";
import { Link } from "react-router-dom";

const AuthButton = ({ icon }) => {
  return (
    <div className="w-[75vw]">
      <Link to={""}>
        <button className="bg-pm active:bg-pmhover hover:bg-pmhover hover:duration-150 p-3 w-full flex justify-center rounded-xl">
          <img src={icon} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default AuthButton;

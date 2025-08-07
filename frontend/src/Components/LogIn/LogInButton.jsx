import React from "react";
import { Link } from "react-router-dom";

const LogInButton = ({ prop }) => {
  return (
    <div>
      <button
        type="submit"
        className="text-white active:bg-pmhover hover:bg-pmhover hover:duration-150 font-bold bg-pm w-[75vw] py-4 rounded-xl"
      >
        LOG IN
      </button>
    </div>
  );
};

export default LogInButton;

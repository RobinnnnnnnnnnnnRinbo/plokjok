import React from "react";
import { Link } from "react-router-dom";

const LogInButton = ({ prop }) => {
  return (
    <div>
      <Link to={"/"}>
        <button
          
          className="text-white font-bold bg-pm w-[75vw] py-4 rounded-xl"
        >
          {prop}
        </button>
      </Link>
    </div>
  );
};

export default LogInButton;

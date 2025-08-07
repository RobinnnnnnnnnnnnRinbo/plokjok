import React from "react";

const LogInButton = ({ prop }) => {
  return (
    <div>
      <button
        onClick={(e) => e.preventDefault()}
        className="text-white font-bold bg-pm w-[75vw] py-4 rounded-xl"
      >
        {prop}
      </button>
    </div>
  );
};

export default LogInButton;

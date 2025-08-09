import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-pm h-screen flex items-center justify-center text-white flex flex-col">
      <span className="text-4xl font-bold">- 404 -</span>
      <p className="text-lg">Page Not Found</p>
      <p className="mt-4 text-sm">Let's go back home</p>
      <Link to={"/"}>
        <button className="bg-white p-1 text-black rounded-full px-4 mt-2 text-sm cursor-pointer">
          Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

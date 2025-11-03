import React from "react";
import { Link } from "react-router-dom";

import { useAuthStore } from "../stores/useAuthStore";

const SettingPage = () => {
  const { logout } = useAuthStore();

  function handleLogout() {
    logout();
    console.log("User logged out");
  }
  return (
    <div className="text-white">
      <Link to={"/"}>
        <button
          className="bg-white text-pm p-4 cursor-pointer"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default SettingPage;

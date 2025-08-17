import React from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { logout } = useAuthStore();
  return (
    <div className="h-screen text-white flex items-center justify-center">
      <Link to={"/"}>
        <button
          onClick={() => {
            logout();
          }}
          className="bg-gray-700 p-2 rounded-lg"
        >
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default UserProfile;

import React from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { logout, authUser } = useAuthStore();
  console.log(authUser);

  return (
    <div className="h-screen text-white flex flex-col gap-4">
      <div className="flex flex-col">
        <span>{authUser.username}</span>
        <span>{authUser.email}</span>
      </div>
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

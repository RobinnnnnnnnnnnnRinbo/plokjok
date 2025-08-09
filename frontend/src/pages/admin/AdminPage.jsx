import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="text-white p-4">
      <Link to="/admin/products">
        <button>Products</button>
      </Link>
      <Link to="/admin/orders">
        <button>Orders</button>
      </Link>
      <Link to="/admin/users">
        <button>Users</button>
      </Link>
    </div>
  );
};

export default AdminPage;

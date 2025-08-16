import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useProductsStore } from "../../stores/useProductsStore";

const ProductsAdmin = () => {
  const { products, error, loading, fetchProducts, selectProduct, log } =
    useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClick(id) {
    selectProduct(id);
    log();
  }

  return (
    <div className="p-4 text-white h-screen overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Products</h1>
        <Link to={"/admin/products/create"}>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Create Product
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto border rounded-lg mt-2">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr className="text-black">
              <th className="px-3 py-2 text-center">#</th>
              <th className="px-3 py-2 text-center">Image</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Price</th>
              <th className="px-3 py-2">Stock</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr className="text-center text-gray-500 h-[70vh]">
                <td colSpan={7}>
                  <span className="loading loading-bars loading-xl"></span>
                </td>
              </tr>
            )}
            {error && (
              <tr className="text-center text-red-500">
                <td colSpan={7}>{error}</td>
              </tr>
            )}
            {products.map((p, idx) => (
              <tr key={p._id || p.id || idx} className="border-t">
                <td className="px-3 py-2 text-center">{p.product_id}</td>
                <td className="px-3 py-2 bg-gray-400 flex items-center justify-center">
                  <img
                    src={p.img_url}
                    alt={p.product_name}
                    className="w-12 h-12 object-contain"
                  />
                </td>
                <td className="px-3 py-2">{p.product_name}</td>
                <td className="px-3 py-2">${Number(p.price).toFixed(2)}</td>
                <td className="px-3 py-2">{p.stock ?? p.quantity ?? "-"}</td>
                <td className="px-3 py-2">
                  {p.category.charAt(0).toUpperCase() + p.category.slice(1)}
                </td>
                <td className="px-3 py-2">
                  <Link to={``}>
                    <button
                      onClick={() => handleClick(p.product_id)}
                      className="px-2 py-1 text-xs bg-blue-600 text-white rounded mr-2"
                    >
                      Edit
                    </button>
                  </Link>
                  <button className="px-2 py-1 text-xs bg-red-600 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!loading && !error && products.length === 0 && (
              <tr>
                <td className="px-3 py-6 text-center text-gray-500" colSpan={6}>
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsAdmin;

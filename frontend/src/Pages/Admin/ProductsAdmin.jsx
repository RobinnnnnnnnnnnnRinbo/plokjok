import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("http://127.0.0.1:3000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch products. Please try again later.");
    }
    setLoading(false);
  };

  const deleteProducts = async (id) => {
    setLoading(true);
    setError("");
    try {
      await axios.delete(`http://127.0.0.1:3000/api/products/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.log(error);
      setError("Failed to delete product. Please try again later.");
    }
    setLoading(false);
  };

  const createProduct = async (newProduct) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/products",
        newProduct
      );
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      console.log(error);
      setError("Failed to create product. Please try again later.");
    }
    setLoading(false);
  };

  const editProduct = async (id, updatedProduct) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.put(
        `http://127.0.0.1:3000/api/products/${id}`,
        updatedProduct
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? response.data : product
        )
      );
    } catch (error) {
      console.log(error);
      setError("Failed to update product. Please try again later.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4 text-white h-screen overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Products</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Create Product
        </button>
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
                <td className="px-3 py-2 text-center">{p.id}</td>
                <td className="px-3 py-2 bg-gray-400 flex items-center justify-center">
                  <img
                    src={p.img_url}
                    alt={p.name}
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="px-3 py-2">{p.name}</td>
                <td className="px-3 py-2">${Number(p.price).toFixed(2)}</td>
                <td className="px-3 py-2">{p.stock ?? p.quantity ?? "-"}</td>
                <td className="px-3 py-2">
                  {p.category?.name ?? p.category ?? "-"}
                </td>
                <td className="px-3 py-2">
                  <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded mr-2">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProducts(p.id)}
                    className="px-2 py-1 text-xs bg-red-600 text-white rounded"
                  >
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

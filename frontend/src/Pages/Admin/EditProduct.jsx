import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditProduct = ({
  selectedProduct,
  products,
  setProducts,
  setSelectedProduct,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  };

  function editProduct() {
    if (!selectedProduct) return;

    axios
      .put(
        `http://127.0.0.1:3000/api/products/${selectedProduct.id}`,
        selectedProduct
      )
      .then((response) => {
        const updatedProducts = products.map((product) =>
          product.id === selectedProduct.id ? response.data : product
        );
        setProducts(updatedProducts);
        setSelectedProduct(null);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  }

  return (
    <div className="bg-white h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Edit Product</h1>
      <div className="max-w-md mx-auto">
        <label className="block mb-2">
          Product Name
          <input
            name="name"
            onChange={handleInputChange}
            type="text"
            value={selectedProduct?.name || ""}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </label>
        <label className="block mb-2">
          Image URL
          <input
            name="img_url"
            onChange={handleInputChange}
            type="text"
            value={selectedProduct?.img_url || ""}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </label>
        <label className="block mb-2">
          Price
          <input
            name="price"
            onChange={handleInputChange}
            type="number"
            value={selectedProduct?.price || ""}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </label>
        <label className="block mb-2">
          Description
          <textarea
            name="description"
            onChange={handleInputChange}
            value={selectedProduct?.description || ""}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </label>
        <Link to="/admin/products">
          <button
            onClick={editProduct}
            className="mt-4 w-full bg-blue-600 text-white rounded p-2"
            disabled={!selectedProduct}
          >
            Save Changes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditProduct;

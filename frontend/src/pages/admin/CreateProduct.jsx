import React, { useState } from "react";
import { useProductsStore } from "../../stores/useProductsStore";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("mice");
  const [description, setDescription] = useState("");

  const { createProduct, loading } = useProductsStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        product_name: productName,
        price: parseFloat(price), // Convert to number
        img_url: imgUrl,
        description: description,
        stock: parseInt(stock),
        category: category,
      };

      if (productName && price && imgUrl && description && stock && category) {
        await createProduct(productData);
        console.log("Successfully created product.");
        setProductName("");
        setPrice("");
        setImgUrl("");
        setDescription("");
        setStock("");
        setCategory("mice");
      } else {
        console.log("Please fill the input.");
      }
    } catch (error) {
      console.log("Error creating product:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="h-screen flex flex-col text-white">
      <label htmlFor="">Product Name</label>
      <input
        className="bg-gray-100 outline-none text-black"
        type="text"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
      />
      <label htmlFor="">Price</label>
      <input
        className="bg-gray-100 outline-none text-black"
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <img src={imgUrl ? imgUrl : null} alt="" />
      <label htmlFor="">ImageURL</label>
      <input
        className="bg-gray-100 outline-none text-black"
        type="text"
        onChange={(e) => setImgUrl(e.target.value)}
        value={imgUrl}
      />
      <label htmlFor="">Description</label>
      <input
        className="bg-gray-100 outline-none text-black"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label htmlFor="">Stock</label>
      <input
        className="bg-gray-100 outline-none text-black"
        type="text"
        onChange={(e) => setStock(e.target.value)}
        value={stock}
      />
      <label htmlFor="">Category</label>
      <select
        className="bg-gray-100 outline-none text-black"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="mice">Mice</option>
        <option value="keyboards">Keyboards</option>
        <option value="controllers">Controllers</option>
        <option value="nukes">Nukes</option>
      </select>
      <button
        type="submit"
        disabled={loading} // Disable when loading
        className="bg-white text-black m-2 p-1 active:bg-gray-500 disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default CreateProduct;

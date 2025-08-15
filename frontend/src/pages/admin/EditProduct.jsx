import { Link } from "react-router-dom";

const EditProduct = ({ selectedProduct, setSelectedProduct }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  };

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

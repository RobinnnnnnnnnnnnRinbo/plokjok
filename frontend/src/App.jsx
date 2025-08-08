import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

// Importing components and pages
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import LogIn from "./Pages/LogIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import ProductsAdmin from "./Pages/Admin/ProductsAdmin.jsx";
import EditProduct from "./Pages/Admin/EditProduct.jsx";
import AdminPage from "./Pages/Admin/AdminPage.jsx";

const App = () => {
  // State for products and loading/error states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cart functionality

  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = (qty = 1) => setCartCount((c) => c + Number(qty));

  // User authentication state
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          cartCount={cartCount}
          products={products}
          handleAddToCart={handleAddToCart}
          setCartCount={setCartCount}
          fetchProducts={fetchProducts}
        />
      ),
    },
    {
      path: "/login",
      element: (
        <LogIn
          usernameInput={usernameInput}
          setUsernameInput={setUsernameInput}
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
        />
      ),
    },
    {
      path: "/cart",
      element: (
        <CartPage
          cartCount={cartCount}
          handleAddToCart={handleAddToCart}
          setCartCount={setCartCount}
        />
      ),
    },
    {
      path: "/signup",
      element: (
        <SignUp
          usernameInput={usernameInput}
          setUsernameInput={setUsernameInput}
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
        />
      ),
    },

    {
      path: "/detail/*",
      element: (
        <ProductDetail
          cartCount={cartCount}
          handleAddToCart={handleAddToCart}
          setCartCount={setCartCount}
        />
      ),
    },
    {
      path: "/admin/products/edit",
      element: (
        <EditProduct
          selectedProduct={selectedProduct}
          products={products}
          setProducts={setProducts}
          setSelectedProduct={setSelectedProduct}
        />
      ),
    },
    {
      path: "/admin/products",
      element: (
        <ProductsAdmin
          products={products}
          fetchProducts={fetchProducts}
          setProducts={setProducts}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      ),
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

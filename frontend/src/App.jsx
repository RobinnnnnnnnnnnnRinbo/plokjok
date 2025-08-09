import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

// Importing components and pages
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ProductsAdmin from "./pages/admin/ProductsAdmin.jsx";
import EditProduct from "./pages/admin/EditProduct.jsx";
import AdminPage from "./pages/admin/AdminPage.jsx";
import CreateProduct from "./pages/admin/CreateProduct.jsx";

const App = () => {
  // State for products and loading/error states

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cart functionality

  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = (qty = 1) => setCartCount((c) => c + Number(qty));

  // User authentication state
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          cartCount={cartCount}
          setSelectedProduct={setSelectedProduct}
          handleAddToCart={handleAddToCart}
          setCartCount={setCartCount}
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
          selectedProduct={selectedProduct}
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
          setSelectedProduct={setSelectedProduct}
        />
      ),
    },
    {
      path: "/admin/products/create",
      element: <CreateProduct />,
    },
    {
      path: "/admin/products",
      element: (
        <ProductsAdmin
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


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
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Headphone",
      img_url:
        "https://products.shureweb.eu/cdn-cgi/image/width=1380,height=1380,format=auto/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp",
      price: 19.99,
      description: "This is a sample product description.",
      category: "Sample Category",
      stock: 100,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Gaming Mouse",
      img_url:
        "https://www.pngplay.com/wp-content/uploads/2/Gaming-Pc-Mouse-PNG-Clipart-Background.png",
      price: 29.99,
      description: "This is another sample product description.",
      category: "Sample Category",
      stock: 50,
      rating: 4.0,
    },
    {
      id: 3,
      name: "Game Controller",
      img_url:
        "https://static.vecteezy.com/system/resources/previews/043/016/304/non_2x/ai-generated-3d-rendering-of-a-game-controller-on-transparent-background-ai-generated-free-png.png",
      price: 39.99,
      description: "This is yet another sample product description.",
      category: "Sample Category",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Keyboard",
      img_url:
        "https://static.vecteezy.com/system/resources/thumbnails/052/855/141/small_2x/rgb-illuminated-mechanical-gaming-keyboard-free-png.png",
      price: 49.99,
      description: "This is a fourth sample product description.",
      category: "Sample Category",
      stock: 10,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Nuclear Bomb",
      img_url:
        "https://wallpapers.com/images/featured/nuclear-bomb-png-jrzj712nv8jd9oei.jpg",
      price: 59.99,
      description: "This is a fifth sample product description.",
      category: "Sample Category",
      stock: 5,
      rating: 4.9,
    },
    {
      id: 6,
      name: "Gaming Microphone",
      img_url:
        "https://png.pngtree.com/png-clipart/20240126/original/pngtree-gaming-microphone-png-image_14158865.png",
      price: 69.99,
      description: "This is a sixth sample product description.",
      category: "Sample Category",
      stock: 2,

      rating: 4.7,
    },
  ];

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
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
          handleAddToCart={handleAddToCart}
          setCartCount={setCartCount}
          products={products}
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
          products={products}
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
          products={products}
          setSelectedProduct={setSelectedProduct}
        />
      ),
    },
    {
      path: "/admin/products",
      element: (
        <ProductsAdmin
          products={products}
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

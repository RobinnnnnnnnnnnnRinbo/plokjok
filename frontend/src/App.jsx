import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import ProductList from "./Components/ProductList.jsx";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => setCartCount((c) => c + 1);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          cartCount={cartCount}
          handleAddToCart={handleAddToCart}
          setCartCount={setCartCount}
        />
      ),
    },
    {
      path: "/user",
      element: <NotFoundPage />,
    },
    {
      path: "/cart",
      element: <NotFoundPage />,
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
  ]);
  return <RouterProvider router={router} />;
};

export default App;

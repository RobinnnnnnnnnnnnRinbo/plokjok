import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import ProductList from "./Components/ProductList.jsx";
import LogIn from "./Pages/LogIn.jsx";
import SignUp from "./Pages/SignUp.jsx";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = (qty = 1) => setCartCount((c) => c + Number(qty));
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
      path: "/login",
      element: <LogIn />,
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
      element: <SignUp />,
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

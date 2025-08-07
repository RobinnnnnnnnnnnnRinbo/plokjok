import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import LogIn from "./Pages/LogIn.jsx";
import SignUp from "./Pages/SignUp.jsx";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = (qty = 1) => setCartCount((c) => c + Number(qty));

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  // Log in and Sign up

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
      path: "/*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

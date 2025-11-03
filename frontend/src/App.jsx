import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing components and pages
import NotFoundPage from "./pages/NotFoundPage.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";

import CartPage from "./pages/CartPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import EditProduct from "./pages/admin/EditProduct.jsx";
import CheckOut from "./pages/CheckOut.jsx";

import ProductsAdmin from "./pages/admin/ProductsAdmin.jsx";
import AdminPage from "./pages/admin/AdminPage.jsx";
import CreateProduct from "./pages/admin/CreateProduct.jsx";

import { useAuthStore } from "./stores/useAuthStore.js";
import UserProfile from "./pages/UserProfile.jsx";
import SettingPage from "./pages/SettingPage.jsx";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const setAuthUserFromStorage = useAuthStore(
    (state) => state.setAuthUserFromStorage
  );

  useEffect(() => {
    setAuthUserFromStorage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage setSelectedProduct={setSelectedProduct} />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/profile",
      element: <UserProfile />,
    },
    {
      path: "/cart",
      element: <CartPage selectedProduct={selectedProduct} />,
    },
    {
      path: "/checkout",
      element: <CheckOut />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/settings",
      element: <SettingPage />,
    },

    {
      path: "/detail/*",
      element: <ProductDetail selectedProduct={selectedProduct} />,
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

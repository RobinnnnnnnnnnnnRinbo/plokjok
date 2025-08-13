import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

  const [selectedProduct, setSelectedProduct] = useState(null);

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
      path: "/cart",
      element: <CartPage selectedProduct={selectedProduct} />,
    },
    {
      path: "/signup",
      element: <SignUp />,
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


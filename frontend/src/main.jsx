import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import UserPage from "./Pages/UserPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/user", element: <NotFoundPage /> },
  { path: "/cart", element: <NotFoundPage /> },
  { path: "/detail", element: <ProductDetail /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

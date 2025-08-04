import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProductInfo from "./Pages/ProductInfo.jsx";

const router = createBrowserRouter([
  { path: "/product-info", element: <ProductInfo /> },
  { path: "/", element: <App /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

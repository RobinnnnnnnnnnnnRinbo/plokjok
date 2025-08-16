import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";

const router = express.Router();

// Get products
router.get("/", getProducts);

// Get products by id
router.get("/:product_id", getProductById);

// Create product
router.post("/", createProduct);

// Update product
router.put("/:product_id", updateProduct);

// Delete product
router.delete("/:product_id", deleteProduct);

export default router;

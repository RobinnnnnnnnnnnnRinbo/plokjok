import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controller/productController.js';

const router = express.Router();

// Get products
router.get('/', getProducts);

// Get products by id
router.get('/:id', getProductById);

// Create product
router.post('/', createProduct);

// Update product 
router.put('/:id', updateProduct);

// Delete product
router.delete('/:id', deleteProduct);

export default router;

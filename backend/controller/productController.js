import { pool } from "../database/db.js";
import debug from "debug";

const createProductDebug = debug("database:create_product");

export const getProducts = async (req, res) => {
  await new Promise((r) => setTimeout(r, 1500)); //API DELAY MOCKUP
  try {
    const result = await pool.query("SELECT * FROM products");
    res.status(200).json(result.rows);
  } catch (error) {
    createProductDebug("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProductById = async (req, res) => {
  const { product_id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE product_id = $1",
      [product_id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(`Error fetching product with ID ${product_id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createProduct = async (req, res) => {
  const newProduct = req.body;
  const { product_name, price, img_url, description, stock, category } =
    newProduct;
  if (!product_name || !price || !stock) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  try {
    const result = await pool.query(
      "INSERT INTO products ( product_name, price, img_url, description, stock, category ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [product_name, price, img_url, description, stock, category]
    );
    res
      .status(201)
      .json({ message: "Product created", product: result.rows[0] });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { product_id } = req.params;
  try {
    const { product_name, price, img_url, description, stock, category } =
      req.body;

    const result = await pool.query(
      "UPDATE products SET product_name = $1, price = $2, img_url = $3, description = $4, stock = $5, category = $6 WHERE product_id = $7 RETURNING *",
      [product_name, price, img_url, description, stock, category, product_id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product updated", product: result.rows[0] });
  } catch (error) {
    console.error(`Error updating product with ID ${product_id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { product_id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM products WHERE product_id = $1 RETURNING *",
      [product_id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product deleted", product: result.rows[0] });
  } catch (error) {
    console.error(`Error deleting product with ID ${product_id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

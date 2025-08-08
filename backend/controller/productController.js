import express from "express";
import { pool } from "../database/db.js";

export const getProducts = async (req, res) => {
  await new Promise((r) => setTimeout(r, 1300)); //API DELAY MOCKUP
  try {
    const result = await pool.query("SELECT * FROM products");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createProduct = async (req, res) => {
  const newProduct = req.body;
  const { name, price, description, img_url } = newProduct;
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  try {
    const result = await pool.query(
      "INSERT INTO products (name, price, description, img_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, price, description, img_url]
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
  const { id } = req.params;
  try {
    const { name, price, description, img_url } = req.body;
    const result = await pool.query(
      "UPDATE products SET name = $1, price = $2, description = $3, img_url = $4 WHERE id = $5 RETURNING *",
      [name, price, description, img_url, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product updated", product: result.rows[0] });
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product deleted", product: result.rows[0] });
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

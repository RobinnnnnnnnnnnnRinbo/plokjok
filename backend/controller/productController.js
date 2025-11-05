import { colgroup } from "motion/react-client";
import { supabase } from "../database/db.js";
import debug from "debug";

const createProductDebug = debug("database:create_product");

export const getProducts = async (req, res) => {
  await new Promise((r) => setTimeout(r, 1500)); //API DELAY MOCKUP
  try {
      const { data: products, error } = await supabase
    .from('products')
    .select('*');

    console.log('Supabase Response:', { products, error }); // Add this line
    if (error) throw error;

    if (!products || products.length === 0) {
      console.log("No products found in the database.");
      return res.status(404).json({ error: "No products found" });
    }

    createProductDebug(`Fetched ${products.length} products.`);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProductById = async (req, res) => {
  const { product_id } = req.params;
  try {
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('product_id', product_id)
      .single();

    if (error) throw error;
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(`Error fetching product with ID ${product_id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createProduct = async (req, res) => {
  const { product_name, price, img_url, description, stock, category } = req.body;
  
  if (!product_name || !price || !stock) {
    return res.status(400).json({ error: "Name, price and stock are required" });
  }

  try {
    const { data: product, error } = await supabase
      .from('products')
      .insert([{ 
        product_name, 
        price, 
        img_url, 
        description, 
        stock, 
        category 
      }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { product_id } = req.params;
  const { product_name, price, img_url, description, stock, category } = req.body;

  try {
    const { data: product, error } = await supabase
      .from('products')
      .update({ 
        product_name, 
        price, 
        img_url, 
        description, 
        stock, 
        category 
      })
      .eq('product_id', product_id)
      .select()
      .single();

    if (error) throw error;
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    console.error(`Error updating product with ID ${product_id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { product_id } = req.params;
  try {
    const { data: product, error } = await supabase
      .from('products')
      .delete()
      .eq('product_id', product_id)
      .select()
      .single();

    if (error) throw error;
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted", product });
  } catch (error) {
    console.error(`Error deleting product with ID ${product_id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};
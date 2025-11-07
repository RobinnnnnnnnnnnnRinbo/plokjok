import { response } from "express";
import {supabase} from "../database/db.js"

export const getCarts = async (req, res) => {
  const { user_id } = req.params;

  try {
    const { data: existingCart, error: fetchError } = await supabase
      .from("carts")
      .select("*")
      .eq("user_id", user_id)
      .maybeSingle();

    if (fetchError && fetchError.code !== 'PGRST116') throw fetchError;

    if (existingCart) {
      return res.status(200).json(existingCart);
    }

    const { data: newCart, error: insertError } = await supabase
      .from("carts")
      .insert({ user_id })
      .select()
      .single();

    if (insertError) throw insertError;

    return res.status(201).json({
      ...newCart,
      message: "Cart created for new user",
    });
  } catch (error) {
    console.error("Error fetching/creating cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createCart = async (req, res) => {
  const { user_id } = req.params;
  try {
    const { data: cart, error } = await supabase
      .from("carts")
      .insert({ user_id })
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ message: "Cart created", cart });
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCartItems = async (req, res) => {
  const { cart_id } = req.params
try { 
    const { data: cartItems, error } = await supabase
      .from("cart_items")
      .select(`
    cart_item_id,
        quantity,
        cart_id,
        products!product_id (
          product_name,
          price,
          img_url,
          stock
        )
  `).eq("cart_id", cart_id);

    if (error) throw error;

    res.status(200).json(cartItems);
  } catch (error) {
        console.error("Error fetching cart items:", error)
        res.status(500).json({ error: "Internal server error" })
  }
}

export const addCartItem = async (req, res) => {
  const { cartId } = req.params;
  const { product_id, quantity } = req.body;
  
  try {
   const { data: cartItem, error } = await supabase
      .from("cart_items")
      .insert({ cart_id: cartId, product_id, quantity })
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ message: "Item added to cart", cartItem });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
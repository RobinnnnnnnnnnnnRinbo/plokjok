import {supabase} from "../database/db.js"

export const getCarts = async (req, res) => {
  const { user_id } = req.params;
  try {

    let result = await supabase.query("SELECT * FROM carts WHERE user_id = $1", [user_id]);
    
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Cart not found" });
      return;
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching/creating cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createCart = async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await supabase.query(`
      INSERT INTO carts (user_id) 
      VALUES ($1) 
      ON CONFLICT (user_id) DO NOTHING 
      RETURNING *
    `, [user_id]);

    if (result.rows.length === 0) {
      const existingCart = await supabase.query(
        "SELECT * FROM carts WHERE user_id = $1", 
        [user_id]
      );
      return res.status(200).json(existingCart.rows[0]); // Return existing cart
    }
    
    res.status(201).json(result.rows[0]); // New cart created
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCartItems = async (req, res) => {
  const { cart_id } = req.params
try { 
    const result = await supabase.query(
      "SELECT ci.cart_item_id, ci.quantity, ci.created_at, p.product_id, p.product_name, p.price, p.img_url FROM cart_items ci JOIN products p ON ci.product_id = p.product_id WHERE ci.cart_id = $1",
      [cart_id]
    );
    res.json(result.rows)
  } catch (error) {
        console.error("Error fetching cart items:", error)
        res.status(500).json({ error: "Internal server error" })
  }
}

export const addCartItem = async (req, res) => {
  const { cartId } = req.params;
  const { product_id, quantity } = req.body;
  
  try {
    const result = await supabase.query(`
      INSERT INTO cart_items (quantity, cart_id, product_id) 
      VALUES ($1, $2, $3)
      ON CONFLICT (cart_id, product_id) 
      DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity
      RETURNING *
    `, [quantity, cartId, product_id]);
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
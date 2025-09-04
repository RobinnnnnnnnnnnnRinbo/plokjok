import {pool} from "../database/db.js"

export const getCarts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM carts")
    res.json(result.rows[0])
  } catch (error) {
    console.error("Error fetching carts:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
export const getCartItems = async (req, res) => {
  const { cart_id } = req.params
try { 
    const result = await pool.query(
         "SELECT ci.cart_items_id, ci.quantity, ci.created_at, p.product_id, p.product_name, p.price, p.img_url FROM cart_items ci JOIN products p ON ci.product_id = p.product_id WHERE ci.cart_id = $1",
        [cart_id]
    )
    res.json(result.rows)
    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Cart not found" })
    }
  } catch (error) {
        console.error("Error fetching cart items:", error)
        res.status(500).json({ error: "Internal server error" })
  }
}
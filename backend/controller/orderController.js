import { supabase } from "../database/db.js"

export const getOrders = async (req, res) => {
  try {
    const result = await supabase.query("SELECT * FROM orders")
    res.json(result.rows[0])
  } catch (error) {
    console.error("Error fetching orders:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
export const getOrdersItem = async (req, res) => {
  const { order_id } = req.params
  try {
    const result = await supabase.query(
      "SELECT * FROM order_items WHERE order_id = $1",
      [order_id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Order not found" })
    }
    res.json(result.rows)
  } catch (error) {
    console.error("Error fetching order items:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
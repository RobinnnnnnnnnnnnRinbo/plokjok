import { pool } from "../database/db.js"

export const getOrders = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM orders")
    res.json(result.rows[0])
  } catch (error) {
    console.error("Error fetching orders:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

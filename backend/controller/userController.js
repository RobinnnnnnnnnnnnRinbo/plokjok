import { pool } from "../database/db.js";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Users not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createUser = async (req, res) => {};
export const updateUser = async (req, res) => {};
export const loginUser = async (req, res) => {};
export const deleteUser = async (req, res) => {};

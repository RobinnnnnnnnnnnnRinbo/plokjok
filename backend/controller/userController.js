import debug from "debug";
import { supabase } from "../database/db.js";

const fetchUserDebug = debug("database:fetch_user");
const getIdUserDebug = debug("database:get_id_user");
const createUserDebug = debug("database:create_user");
const updateUserDebug = debug("database:update_user");
const deleteUserDebug = debug("database:delete_user");

export const getUsers = async (req, res) => {
  try {
    const { data: users, error } = await supabase
      .from("users")
      .select("*");
    if (error) throw error;
    res.status(200).json(users);
    fetchUserDebug("Successfully fetched all users.");
  } catch (error) {
    fetchUserDebug("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }}

export const getUserById = async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", req.params.user_id)
      .single();
  } catch (error) {
    
  }
}
export const createUser = async (req, res) => {
  const newUser = req.body;
  const { username, email, password } = newUser;
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, password are required" });
  }
  try {
    const result = await supabase.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
      [username, email, password]
    );
    return res
      .status(201)
      .json({ message: "User created", user: result.rows[0] });
  } catch (error) {
    createUserDebug("Error creating users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { username, email, password } = req.body;
  try {
    const result = await supabase.query(
      `UPDATE users SET username = $1, email = $2, password = $3 WHERE user_id = $4 RETURNING *`,
      [username, email, password, user_id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({
      message: "Succesfully update user.",
      updatedUser: result.rows[0],
    });
  } catch (error) {
    updateUserDebug("Error update user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", req.body.email)
      .single();
    if (error) throw error;

    if (user.password !== req.body.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    
  }
}

export const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await supabase.query(`DELETE FROM users WHERE user_id =  $1 `, [
      user_id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({
      message: "Succesfully delete user.",
      deletedUser: result.rows[0],
    });
  } catch (error) {
    deleteUserDebug("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }}


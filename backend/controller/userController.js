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

    if (users.length === 0) {
      fetchUserDebug("No users found in the database.");
      return res.status(404).json({ error: "No users found" });
    }
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
      .eq("user_id", req.params.user_id);

    if (error) throw error;

    if (user.length === 0) {
      console.log("User not found.")
      return res.status(403).json({ error: "User not found" });
    }

    res.status(200).json(user);
    getIdUserDebug(`Successfully fetched user with ID ${req.params.user_id}.`);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
export const createUser = async (req, res) => {
  try {
    const {username, email, password, user_profile_img, address_id} = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Username, email, and password are required" });
    }

    const { data: user, error } = await supabase
      .from("users")
      .insert([{ username, email, password, user_profile_img, address_id }])
      .select()
      .single();

    if (error) throw error;

      res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { username, email, password, address_id, user_profile_img } = req.body;
  try {
    const { data: user, error } = await supabase
      .from("users")
      .update({ username, email, password, address_id,  user_profile_img })
      .eq("user_id", user_id)
      .select()
      .single();
    if (error) throw error;

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User updated", user });

  } catch (error) {
    console.log("Error update user", error)
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
    const { data: user, error } = await supabase
      .from("users")
      .delete()
      .eq("user_id", user_id)
      .select()
      .single();
    if (error) throw error;

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted", user });
  } catch (error) {
    deleteUserDebug("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }}


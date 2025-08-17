import express from "express";
import {
  getUsers,
  createUser,
  getUserById,
  loginUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

// Get all users (admin only)
router.get("/", getUsers);

// Get user by ID
router.get("/:user_id", getUserById);

// Create new user (register)
router.post("/register", createUser);

// Login user
router.post("/login", loginUser);

// Update user
router.put("/:user_id", updateUser);

// Delete user
router.delete("/:user_id", deleteUser);

export default router;

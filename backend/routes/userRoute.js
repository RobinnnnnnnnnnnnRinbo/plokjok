import router from "./productRoute.js";
import {
  getUsers,
  createUser,
  getUserById,
  loginUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

// Get all users (admin only)
router.get("/", getUsers);

// Get user by ID
router.get("/:id", getUserById);

// Create new user (register)
router.post("/register", createUser);

// Login user
router.post("/login", loginUser);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

export default router;

import express from "express"
import { getCarts, getCartItems } from "../controller/cartController.js"

const router = express.Router()
router.get("/", getCarts)
router.get("/:cart_id", getCartItems)

export default router
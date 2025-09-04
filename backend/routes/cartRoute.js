import express from "express"
import { getCarts, getCartItems, addCartItem } from "../controller/cartController.js"

const router = express.Router()
router.get("/", getCarts)
router.get("/:cart_id", getCartItems)
router.post("/add_to_cart/:cart_id", addCartItem)

export default router
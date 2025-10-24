import express from "express"
import { getCarts, getCartItems, addCartItem, createCart } from "../controller/cartController.js"

const router = express.Router()
router.get("/user/:user_id", getCarts)
router.post("/user/:user_id", createCart)
router.get("/:cart_id/items", getCartItems)
router.post("/:cartId/items", addCartItem)

export default router
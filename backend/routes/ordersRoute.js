import express from "express"
import { getOrders, getOrdersItem } from "../controller/orderController.js"

const router = express.Router()

router.get("/", getOrders)
router.get("/:order_id", getOrdersItem)

export default router

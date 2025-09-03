import express from "express"
import { getOrders } from "../controller/orderController.js"

const router = express.Router()

router.get("/", getOrders)

export default router

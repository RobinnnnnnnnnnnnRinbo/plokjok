import express from "express"
import { getPayment } from "../controller/paymentController.js"

const router = express.Router()

router.get("/", getPayment)

export default router

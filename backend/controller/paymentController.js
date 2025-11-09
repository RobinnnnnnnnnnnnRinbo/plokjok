import { supabase } from "../database/db.js"

export const getPayment = async (req, res) => {
  try {
    const { data: payment, error } = await supabase.from("payments").select("*").single();

    if (error) throw error;
    if (!payment || payment.length === 0) {
      console.log("Payment not found")
      res.status(404).json({ error: "Payment not found" })
    }

    res.status(200).json(payment)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}


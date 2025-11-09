import { supabase } from "../database/db.js"

export const getOrders = async (_, res) => {
  try {

    const { data: order, error } = await supabase.from("orders").select("*");

    console.log("supabase response:", order, error)

    if (error) throw error;
    if (!order || order.length === 0) {
      console.log("Order not found")
      res.status(404).json({ error: "No order found" })
    }
    res.status(200).json(order)
  }
  catch (error) {
    console.error("Error fetching orders:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
export const getOrdersItem = async (req, res) => {
  const { order_id } = req.params;
  try {
    const { data, error } = await supabase
      .from('order_items')
      .select(`
      order_id,
      quantity,
      product_variant_id,
      orders!inner (
        user_id,
        shipping_address_id,
        addresses!orders_shipping_address_id_fkey!inner (
          street,
          province,
          city
        )
      ),
      product_variants!inner (
        product_id,
        sku,
        price,
        products!inner (
          product_name,
          brand
        )
      )
    `)
      .eq('order_id', order_id);

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    if (!data || data.length === 0) {
      console.log("Order item not found");
      res.status(404).json({ error: "Order items not found" })
    }
    return res.status(200).json(data)
  } catch (error) {
    console.log("Error fetchhing order_item: ", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

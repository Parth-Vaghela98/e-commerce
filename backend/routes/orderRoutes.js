const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/place-order", async (req, res) => {
  try {
    console.log("ORDER DATA:", req.body);   // 👈 ADD THIS

    const order = new Order(req.body);
    await order.save();

    res.status(201).json({ message: "Order saved in MongoDB" });

  } catch (err) {
    console.log("ORDER ERROR:", err);   // 👈 IMPORTANT
    res.status(500).json({ message: err.message });
  }
});

// GET ORDERS
router.get("/", async (req, res) => {
  const orders = await Order.find().populate("userId", "name email");
  res.json(orders);
});

module.exports = router;
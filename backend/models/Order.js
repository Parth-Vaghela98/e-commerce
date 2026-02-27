const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: Number,
  address: String,
  city: String,
  pincode: String,
  phone: String,
  paymentMethod: String,
});

module.exports = mongoose.model("Order", orderSchema);
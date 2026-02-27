import { useLocation } from "react-router-dom";
import "./addcard.css";
import { useState } from "react";
import jsPDF from "jspdf";
import axios from "axios";

function Add() {
  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = product ? product.price * quantity : 0;

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmOrder = async () => {
    if (!product) {
      alert("No product to order.");
      return;
    }

    if (
      !formData.name ||
      !formData.address ||
      !formData.city ||
      !formData.pincode ||
      !formData.phone
    ) {
      alert("Please fill all shipping details before confirming the order.");
      return;
    }

    try {
      // 👉 Get logged user
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first ❌");
        return;
      }

      // 👉 FIXED userId
      const orderData = {
        userId: user._id || user.user?._id,   // ✅ important fix
        products: [
          {
            name: product.name,
            price: product.price,
            quantity: quantity,
          },
        ],
        totalAmount: totalPrice,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
        phone: formData.phone,
        paymentMethod: "COD",
      };

      console.log("Sending Order Data:", orderData);

      // 👉 Save order 
      await axios.post(
        "http://localhost:5000/api/orders/place-order",
        orderData
      );

      alert("Order saved successfully ✅");

      const doc = new jsPDF();

      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("INVOICE", 14, 20);

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.text("E-Commerce Pvt. Ltd.", 14, 28);
      doc.text("123 Market Street, Ahmedabad, India", 14, 34);
      doc.text("Email: support@ecommerce.com | Phone: +91 9876543210", 14, 40);
      doc.line(14, 44, 196, 44);

      doc.setFont("helvetica", "bold");
      doc.text("Bill To:", 14, 54);
      doc.setFont("helvetica", "normal");
      doc.text(formData.name, 14, 60);
      doc.text(formData.address, 14, 66);
      doc.text(`${formData.city} - ${formData.pincode}`, 14, 72);
      doc.text(`Phone: ${formData.phone}`, 14, 78);

      doc.setFont("helvetica", "bold");
      doc.text("Order Summary", 14, 92);
      doc.setFont("helvetica", "normal");
      doc.line(14, 94, 196, 94);

      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("Product", 14, 104);
      doc.text("Qty", 120, 104);
      doc.text("Price", 140, 104);
      doc.text("Total", 170, 104);
      doc.line(14, 106, 196, 106);

      doc.setFont("helvetica", "normal");
      doc.text(product.name, 14, 116);
      doc.text(String(quantity), 122, 116);
      doc.text(`₹${product.price}`, 140, 116);
      doc.text(`₹${totalPrice}`, 170, 116);

      doc.line(14, 122, 196, 122);
      doc.setFont("helvetica", "bold");
      doc.text(`Grand Total: ₹${totalPrice}`, 140, 132);

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text("Thank you for shopping with us!", 14, 150);
      doc.text("This is a computer-generated invoice.", 14, 156);

      doc.save(`${formData.name}_Invoice.pdf`);

    } catch (error) {
      console.log(error);
      alert("Order failed ❌");
    }
  };

  return (
    <>
      <div className="head">
        <h1>Shopping Cart</h1>
      </div>

      {product ? (
        <div className="cart-item-container">
          <div className="item-main-details">
            <div className="item-img">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="item-info-wrapper">
              <p className="item-name">{product.name}</p>
              <p className="item-meta">
                by {product.brand || "Brand"} | {product.category || "Category"}
              </p>

              <div className="item-actions">
                <div className="quantity-selector">
                  <button className="qty-btn" onClick={decreaseQty}>-</button>
                  <span className="qty-display">{quantity}</span>
                  <button className="qty-btn" onClick={increaseQty}>+</button>
                </div>
              </div>

              <div className="item-price-details">
                <p className="p">Price:</p>
                <p className="current-price">₹{totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "50px" }}>No items in cart.</p>
      )}

      <div className="place-order-container">
        <h1>Place Your Order</h1>

        {product && (
          <div className="order-summary">
            <img src={product.image} alt={product.name} className="order-img" />
            <div className="order-details">
              <h3>{product.name}</h3>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>
              <p>Quantity: {quantity}</p>
              <p><strong>Total: ₹{totalPrice}</strong></p>
            </div>
          </div>
        )}

        <div className="shipping-info">
          <h2>Shipping Address</h2>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} />
          <input type="text" name="city" placeholder="City" onChange={handleChange} />
          <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
        </div>

        <button className="confirm-btn" onClick={handleConfirmOrder}>
          Confirm Order & Download Invoice PDF
        </button>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Thank you for shopping with us ❤️
        </p>
      </div>
    </>
  );
}

export default Add;

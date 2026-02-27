import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const submit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/register",
      form
    );
    alert(res.data.message);
  } catch (err) {
    alert(err.response?.data?.message || "Signup failed");
  }
};
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <p>Join Ashion and start shopping 🛍️</p>

        <form onSubmit={submit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">Signup</button>
        </form>

        <p className="signin-link">
          Already have account? <a href="/signin">Signin</a>
        </p>
      </div>
    </div>
  );
}

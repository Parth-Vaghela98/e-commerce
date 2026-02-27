import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/signin",
      { email, password }
    );

    alert(res.data.message || "Login successful");

    // optional → save token/user
    localStorage.setItem("user", JSON.stringify(res.data));

  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In</h2>
        <p>Welcome back! Please login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>

            <Link to="/forgot-password" className="forgot">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn">
            Sign In
          </button>

          <p className="register">
            Don’t have an account? <Link to="/signup">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;

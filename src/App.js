import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product_deatailling from "./Components/Home/Product_deatailling/pro-deatailling";
import Signin from "./Components/Signin/signin";
import Add from "./Components/Home/Addcard/addcard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product_details" element={<Product_deatailling />} />
      <Route path="/addcart" element={<Add />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;

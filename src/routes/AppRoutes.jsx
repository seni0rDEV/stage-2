// import React from "react";
import {  Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
import Store from "../pages/Store";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
// import Footer from "../components/Footer";
// import { CartProvider } from "../context/CartContext";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/store" element={<Store />} />
      {/* <Route path="/cart" element={<CartProvider />} */}
    </Routes>
  );
}

export default AppRoutes;

// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
// import Store from "./pages/Store";
// import CartItems from "./components/CartItems";
function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        {/* <CartItems /> */}
        {/* <Store /> */}
        <AppRoutes />
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;

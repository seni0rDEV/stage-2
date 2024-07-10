// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import CartItems from "../components/CartItems";
// import "./Cart.css";

// const Cart = () => {
//   const { cart } = useContext(CartContext);

//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div>
//       <div className="banner">Your Cart</div>
//       <div className="cart-items-container">
//         {cart.map((item) => (
//           <CartItems
//             key={item.id}
//             id={item.id}
//             name={item.name}
//             size={item.size}
//             quantity={item.quantity}
//             img={item.img}
//             price={item.price}
//           />
//         ))}
//       </div>
//       <div className="checkout-section">
//         <h2>Checkout</h2>
//         <p>Total Items: {totalItems}</p>
//         <p>Total Price: ${totalPrice.toFixed(2)}</p>
//         <button className="checkout-button">Proceed to Checkout</button>
//       </div>
//       <div className="subscribe-section">
//         <h2>Subscribe to our News Update</h2>
//         <p>By subscribing to our news you get 10% off on your first order</p>
//         <div className="subscribe-form">
//           <input type="email" placeholder="Enter your email" />
//           <button>Subscribe</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItems from "../components/CartItems";
import "./Cart.css";
// import Banner from "../components/Banner";
// import Subscribe from "../components/Subscribe";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      {/* <Banner /> */}
      {cart.map((item) => (
        <CartItems key={item.id} {...item} />
      ))}
      <div className="checkout-section">
        <p>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p>Number of Products: {cart.length}</p>
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
        
      </div>
      
    </div>
  );
};

export default Cart;

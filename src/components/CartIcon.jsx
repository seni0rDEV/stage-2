import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Correct import for FontAwesomeIcon
import { CartContext } from "../context/CartContext";
import "./CartIcon.css";

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} />{" "}
      {/* Use FontAwesomeIcon with faShoppingCart */}
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
};

export default CartIcon;

import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import "./CartItems.css";

const CartItems = ({ id, name, img, size, quantity, price }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const handleIncrease = () => {
    increaseQuantity(id);
  };

  const handleDecrease = () => {
    decreaseQuantity(id);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <div className="cart-item">
      <img src={img} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-size">Size: {size}</div>
        <div className="cart-item-quantity">
          Quantity: {quantity} <button onClick={handleIncrease}>+</button>
          <button onClick={handleDecrease}>-</button>
        </div>
        <div className="cart-item-price">Price: ${price}</div>
      </div>
      <div className="cart-item-actions">
        <button className="remove-button" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItems;

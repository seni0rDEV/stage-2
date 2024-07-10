import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = 9; // 10% of $90
  const shipping = 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="checkout-container">
      <div className="payment-information">
        <h2>Payment Information</h2>
        <div className="apply-discount">
          <h3>Apply Discount</h3>
          <p>
            Discount with subscription points <br />
            Make use of your rhapsody points as discount <input type="radio" />
          </p>
          <a href="#">Login to retrieve your points</a>
        </div>
        <div className="payment-method">
          <h3>Pay with</h3>
          <p>
            <input type="radio" name="payment" /> Debit/Credit Card
          </p>
          <p>
            <input type="radio" name="payment" /> Pay on Delivery
          </p>
        </div>
        <div className="card-inputs">
          <h3>Enter Card Information</h3>
          <p>
            Card Holders Name: <br /> <input type="text" />
          </p>
          <p>
            Card Number: <br /> <input type="text" />
          </p>
          <p>
            Expiry Date: <br /> <input type="text" />
          </p>
          <p>
            CVV: <br /> <input type="text" />
          </p>
        </div>
        <div className="price-details">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (10%): ${tax.toFixed(2)}</p>
          <p>Shipping: ${shipping.toFixed(2)}</p>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="pay-button">Pay</button>
        </div>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.img} alt={item.name} className="order-item-image" />
            <div className="order-item-details">
              <p>{item.name}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="delivery-inputs">
        <h2>Delivery Information</h2> 
        <p>
          First Name: <br /> <input type="text" className="input-fun" />
        </p>
        <p>
          Last Name: <br /> <input type="text" className="input-fun" />
        </p>
        <p>
          Address: <br /> <input type="text" className="input-fun" />
        </p>
        <p>
          City/Town: <br /> <input type="text" className="input-fun" />
        </p>
        <p>
          Zip Code: <br /> <input type="text" className="input-fun" />
        </p>
        <p>
          Mobile Number: <br /> <input type="text" className="input-fun" />
        </p>
        <p>
          Email Address: <br /> <input type="text" className="input-fun" />
        </p>
      </div>
    </div>
  );
}

export default Checkout;

// import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartIcon from "./CartIcon";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li className="list_one">
            <Link to="/store">
              TIMBU <br /> cloud shop
            </Link>
          </li>
          <li className="list_two">
            <Link to="/store">Store front</Link>
          </li>
          <li className="search-bar-container">
            <input type="text" placeholder="search" className="search-bar" />
            {/* <FontAwesomeIcon icon={faShoppingCart} className="search-icon" /> */}
          </li>
          <li className="cart-icon">
            <Link to="/cart">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

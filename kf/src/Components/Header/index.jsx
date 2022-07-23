import React from "react";
import "./Header.css";
import logo from "../../Assest/img/kfc.jpg";
import BasicUsage from "../Pop/Modal";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div id="navbar">
        <div>
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>

        <div class="navItemLeft">
          <Link to="/menu">
            <a>Menu</a>
          </Link>
          <a href="/deals">Deals</a>
        </div>

        <div class="navItemRight">
          <div class="accountIcon">
            <img src="https://i.ibb.co/zR1JpWH/Account-Icon.jpg" />
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </div>

          <div class="bucketIconDiv">
            <span id="priceUpdate">₹0</span>
            <div class="bucketIcon">
              <img src="https://i.ibb.co/ygnYs9m/bucket-cart-icon.jpg" />
              <div id="cartIconCount">0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        <h1>
          <i class="bi bi-geo-alt-fill"></i> LET'S ORDER FOR DELIVERY, PICK UP,
          OR DINE-IN
        </h1>
        <BasicUsage />

        {/* <button 
        className="btn ">Start Order</button> */}
      </div>
    </div>
  );
};
export default Header;

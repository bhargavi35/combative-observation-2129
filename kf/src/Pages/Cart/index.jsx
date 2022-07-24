import React from "react";
import "./cart.css"
const Cart = () => {
  return (
    <div className="cartWrapper">
      <button className="checkout_btn" onclick="paymentPage()">
        Checkout
      </button>
      <div className="cart_items">
        <div className="card">
          <img
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000920.jpg?ver=17.57"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">Friendship Bucket</h3>
            <ul className="unls">
              <li>Nonveg</li>
              <br />
              <li>serves 2</li>
            </ul>
            <p className="price">₹ 699.00</p>

            <p className="card-text">
              Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken
              Strips & a Large Popcorn [Serves 3]
            </p>
            <div className="btn-wrapper d-flex">
              <button type="button" className="btn btn-danger  btn-wrapper">
                Remove from Cart
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K350.jpg?ver=17.57"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">Pepsi PET</h3>
            <ul className="unls">
              <li>Veg</li>
              <br />
              <li>serves 2</li>
            </ul>
            <p className="price">₹ 349.00</p>

            <p className="card-text">
              Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2
              Hot Wings & Pepsi{" "}
            </p>
            <div className="btn-wrapper d-flex">
              <button type="button" className="btn btn-danger  btn-wrapper">
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./menu.css";
import thre from "../../Assest/img/three.svg";
import { useEffect, useState } from "react";
// import Loader from "../Loader";
import Data from "../../Components/Data";

const Menu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5050/items`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        console.log(res);
      });
  }, []);
  return (
    <>
      <div className="menuWrapper">
        {/* <Loader/> */}
        <Header />
        <div id="main_container">
          <div class="left-menu-section">
            <div class="menu-container">
              <div>
                <img class="threeLine" src={thre} alt="" />
              </div>

              <h1 class="kfc-menu">KFC MENU</h1>

              <div class="outer-ul">
                <h6>Chicken Buckets</h6>
                <h6>New Launch</h6>
                <h6>Biryani Buckets</h6>
                <h6>Box Meals</h6>
                <h6>Burgers</h6>
                <h6>STAY HOME SPECIALS</h6>
                <h6>Snacks</h6>
                <h6>Beverages</h6>
              </div>
            </div>
          </div>
        </div>
        <Data />
      </div>
      <Footer />
    </>
  );
};

export default Menu;

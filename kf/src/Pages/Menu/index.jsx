import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./menu.css";
import thre from "../../Assest/img/three.svg";
import { useEffect, useState, useSearchParams } from "react";

const Menu = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(Number(searchPara.get("page")) || 1);
  const [searchPara, setSearchPara] = useSearchParams();
  const [text, setText] = useState(searchPara.get("q") || "");

  useEffect(() => {
    setSearchPara({
      page,
      q: text,
    });
  }, [page, text]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/Items=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        console.log(res);
      });
  }, [page]);
  return (
    <>
      <div className="menuWrapper">
        <Header />
        <div id="main_container">
          <div class="left-menu-section">
            <div class="menu-container">
              <div class="strips">
                <span class="strip-lines"></span>
                <span class="strip-lines"></span>
                <span class="strip-lines"></span>
              </div>
              <div>
                <img class="threeLine" src={thre} alt="" />
              </div>

              <h1 class="kfc-menu">KFC MENU</h1>

              <div class="outer-ul">
                <h5>Chicken Buckets</h5>
                <h5>New Launch</h5>
                <h5>Biryani Buckets</h5>
                <h5>Box Meals</h5>
                <h5>Burgers</h5>
                <h5>STAY HOME SPECIALS</h5>
                <h5>Snacks</h5>
                <h5>Beverages</h5>
              </div>
            </div>
          </div>
        </div>
       
        <div id="popup_container">
          <div id="popup_left">
            <div>
              <img class="threeLine" src={thre} alt="" />
            </div>
          </div>
          <div id="popup_right">
            <div id="popup_search-bar">
              <div>
                <img
                  src="https://online.kfc.co.in/static/media/searchIcon.0e00b33c.svg"
                  alt=""
                />
              </div>
              <input
                type="text"
                id="popup_searched_item"
                placeholder="Search our menu"
              />
            </div>
            <hr />
            <div id="searched_food"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;

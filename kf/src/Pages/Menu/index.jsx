import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./menu.css"

const Menu = () => {
    return (
        <>
            <div className="menuWrapper">
                <Header/>
                <div id="main_container">
                    <div class="left-menu-section">
                        <div class="menu-container">
                            <div class="strips">
                                <span class="strip-lines"></span>
                                <span class="strip-lines"></span>
                                <span class="strip-lines"></span>
                            </div>

                            <h1 class="kfc-menu">KFC MENU</h1>

                            <div class="outer-ul">
                                <p>
                                    <a href="#chicken_bucket">Chicken Buckets</a>
                                </p>
                                <p>
                                    <a href="#biryani_bucket">Biryani Buckets</a>
                                </p>
                                <p>
                                    <a href="#box_meals">Box Meals</a>
                                </p>
                                <p>
                                    <a href="#burgers">Burgers</a>
                                </p>
                                <p>
                                    <a href="#stay_home_special">Stay Home Specials</a>
                                </p>
                                <p>
                                    <a href="#snacks">Snacks</a>
                                </p>
                                <p>
                                    <a href="#beverages">Beverages</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="right-menu-section">
                        <div id="main_search-bar">
                            <div>
                                <img
                                    src="https://online.kfc.co.in/static/media/searchIcon.0e00b33c.svg"
                                    alt=""
                                />
                            </div>
                            <input
                                type="text"
                                id="main_searched_item"
                                placeholder="Search our menu"
                            />
                        </div>
                        <hr />
                        <div id="chicken_bucket">
                            <h2>
                                <a name="chicken_bucket">CHICKEN BUCKET</a>
                            </h2>
                            <div id="c_b"></div>
                        </div>
                        <div id="biryani_bucket" class="image_size">
                            <h2>
                                <a name="biryani_bucket">BIRYANI BUCKET</a>
                            </h2>
                            <div id="b_b"></div>
                        </div>
                        <div id="box_meals" class="image_size">
                            <h2>
                                <a name="box_meals">BOX MEALS</a>
                            </h2>
                            <div id="b_m"></div>
                        </div>
                        <div id="burgers" class="image_size">
                            <h2>
                                <a name="burgers">BURGERS</a>
                            </h2>
                            <div id="bgr"></div>
                        </div>
                        <div id="stay_home_specials" class="image_size">
                            <h2>
                                <a name="stay_home_special">STAY HOME SPECIALS</a>
                            </h2>
                            <div id="s_h"></div>
                        </div>
                        <div id="snacks" class="image_size">
                            <h2>
                                <a name="snacks">SNACKS</a>
                            </h2>
                            <div id="snk"></div>
                        </div>
                        <div id="beverages" class="image_size">
                            <h2>
                                <a name="beverages">BEVERAGES</a>
                            </h2>
                            <div id="bvg"></div>
                        </div>
                    </div>
                </div>
                <div id="popup_container">
                    <div id="popup_left">
                        <div class="strips">
                            <span class="strip-lines"></span>
                            <span class="strip-lines"></span>
                            <span class="strip-lines"></span>
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
            <Footer/>

        </>
    );
};

export default Menu;

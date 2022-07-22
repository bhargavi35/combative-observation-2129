import React from "react";
import thre from "../../Assest/img/three.svg";
import chkn from "../../Assest/card/bckt.jpg";
import brgr from "../../Assest/card/brgr.jpg";
import brni from "../../Assest/card/brni.jpg";
import last from "../../Assest/card/last.jpg";
import snk from "../../Assest/card/snk.jpg";
import sthm from "../../Assest/card/stthm.jpg";
import nwl from "../../Assest/card/new.jpg";
import meal from "../../Assest/card/meal.jpg";
import ofr from "../../Assest/card/ofr.jpg";
import ofr1 from "../../Assest/card/ofr1.jpg";
import ofr2 from "../../Assest/card/ofr2.jpg";
import ofr3 from "../../Assest/card/ofr3.jpg";
import BasicUsage from "./Modal";


import "./card.css";
const Card = () => {
    return (
        <>
            <div class="start">
                <div>
                    <img class="threeLines" src={thre} alt="" />
                </div>
                <div class="startText">WELCOME TO KFC!</div>
            </div>

            {/* <!-- Browse Categories --> */}
            <div class="categories">
                <h2 class="browseCategories">BROWSE CATEGORIES</h2>
                <div class="horizontalLine"></div>
            </div>

            <div class="menuCardContainer">
                <a href="menu.html#chicken_bucket" class="menuCard">
                    <img src={chkn} />
                    <section class="menuText">Chicken Buckets</section>
                </a>
                <a href="menu.html#newlaunch_bucket" class="menuCard">
                    <img src={nwl} />
                    <section class="menuText">New Launch</section>
                </a>
                <a href="menu.html#biryani_bucket" class="menuCard">
                    <img src={brni} />
                    <section class="menuText">Biryani Buckets</section>
                </a>

                <a href="menu.html#box_meals" class="menuCard">
                    <img src={meal} />
                    <section class="menuText">Box Meals</section>
                </a>
            </div>

            <div class="menuCardContainer">
                <a href="menu.html#burgers" class="menuCard">
                    <img src={brgr} />
                    <section class="menuText">Burgers</section>
                </a>
                <a href="menu.html#stay_home_special" class="menuCard">
                    <img src={sthm} />
                    <section class="menuText">Stay Home Specials</section>
                </a>

                <a href="menu.html#snacks" class="menuCard">
                    <img src={snk} />
                    <section class="menuText">Snacks</section>
                </a>

                <a href="menu.html" class="menuCardLast">
                    <img src={last} />
                    <section class="menuTextLast">
                        View All Menu <strong>&#x2192;</strong>
                    </section>
                </a>
            </div>

            <div class="footer">
                <div>
                    <img class="threeLine" src={thre} alt="" />
                </div>

                <div class="offers">
                    <div class="offersAndDeals">
                        <h2>OFFERS & DEALS</h2>
                    </div>
                    <a href="">
                        <section class="viewAll">
                            View All Deals <i class="bi bi-arrow-right"></i>
                        </section>
                    </a>
                </div>

                <div class="btnLeftDiv">
                    <button class="btnLeft">
                        <p>&#8249;</p>
                    </button>
                </div>

                <div class="cardsContainer">
                    <div class="card">
                        <div class="cardImg">
                            <img src={ofr} />
                        </div>

                        <div class="cardContentTitle">
                            1 Pc free Chicken Zinger on a cart value of 399 or above on first
                            order. Only for registered users.
                        </div>
                        <div class="cardContent">
                            1 Pc free Chicken Zinger on a cart value of 399 or above on first
                            order. Only for registered users.
                        </div>
                        <div class="cardButton">
                            <a href="javascript:myBlurFunction(1);">
                                <div class="offerViewDetails">View Details</div>
                            </a>

                            {/* <a href="startOrder.html">
                  <button class="redeemButton">Redeem</button>
                </a>
                 */}
                            <BasicUsage />
                            {/* <button class="redeemButton" onClick={BasicUsage}>Redeem</button> */}
                        </div>
                    </div>

                    <div class="card">
                        <div class="cardImg">
                            <img src={ofr1} />
                        </div>

                        <div class="cardContentTitle">
                            1 Pc free Veg Zinger on a cart value of 399 or above on first
                            order. Only for registered users
                        </div>
                        <div class="cardContent">
                            1 Pc free Veg Zinger on a cart value of 399 or above on first
                            order. Only for registered users
                        </div>
                        <div class="cardButton">
                            <a href="javascript:myBlurFunction(1);">
                                <div class="offerViewDetails">View Details</div>
                            </a>
                            {/* <a href="">
                  <button class="redeemButton">Redeem</button>
                </a> */}
                            <BasicUsage />
                        </div>
                    </div>

                    <div class="card">
                        <div class="cardImg">
                            <img src={ofr2} />
                        </div>
                        <div class="cardContentTitle">
                            Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs
                            499 or more. Applicable on 2nd & 3rd order for signed in user.
                        </div>
                        <div class="cardContent">
                            Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs
                            499 or more. Applicable on 2nd & 3rd order for signed in user.
                        </div>
                        <div class="cardButton">
                            <a href="javascript:myBlurFunction(1);">
                                <div class="offerViewDetails">View Details</div>
                            </a>
                            {/* <a href="">
                  <button class="redeemButton">Redeem</button>
                </a> */}
                            <BasicUsage />
                        </div>
                    </div>

                    <div class="card">
                        <div class="cardImg">
                            <img src={ofr3} />
                        </div>
                        <div class="cardContentTitle">
                            Upto Rs 100 off on min cart value of Rs 599 or more . Applicable
                            on 4th order onwards for signed in user.
                        </div>
                        <div class="cardContent">
                            Upto Rs 100 off on min cart value of Rs 599 or more . Applicable
                            on 4th order onwards for signed in user.
                        </div>
                        <div class="cardButton">
                            <a href="javascript:myBlurFunction(1);">
                                <div class="offerViewDetails">View Details</div>
                            </a>
                            {/* <a href="">
                  <button class="redeemButton">Redeem</button>
                </a> */}
                            <BasicUsage />
                        </div>
                    </div>

                    <div class="btnRightDiv">
                        <button class="btnRight">
                            <p>&#8250;</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

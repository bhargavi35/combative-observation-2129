import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./deals.css";
import thre from "../../Assest/img/three.svg";
import deal from "../../Assest/gif/deal.jpg";
import deal1 from "../../Assest/gif/deal2.jpg";
import deal2 from "../../Assest/gif/deal3.jpg";
import deal3 from "../../Assest/gif/deal4.jpg";
const Deals = () => {
    return (
        <div className="dealWrapper">
            <Header />

            <div id="container1">
                <h2 class="deals">DEALS & OFFERS </h2>
            </div>

            <div id="container2">
                <div>
                    <img class="threeLines" src={thre} alt="" />
                </div>
                <h2> OFFERS For You </h2>
            </div>
            <div id="v1">
                <header class="header">
                    <h2>OFFERS & DEALS</h2>
                    <button onclick="v1(false)"></button>
                </header>
                <section>
                    <h3>
                        ADD 2 PC HOT N CRISPY CHICKEN @ JUST RS 99 ON MIN CART VALUE OF RS
                        499 OR MORE. APPLICABLE ON 2ND & 3RD ORDER FOR SIGNED IN USER.
                    </h3>
                    <p>Valid to 31/12/30</p>
                    <p>
                        Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs
                        499 or more. Applicable on 2nd & 3rd order for signed in user.
                    </p>
                </section>
                <footer>
                    <button>Redeem</button>
                </footer>
            </div>
            <div id="main">
                <div class="main-div1">
                    {/* <img
                        src="https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg"
                        alt=""
                    /> */}
                    <h3 id="a">SELECT A KFC TO SEE LOCAL OFFERS</h3>
                    <button role="button" class="button1">
                        Find a KFC
                    </button>
                </div>

                <div class="main-div3">
                    <img src={deal} alt="" />
                    <div class="bg">
                        <h2>Add 2 Pc Hot n Crispy...</h2>
                        <h5>
                            Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs
                            499 or more. Applicable on 2nd & 3rd order for signed in user.
                        </h5>
                        <a href="javascript:myBlurFunction(1);">
                            <div class="offerViewDetails">View Details</div>
                        </a>
                        <button className="btn">Redeem</button>{" "}
                    </div>
                </div>
                <div class="main-div4">
                    <img src={deal1} alt="" />
                    <div class="bg">
                        <h2>Upto Rs 100 off on min...</h2>
                        <h5>
                            Upto Rs 100 off on min cart value of Rs 599 or more . Applicable
                            on 4th order onwards for signed in user.
                        </h5>
                        <a href="javascript:myBlurFunction(1);">
                            <div class="offerViewDetails">View Details</div>
                        </a>
                        <button className="btn">Redeem</button>{" "}
                    </div>
                </div>
                <div class="main-div5">
                    <img src={deal2} alt="" />
                    <div class="bg">
                        <h2>1 Pc free Chicken...</h2>
                        <h5>
                            {" "}
                            1 Pc free Chicken Zinger on a cart value of 399 or above on first
                            order. Only for registered users.
                        </h5>
                        <a href="javascript:myBlurFunction(1);">
                            <div class="offerViewDetails">View Details</div>
                        </a>
                        <button className="btn">Redeem</button>{" "}
                    </div>
                </div>
                <div class="main-div6">
                    <img src={deal3} alt="" />
                    <div class="bg">
                        <h2>1 Pc free Veg Zinger...</h2>
                        <h5>
                            1 Pc free Veg Zinger on a cart value of 399 or above on first
                            order. Only for registered users
                        </h5>
                        <a href="javascript:myBlurFunction(1);">
                            <div class="offerViewDetails">View Details</div>
                        </a>
                        <button className="btn">Redeem</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Deals;

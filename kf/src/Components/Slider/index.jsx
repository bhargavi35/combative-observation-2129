import React from "react";
import slide from "../../Assest/img/slide.jpg";
import slide2 from "../../Assest/img/slide2.jpg";
import slide3 from "../../Assest/img/slide3.jpg";

import "./slide.css";
const Slider = () => {
    return (
        <div className="sliderWrapper">
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
            >
                <ol class="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        class="active"
                    ></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={slide} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <div className="box"style={{color:"white"}}>
                                <p>They’re Back!</p>
                                <h1>$5 Mac & Cheese Bowls</h1>
                                <p>
                                    Your favorite cheesy side-turned-main-dish is finally back!
                                    Get your hands on a tasty Mac & Cheese bowl for $5 today.
                                </p>
                                <button>
                                    Order Now<i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="10000">
                        <img src={slide2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <div className="box">
                                <p>Limited time offer</p>
                                <h1>FREE BEVERAGE BUCKET</h1>
                                <p>
                                    12 pieces of our freshly prepared World Famous Chicken, 3
                                    large sides of your choice, and 6 biscuits. Now includes a
                                    FREE Beverage Bucket for a limited time only!
                                </p>
                                <button>
                                    Order Now<i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="10000">
                        <img src={slide3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <div className="box">
                                {" "}
                                <p>Free Delivery till 7.24!</p>
                                <h1>YOUR FAVORITES—DELIVERED FREE!</h1>
                                <p>
                                    What are you waitin’ for?! Get free delivery on all your fried
                                    favorites when you order on the KFC app or KFC.com.
                                </p>
                                <button>
                                    Order Now<i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Slider;

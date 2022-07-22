import React from "react";
import logo from "../../Assest/img/kfc.jpg";
import "./login.css";

const Login = () => {
    return (
        <div className="loginWrapper">
            <div id="container">
                <div id="sign">Sign in / Sign up</div>
                <div>
                    <img  src={logo} alt="" />
                </div>
                <div id="h3">
                    <h5>LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE </h5>
                    <h5>NUMBER!</h5>
                </div>
                <input type="number" id="inputNumber" placeholder="Phone Number*" />
                <p>
                    By "logging in to KFC",you agree to our{" "}
                    <button id="privacy" onclick="privacy()">
                        Privacy Policy
                    </button>{" "}
                    and{" "}
                    <button id="condition" onclick="conditions()">
                        Terms & Conditions.
                    </button>
                </p>
                <button onclick="goToName()" id="code">
                    {" "}
                    Send Me a Code
                </button>
                <div id="or">
                    <div class="orleft"></div>
                    <div class="orcenter">or</div>
                    <div class="orright"></div>
                </div>
                <a href="">
                    <button id="guest">Skip,Continue As Guest</button>
                </a>
            </div>
        </div>
    );
};

export default Login;

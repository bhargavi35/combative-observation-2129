import React from "react";
import logo from "../../Assest/img/kfc.jpg";
import "./login.css";
import { Link } from "react-router-dom";


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
                    <h5 style={{paddingTop:"0%"}}>NUMBER!</h5>
                </div>
                <input type="number" id="inputNumber" placeholder="Phone Number*" />
                <p>
                    By "logging in to KFC",you agree to our{" "}
                    <span id="privacy" >
                        Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span id="condition" >
                        Terms & Conditions.
                    </span>
                </p>

                    <Link to="/otp"><span id="code">
                        {" "}
                        Send Me a Code
                    </span></Link>

                <p style={{paddingRight:"5%",paddingTop:"2%",paddingBottom:"0%"}}>or</p>
                 <Link to="/">
                    <button style={{paddingTop:"1%"}} id="guest">Skip,Continue As Guest</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;

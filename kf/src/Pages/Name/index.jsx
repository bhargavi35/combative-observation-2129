import React from "react";
import "./name.css"
import { Link } from "react-router-dom";

const Name = () => {
    return (
        <div className="nameWrapper">
            <div id="container">
                <h5>Sign in/Sign up</h5>
                <h3>WELCOME,</h3>
                <h3 class="h3">Thankyou for being with us!</h3>
                <p style={{ paddingRight: "8%" }}>please let us know you more.</p>
                <input type="text" id="text" placeholder="First Name" />
                <br />
                <input type="email" id="email" placeholder="Email Address" />
                <br />
                <Link to="/">    <button id="button">Submit</button>  </Link>
                <p id="or">or</p>


                <Link to="/">
                    <button id="btn">Skip,Ask Me Later</button>
                </Link>

            </div>
        </div>
    );
};

export default Name;

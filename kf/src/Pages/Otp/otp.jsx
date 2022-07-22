import logo from "../../Assest/img/kfc.jpg";
import "./otp.css";
import { Box, PinInput, PinInputField } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Otp = () => {
    const [otp, setOTP] = useState("");

    return (
        <div className="OtpWrapper">
            <div class="signIn">
                <h6>Sign in / Sign up</h6>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            <h3>WE JUST TEXTED YOU</h3>
            <p >Please enter the verification code </p>
            <a  href="">Different Number?</a>
            <br />
            <br />
            <Box>
                <PinInput value={otp} onChange={(value) => setOTP(value)} otp>
                    <PinInputField className="box" />
                    <PinInputField className="box" />
                    <PinInputField className="box" />
                    <PinInputField className="box" />
                </PinInput>
            </Box>{" "}
            <h6>Your code will expire in </h6>
            <a href="#">Resend the code</a>
            <br />
            <br />
            <Link to="/name">
                <button class="submit">Submit</button>
            </Link>
        </div>
    );
};

export default Otp;

import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        {/* second part card */}
       <div className="footer">
          <div class="footerFoot">
            <div class="kfcLogo">
              <img src="https://i.ibb.co/RgxGmkr/KFC-Logo.jpg" />
            </div>

            <ul>
              <li>KFC Food</li>
              <li>
                <a href="menu.html">Menu</a>
              </li>
              <li>Order Lookup</li>
              <li>Gift Card</li>
            </ul>

            <ul>
              <li>Support</li>
              <li>Get Help</li>
              <li>Contact Us</li>
              <li>KFC Feedbacks</li>
            </ul>

            <ul>
              <li>Legal</li>
              <li>
                <a href="terms.html">Terms and Conditions</a>
              </li>
              <li>
                <a href="Privacy.html">Privacy Policy</a>
              </li>
              <li>Diclaimer</li>
              <li>Caution Notice</li>
            </ul>

            <ul>
              <li>KFC India</li>
              <li>About KFC</li>
              <li>KFC Care</li>
              <li>Careers</li>
              <li>Our Golden Past</li>
            </ul>

            <div class="location">
              <div class="locationLogo">
                <a href=""><i class="bi bi-geo-alt-fill"></i></a>
              </div>
              <div>
                <a href="https://restaurants.kfc.co.in/">Find a KFC</a>
              </div>
            </div>

            <div class="buttonLogos">
              <div class="buttonLogo1">
                <img src="https://i.ibb.co/HhTsvz7/185-1855993-play-button-png-transparent.png" />
              </div>
              <div class="buttonLogo2">
                <img src="https://i.ibb.co/MBbWX3j/5a902db97f96951c82922874.png" />
              </div>
            </div>
          </div>

          <div class="bottomMost">
            <div class="copyright">
              <p>Copyright © KFC Corporation 2021 All Rights Reserved</p>
            </div>
            <div class="socialMedia">
              <ul>
                <li>
                  <a href="https://www.instagram.com/kfcindia_official/" target="_blank"><i style={{ color: "white" }} class="bi bi-instagram"></i></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/KFC" target="_blank"><i style={{ color: "white" }} class="bi bi-facebook"></i></a>
                </li>
                <li>
                  <a href="https://twitter.com/KFC_India" target="_blank"><i style={{ color: "white" }} class="bi bi-twitter"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { MdFacebook, MdHome, MdEmail, MdPrint } from "react-icons/md";
import { FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer1">
      <div className="newsletter">
        <h1>Subscribe to our Newsletter...</h1>
        <div className="inputnews">
          <input type="text" placeholder="email" />
          <button>Subscribe</button>
        </div>
      </div>
      <hr></hr>
      <div className="social">
        <p>Get connected with us on social networks:</p>
        <div className="icons">
          <MdFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="data">
        <div className="products2">
          <img src="./assets/logo.png" alt="logo" />
          <p>
            It’s high time for all of us to think about our impression and
            capacity to lessen the waste and its impacts on the climate.
          </p>
        </div>
        <div className="products2">
          <h3 className="h3">Products</h3>

          <p>Brush</p>
          <p>Bag</p>
          <p>Earbud</p>
          <p>Cup</p>
        </div>
        <div className="products2">
          <h3 className="h3">Useful Links</h3>
          <p>Pricing</p>
          <p>Settings</p>
          <p>Orders</p>
          <p>Help</p>
        </div>
        <div className="products2">
          <h3 className="h3">Contact</h3>

          <p>
            <MdHome /> New York, NY 10012, US
          </p>
          <p>
            <MdEmail /> info@example.com
          </p>
          <p>
            <FaPhoneAlt /> + 91 234 567 88
          </p>
          <p>
            <MdPrint /> + 91 234 567 89
          </p>
        </div>
      </div>
      <div className="copyright">
        <p className="span">
          <span className="span">&#169;</span>
          <span className="span">2023 Copyright:</span>
        </p>
        <p>Earthly</p>
      </div>
    </div>
  );
};

export default Footer;

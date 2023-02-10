import React from "react";
import { MdOutlineAddShoppingCart, MdOutlineSearch } from "react-icons/md";
const Header = () => {
  return (
    <div className="header" id="home">
      <img src="/assets/logo.png" alt="earthly" />
      <ul className="ulist">
        <a href="#home">
          <li className="hlist">Home</li>
        </a>
        <a href="#AboutUs">
          <li className="hlist">About us</li>
        </a>
        <a href="#products">
          <li className="hlist">Product</li>
        </a>
        <li className="hlist">Blog</li>
      </ul>
      <div className="input-search-wrapper">
        <input className="input1" type="text" placeholder="Search" />
        <MdOutlineSearch className="search-icon" />
      </div>
      <div className="login">
        <button className="loginbutton">Login</button>
        <p className="cart">
          Cart <MdOutlineAddShoppingCart />
        </p>
      </div>
    </div>
  );
};

export default Header;

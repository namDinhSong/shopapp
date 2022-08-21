import React from "react";
import "../style/header.scss";
const Header = () => {
  return (
    <div className="header-container">
        <h1>New Style</h1>
      <i className="fa-solid fa-cart-shopping"></i>
      <div className="header-right">
        <i className="fa-solid fa-bars"></i>
        <ul className="dropdown">
            <li>add product</li>
            <li>....</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

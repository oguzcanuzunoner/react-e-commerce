import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../../assents/logo.png";

function Nav() {
  const navStyle = {
    color: "white",
    "text-decoration": "none",
    "background-color": "black",
    padding: "15px",
    "border-radius": "5px",
  };
  return (
    <nav>
      <Link style={navStyle} to="/">
      <img src={Logo} style={{height:80}} alt="Oğuzcan Uzunöner Logo"/>
      </Link>

      <ul className="navLinks">
        <Link style={navStyle} to="/">
          <li>Ana Sayfa</li>
        </Link>
        <Link style={navStyle} to="/favorite">
          <li>Favoriler</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li>İletişim</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

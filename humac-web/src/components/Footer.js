import React from "react";
import "../style.css";
import logo from "../logo2.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img className="logo" src={logo} />
          </div>
          <div className="social">
            <a href="">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>&copy; 2020 copyright all right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

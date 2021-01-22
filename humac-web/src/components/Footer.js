import React from "react";
import "../style.css";
import logo from "../logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img className="logo" src={logo} />
          </div>
          <div className="social">
            <a href="https://www.facebook.com/tiskara.humac2">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/tiskarahumac/">
              <InstagramIcon />{" "}
            </a>
            <a href="mailto:tiskarahumac@gmail.com">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>&copy; 2021 copyright all right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

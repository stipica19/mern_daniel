import React, { useEffect, useState } from "react";
import "../style.css";
import logo from "../logo.svg";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [navbar, setNavbar] = useState(false);
  const [closeNav, setCloseNav] = useState(false);

  useEffect(() => {
    console.log("pojava");
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (closeNav === true) {
    }
  }, [closeNav]);

  const headerScroll = () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", headerScroll);

  return (
    <div className={navbar || menuActive ? "header active" : "header"}>
      <div className="container">
        <div className="row">
          <div className="brand-name">
            <img className="logo" src={logo} />
          </div>
          {width < 680 ? (
            <div className="ham-burger">
              <MenuIcon onClick={() => setMenuActive(!menuActive)} />
            </div>
          ) : (
            ""
          )}

          <div className={`navbar ${menuActive ? "show" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className="active"
                  onClick={() => setMenuActive(!menuActive)}
                >
                  NASLOVNA
                </Link>
              </li>
              <li>
                <a href="#about-me" onClick={() => setMenuActive(!menuActive)}>
                  O NAMA
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMenuActive(!menuActive)}>
                  USLUGE
                </a>
              </li>
              <li>
                <Link to="/galerija" onClick={() => setMenuActive(!menuActive)}>
                  GALERIJA
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setMenuActive(!menuActive)}>
                  KONTAKT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

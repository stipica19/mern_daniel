import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../style.css";
import logo from "../logo.png";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

function Header() {
  const [scroll, setScroll] = useState(0);

  const [menuActive, setMenuActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [navbar, setNavbar] = useState(false);
  const [closeNav, setCloseNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  }, []);

  const headerScroll = () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 500) {
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
          {navbar ? (
            <div id="progressBarContainer">
              <div
                id="progressBar"
                style={{
                  transform: `scale(${scroll}, 1)`,
                  opacity: `${scroll}`,
                }}
              />
            </div>
          ) : (
            ""
          )}

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
                <HashLink
                  smooth
                  to="/#home"
                  className="active"
                  onClick={() => setMenuActive(!menuActive)}
                >
                  NASLOVNA
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#about-me"
                  className="active"
                  onClick={() => setMenuActive(!menuActive)}
                >
                  O NAMA
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#galerija"
                  className="active"
                  onClick={() => setMenuActive(!menuActive)}
                >
                  USLUGE
                </HashLink>
              </li>
              <li>
                <Link to="/galerija" onClick={() => setMenuActive(!menuActive)}>
                  GALERIJA
                </Link>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#contact-us"
                  className="active"
                  onClick={() => setMenuActive(!menuActive)}
                >
                  KONTAKT
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

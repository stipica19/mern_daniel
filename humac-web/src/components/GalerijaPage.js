import React from "react";

import Header from "./Header";
import "../style.css";
import digitalni_print from "../images/digitalni_print.svg";
import dizajn from "../images/dizajn.svg";
import galanterija from "../images/galanterija.svg";
import lasersko_graviranje from "../images/lasersko_graviranje.svg";
import reklame from "../images/reklame.svg";
import tisak_na_tekstil from "../images/tisak_na_tekstil.svg";
import xxl_print from "../images/xxl_print.svg";
import { Link } from "react-router-dom";

function GalerijaPage() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h1>GALERIJA</h1>
          </div>
        </div>

        <div className="row">
          <div className="portfolio-gallery">
            <Link to={`galerija/digitalni_print`} className="item">
              <img
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
                src={digitalni_print}
                alt="digitalni_print"
                name="digitalni_print"
              />
              <div className="overlay">
                <h4>Digitalni print </h4>
              </div>
            </Link>

            <Link to={`galerija/dizajn`} className="item">
              <img
                src={dizajn}
                alt="dizajn"
                name="DIZAJN"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              />
              <div className="overlay">
                <h4>GRAFIČKI DIZAJN</h4>
              </div>
            </Link>
            <Link to={`galerija/galanterija`} className="item">
              <img
                src={galanterija}
                alt="galanterija"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              />
              <div className="overlay">
                <h4>Galanterija</h4>
              </div>
            </Link>

            <Link to={`galerija/lasersko_graviranje`} className="item">
              <img
                src={lasersko_graviranje}
                alt="lasersko_graviranje"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              />
              <div className="overlay">
                <h4>Lasersko graviranje</h4>
              </div>
            </Link>

            <Link to={`galerija/reklame`} className="item">
              <img
                src={reklame}
                alt="reklame"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              />
              <div className="overlay">
                <h4>Reklame</h4>
              </div>
            </Link>
            <Link to={`galerija/tisak_na_tekstil`} className="item">
              <img
                src={tisak_na_tekstil}
                alt="tisak_na_tekstil"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              />
              <div className="overlay">
                <h4>Tisak na tekstil</h4>
              </div>
            </Link>
            <Link to={`galerija/xxl_print`} className="item xxl">
              <img
                src={xxl_print}
                alt="xxl_print"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              />
              <div className="overlay">
                <h4>XXL print</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalerijaPage;

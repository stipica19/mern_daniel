import React from "react";

import Header from "./Header";
import "../style.css";
import slika1 from "../images/1.jpg";
import slika2 from "../images/2.jpg";
import slika3 from "../images/3.jpg";
import slika4 from "../images/4.jpg";
import slika6 from "../images/6.jpg";
import slika5 from "../images/5.jpg";
import { Link } from "react-router-dom";

function GalerijaPage() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h1>GALERIJA </h1>
          </div>
        </div>

        <div className="row">
          <div className="portfolio-gallery">
            <Link to={`galerija/grafika`} className="item">
              <img src={slika1} alt="GRAFIČKI DIZAJN" name="GRAFIČKI DIZAJN" />
              <div className="overlay">
                <span className="fa fa-plus"></span>
                <h4>GRAFIČKI DIZAJN </h4>
              </div>
            </Link>

            <Link to={`galerija/pecati`} className="item">
              <img src={slika2} alt="portfolio" name="PECATI" />
              <div className="overlay">
                <span className="fa fa-plus"></span>
                <h4>PEČATI</h4>
              </div>
            </Link>
            <Link to={`galerija/t-shirt`} className="item">
              <img src={slika3} alt="portfolio" />
              <div className="overlay">
                <span className="fa fa-plus"></span>
                <h4>MAJICE</h4>
              </div>
            </Link>

            <Link to={`galerija/3dreklame`} className="item">
              <img src={slika4} alt="portfolio" />
              <div className="overlay">
                <span className="fa fa-plus"></span>
                <h4>3D REKLAME</h4>
              </div>
            </Link>

            <Link to={`galerija/oip`} className="item">
              <img src={slika6} alt="portfolio" />
              <div className="overlay">
                <span className="fa fa-plus"></span>
                <h4>OLOVKE I UPALJAČI</h4>
              </div>
            </Link>
            <Link to={`galerija/naljepnice`} className="item">
              <img src={slika5} alt="portfolio" />
              <div className="overlay">
                <span className="fa fa-plus"></span>
                <h4>NALJEPNICE</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalerijaPage;

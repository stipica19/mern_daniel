import React from "react";
import "../style.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import slika from "../images/linije.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      className="about-me"
      id="about-me"
      data-aos="fade-in"
      data-aos-duration="800"
      data-aos-delay="300"
    >
      <div className="dots">
        <img src={slika} />
      </div>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h1>O NAMA</h1>
            <p className="small text-uppercase">Informacije o nama</p>
          </div>
        </div>
        <div className="row">
          <div className="about-content">
            <div className="row">
              <div className="img">
                <img src="https://robertrodriguezjr.com/images/RR_studio2.jpg" />
              </div>

              <div className="text">
                <h4>GRAFIČKI STUDIO HUMAC</h4>

                <p>
                  Naši počeci, datirajući iz davne 1999. godine, uglavnom su se
                  odnosili na sitotisak i promotivni materijal. Koračamo prema
                  trećem desetljeću rada i tijekom tog razdoblja dodali smo puno
                  novih i različitih proizvoda i materijala u svoj asortiman.
                  Svjesni smo da smo mi ljudi po svojoj prirodi vrlo različiti.
                  Neki vole nešto što druge ne vole. Kako bismo udovoljili
                  najširem mogućem rasponu potreba i želja, neprestano dodajemo
                  nove proizvode, širimo asortiman raznih završnih materijala i,
                  prije svega, puno vremena posvećujemo ponudi papira kao našem
                  primarnom materijalu. Uvjereni smo da je pravi put samo put
                  stalnog razvoja i traženja novih prilika. Svojim klijentima
                  želimo ponuditi što više na jednom mjestu, jer to štedi
                  vrijeme i, ne manje važno, novac.
                </p>

                <div className="social-links">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

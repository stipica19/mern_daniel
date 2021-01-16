import React from "react";
import "../style.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import slika from "../images/linije.png";

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
                <h6>
                  predstavlja jednu od vodećih tvrtki u BiH u području
                  digitalnog tiska velikih formata.
                </h6>
                <p>
                  Kao jedinstvena firma na ovim prostorima. Okupljamo ljude koji
                  zajedno imaju više od 30 godina iskustva na poslovima
                  grafičkog dizajna i štampe
                </p>
                <p>
                  Poduzeće je osnovano 1990. godine s ciljem da se bavi
                  grafičkom djelatnošću. Permanentno ulaganje i praćenje
                  tehnološkog razvoja, u području koje pokrivamo svojim
                  proizvodima i uslugama, osigurali su nam velike proizvodne
                  kapacitete, a dodatnom izobrazbom kadrova, i uz visoko
                  obrazovane stručnjake, garantiramo vrhunsku kvalitetu
                  proizvoda. Kvaliteta, profesionalnost i odgovornost prema
                  potrošačima i suradnicima, vrijednosti su koje su oduvijek
                  činile sastavni dio poslovne politike tvrtke i koje su
                  stvorile povjerenje u proizvode i usluge. Želite li vrhunsku,
                  kvalitetnu i brzu uslugu, obratite se nama!
                </p>

                <div className="social-links">
                  <FacebookIcon />
                  <InstagramIcon />
                  <MailIcon />
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

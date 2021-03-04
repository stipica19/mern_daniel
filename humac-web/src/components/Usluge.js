import React from "react";
import "../style.css";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import PrintIcon from "@material-ui/icons/Print";
import PhoneIcon from "@material-ui/icons/Phone";
import slika from "../images/linije.png";

function Usluge() {
  return (
    <div className="services" id="services">
      <div className="dots">
        <img src={slika} />
      </div>
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h1>Usluge</h1>
          </div>
        </div>
        <div className="row">
          <div className="service-content">
            <div className="row">
              <div
                className="box"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out-cubic"
              >
                <div className="icon">
                  <DesktopWindowsIcon />
                </div>
                <h5>GRAFIČKI DIZAJN</h5>
                <p>
                  Grafički dizajn je dio naše djelatnosti koji obavljamo
                  profesionalno za male tvrtke i za velike korporacije.
                  Kvalitetno vizualno oblikovanje je osnova za dobar marketing
                  tvrtke.
                </p>
              </div>

              <div
                className="box"
                data-aos="flip-left"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out-cubic"
              >
                <div className="icon">
                  <PrintIcon />
                </div>
                <h5>TISAK I DORADA</h5>
                <p>
                  Digitalni tisak je već neko vrijeme trend u tiskarskoj
                  industriji. Svjesni smo tih prednosti te smo zato investirali
                  u najmodernije digitalne tiskarske strojeve.
                </p>
              </div>
              <div
                className="box"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out-cubic"
              >
                <div className="icon">
                  <PhoneIcon />
                </div>
                <h5>KONTAKTIRAJTE NAS</h5>
                <p>
                  POTREBNA VAM JE POMOĆ?
                  <br /> IMATE PITANJE?
                  <br /> Ovdje smo da vam pomognemo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usluge;

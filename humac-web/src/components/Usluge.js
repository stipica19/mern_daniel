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
                  Digitalna tehnologija sa sobom nosi ekološki prihvatljiv
                  sistem, sa niskom upotrebom energije. Rezultati digitalne
                  tehnologije su dosledni i automatski kontrolisani, a brzina
                  usluge je dovedena do krajnjih granica.
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
                  Digitalna tehnologija sa sobom nosi ekološki prihvatljiv
                  sistem, sa niskom upotrebom energije. Rezultati digitalne
                  tehnologije su dosledni i automatski kontrolisani, a brzina
                  usluge je dovedena do krajnjih granica.
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
                  Digitalna tehnologija sa sobom nosi ekološki prihvatljiv
                  sistem, sa niskom upotrebom energije. Rezultati digitalne
                  tehnologije su dosledni i automatski kontrolisani, a brzina
                  usluge je dovedena do krajnjih granica.
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

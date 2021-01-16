import React from "react";
import "../style.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import slika from "../images/linije.png";

function Contact() {
  return (
    <div className="contact-us" id="contact-us">
      <div className="dots">
        <img src={slika} />
      </div>
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h1>KONTAKT</h1>
            <p className="small text-uppercase">
              Za sve dodatne informacije stojimo vam na raspolaganju
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="c-box"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <div className="icon">
              <PhoneIcon />
            </div>

            <p>+387 64 04 04 04</p>
          </div>
          <div
            className="c-box"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <div className="icon">
              <EmailIcon />
            </div>

            <p>tiskarahumac@gmail.com</p>
          </div>
          <div
            className="c-box"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <div className="icon">
              <LocationOnIcon />
            </div>

            <p>Humac bb, GORNJI VAKUF - USKOPLJE 70280</p>
          </div>
        </div>
        <div className="row ">
          <div
            className="contact-form"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <div className="row">
              <div className="text">
                <h2>Pošaljite nam poruku</h2>
                <p>Ovdje smo da odgovorimo na svako vaše pitanje</p>
              </div>
            </div>
            <div className="row space-between">
              <div className="col-3">
                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="Ime"
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="Prezime"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <textarea
                  name=""
                  id=""
                  className="form-control"
                  cols="30"
                  rows="10"
                  placeholder="Poruka"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="button text-right">
                <a href="">POŠALJI</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

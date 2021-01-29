import React, { useState } from "react";
import "../style.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import slika from "../images/linije.png";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      prezime: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = () => {
    console.log("s");
    axios
      .post("http://localhost:5000/email", formData)
      .then((res) => {
        console.log("uspkesno poslana");
      })

      .catch((error) => {
        console.log(error);
      });
  };

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
            <form onSubmit={handleSubmit}>
              <div className="row space-between">
                <div className="col-3">
                  <input
                    name="name"
                    type="text"
                    onChange={updateInput}
                    value={formData.name || ""}
                    className="form-control"
                    placeholder="Ime"
                  />
                </div>
                <div className="col-3">
                  <input
                    name="prezime"
                    type="text"
                    onChange={updateInput}
                    value={formData.prezime || ""}
                    className="form-control"
                    placeholder="Prezime"
                  />
                </div>
                <div className="col-6">
                  <input
                    name="email"
                    type="text"
                    onChange={updateInput}
                    value={formData.email || ""}
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <textarea
                    name="message"
                    onChange={updateInput}
                    value={formData.message || ""}
                    className="form-control"
                    cols="30"
                    rows="10"
                    placeholder="Poruka"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="button text-right">
                  <button type="submit">POŠALJI</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

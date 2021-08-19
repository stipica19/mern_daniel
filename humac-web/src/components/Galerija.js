import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../style.css";
import slika from "../images/linije.png";
import axios from "axios";

function Galerija() {
  const [images, setImages] = useState([]);

  const history = useHistory();

  const redirektaj = () => {
    console.log("REDIREKT");
    history.push("/galerija");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (count = 10) => {
    axios
      .get(`http://104.248.133.195:5000//galerija`)
      .then((res) => {
        console.log(res.data);

        setImages([...images, ...res.data]);
        if (res.data.length === 5) {
          //console.log(images[0].category);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="galerija"
      id="galerija"
      data-aos="fade-in"
      data-aos-duration="800"
      data-aos-delay="300"
    >
      <div className="dots">
        <img src={slika} />
      </div>
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h1>NAŠI RADOVI</h1>
            <p className="small text-uppercase">
              Neki od naših posljednjih radova
            </p>
          </div>
        </div>

        <div className="ga">
          <div className="grid-container">
            {images
              .reverse()
              .slice(0, 10)
              .map((image, index) => (
                <div key={image.images}>
                  <img
                    className={`grid-item grid-item-${index + 1}`}
                    src={`http://104.248.133.195:5000//${image.images}`}
                    alt="radovi"
                  />
                </div>
              ))}
          </div>
        </div>

        <div onClick={redirektaj} className="center">
          <div className="pulse">OSTALI RADOVI</div>
        </div>
      </div>
    </div>
  );
}

export default Galerija;

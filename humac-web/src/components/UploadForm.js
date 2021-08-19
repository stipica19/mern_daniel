import React, { useState } from "react";

import axios from "axios";
import "../style.css";
import { useSelector } from "react-redux";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Header from "./Header";
import Progress from "./Progress";

const UploadForm = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState(null);
  const [kat, setKat] = useState("");
  const [name, setName] = useState("");
  const [opis, setOpis] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const types = ["image/png", "image/jpeg", "image/webp"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected) {
      setFile(selected);
      console.log("fas" + selected);
      setError("");
    } else {
      setFile(null);
      setError("ODABERITE png ili jpg format slike");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("KATEGORIJA " + kat);
    const data = new FormData();
    data.append("file", file);
    data.append("category", kat);
    data.append("name", name);
    data.append("opis", opis);

    axios
      .post("https://tiskara-humac.com/api/galerija/upload", data, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="uploadFile">
          <input type="file" onChange={handleChange} />
        </div>

        <input
          type="text"
          placeholder="Unesite za Cover opis"
          onChange={(e) => setOpis(e.target.value)}
        />
        <div className="flex-container">
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="digitalni print"
              name="cat"
              onClick={(e) => {
                setKat("digitalni_print");
                setName(e.target.value);
              }}
            />
            digitalni_print
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="dizajn"
              name="cat"
              onClick={(e) => {
                setKat("dizajn");
                setName(e.target.value);
              }}
            />{" "}
            dizajn
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="galanterija"
              name="cat"
              onClick={(e) => {
                setKat("galanterija");
                setName(e.target.value);
              }}
            />{" "}
            galanterija
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="lasersko graviranje"
              name="cat"
              onClick={(e) => {
                setKat("lasersko_graviranje");
                setName(e.target.value);
              }}
            />
            lasersko graviranje
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="reklame"
              name="cat"
              onClick={(e) => {
                setKat("reklame");
                setName(e.target.value);
              }}
            />
            reklame
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="tisak na tekstil"
              name="cat"
              onClick={(e) => {
                setKat("tisak_na_tekstil");
                setName(e.target.value);
              }}
            />
            tisak na tekstil
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="xxl print"
              name="cat"
              onClick={(e) => {
                setKat("xxl_print");
                setName(e.target.value);
              }}
            />
            XLL_PRINT
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="coverPhoto"
              name="cat"
              onClick={(e) => {
                setKat("coverPhoto");
                setName(e.target.value);
              }}
            />
            Cover Photo
          </div>
        </div>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
        <Progress percentage={uploadPercentage} />
        <button type="submit" className="btn btn-primary w-100">
          POTVRDI
        </button>
      </form>
    </div>
  );
};

export default UploadForm;

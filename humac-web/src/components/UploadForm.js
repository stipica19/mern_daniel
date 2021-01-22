import React, { useState } from "react";

import axios from "axios";
import "../style.css";
import { useSelector } from "react-redux";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Header from "./Header";

const UploadForm = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState(null);
  const [kat, setKat] = useState("");
  const [name, setName] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
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
    console.log(userInfo.token);

    axios
      .post("https://tiskara-humac.com/api/galerija/upload", data, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
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
        <div className="flex-container">
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="pecati"
              name="cat"
              onClick={(e) => {
                setKat("pecati");
                setName(e.target.value);
              }}
            />
            pecati
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="t-shirt"
              name="cat"
              onClick={(e) => {
                setKat("t-shirt");
                setName(e.target.value);
              }}
            />{" "}
            majice
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="3dreklame"
              name="cat"
              onClick={(e) => {
                setKat("3dreklame");
                setName(e.target.value);
              }}
            />{" "}
            3d
          </div>
          <div>
            <input
              className="option-input radio"
              type="radio"
              value="olovke"
              name="cat"
              onClick={(e) => {
                setKat("olovke");
                setName(e.target.value);
              }}
            />
            Cover Photo
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
        <button type="submit" className="btn btn-primary w-100">
          POTVRDI
        </button>
      </form>
    </div>
  );
};

export default UploadForm;

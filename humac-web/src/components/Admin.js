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
    </div>
  );
};

export default UploadForm;

import React, { useState, useEffect } from "react";

import axios from "axios";
import "../style.css";
import { useSelector } from "react-redux";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Header from "./Header";

const Admin = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    axios
      .get("http://104.248.133.195:5000//galerija")
      .then((res) => {
        console.log(res.data);
        setImages([...images, ...res.data]);
        setTimeout(() => setLoading(!loading), 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeImage = (id) => {
    console.log("remove");
    axios.delete(`http://104.248.133.195:5000//galerija/${id}`).then((res) => {
      const del = images.filter((employee) => id !== employee._id);
      setImages(del);
      console.log("res", res);
    });
  };

  return (
    <div>
      <Header />
      <div className="admin-div">
        {!loading
          ? images.map((image) => (
              <ul className="admin-ul">
                <li className="admin-li">
                  <img
                    className="admin-img"
                    src={`http://104.248.133.195:5000//${image.images}`}
                  />
                  <h3>{image.category}</h3>

                  <button onClick={() => removeImage(image._id)}>DELETE</button>
                </li>
              </ul>
            ))
          : "LOADING..."}
      </div>
    </div>
  );
};

export default Admin;

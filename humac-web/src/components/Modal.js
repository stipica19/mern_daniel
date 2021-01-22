import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header.js";
import "../style.css";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const [hideHeader, setHideHeader] = useState(false);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
      console.log("afafaf");
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ marginTop: "10px" }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;

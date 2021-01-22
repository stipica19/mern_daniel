import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header.js";
import "../style.css";
import styled from "styled-components";
const header = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
    background-color: yellow;
  }
`;

const Modal = ({ setSelectedImg, selectedImg }) => {
  const [hideHeader, setHideHeader] = useState(false);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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

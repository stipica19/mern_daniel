import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Header from "./Header";

import "../style.css";

function GalerijaOne() {
  const [selectedImg, setSelectedImg] = useState(null);
  const handleClick = () => {
    console.log("aa");
  };
  return (
    <div>
      <Header />
      <ImageGrid setSelectedImg={setSelectedImg} onClick={handleClick} />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default GalerijaOne;

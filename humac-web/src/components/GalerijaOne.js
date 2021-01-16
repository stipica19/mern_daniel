import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Header from "./Header";

import "../style.css";

function GalerijaOne() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <Header />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default GalerijaOne;

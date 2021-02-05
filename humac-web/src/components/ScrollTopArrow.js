import React, { useState, useEffect } from "react";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";
import "../App.css";

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scrollTopp">
      <ArrowDropDownCircleRoundedIcon
        className="scrollTop"
        onClick={scrollTop}
        style={{
          height: "70px",
          width: "70px",
          display: showScroll ? "flex" : "none",
        }}
      />
    </div>
  );
};

export default ScrollTopArrow;

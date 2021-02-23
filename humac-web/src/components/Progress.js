import React from "react";
import PropTypes from "prop-types";

const Progress = ({ percentage }) => {
  return (
    <div className="progress-upload">
      <p>{percentage}%</p>
      <div
        className="progress-bar"
        role="progressbar"
        style={{
          width: `${percentage}%`,
          backgroundColor: "lightblue",
        }}
      ></div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;

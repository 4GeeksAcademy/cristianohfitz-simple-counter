import React from "react";

const SecondsCounter = ({ seconds }) => {
  // digits
  const digitSix = Math.floor(seconds / 100000) % 10;
  const digitFive = Math.floor(seconds / 10000) % 10;
  const digitFour = Math.floor(seconds / 1000) % 10;
  const digitThree = Math.floor(seconds / 100) % 10;
  const digitTwo = Math.floor(seconds / 10) % 10;
  const digitOne = seconds % 10;

  return (
    <div className="container bg-dark text-white d-flex justify-content-center align-items-center p-3">
      <div className="mx-2">
        <i className="fas fa-clock fa-2x"></i>
      </div>
      <div className="mx-2 fs-2">{digitSix}</div>
      <div className="mx-2 fs-2">{digitFive}</div>
      <div className="mx-2 fs-2">{digitFour}</div>
      <div className="mx-2 fs-2">{digitThree}</div>
      <div className="mx-2 fs-2">{digitTwo}</div>
      <div className="mx-2 fs-2">{digitOne}</div>
    </div>
  );
};

export default SecondsCounter;

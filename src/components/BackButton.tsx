import React from "react";

const BackButton = () => {
  return (
    <>
      <div className="back-btn__wrapper left-8 bottom-8">
        <span className="back-btn">
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="#1A1B1C"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.145 6 .716 11.444V.556L10.145 6Z"
              fill="#1A1B1C"
            ></path>
          </svg>
        </span>
        <div className="back-btn__text">BACK</div>
      </div>
    </>
  );
};

export default BackButton;

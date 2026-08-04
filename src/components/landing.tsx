"use client";
import React from "react";

const Landing = () => {
  const handleScroll = (direction: "left" | "right") => {
    if (typeof window === "undefined") return;

    window.scrollBy({
      left: direction === "right" ? 240 : -240,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="landing-wrapper flex flex-auto flex-col relative overflow-hidden">
        {/* Left Navigation */}
        <div className="nav-fixed nav-fixed__left fixed left-0 top-1/2 z-10 flex items-center gap-2">
          <div className="nav-group__left relative flex flex-col items-center">
            <div className="relative">
              <span className="dotted-square__left"></span>
              <button
                type="button"
                className="nav-arrow nav-arrow--left"
                onClick={() => handleScroll("left")}
                aria-label="Discover A.I."
              >
                <span className="icon__button">
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
                <span className="left-text text-[10px] font-medium text-[#1A1B1C] tracking-tight whitespace-nowrap pl-4.5">
                  DISCOVER A.I.
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="px-8 w-full mr-auto ml-auto flex items-center flex-auto pb-9">
          <div className="contents">
            <div className="center-content m-auto text-center">
              <div className="block overflow-hidden">
                <h1
                  style={{
                    transform: "translate(0px, 0px)",
                    letterSpacing: "-0.07em",
                    lineHeight: "0.945",
                  }}
                  className="text-[86px] max-w-[13ch]"
                >
                  <span style={{ display: "inline-block", position: "relative" }}>Sophisticated</span>
                  <span style={{ display: "inline-block", position: "relative", transform: "translate(0px, 0px)" }}>skincare</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="nav-fixed nav-fixed__right fixed -right-94.5 top-1/2 z-10 flex items-center gap-2">
          <div className="nav-group__right relative flex flex-col items-center">
            <div className="relative">
              <span className="dotted-square__right"></span>
              <button
                type="button"
                className="nav-arrow nav-arrow--right"
                onClick={() => handleScroll("right")}
                aria-label="Take Test"
              >
                <span className="right-text text-[10px] font-medium text-[#1A1B1C] tracking-tight whitespace-nowrap pr-4.5">
                  TAKE TEST
                </span>
                <span className="icon__button">
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
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Landing;

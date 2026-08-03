import React from "react";

const Landing = () => {
  return (
    <>
      <div className="flex flex-auto flex-col relative">
        <div style={{ right: "-425px" }} className="absolute top-1/2 -translate-y-1/2 flex items-center gap-4">
          <span className="dotted-square__right"></span>
          <a className="mr-8" href="">
            <span className="order-1">
                <span className="icon__button">
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="#1A1B1C" xmlns="http://www.w3.org/2000/svg"><path d="M10.145 6 .716 11.444V.556L10.145 6Z" fill="#1A1B1C"></path></svg>
                </span>
            </span>
          </a>
        </div>
        <span className="dotted-square__left"></span>
        <div className="px-8 w-full mr-auto ml-auto flex items-center flex-auto pb-9">
          <div className="contents">
            <div className="m-auto text-center">
              <div className="block overflow-hidden">
                <h1
                  style={{
                    transform: "translate(0px, 0px)",
                    letterSpacing: "-0.07em",
                    lineHeight: "0.945",
                  }}
                  className="text-[86px] max-w-[14ch]"
                >
                  <span style={{ display: "block" }}>Sophisticated</span>
                  <span style={{ display: "block" }}>skincare</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

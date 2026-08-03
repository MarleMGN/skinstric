import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-transparent h-16 flex items-center justify-between px-8">
      <div className="flex items-center gap-2">
        <div className="font-semibold h-4 w-17.25 text-[11.5px]">SKINSTRIC</div>
        <div className="relative font-semibold flex items-center px-3 text-[10px] opacity-60">
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-contain bg-no-repeat block"
            style={{
              width: "12px",
              height: "12px",
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 18H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2' stroke='%231A1B1C'/%3E%3C/svg%3E")`,
            }}
          />
          INTRO
          <span
            className="absolute right-[-15%] top-1/2 -translate-y-1/2 bg-contain bg-no-repeat block"
            style={{
              width: "12px",
              height: "12px",
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 18h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H0' stroke='%231A1B1C'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>
      <div className="ml-auto">
        <div className="block overflow-hidden">
          <button className="px-4 py-2 text-white bg-black border cursor-pointer border-solid border-black font-semibold text-[10px] hover-swap sm:text-[9px]" data-hover="ENTER CODE">
            <span>ENTER CODE</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

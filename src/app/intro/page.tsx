"use client"
import BackButton from "@/components/BackButton";
import Header from "@/components/header";
import IntroInput from "@/components/IntroInput";
import React, { useState } from "react";

const Page = () => {
  const [isPageFading, setIsPageFading] = useState(false);
  return (
    <>
    <div className={`page-visible ${isPageFading ? "page-fade" : ""}`}>
      <Header />
      <div className="flex flex-col relative pb-9 w-full">
        <div className="absolute left-8 top-6 block overflow-hidden">
          <h1 className="introduction-title">TO START ANALYSIS</h1>
        </div>
        <div className="intro-diamond__wrapper flex justify-center items-center">
          <span className="intro-diamond"></span>
          <div className="intro-input-group">
            <span className="intro-input-label">CLICK TO TYPE</span>
            <IntroInput onPageFadeChange={setIsPageFading}/>
          </div>
        </div>
      </div>
      <BackButton />
    </div>
    </>
  );
};

export default Page;

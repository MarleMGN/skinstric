"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const questions = ["Introduce Yourself", "Where are you from?"];

interface IntroInputProps {
  onPageFadeChange: (isFading: boolean) => void;
}

const IntroInput = ({ onPageFadeChange }: IntroInputProps) => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [value, setValue] = useState("");

  const goNext = () => {
    const isLastQuestion = step === questions.length - 1;

    if (isLastQuestion) {
      setIsLeaving(true);

      setTimeout(() => {
        onPageFadeChange(true);

        setTimeout(() => {
          router.push("/testing");
        }, 500);
      }, 400 + 500);

      return;
    }

    setIsLeaving(true);
    setTimeout(() => {
      setStep((s) => s + 1);
      setValue("");
      setIsLeaving(false);
    }, 400);
  };

  return (
      <div className="intro-input-viewport">
        <input
          key={step}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={questions[step]}
          className={`intro-input ${isLeaving ? "intro-input__leaving" : "intro-input__entering"}`}
          onKeyDown={(e) => e.key === "Enter" && goNext()}
        />
      </div>
  );
};

export default IntroInput;

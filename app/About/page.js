"use client";
import { useEffect, useState } from "react";

export default function BackgroundTransition() {
  const [showBallBg, setShowBallBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const helloSection = document.getElementById("helloSection");
      if (!helloSection) return;

      const helloTop = helloSection.getBoundingClientRect().top;

      // Change background when "hello" is at 70% of the viewport
      if (helloTop < window.innerHeight * 1) {
        setShowBallBg(true);
      } else {
        setShowBallBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-full relative">
      {/* First Background - Airtech */}
      <div
        className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/Airtech.jpg')] bg-cover bg-center transition-opacity duration-500 ${
          showBallBg ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      <div className="relative text-8xl h-96 flex justify-center items-center text-center text-white">
        About
      </div>

      <div className="relative h-screen bg-slate-300">section1</div>

      {/* Second Background - Ball */}
      <div
        className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/ball-Photoroom.jpg')] bg-cover bg-center transition-opacity duration-200 ${
          showBallBg ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div
        className="relative text-8xl h-96 flex justify-center items-center text-center text-white"
        id="helloSection"
      >
        hello
      </div>

      <div className="relative h-screen bg-slate-700">section2</div>
    </div>
  );
}

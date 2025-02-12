"use client";
import { useEffect } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate text appearing
    tl.from("#loader h3", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Animate text disappearing
    tl.to("#loader h3", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.inOut",
    });

    // Slide up the entire loader
    tl.to("#loader", {
      y: "-100%", // Slide up to the top of the screen
      duration: 1.5,
      ease: "power4.inOut",
      onComplete: onComplete, // Trigger main page animation
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      id="loader"
      className="fixed inset-0 flex items-center justify-center gap-4 bg-black z-[9999]"
    >
      <h3 className="text-black text-[1.8vw]">Tomoro's</h3>
      <h3 className="text-black text-[1.8vw]">Brands</h3>
      <h3 className="text-black text-[1.8vw]">
        Today <span className="text-[1.5vw]">™</span>
      </h3>
    </div>
  );
};

export default Preloader;
import { gsap } from "gsap";
import Swiper from "swiper";
import "swiper/css";
import LocomotiveScroll from "locomotive-scroll";

// Function to hide loader
export const hideLoader = () => {
  gsap.to("#loader", { display: "none" });
};

// Function to animate text spans
export const animateText = () => {
  gsap.from("#upper-container-first h1 span", {
    y: 500,
    duration: 0.2,
    stagger: 0.1,
  });
};

// Function to apply cursor effect
export const cursorEffect = () => {
  const innerPage = document.querySelector("#upper-container-first");
  const cursor = document.querySelector("#cursor");

  if (innerPage && cursor) {
    innerPage.addEventListener("mousemove", (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY });
    });
  }
};

import "locomotive-scroll/dist/locomotive-scroll.css";

export const initializeLocomotiveScroll = (element) => {
  if (element) {
    const locomotiveScroll = new LocomotiveScroll({
      el: element,
      smooth: true,
    });

    // Update Locomotive Scroll when the DOM changes
    locomotiveScroll.update();

    return locomotiveScroll;
  }
  return null;
};

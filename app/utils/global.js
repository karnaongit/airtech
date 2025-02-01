import { gsap } from "gsap";
import Swiper from "swiper";
import "swiper/css";

// Function to hide loader
export const hideLoader = () => {
  gsap.to("#loader", { display: "none" });
};


// Function to animate text spans
export const animateText = () => {
  setTimeout(() => {
    gsap.from("#upper-container-first h1 span", {
      y: 500,
      duration: 1,
      stagger: 0.1,
    });
  }, 2500); // Delay of 2.5 seconds
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

// Dynamically import Locomotive Scroll and initialize it
export const initializeLocomotiveScroll = async (element) => {
  if (typeof window !== "undefined" && element) {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;
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
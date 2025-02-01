"use client"; // Required for interactivity in Next.js App Router

import { useEffect } from "react";
import Shery from "sheryjs";

export default function Cursor() {
  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;

    if (!isTouchDevice) {
      // Initialize Shery.js mouse follower
      Shery.mouseFollower({
        element: "#cursor",
        ease: 0.1,
        type: "circle",
        size: 30, // Normal size
        delay: 1,
        color: "#ffffff",
        background: "#000000",
        interactivity: [
          {
            element: ".hover-effect", // Apply effect to elements with this class
            properties: {
              type: "scale",
              value: 4, // Increase to 4 times the normal size
            },
          },
        ],
      });
    }

    // Cleanup on component unmount
    return () => {
      Shery.destroy();
    };
  }, []);

  return <div id="cursor" className="cursor" />;
}

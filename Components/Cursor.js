"use client"; // Required for interactivity in Next.js App Router

import { useEffect } from "react";
import Shery from "sheryjs";

export default function Cursor() {
  useEffect(() => {
    // Check if the device is a touch device
    const isTouchDevice = "ontouchstart" in window;

    // Initialize Shery.js mouse follower only on non-touch devices
    if (!isTouchDevice) {
      Shery.mouseFollower({
        element: "#cursor", // ID of the cursor element
        ease: 0.2, // Smoothness of the animation
        type: "circle", // Shape of the cursor (options: "circle", "text")
        size: 30, // Size of the cursor
        color: "#ffffff", // Color of the cursor
        background: "#000000", // Background color of the cursor
      });
    }

    // Cleanup on component unmount
    return () => {
      Shery.destroy(); // Destroy Shery.js instance to avoid memory leaks
    };
  }, []);

  return <div id="cursor" className="cursor" />;
}
// //Then, add the hover-effect class to elements you want to interact with:

// export default function Home() {
//   return (
//     <div>
//       <Cursor />
//       <h1>Welcome to Airtech</h1>
//       <p className="hover-effect">Hover over this text to see the cursor change!</p>
//     </div>
//   );
// }
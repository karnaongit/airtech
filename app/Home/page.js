"use client";
import React, { useEffect, useRef, useState } from "react";
import { animateText, initializeLocomotiveScroll } from "../utils/global";
import { gsap } from "gsap";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import Cursor from "@/Components/Cursor";
register(); // Important for module registration
const Page = () => {
  const mainRef = useRef(null);
  const swiperRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading screen exit animation
    const loader = document.querySelector("#loader");
    if (loader) {
      gsap.to(loader, {
        top: "-100%", // Move loader off-screen
        duration: 0.5, // Animation duration
        delay: 2.5, // Delay before animation starts
        ease: "power2.inOut", // Smooth easing
        onComplete: () => {
          setIsLoading(false); // Hide loader after animation
        },
      });
    }

    // Animate text after loader animation completes
    animateText();

    // Initialize Locomotive Scroll
    let locomotiveScrollInstance;
    const initScroll = async () => {
      if (mainRef.current) {
        locomotiveScrollInstance = await initializeLocomotiveScroll(mainRef.current);
      }
    };
    initScroll();

    // Cleanup on component unmount
    return () => {
      if (locomotiveScrollInstance) {
        locomotiveScrollInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div id="loader" >
          <h1 className=" text-4xl">Airtech</h1>
          <h1 className=" text-4xl">For The best</h1>
          <h1 className=" text-4xl">Sailon</h1>
        </div>
      )}

      {/* Main Content */}
       
        <div id="main-content">
          {/* Background Slider */}
          <div id="video-container-first" className="fixed inset-0 z-0">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={0} // No space between slides
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 4000, // 4 seconds delay
          disableOnInteraction: false, // Allow autoplay to continue after user interaction
        }}
        loop={true}
        speed={800} // Transition speed in milliseconds
        className="w-full h-full"
      >
        <SwiperSlide className="relative w-full h-full">
          <Image
            className="slider-img object-cover"
            src="/images/ball-Photoroom.jpg"
            alt="Slide 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image
            className="slider-img object-cover"
            src="/images/am.webp"
            alt="Slide 2"
            fill
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image
            className="slider-img object-cover"
            src="/images/ball (1).jpg"
            alt="Slide 3"
            fill
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>

      
      </Swiper>
    </div>

          {/* Main Content */}
          <div id="main" ref={mainRef} className="relative z-10">
            <div
              id="upper-container-first"
              className="relative z-20 w-full h-screen flex flex-col items-center justify-between bg-transparent"
            >
              <h1
                id="biggo"
                className="hover-effect pt-[5vh] text-blue-700 shadow-2xl  text-[10vw] leading-[40vw] font-light"
              >
                {["A", "I", "R"].map((letter, index) => (
                  <span key={index} className="inline-block ">
                    {letter}
                  </span>
                ))}
                {[" T", "E", "C", "H"].map((letter, index) => (
                  <span key={index} className="inline-block  text-red-700">
                    {letter}
                  </span>
                ))}
              </h1>
              
              
            </div>
          </div>
            


            
          {/* Page 2 Content */}
          <div id="prod" className="min-h-[60vh] px-[14vw] py-[5vw] relative font-nb bg-[#faf8f3]">
            <div id="page2-element" className="w-full h-[75vh] flex items-center justify-between mb-[8vw]">
              <div className="box relative w-[40%] h-full flex flex-col items-center justify-center p-5">
                <h1 className="text-xl">RAVIAN</h1>
                <img
                  src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                  alt=""
                  className="object-cover w-full h-full absolute transition-opacity ease-out duration-700"
                />
                <div className="prodesc absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0">
                  hare krishna
                </div>
              </div>
              <div className="box relative w-[40%] h-full flex flex-col items-center justify-center p-5">
                <h1 className="text-xl">OURA</h1>
                <img
                  src="/images/freepik__a-cylindrical-arrangement-of-colorful-intertwined-__34820.jpeg"
                  alt=""
                  className="object-cover w-full h-full absolute transition-opacity ease-out duration-700"
                />
                <div className="prodesc absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0">
                  Hare krishna
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Page;
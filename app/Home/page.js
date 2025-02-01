"use client";
import React, { useEffect, useRef } from "react";
import { hideLoader, animateText, initializeLocomotiveScroll} from "../utils/global";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from "next/image";
import { register } from 'swiper/element/bundle';
register(); // Important for module registration

const Page = () => {
  const mainRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    hideLoader();
    animateText();

    let locomotiveScroll;
    if (mainRef.current) {
      locomotiveScroll = initializeLocomotiveScroll(mainRef.current);
    }

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Background Slider */}
      <div id="video-container-first" className="fixed inset-0 z-0">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide className="relative w-full h-full">
            <Image
              className="slider-img object-cover"
              src="/images/three_8IbmQpggex.webp"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <Image
              className="slider-img object-cover"
              src="/images/ball (1).jpg"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <Image
            
              className="slider-img object-cover"
              src="/images/ball-Photoroom.jpg"
              alt="Slide 3"
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Main Content */}
      <div id="main" ref={mainRef} className="relative z-10">
        <div
          id="upper-container-first"
          className="relative  z-20 w-full h-screen flex flex-col items-center justify-between bg-transparent"
        >
          <h1 
            id="biggo" 
            className="pt-[20vh] text-white text-[10vw] leading-[40vw] font-light "
          >
            {["A","i","r","tech"].map((letter, index) => (
              <span key={index} className="inline-block">
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </div>
      <div id="page2" className="min-h-[60vh] px-[14vw] py-[5vw] relative font-nb bg-[#faf8f3]">
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
    </>
  );
};

export default Page;

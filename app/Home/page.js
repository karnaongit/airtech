"use client";
import HeroSection from './component/hero'
import AboutH from './component/about'
import ProdH from './component/prod'
import VideoH from './component/video'
import React, { useEffect, useRef, useState } from "react";
import { animateText, initializeLocomotiveScroll,textEffect } from "../utils/global";
import { gsap } from "gsap";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Power2, Power4 } from 'gsap';
import {
  ArrowRightIcon,
  DocumentArrowDownIcon as DocumentDownloadIcon,
} from '@heroicons/react/24/outline';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Link from "next/link";
register(); // Important for module registration
const Page = () => {
  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const homePageAnimation = () => {
      gsap.set(".slidesm", { scale: 2 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });
  
      tl.to(
        ".vdodiv",
        {
          "--clip": "0%",
          ease: Power2,
        },
        "a"
      )
      .to(
        ".slidesm",
        {
          scale: 1,
          ease: Power2,
        },
        "a"
      )
      .to(
        ".lft",
        {
          xPercent: -10,
          stagger: 0.03,
          ease: Power4,
        },
        "b"
      )
      .to(
        ".rgt",
        {
          xPercent: 10,
          stagger: 0.03,
          ease: Power4,
        },
        "b"
      );
    };

  const slides = [
    {
      image: "/images/gallery/fac0.webp",
      alt: "Slide 1",
      text: "Experience Innovation",
    },
    {
      image: "/images/gallery/grp0.jpg",
      alt: "Slide 1",
      text: "Experience Innovation",
    },
    {
      image: "/images/gallery/grp1.jpg",
      alt: "Slide 2",
      text: "Future of Technology",
    },
    {
      image: "/images/gallery/grp2.jpg",
      alt: "Slide 3",
      text: "Design Excellence",
    },
    {
      image: "/images/gallery/grp6.jpg",
      alt: "Slide 4",
      text: "Crafting Futures",
    },
    {
      image: "/images/gallery/grp7.jpg",
      alt: "Slide 5",
      text: "Airtech Sailon",
    },
    {
      image: "/images/gallery/grp4.jpg",
      alt: "Slide 6",
      text: "Sailon",
    },
  ];
  useEffect(() => {
    homePageAnimation();
    textEffect();
    // Loading screen exit animation
    const loader = document.querySelector("#loader");
    if (loader) {
      gsap.to(loader, {
        top: "-100%", // Move loader off-screen
        duration: 1, // Animation duration
        delay: 1, // Delay before animation starts
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
          <h1 className=" text-4xl ">Airtech sailon</h1>
          <h1 className=" text-4xl">Crafting quality that strengthens industries</h1>
          
        </div>
      )}

      {/* Main Content */}
       
        <div id="main-content">
          
          {/* Background Slider */}
          
          <div id="video-container-first" className="absolute inset-0 z-0 ">
            
        
                    <div className=" w-full h-full flex-wrap">
                    {/* <div className="z-12 mx-28 p-6 z-12 text-3xl text-red-800 md:hidden">
                              <h3>Crafting Quality that strenghtens industries.</h3>
                          </div> */}
                <Swiper
                  ref={swiperRef}
                  modules={[Autoplay, Navigation, EffectFade]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  speed={400}
                  className="w-full h-full"
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full overflow-hidden">
                      {/* Image wrapper with zoom animation */}
                      <div className="absolute inset-0 scale-600 animate-ken-burns">
                        <Image
                          className="object-cover"
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          priority
                        />
                        
                      </div>
                      
                      {/* Text overlay with animation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        
                        <div className="text-white text-6xl font-bold opacity-0 animate-slide-up z-10">
                          {slide.text}
                          
                        </div>
                        
                      </div>
                    </SwiperSlide>
                  ))}

                  {/* Custom navigation buttons */}
                  <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full backdrop-blur-sm">
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full backdrop-blur-sm">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                  
                </Swiper>

      {/* Add required styles */}
      <style jsx global>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.4);
          }
        }

        .animate-ken-burns {
          animation: kenBurns 20s ease infinite alternate;
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .animate-slide-up {
          animation: slideUp 4s ease-in-out infinite;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none;
        }
      `}</style>
    </div>
      
    </div>

          {/* Main Content */}
          <div id="main" ref={mainRef} className="relative z-10">
            
          <div className="absolute top-[20vh] right-[24vw] flex flex-row gap-4 items-center px-4 sm:px-40 z-[1000]">
                  <a 
                    href="/Contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <ArrowRightIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                    Contact us
                  </a>
                  
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1AA8K5aZbxEnefItOuKgIN16N1nS7dCV6"
                    download="AirTech_Brochure.pdf"
                    className="bg-white hover:bg-gray-50 text-blue-600 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg font-semibold transition-all border-2 border-blue-600 shadow-sm flex items-center justify-center gap-2"
                  >
                    <DocumentDownloadIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                    Download Brochure
                  </a>
                </div>
            <div
              id="upper-container-first"
              className="relative z-20 top-60 w-full h-screen flex flex-col items-end justify-between bg-transparent"
            >
              <h1
                id="biggo"
                className="hover-effect pt-[10vh] text-bp   text-[10vw] leading-[40vw] font-light"
              >
                
                {["A", "I", "R"].map((letter, index) => (
                  <span key={index} className="inline-block ">
                    {letter}
                  </span>
                ))}
                
                {[" T", "E", "C", "H"].map((letter, index) => (
                  <span key={index} className="inline-block  text-rp">
                    {letter}
                  </span>
                ))}
                {/* <div id="center">
                
                 <div id="right">
                    <h1>SPACES <br/>
                        THAT <br/>
                        INSPIRE</h1>
                </div> 
            </div>  */}
              </h1>
            </div>
            
          </div>
      <AboutH/>
      <hr/> 
      <ProdH/>
      <hr/>
      <VideoH/>
      <hr/>
      </div>
      <div ref={containerRef} className="main w-full " >
      <div data-color="black" className="home section w-full h-[200vh] relative bg-black">
        <div className="w-full sticky top-0 left-0">
          <div className="btmtext absolute z-[4] w-52 font-semibold bottom-[7%] left-[3%]">
            <h1>We build big ideas. <br />
              Software. Apps. Tools. <br />
              For real people. Real lives.</h1>
          </div>
          <div style={{ "--clip": "100%" }}
            className="vdodiv w-full h-screen z-[3] absolute top-0 left-0 bg-black overflow-hidden">
            <img
              className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/images/ball-Photoroom.jpg"
              alt="Hero"
            />
          </div>
          <div className="marqueecontainer w-full h-screen relative overflow-hidden">
            <div className="heading w-72 font-semibold text-center absolute top-[7%] left-1/2 -translate-x-1/2">
              <h1 className="text-xl font-regular"><br/>Crafting a new paradigm of healthcare, one that is</h1>
            </div>
            
            <div className="slidesm absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
              {/* Marquee content goes here - shortened for brevity */}
              <div className="row lft -translate-x-1/2 w-full flex items-center gap-10 whitespace-nowrap">
                {/* Marquee items */}
                ok
              </div>
              <div className="row rgt -translate-x-3/4 w-full flex items-center gap-10 whitespace-nowrap">
                {/* Marquee items */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Page;
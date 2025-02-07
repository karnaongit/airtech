"use client";
import React, { useEffect, useRef, useState } from "react";
import { animateText, initializeLocomotiveScroll,textEffect } from "../utils/global";
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
    textEffect();
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
  const [hoveredImage, setHoveredImage] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const elemData = [
    {
      title: "Sailon Single Yran",
      image: "/images/image.png",

       },
    {
      title: "Sailon Twisted Yran & Sailon Sewing Threa",
      image: "https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
    },
    {
      title: "Sailon Sewing Thread ( Nylon Thread )",
      image: "https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Sailon NW-1 1000 Length",
      image: "https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
    },
    // {
    //   title: "SOHO NYC",
    //   image: "https://images.unsplash.com/photo-1700924546093-f914fd5b8814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
    // },
    // {
    //   title: "SOHO 2023",
    //   image: "https://images.unsplash.com/photo-1700601437860-e66da79cf6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D"
    // },
    // {
    //   title: "Play New Kidvision",
    //   image: "https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"
    // }
  ];

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

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
            src="/images/Airtech.jpg"
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
                className="hover-effect pt-[5vh] text-white shadow-2xl  text-[10vw] leading-[40vw] font-light"
              >
                
                {["A", "I", "R"].map((letter, index) => (
                  <span key={index} className="inline-block ">
                    {letter}
                  </span>
                ))}
                
                {[" T", "E", "C", "H"].map((letter, index) => (
                  <span key={index} className="inline-block  text-white">
                    {letter}
                  </span>
                ))}
                <div id="center">
                <div id="left">
                    <h3>Crafting Quality that strenghtens industries.</h3>
                </div>
                {/* <div id="right">
                    <h1>SPACES <br/>
                        THAT <br/>
                        INSPIRE</h1>
                </div> */}

            </div>
                
              </h1>
              
              
            </div>
            
          </div>
          <div id="page2" className="page2">
                
          <div id="moving-text" className="moving-text">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="con">
            <h1></h1>
            <div className="gola"></div>
            <h1>Discover the Best Yarn & Thread at Airtech Sailon</h1>
            <div className="gola"></div>
            <h1></h1>
            <div className="gola"></div>
          </div>
        ))}
      </div>
      <div id="page2-bottom" className="page2-bottom">
        
        <h1>
        WELCOME TO AIRTECH ENGINEERS!<br/>
        Mastery in the Art of making Yarns and Threads
        </h1>
        
        <div id="bottom-part2" className="bottom-part2">
          
          <Image
            src="/images/freepik__a-cylindrical-arrangement-of-colorful-intertwined-__34819.jpeg"
            alt="Collaboration"
            width={500}
            height={500}
            className="bottom-image"
          />
          <p className=".text-elem">
          At Airtech Sailon, we deliver precision-engineered polypropylene (PP) 
          multifilament yarn that meets the highest standards of durability and performance. 
          Our products are trusted by industry leaders across the globe for their reliability, 
          strength, and versatility in demanding applications. 
          </p>
          
        </div>
        
      </div>
      
                 {/* Gooey Animation */}
                 <div id="gooey" className="gooey">
                
                </div>
                
          </div>
          <div 
        id="fixed-image" 
        style={{
          backgroundImage: `url(${hoveredImage})`,
          display: isHovering ? 'block' : 'none'
        }}
      />
      
      <div id="page3" className="min-h-screen w-full bg-[#EFEAE3] py-[4vw]">
        <div id="elem-container">
          
          {elemData.map((elem, index) => (
            <div
              key={index}
              className="elem h-[150px] w-full relative border-b border-[#38383864] overflow-hidden flex items-center px-[2vw]"
              onMouseEnter={() => handleMouseEnter(elem.image)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overlay h-full w-full bg-blue-400 absolute left-0 top-[-100%] transition-all duration-250 ease-in-out" />
              <h2 className="text-[3vw] relative z-[9]">{elem.title}</h2>
            </div>
          ))}
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
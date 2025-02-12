"use client";
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
          markers:true,
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
      image: "/images/Airtech.jpg",
      alt: "Slide 1",
      text: "Experience Innovation",
    },
    {
      image: "/images/am.webp",
      alt: "Slide 2",
      text: "Future of Technology",
    },
    {
      image: "/images/ball(1).jpg",
      alt: "Slide 3",
      text: "Design Excellence",
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
      image: "images/gallery/solo4.jpg",

       },
    {
      title: "Sailon Twisted Yran & Sailon Sewing Threa",
      image: "/images/gallery/solo1.jpg"
    },
    {
      title: "Sailon Sewing Thread ( Nylon Thread )",
      image: "images/gallery/solo2.jpg"
    },
    {
      title: "Sailon NW-1 1000 Length",
      image: "images/gallery/solo3.jpg"
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
          
          <h1 className=" text-4xl ">For The best</h1>
          <h1 className=" text-4xl">Airtech sailon</h1>
          <h1 className=" text-4xl">Crafting quality that strengthens industries</h1>
        </div>
      )}

      {/* Main Content */}
       
        <div id="main-content">
          {/* Background Slider */}
          <div id="video-container-first" className="absolute inset-0 z-0">
          
          <div className="relative w-full h-full flex-wrap">
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
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
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
        {/* <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full backdrop-blur-sm">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full backdrop-blur-sm">
          <ChevronRight className="w-6 h-6 text-white" />
        </button> */}
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
            <div
              id="upper-container-first"
              className="relative z-20 top-60 w-full h-screen flex flex-col items-end justify-between bg-transparent"
            >
              
              <h1
                id="biggo"
                className="hover-effect pt-[5vh] text-blue-700   text-[10vw] leading-[40vw] font-light"
              >
                
                {["A", "I", "R"].map((letter, index) => (
                  <span key={index} className="inline-block ">
                    {letter}
                  </span>
                ))}
                
                {[" T", "E", "C", "H"].map((letter, index) => (
                  <span key={index} className="inline-block  text-red-800">
                    {letter}
                  </span>
                ))}
                <div id="center">
                
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
                      <h1>Discover the Best Yarn & Thread</h1>
                      {/* <div className="gola"></div> */}
                      <h1></h1>
                      {/* <div className="gola"></div> */}
                    </div>
                  ))}
                </div>
                <div  className="w-full px-[2vw] flex flex-col items-center justify-center relative z-10">
                  {/* Heading Section */}
                  <h1 className="text-[6vw] leading-[2vw] font-headline text-center mb-2
                                md:text-[3vw] md:leading-[8.5vw] 
                                sm:text-[3vw] sm:leading-[11vw]">
                    WELCOME TO AIRTECH ENGINEERS!
                  </h1>

                  {/* Flex Container for Image & Text */}
                  <div className="w-full flex items-center justify-between max-w-[120vh] mx-auto 
                                  lg:flex-row flex-col lg:space-x-1">
                    {/* Image on the Left */}
                    <div className="card-img w-1/2 lg:w-[30%] flex justify-center"
                          style={{
                            '--hover-image': 'url("/images/ai/yarn1.jpeg")', // Hover image
                          }}>
                      <Image
                        src="/images/ai/yarn2.jpeg"
                        alt="Collaboration"
                        width={500}
                        height={500}
                        className="w-full max-w-[500px] rounded-[10%] object-cover"
                      />
                    </div>

                    {/* Text on the Right */}
                    <div className="w-1/2 lg:w-[50%] text-left">
                      <h2 className="text-l sm:text-[2vw] md:text-[2vw] leading-relaxed">
                        Airtech Engineers was founded with the vision to empower global industries 
                        through high-quality, sustainable, and innovative PP multifilament yarn solutions. 
                        From our beginnings to our current status as a trusted international provider, our 
                        journey has been shaped by our commitment to these core values.
                      </h2>
                    </div>
                  </div>
                </div>
                             
                  
                  {/* <div id="page2-bottom" className="page2-bottom">
                  <h1 className="font-headline">
                              WELCOME TO AIRTECH ENGINEERS!<br/>
                          </h1>
                  <div id="bottom-part2" className="bottom-part2">
                      
                      <Image
                        src="/images/freepik__a-cylindrical-arrangement-of-colorful-intertwined-__34819.jpeg"
                        alt="Collaboration"
                        width={500}
                        height={500}
                        className="bottom-image"
                      />
                      <p className="my-1 text-xs ">
                      At Airtech Sailon, we deliver precision-engineered polypropylene (PP) 
                      multifilament yarn that meets the highest standards of durability and performance. 
                      Our products are trusted by industry leaders across the globe for their reliability, 
                      strength, and versatility in demanding applications. 
                      </p>
                      
                    </div>
                    <div> 
                              <h2 className="text-xl">Mastery in the Art of making Yarns and Threads</h2>
                              <h2 className="text-xl"> Airtech
                                Engineers was founded with the vision to empower global
                                industries through high-quality, sustainable, and innovative
                                PP multifilament yarn solutions. From our beginnings to our
                                current status as a trusted international provider, our journey
                                has been shaped by our commitment to these core values.
                              </h2>
                    </div>
                  </div> */}
                  
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
      <hr/> 
      <div id="page3" className="min-h-screen w-full bg-[#ffffff] py-[1vw]">
      <h1 className="text-[4vw] leading-[2vw] font-headline text-center mb-14 -my-10
                      md:text-[8vw] md:leading-[8.5vw] 
                      sm:text-[10vw] sm:leading-[11vw]">
          Our Yarns
        </h1>
        <hr/>
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
      {/* The product page*/}
      <div className="relative h-full w-full p-[3vw] bg-white">
      <div className="text-center">
        {/* <h5 className="text-[1.2vw] font-medium mb-[1vw] font-sans">
          Agency & Venture{' '}
          <span className="bg-black text-white px-2.5 py-1 rounded-lg text-[0.8vw] mr-2.5">
            Models
          </span>
          <i className="ri-corner-right-down-line"></i>
        </h5> */}
        <h1 className="text-[6vw] font-medium font-headline">Explore our Products</h1>
        {/* <h1 className="text-[4.1vw] font-medium font-sans">& engagement models</h1> */}
      </div>

      <div className="h-[75vh] w-full mt-[0.2vw]">
        <div className="flex items-center justify-between h-[60px] font-sans font-normal">
          <h3 className="text-[1.7vw]">Sailon</h3>
          <h2 className="text-[1.7vw] font-normal">
            <i className="ri-corner-down-right-line"></i>Airtech
          </h2>
        </div>

        <div className="h-[calc(100%-60px)] w-full flex items-center justify-between">
          {[
            {
              logo: '/images/three_8IbmQpggex.webp',
              poster: '/images/ai/thread5.jpg',
              video: '/videos/mac3.mp4'
            },
            {
              logo: '/images/oura.svg',
              poster: '/images/ai/ball_w1.jpg',
              video: '/videos/mac2.mp4'
            },
            {
              logo: '/images/Logo.svg',
              poster: '/images/ai/thread3.jpg',
              video: '/videos/mac1.mp4'
            }
          ].map((item, index) => (
            <div key={index} className="h-full w-[32.5%] relative group">
              <Image
                src={item.logo}
                alt=""
                width={100}
                height={100}
                className="w-[30%] object-cover object-center absolute z-10 top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
              <Image
                src={item.poster}
                alt=""
                width={400}
                height={600}
                className="w-full h-full object-cover object-center absolute transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-0 cursor-pointer"
              />
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover object-center"
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
      
          {/* Page 2 Content */}
            
          {/* <div id="prod" className="min-h-[60vh] px-[14vw] py-[5vw] relative font-nb bg-[#faf8f3]">
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
          </div> */}
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
"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "../styles/about.module.css";
import { gsap } from "gsap";
// Swiper Imports
import Link from "next/link";
import { 
  GlobeAltIcon as GlobeIcon,
  BuildingOffice2Icon as FactoryIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

import { ViewfinderCircleIcon as SpoolIcon } from '@heroicons/react/24/outline'
export default function BackgroundTransition() {
   
  const [showBallBg, setShowBallBg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef(null);
  useEffect(() => {
    
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
    const handleScroll = () => {
      const helloSection = document.getElementById("helloSection");
      if (!helloSection) return;

      const helloTop = helloSection.getBoundingClientRect().top;

      // Change background when "hello" is at 70% of the viewport
      if (helloTop < window.innerHeight * 1) {
        setShowBallBg(true);
      } else {
        setShowBallBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    

  const [bgState, setBgState] = useState(1);
  
  const [hoveredImage, setHoveredImage] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null); // 'left' or 'right'
  
    const cerData = [
      {
        title: "MASSIA",
        image: "/images/cer/cer1.jpg",
         },
      {
        title: "Structure Stability",
        image: "/images/cer/cer2.jpg"
      },
      {
        title: "TUV SUD south-asia ",
        image: "/images/cer/cer3.jpg"
      },
      {
        title: "Gov. purchase enlistment",
        image: "/images/cer/cer4.jpg"
      },
    ];
    const achData = [
      {
        title: "Achievers award 2021",
        image: "/images/cer/ach1.jpg",
         },
      {
        title: "MH. Gaurav-Pramanpatra",
        image: "/images/cer/ach2.jpg"
      },
      {
        title: "My maharashtra Award 2019 ",
        image: "/images/cer/ach3.jpg"
      },
      {
        title: "News Headlines",
        image: "/images/cer/ach4.jpg"
      },
      {
        title: "My maharashtra Award 2019 ",
        image: "/images/cer/ach3.jpg"
      },
      {
        title: "News Headlines",
        image: "/images/cer/ach4.jpg"
      },
      {
        title: "My maharashtra Award 2019 ",
        image: "/images/cer/ach3.jpg"
      },
      {
        title: "News Headlines",
        image: "/images/cer/ach4.jpg"
      },
      
      
    ];
    const achievements = [
      
      {
        src: '/images/cer/frame2.jpg',
        name: 'Excellence by maharashyta shasan',
        reason: 'Ranked in the top 5% of a regional competition.',
      },
      {
        src: '/images/cer/frame3.jpg',
        name: 'My Maharashtra award 2019',
        reason: 'Best Becoming the young entreprenaur',
      },
      {
        src: '/images/cer/frame4.jpg',
        name: 'Achievers Award',
        reason: 'Recognize our outstanding achievement',
      },
      {
        src: '/images/cer/frame5.jpg',
        name: 'Gifts by Maharshtra shasan',
        reason: 'Invited as a guest at a major conference.',
      },
    ];
  
    const handleMouseEnter = (image,column) => {
      setHoveredImage(image);
      setIsHovering(true);
      setActiveColumn(column);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
      setActiveColumn(null);
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

   

  return (
    <>

{isLoading && (
        <div id="loader" >
          
          <h1 className=" text-4xl ">ABOUT</h1>
        </div>
      )}
        <div className="h-full relative overflow-hidden">
             

        

        

      <div className="relative  h-96 flex justify-center items-center text-center text-[6vw] font-medium font-headline bg-clip-text  bg-gradient-to-r text-transparent  from-blue-700 to-red-700">
         {/* First Background - Airtech */}
         <div
                className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/gallery/grp3.jpg')] bg-cover bg-center transition-opacity duration-500 ${
                  showBallBg ? "opacity-0" : "opacity-100"
                }`}
              ></div>
        ABOUT
      </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-24 px-4 relative overflow-hidden">
  {/* Floating Industrial Symbols */}
 

  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-3 gap-12 items-center">
      {/* Image Gallery */}
      <div className="space-y-10">
  {/* Hero Image */}
  <div className="relative h-96 rounded-2xl overflow-hidden group shadow-lg transition-all hover:shadow-2xl">
    <Image
      src="/images/gallery/office7.jpg"
      alt="State-of-the-art facility"
      fill
      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 flex items-end p-6">
      <span className="text-white text-xl font-semibold tracking-wide">Est. 2005</span>
    </div>
  </div>

  {/* Secondary Images */}
  <div className="grid grid-cols-2 gap-6">
    {/* Circular Image */}
    <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-gray-200 hover:border-blue-600 transition-all duration-300">
      <Image
        src="/images/logo/bir1.png"
        alt="Our Dedicated Team"
        fill
        className="object-cover"
      />
    </div>

    {/* Polygon Image */}
    <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-gray-200 hover:border-blue-600 transition-all duration-300">
      <Image
        src="/images/gallery/emp3.jpg"
        alt="Global Presence"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Additional Image - Diamond Shape */}
  <div className="relative h-96 rounded-2xl overflow-hidden group shadow-lg transition-all hover:shadow-2xl">
    <Image
      src="/images/gallery/office1.jpg"
      alt="State-of-the-art facility"
      fill
      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 flex items-end p-6">
      <span className="text-white text-xl font-semibold tracking-wide">Quality policy</span>
    </div>
  </div>
</div>

      {/* Content Section */}
      <div className="lg:col-span-2 space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-red-700 bg-clip-text text-transparent">
          Weaving Global Industrial Progress
        </h2>

        {/* Company Description */}
        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            At Airtech Engineers, we are dedicated to delivering excellence in the world of polypropylene (PP) multifilament yarn, 
            providing reliable and innovative solutions for packaging, agriculture, fishing, and industrial applications. 
            With an unwavering commitment to quality, sustainability, and customer satisfaction, we serve as a trusted partner to businesses worldwide.
          </p>
          <p>
            Founded with a vision to <strong>"Craft Quality that Strengthens Industries,"</strong> Airtech Engineers has grown into a leading exporter in the field. 
            Headquartered in India, our presence spans continents, reaching clients in Africa, South America, North America, Asia, and beyond, 
            including countries such as USA, Nigeria, Ghana, Canada, Brazil, South Korea, and Turkey.
          </p>
          <p>
            Our state-of-the-art manufacturing facilities combine cutting-edge technology with sustainable practices, ensuring that every strand of yarn 
            meets the highest global standards. From industrial textiles to agricultural nets, our products are designed to empower industries and 
            drive economic growth across the globe.
          </p>
        </div>

        {/* Stats and Features */}
        <div className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
              🌍
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800">Global Impact</h3>
              <p className="text-gray-600 mt-2">
                Serving 15+ countries across 5 continents, our yarn forms the backbone of industries worldwide.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['USA', 'Nigeria', 'Brazil', 'South Korea'].map((country) => (
                  <span key={country} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl group hover:bg-blue-100 transition-colors">
              <h4 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <span className="text-xl">⚡</span>
                Core Expertise
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• PP Multifilament Yarn</li>
                <li>• Industrial Textiles</li>
                <li>• Agricultural Solutions</li>
              </ul>
            </div>

            <div className="p-6 bg-red-50 rounded-xl group hover:bgred-100 transition-colors">
              <h4 className="text-lg font-semibold text-teal-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🌱</span>
                Sustainability
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Eco-friendly Production</li>
                <li>• Waste Reduction Systems</li>
                <li>• Energy Efficiency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-red-700 p-0.5">
          <div className="bg-white/95 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Journey</h3>
            <p className="text-gray-600 mb-6">
              Discover how Airtech Engineers can strengthen your business with our premium yarn solutions.
            </p>
            <a
              href="/Contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .clip-path-polygon {
      clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
    }
    .clip-path-diamond {
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>
</div>

      <h1 className="text-5xl font-bold  text-center p-5">
          Certificates and Achievements
        </h1>
        <div>
        <h3 className="textpara text-2xl text-center leading-[2rem]">
            Work in  the Airtech team has been such a pleasure!<br/>
             We took on a significant project to rebuild our entire platform<br/>
             and the team approached the project with our best interests in mind...
          </h3> 
        <div className="relative text-4xl sm:text-6xl md:text-8xl min-h-screen flex justify-center items-center text-center">
       
          <div className="relative bg-white w-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* Hovering Images with Blur Effect */}
                <div
                  id="fixed-image-left"
                  className={`fixed z-50 sm:top-[5%] sm:left-[50%] max-w-[80vw] max-h-[60vh] bg-cover bg-center 
                  ${isHovering && activeColumn === "left" ? "scale-100 rounded-[15px] opacity-100 " : "scale-0 rounded-full opacity-0"}
                  transition-all duration-500 ease-in-out`}
                  style={{ backgroundImage: `url(${hoveredImage})` }}
                ></div>

                <div
                  id="fixed-image-right"
                  className={`fixed z-50 sm:top-[5%] sm:left-[10%] max-w-[80vw] max-h-[60vh] bg-cover bg-center 
                  ${isHovering && activeColumn === "right" ? "scale-100 rounded-[15px] opacity-100 " : "scale-0 rounded-full opacity-0"}
                  transition-all duration-500 ease-in-out`}
                  style={{ backgroundImage: `url(${hoveredImage})` }}
                ></div>

                  {/* Left Column - Certificates */}
                  <div className="space-y-4 w-full py-6 sm:py-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center border-b-4 border-blue-500 pb-2">Certificates</h1>
                    <div>
                      {cerData.map((elem, index) => (
                        <div
                          key={index}
                          className="elem h-[8vh] sm:h-[10vh] w-full relative border-b border-[#38383864] overflow-hidden flex items-center px-4 sm:px-[2vw] transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:scale-105"
                          onMouseEnter={() => handleMouseEnter(elem.image, "left")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="overlay h-full w-full bg-blue-400 absolute left-0 top-[-100%] transition-all duration-300 ease-in-out" />
                          <h2 className="text-lg sm:text-2xl relative z-[9]">{elem.title}</h2>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Achievements */}
                  <div className="space-y-4 w-full py-6 sm:py-8">
                  <h1 className="text-4xl sm:text-5xl font-bold text-center border-b-4 border-blue-500 pb-2">Achievements</h1>

                    <div>
                      {achData.map((elem, index) => (
                        <div
                          key={index}
                          className="elem h-[8vh] sm:h-[10vh] w-full relative border-b border-[#38383864] overflow-hidden flex items-center px-4 sm:px-[2vw] transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:scale-105"
                          onMouseEnter={() => handleMouseEnter(elem.image, "right")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="overlay h-full w-full bg-blue-400 absolute left-0 top-[-100%] transition-all duration-300 ease-in-out" />
                          <h2 className="text-lg sm:text-2xl relative z-[9]">{elem.title}</h2>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div></div>


       
      <h1 className="text-5xl font-bold  text-center p-5">

          Honours
        </h1>
          {/* Second Background - Ball Photoroom */}
          <div
      className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/ball-Photoroom.jpg')] bg-cover bg-center transition-opacity duration-200 ${
        showBallBg ? "opacity-100" : "opacity-0"
      }`}
    ></div>
        <div className="relative text-4xl sm:text-6xl md:text-8xl min-h-screen flex flex-wrap justify-center items-center text-center">
            <div className="relative bg-white w-full">
              <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-2xl shadow-lg"
                    >
                      <Image
                        src={achievement.src}
                        alt={achievement.name}
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 text-center">
                        <h3 className="text-lg font-bold">{achievement.name}</h3>
                        <p className="text-sm">{achievement.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>

      <h1 className="text-8xl font-bold mb-12 text-center p-10">
          FOUNDER
        </h1>
    </div>
    {/* Testimonial Section */}
       <div data-color="black" className="para section w-full h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="text w-[70%] flex flex-col items-center justify-center">
          
          <div className="pers mt-10 flex flex-col items-center justify-center gap-5">
            <div className="image w-80 h-80 rounded-full overflow-hidden  bg-[url('/images/logo/bir1.png')] bg-contain"></div>
            <h1 className="text-3xl">Mr.Birangal</h1>
            <h3>Founder</h3>
          </div>
          <h3 className="textpara text-2xl text-center leading-[2rem]">
          Leading the Airtech team has been an incredible journey! Our commitment to innovation, collaboration, and excellence has driven us to successfully rebuild our platform. I’m proud of the dedication and hard work each team member has put in to bring our vision to life.
          </h3> 
        </div>
      </div> 
    </>
  );
}


// {/* Card with custom initial and hover text */}
//             {/* <div
//               className="card"
//               style={{ '--hover-text': '"WORLD"' }} // Set hover text dynamically
//             >
//             Hover
//             </div> */}
//                           {/* Card with custom initial and hover images */}
//               {/* <div
//                 className="card-img"
//                 style={{
//                   '--initial-image': 'url("/images/ai/ball_w1.jpg")', // Initial image
//                   '--hover-image': 'url("/images/ai/ball_b1.jpg")', // Hover image
//                 }}
//               ></div> */}

// At Airtech Engineers, we are dedicated to delivering excellence in the world of polypropylene (PP) multifilament yarn, 
//             providing reliable and innovative solutions for packaging, agriculture, fishing, and industrial applications. 
//             With an unwavering commitment to quality, sustainability, and customer satisfaction, we serve as a trusted partner to businesses worldwide. 
//             Founded with a vision to "Craft Quality that Strengthens Industries," Airtech Engineers has grown into a leading exporter in the field. 
//             Headquartered in India, our presence spans continents, reaching clients in Africa, South America, North America, Asia, and beyond, 
//             including countries such as USA, Nigeria, Ghana, Canada, Brazil, South Korea, and Turkey.


{/* <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center gap-16">
        
<div className="w-full lg:w-1/2 space-y-12">
  <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
    <span className="inline-block hover:-rotate-3 transition-transform">🚀</span>
    <br />
    Crafting Industrial<br />DNA Since 2005
  </h1>


  <div className="space-y-8 group">
    <div className="p-8 bg-gradient-to-br from-[#112240]/90 to-[#0a192f]/90 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all shadow-2xl hover:shadow-cyan-500/20">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
          🌍
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Global Domination</h3>
          <p className="text-slate-300 leading-relaxed">
            Commanding presence across 5 continents with strategic hubs in
            <span className="text-cyan-300"> USA, Nigeria, Brazil</span>, and
            <span className="text-cyan-300"> South Korea</span>.
          </p>
        </div>
      </div>
    </div>

    <div className="p-8 bg-gradient-to-br from-[#112240]/90 to-[#0a192f]/90 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-blue-400/30 transition-all shadow-2xl hover:shadow-blue-500/20">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
          ⚡
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Innovation Engine</h3>
          <p className="text-slate-300 leading-relaxed">
            Pioneering <span className="text-blue-300">AI-driven quality systems</span> and
            <span className="text-blue-300"> sustainable manufacturing protocols</span>.
          </p>
        </div>
      </div>
    </div>
  </div>

 
  <div className="group relative overflow-hidden rounded-[2rem] transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]">
    <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#6366f1_50%,#0ea5e9_100%)] opacity-20 group-hover:opacity-30 transition-opacity" />
    <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 px-12 py-6 text-xl font-bold text-white flex items-center justify-center gap-4 relative">
      <span className="text-2xl">✨</span>
      Begin Your Industrial Revolution
      <span className="text-2xl">🚀</span>
    </button>
  </div>
</div>


<div className="w-full lg:w-1/2 relative h-[800px]">

  <div className="absolute top-0 left-0 w-full h-[120%] bg-gradient-to-br from-cyan-500/5 to-blue-600/5 clip-path-polygon-[0_0,100%_15%,100%_85%,0_100%]"></div>

  <div className="relative h-full grid grid-cols-2 grid-rows-3 gap-6 transform perspective-2000">
    <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden border-2 border-cyan-400/30 hover:border-cyan-400 transition-all group hover:z-10">
      <Image
        src="/images/gallery/office7.jpg"
        alt="Future Factory"
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex items-end">
        <h3 className="text-2xl font-bold text-cyan-400 drop-shadow-xl">
          Sailon  <span className="text-white">Manufacturing</span>
        </h3>
      </div>
    </div>

    <div className="relative rounded-2xl overflow-hidden border-2 border-blue-400/30 hover:border-blue-400 transition-all group hover:z-10 rotate-[-2deg] hover:rotate-0">
      <Image
        src="/images/gallery/fac1.jpg"
        alt="Quantum Lab"
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all"
      />
      <div className="absolute bottom-0 left-0 p-4 bg-black/40 backdrop-blur-sm">
        <p className="text-xs font-mono text-cyan-300">Quality control</p>
      </div>
    </div>

    <div className="relative rounded-2xl overflow-hidden border-2 border-blue-400/30 hover:border-blue-400 transition-all group hover:z-10 rotate-[3deg] hover:rotate-0">
      <Image
        src="/images/gallery/fac8.jpg"
        alt="Global Network"
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all"
      />
      <div className="absolute bottom-0 right-0 p-4 bg-black/40 backdrop-blur-sm">
        <p className="text-xs font-mono text-blue-300">exporting  </p>
      </div>
    </div>
  </div>
</div>
</div> */}
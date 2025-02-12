"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/about.module.css";
export default function BackgroundTransition() {
  const [showBallBg, setShowBallBg] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      const helloSection = document.getElementById("helloSection");
      if (!helloSection) return;
    
      const helloTop = helloSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
    
      // First Background (Default)
      if (helloTop > viewportHeight * 0.2) {
        setBgState(1); // Show first background
      } 
      // Second Background (After scrolling past the first screen)
      else if (helloTop > viewportHeight * -1) {
        setBgState(2); // Show second background
      } 
      // Third Background (After scrolling past three screens)
      else {
        setBgState(3); // Show third background
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
        name: 'Top Coder Challenge',
        reason: 'Ranked in the top 5% of a global coding competition.',
      },
      {
        src: '/images/cer/frame3.jpg',
        name: 'Hackathon Winner',
        reason: 'Won first place in a national-level hackathon event.',
      },
      {
        src: '/images/cer/frame4.jpg',
        name: 'Community Leader',
        reason: 'Recognized for contributions to open-source projects.',
      },
      {
        src: '/images/cer/frame5.jpg',
        name: 'Tech Speaker',
        reason: 'Invited as a guest speaker at a major tech conference.',
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
        <div className="h-full relative overflow-hidden">
              {/* First Background - Airtech */}
          <div
            className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/ai/ball_w1.jpg')] bg-cover bg-center transition-opacity duration-200 ${
              bgState === 1 ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Second Background - Ball Photoroom */}
          <div
            className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/ai/ball_w1.jpg')] bg-cover bg-center transition-opacity duration-200 ${
              bgState === 2 ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Third Background - Ball (1) */}
          <div
            className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/ai/ball_b1.jpg')] bg-cover bg-center transition-opacity duration-200 ${
              bgState === 3 ? "opacity-100" : "opacity-0"
            }`}
          />

      <div className="relative text-8xl h-96 flex justify-center items-center text-center text-blue-700">
        About
      </div>
      <div className="relative min-h-screen bg-slate-200 flex flex-col md:flex-row">      
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 md:p-10 box-border">
          <h1 className="text-3xl md:text-5xl text-center md:text-center">History</h1>
          <div className="flex items-center justify-center ">
            {/* Card with custom initial and hover text */}
            {/* <div
              className="card"
              style={{ '--hover-text': '"WORLD"' }} // Set hover text dynamically
            >
            Hover
            </div> */}
                          {/* Card with custom initial and hover images */}
              {/* <div
                className="card-img"
                style={{
                  '--initial-image': 'url("/images/ai/ball_w1.jpg")', // Initial image
                  '--hover-image': 'url("/images/ai/ball_b1.jpg")', // Hover image
                }}
              ></div> */}
          </div>
          

            
          <p className="p-4 md:p-6 text-base md:text-2xl">
            
            At Airtech Engineers, we are dedicated to delivering excellence in the world of polypropylene (PP) multifilament yarn, 
            providing reliable and innovative solutions for packaging, agriculture, fishing, and industrial applications. 
            With an unwavering commitment to quality, sustainability, and customer satisfaction, we serve as a trusted partner to businesses worldwide. 
            Founded with a vision to "Craft Quality that Strengthens Industries," Airtech Engineers has grown into a leading exporter in the field. 
            Headquartered in India, our presence spans continents, reaching clients in Africa, South America, North America, Asia, and beyond, 
            including countries such as USA, Nigeria, Ghana, Canada, Brazil, South Korea, and Turkey.
          </p>
          <div id="button-animation" className="inline-block w-full">
                    <button
                      type="submit"
                      className="w-full text-[#000000bb] no-underline relative z-10 transition-colors duration-400 hover:text-white px-4 py-2 rounded-lg"
                    >
                      Fill your requirements now
                    </button>
                  </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4 md:p-6 box-border">
          {/* Large Image */}
          <div className=" card-img relative w-full h-48 md:h-96 mb-4 md:mb-0
          " style={{
            '--hover-image': 'url("/images/ai/ball_b1.jpg")', // Hover image
          }}
          >
            
            <Image
              src="/images/Airtech.jpg"
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
    </div>

    {/* Small Images */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="relative card w-full md:w-1/2 h-48 m-2 md:m-4"
          style={{ '--hover-text': '"WORLD"' }}
          >
            
            <Image
              src="/images/Airtech.jpg"
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
            <div className="relative card w-full md:w-1/2 h-48 m-2 md:m-4"
            style={{ '--hover-text': '"WORLD"' }}>
              <Image
              
                src="/images/Airtech.jpg"
                alt="Description of the image"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </div>
          </div>
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
                  ${isHovering && activeColumn === "left" ? "scale-100 rounded-[15px] opacity-100 backdrop-blur-lg" : "scale-0 rounded-full opacity-0"}
                  transition-all duration-500 ease-in-out`}
                  style={{ backgroundImage: `url(${hoveredImage})` }}
                ></div>

                <div
                  id="fixed-image-right"
                  className={`fixed z-50 sm:top-[5%] sm:left-[10%] max-w-[80vw] max-h-[60vh] bg-cover bg-center 
                  ${isHovering && activeColumn === "right" ? "scale-100 rounded-[15px] opacity-100 backdrop-blur-lg" : "scale-0 rounded-full opacity-0"}
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
          TEAM
        </h1>
    </div>
    {/* Testimonial Section */}
       <div data-color="black" className="para section w-full h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="text w-[70%] flex flex-col items-center justify-center">
          
          <div className="pers mt-10 flex flex-col items-center justify-center gap-5">
            <div className="image w-80 h-80 rounded-full overflow-hidden  bg-[url('/images/ai/ball_b1.jpg')] bg-contain"></div>
            <h1 className="text-3xl">Mr.Birangal</h1>
            <h3>Owner</h3>
          </div>
          <h3 className="textpara text-2xl text-center leading-[2rem]">
            Work in  the Airtech team has been such a pleasure!<br/>
             We took on a significant project to rebuild our entire platform<br/>
             and the team approached the project with our best interests in mind...
          </h3> 
        </div>
      </div> 
    </>
  );
}

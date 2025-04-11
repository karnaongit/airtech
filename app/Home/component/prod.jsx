'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function ProdH() {
  const [hoveredImage, setHoveredImage] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [hoverPos, setHoverPos] = useState({ top: 0, left: 0 });

  const elemData = [
    {
      title: "Sailon Single Yran",
      image: "/images/gallery/solo4.jpg",
    },
    {
      title: "Sailon Twisted Yran & Sailon Sewing Threa",
      image: "/images/gallery/solo1.jpg"
    },
    {
      title: "Sailon Sewing Thread ( Nylon Thread )",
      image: "/images/gallery/solo2.jpg"
    },
    {
      title: "Sailon NW-1 1000 Length",
      image: "/images/gallery/solo3.jpg"
    }
  ];

  const handleMouseEnter = (image, e) => {
    setHoveredImage(image);
    setIsHovering(true);
    setHoverPos({ top: e.clientY, left: e.clientX });
  };

  const handleMouseMove = (e) => {
    setHoverPos({ top: e.clientY, left: e.clientX });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div id="page3" className="min-h-screen w-full mt-20 bg-[#ffffff] py-[1vw] relative">
   <h1 className="text-[10vw]  font-headline text-center mb-14 my-10 bg-clip-text bg-gradient-to-r text-transparent from-blue-700 to-red-700
                sm:text-[10vw] sm:leading-[11vw] sm:mb-16
                md:text-[8vw] md:leading-[8.5vw] md:mb-14">
  Yarns
</h1>

      <hr />
      
      <div id="elem-container">
        {elemData.map((elem, index) => (
          <div
            key={index}
            className="elem h-[150px] w-full relative border-b border-[#38383864] overflow-hidden flex items-center px-[2vw] cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(elem.image, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overlay h-full w-full bg-bp absolute left-0 top-[-100%] transition-all duration-250 ease-in-out" />
            <h2
  className="text-[5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-xl xl:text-2xl relative z-[9] font-medium"
>
  {elem.title}
</h2>

          </div>
        ))}
      </div>

      {/* Floating Hover Image - Only on md+ screens */}
      {isHovering && (
        <div
          className="hidden md:block fixed z-[999] pointer-events-none transition-all duration-300 ease-in-out"
          style={{
            top: hoverPos.top + 10,
            left: hoverPos.left + 10,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image
            src={hoveredImage}
            alt="Hovered Preview"
            width={280}
            height={280}
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
      )}
    </div>
  );
}

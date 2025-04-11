'use client'
import React from 'react'
import Image from "next/image";
export default function VideoH() {
  return (
    <>
    <div className="relative h-full w-full p-[3vw] bg-white">
    <div className="text-center">
            <h1 className="text-[6vw] font-medium font-headline bg-clip-text  bg-gradient-to-r text-transparent  from-blue-700 to-red-700">Work</h1>
            <h1 className="text-[4.1vw] font-medium font-sans">& engagement models</h1>
     </div>
    <div className="h-auto w-full mt-4 px-4 sm:px-6">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center justify-between h-auto sm:h-[60px] font-sans font-normal gap-2 sm:gap-0">
    <h3 className="text-xl sm:text-xl md:text-2xl lg:text-[1.7vw] text-center sm:text-left">Sailon</h3>
    <h2 className="text-xl sm:text-xl md:text-2xl lg:text-[1.7vw] font-normal text-center sm:text-right">
      <i className="ri-corner-down-right-line"></i> Airtech
    </h2>
  </div>

  {/* Main Content */}
  <div className="mt-6 flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4">
    {[
      {
        logo: "/images/three_8IbmQpggex.webp",
        poster: "/images/gallery/solo2.jpg",
        video: "/videos/mac3.mp4"
      },
      {
        logo: "/images/oura.svg",
        poster: "/images/gallery/solo1.jpg",
        video: "/videos/mac2.mp4"
      },
      {
        logo: "/images/Logo.svg",
        poster: "/images/gallery/solo4.jpg",
        video: "/videos/mac1.mp4"
      }
    ].map((item, index) => (
      <div key={index} className="h-[45vh] sm:h-[50vh] md:h-[60vh] w-full sm:w-[90%] md:w-[32.5%] relative group overflow-hidden rounded-2xl shadow-md">
        <Image
          src={item.poster}
          alt="Project Poster"
          width={400}
          height={600}
          className="w-full h-full object-cover absolute transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-0 cursor-pointer"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={item.video} type="video/mp4" />
        </video>
      </div>
    ))}
  </div>
</div>
</div>
</>

  )
}

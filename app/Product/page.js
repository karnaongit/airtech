'use client'// app/products/page.js
import React from 'react';
import Link from 'next/link';
import products from '@/data/product'; // Adjust the import path as needed
import { useEffect, useState } from "react";
import Image from "next/image";

const ProductsPage = () => {
  const [showBallBg, setShowBallBg] = useState(false);

  useEffect(() => {
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
  return (
    <>
    <div className="h-full relative overflow-hidden">
    <div
        className={`fixed top-0 left-0 w-full h-96 -z-10 bg-[url('/images/Airtech.jpg')] bg-cover bg-center transition-opacity duration-500 ${
          showBallBg ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div className="relative text-8xl h-96 flex justify-center items-center text-center text-white">
        Product
      </div>
      <div className="relative h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  <strong>Length:</strong> {product.length}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Height:</strong> {product.height}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Sold:</strong> {product.sold}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* <div
        className={`fixed top-0 left-0 w-full h-screen -z-10 bg-[url('/images/ball-Photoroom.jpg')] bg-cover bg-center transition-opacity duration-200 ${
          showBallBg ? "opacity-100" : "opacity-0"
        }`}
      >
      </div>

      <div
        className="relative text-8xl h-96 flex justify-center items-center text-center text"
        id="helloSection"
      >
        Products
      </div> */}
      <div className="relative h-full w-full p-[3vw] bg-[#FAF8F3]">
            <div className="text-center">
              {/* <h5 className="text-[1.2vw] font-medium mb-[1vw] font-sans">
                Agency & Venture{' '}
                <span className="bg-black text-white px-2.5 py-1 rounded-lg text-[0.8vw] mr-2.5">
                  Models
                </span>
                <i className="ri-corner-right-down-line"></i>
              </h5> */}
              {/* <h1 className="text-[4.1vw] font-medium font-sans">Explore our Products</h1>
              <h1 className="text-[4.1vw] font-medium font-sans">& engagement models</h1> */}
            </div>
      
            {/* <div className="h-[75vh] w-full mt-[0.2vw]">
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
            </div> */}
          </div>
    </>
  );
};

export default ProductsPage;
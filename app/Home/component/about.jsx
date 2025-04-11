'use client'
import React from 'react'
import Image from "next/image";
import {
    CheckCircleIcon,
    GlobeAltIcon as GlobeIcon,
    UserGroupIcon as UsersIcon,
    BoltIcon as LightningBoltIcon,
    ArrowRightIcon,
    DocumentArrowDownIcon as DocumentDownloadIcon,
  } from '@heroicons/react/24/outline';
export default function AboutH() {
  return (
    <div id="page2" className="page2 my-1">
            
                          
    <div id="moving-text" className="moving-text bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-xl">
  {[...Array(3)].map((_, index) => (
    <div key={index} className="con">
      <h1></h1>
      <div className="gola"></div>
      <h1 className="bg-clip-text  bg-gradient-to-r text-transparent  from-blue-700 to-red-700">Discover the Best Yarn & Thread</h1>
      {/* <div className="gola"></div> */}
      <h1></h1>
      {/* <div className="gola"></div> */}
    </div>
  ))}
</div>
<div  className="w-full px-[2vw] flex flex-col items-center justify-center relative z-10">
  {/* Heading Section */}
  <h1 className="text-[10vw] font-headline text-center mb-2 bg-clip-text bg-gradient-to-r text-transparent from-blue-700 to-red-700
                mt-14 sm:mt-12 md:mt-10
                md:text-[8vw] md:leading-[8.5vw] 
                sm:text-[10vw] sm:leading-[11vw]">
  ABOUT
</h1>


  {/* Flex Container for Image & Text */}
    <div className="w-full flex flex-col lg:flex-row items-center justify-between max-w-8xl mx-auto px-4 py-12 gap-12 ">
    {/* bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-xl */}
{/* Image Gallery Section */}
<div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-8">
  {/* Main Featured Image */}
  <div className="relative w-full md:w-2/3 h-96 rounded-2xl overflow-hidden group transition-all duration-500 hover:shadow-2xl">
    <Image
      src="/images/gallery/grp4.jpg"
      alt="Modern yarn production"
      fill
      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
  </div>

  {/* Secondary Images Grid */}
  <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
    <div className="relative h-40 rounded-lg overflow-hidden">
      <Image
        src="/images/gallery/solo2.jpg"
        alt="Quality control process"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative h-40 rounded-lg overflow-hidden">
      <Image
        src="/images/gallery/solo3.jpg"
        alt="Our expert team"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative h-40 rounded-lg overflow-hidden col-span-2">
      <Image
        src="/images/gallery/solo4.jpg"
        alt="Sustainable manufacturing"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>

{/* Content Section */}
<div className="w-full lg:w-1/2 space-y-8">
  <h2 className="text-4xl text-fp font-bold text-gray-900">
    <span className="text-bp">
      Innovating Textile Solutions
    </span>
    <br />
    Since 2005
  </h2>

  <div className="space-y-6 text-lg border-l-4 border-blue-800 pl-6">
    <p className="leading-relaxed">
      Founded with a vision to revolutionize the synthetic yarn industry, Airtech Engineers has grown from 
      a regional manufacturer to a global leader in PP multifilament yarn solutions. Our journey reflects 
      India's industrial growth story.
    </p>

    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-bp font-headline">Core Philosophy</h3>
      <p className="leading-relaxed">
        We combine cutting-edge German machinery with sustainable practices to deliver yarns that meet 
        global standards while maintaining ecological responsibility. Our ISO-certified processes ensure 
        consistency across 15+ countries we serve.
      </p>
    </div>

    <ul className="grid grid-cols-2 gap-4 text-sm">
      <li className="flex items-center space-x-2">
        <CheckCircleIcon className="w-5 h-5 text-green-600" />
        <span>5000+ Tons Annual Production</span>
      </li>
      <li className="flex items-center space-x-2">
        <GlobeIcon className="w-5 h-5 text-bp" />
        <span>15+ Countries Served</span>
      </li>
      <li className="flex items-center space-x-2">
        <UsersIcon className="w-5 h-5 text-bp" />
        <span>200+ Skilled Professionals</span>
      </li>
      <li className="flex items-center space-x-2">
        <LightningBoltIcon className="w-5 h-5 text-yellow-600" />
        <span>98% Operational Efficiency</span>
      </li>
    </ul>
  </div>

  {/* CTA Section */}
  <div className="mt-8 flex flex-col sm:flex-row gap-4">
    <a 
      href="/About" 
      className="bg-bp hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
    >
      <ArrowRightIcon className="w-5 h-5" />
      Explore Our Journey
    </a>
    
    {/* <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all border-2 border-blue-600 shadow-sm flex items-center justify-center gap-2">
      <DocumentDownloadIcon className="w-5 h-5" />
      Download Brochure
    </button> */}
  </div>
</div>
</div>
</div>
            {/* Gooey Animation */}
<div id="gooey" className="gooey">

</div>
            
            
</div>
  )
}

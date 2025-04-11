// pages/testimonials.js
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Testimonials() {
  const testimonialVideos = [
    { 
      title: "How Our Service Transformed My Business",
      description: "Amina Bello, Naija-Networks, Nigeria",
      driveId: "1P5Wqv66wR1T8QdWhjYF1mKdE5HsK8U3y",
      thumbnail: "/images/nigeria.png"
    },
    {
      title: "The Results Speak For Themselves",
      description: "Georgi Ivanov, Balkan Agro Mills, Bulgaris",
      driveId: "1twlTNnmdJckaXHct8H_ayOGtikky1ZU-",
      thumbnail: "/images/bulgaris.png"
    }
  ];

  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Testimonials</title>
        <meta name="description" content="Customer testimonials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="container mx-auto px-4 py-8 md:py-16"
      >
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-black py-24 mb-20 md:mb-40 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-red-600">Client </span>
          <span className="text-black">Testi</span>
          <span className="text-blue-600">monials</span>
        </motion.h1>

        {/* Desktop View */}
        <div className="hidden md:flex md:flex-row md:space-x-8 md:space-y-0">
          {testimonialVideos.map((testimonial, index) => (
            <motion.div 
              key={`desktop-${index}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 flex-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.2), duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-red-500 to-blue-500">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{testimonial.title}</h2>
                <p className="text-sm md:text-base text-gray-100">{testimonial.description}</p>
              </div>
              <div className="relative aspect-video w-full">
                <GoogleDriveVideo driveId={testimonial.driveId} thumbnail={testimonial.thumbnail} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {testimonialVideos.map((testimonial, index) => (
            <motion.div 
              key={`mobile-${index}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.2), duration: 0.6 }}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div className="px-4 py-3 bg-gradient-to-r from-red-500 to-blue-500">
                <h2 className="text-xl font-bold text-white mb-1">{testimonial.title}</h2>
                <p className="text-sm text-gray-100">{testimonial.description}</p>
              </div>
              <div className="relative aspect-video w-full">
                <GoogleDriveVideo driveId={testimonial.driveId} thumbnail={testimonial.thumbnail} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function GoogleDriveVideo({ driveId, thumbnail }) {
  const [showIframe, setShowIframe] = useState(false);
  const iframeUrl = `https://drive.google.com/file/d/${driveId}/preview`;

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden">
      {!showIframe ? (
        <div 
          className="w-full h-full relative cursor-pointer"
          onClick={() => setShowIframe(true)}
        >
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Play className="w-12 h-12 text-white opacity-80" />
          </div>
        </div>
      ) : (
        <iframe
          src={iframeUrl}
          className="w-full h-full min-h-48 md:min-h-64"
          frameBorder="0"
          allowFullScreen
        />
      )}
    </div>
  );
}

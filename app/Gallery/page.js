"use client"; // Runs this component in the client side
import React, { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';
import Masonry from 'react-masonry-css';
import { motion } from "framer-motion";

const GalleryPage = () => {
  // List of images in the public/images/gallery folder
  // You need to manually add your image filenames here
  const galleryImagesList = [
    '/images/gallery/solo1.jpg',
    '/images/gallery/solo2.jpg',
    '/images/gallery/solo3.jpg',
    '/images/gallery/grp0.jpg',
    '/images/gallery/grp1.jpg',
    '/images/gallery/grp2.jpg',
    '/images/gallery/grp3.jpg',
    '/images/gallery/grp4.jpg',
    '/images/gallery/grp5.jpg',
    '/images/gallery/grp6.jpg',
    '/images/gallery/grp7.jpg',
    // Add all your image paths here
    // If you have more images, add them to this list
  ];

  // State for shuffled images
  const [imagePaths, setImagePaths] = useState([]);
  
  useEffect(() => {
    // Function to shuffle the array (Fisher-Yates algorithm)
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    // Shuffle images and set to state
    setImagePaths(shuffleArray(galleryImagesList));
  }, []);

  // Masonry breakpoint columns
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingSection}>
        <h1 className={styles.heading}>Gallery</h1>
      </div>
      
      {imagePaths.length === 0 ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
          <p className="mt-2">Loading gallery...</p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridColumn}
        >
          {imagePaths.map((src, index) => (
            <motion.div 
              key={index}
              className={styles.galleryItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
            >
              <img 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                className={styles.galleryImage} 
                loading="lazy" 
              />
            </motion.div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default GalleryPage;
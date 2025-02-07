"use client"; // Runs this component in the client side

import React, { useEffect, useState } from 'react';
import styles from '../styles/Gallery.module.css';
import Masonry from 'react-masonry-css';
import { motion } from "framer-motion";


const GalleryPage = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api'); // Fetching from our API
        const data = await response.json();
        setImagePaths(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
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
    transition={{ duration: 0.1, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }} // Add hover effect
  >
    <img src={src} alt={`Gallery Image ${index + 1}`} className={styles.galleryImage} />
  </motion.div>
  
  ))}
      </Masonry>
    </div>
  );
};

export default GalleryPage;

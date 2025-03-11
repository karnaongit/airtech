// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Sailon Single Yarn',
    image: '/images/products/5.jpg',
    description: 'Mainly used for manufacturing narrow woven fabrics, stitching applications in automatic cutting and stitching, used in rope manufacturing, bag manufacturing, and fabric bag production. Industrial technical textiles such as woven filter fabric & woven geotextiles. Used in making ropes & locks for FIBC bags, knit braided ropes.',
    price: 'HSN Code: 5402 4800',
    category: 'Polypropylene Multifilament Yarn (PPMF) Single / Un-Twisted / Air Intermingled (Flat Yarn)'
  },
  {
    id: 2,
    name: 'Sailon Twisted Yarn & Sailon Sewing Thread',
    image: '/images/products/2.jpg',
    description: 'High-tenacity polypropylene multifilament yarn available in 210 to 8000 denier. Variants include flat (0 twist), air intermingled, and twisted. Used in the textile industry, polypropylene bag manufacturing, HDPE bag manufacturing, BOPP bag production. Applications in floor mats, braided ropes, geotextiles, narrow woven fabrics, and garden hoses. Stitching applications in automatic cutting and woven sack bags.',
    price: 'HSN Code: 54025910',
    category: 'Polypropylene Multifilament Yarn (PPMF) - Single Twisted Yarn'
  },
  {
    id: 3,
    name: 'Sailon Sewing Thread (Nylon Thread) & Twine Yarn',
    image: '/images/products/3.jpg',
    description: 'Twine available in multiple ply variants including 210 Denier x 2 ply, 210 Denier x 3 ply, 600 Denier x 2 ply, 840 Denier x 2 ply, 2500 Denier x 3 ply. Used for stitching in automatic bagging plants and hand stitching machines. Available in various colors for customer requirements. Commonly used in sewing/stitching threads for agriculture fertilizer bag manufacturing, sugar bag manufacturing, and more.',
    price: 'HSN Code: 54026930',
    category: 'Polypropylene Multifilament Yarn (PPMF) - Twine Yarn'
  },
  {
    id: 4,
    name: 'Bag Closing Thread',
    image: '/images/products/4.jpg',
    description: 'Used for bag closing applications in industries such as sugar, flour mills, fertilizer, and wheat bag manufacturing. Available in multiple ply variants: 210 Denier x 2 ply, 210 Denier x 3 ply, 600 Denier x 2 ply, 840 Denier x 2 ply, 2500 Denier x 3 ply. Used in automatic bagging plants and hand stitching machines. Also used in ropes, nets, and stitching applications.',
    price: 'HSN Code: 54011000',
    category: 'Polypropylene Multifilament Yarn - Bag Closing Thread'
  }
 
];

// Product Card Component
const ProductCard = ({ product, index, openModal }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="product-card"
      onClick={() => openModal(product)}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="product-image-container">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="product-category">{product.category}</div>
      </div>
      <motion.div 
        className="product-name"
        whileHover={{ backgroundColor: "#f9f9f9" }}
      >
        {product.name}
      </motion.div>
    </motion.div>
  );
};

// Product Modal Component
const ProductModal = ({ isOpen, product, closeModal }) => {
  if (!product) return null;

  return (
    <motion.div 
      className={`product-modal ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={closeModal}
    >
      <motion.div 
        className="modal-content"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: isOpen ? 1 : 0.8, y: isOpen ? 0 : 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={closeModal}>×</button>
        <div className="modal-image-container">
          <img src={product.image} alt={product.name} className="modal-image" />
        </div>
        <motion.div 
          className="modal-details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h2 className="modal-title">{product.name}</h2>
          <div className="modal-category">{product.category}</div>
          <p className="modal-description">{product.description}</p>
          <div className="modal-price">{product.price}</div>
         
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Main Page Component
export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Header animation on scroll
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>Modern Product Gallery</title>
        <meta name="description" content="Browse our catalog of premium products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.header 
        className={`header ${scrolled ? 'scrolled' : ''}`}
        animate={{ 
          height: scrolled ? "70px" : "100px",
          boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container header-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Products
          </motion.h1>
          <motion.div 
            className="header-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* <button className="filter-button">Filter</button>
            <button className="sort-button">Sort</button> */}
          </motion.div>
        </div>
      </motion.header>

      <main className="container">
        <motion.div 
          className="products-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
              openModal={openModal} 
            />
          ))}
        </motion.div>
      </main>

      <ProductModal 
        isOpen={modalOpen} 
        product={selectedProduct} 
        closeModal={closeModal} 
      />

      <style jsx global>{`
        :root {
          --primary-color: #0070f3;
          --secondary-color: #6366f1;
          --text-color: #333;
          --background-color: #f9fafb;
          --card-background: #ffffff;
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html, body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: var(--background-color);
          color: var(--text-color);
          scroll-behavior: smooth;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .header {
          position: sticky;
          top: 0;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 10;
          transition: all 0.3s ease;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        
        .header h1 {
          font-size: 28px;
          font-weight: 600;
        }
        
        .header.scrolled h1 {
          font-size: 22px;
        }
        
        .header-actions {
          display: flex;
          gap: 12px;
        }
        
        .filter-button, .sort-button {
          background-color: transparent;
          border: 1px solid #e0e0e0;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s ease;
        }
        
        .filter-button:hover, .sort-button:hover {
          background-color: #f5f5f5;
        }
        
        main {
          padding: 40px 0 80px;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        
        .product-card {
          background-color: var(--card-background);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .product-image-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .product-image {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        
        .product-category {
          position: absolute;
          top: 12px;
          right: 12px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          z-index: 1;
        }
        
        .product-name {
          padding: 16px;
          font-weight: 500;
          font-size: 18px;
          text-align: center;
          border-top: 1px solid #f0f0f0;
          transition: background-color 0.3s ease;
        }
        
        .product-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: 100;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        
        .product-modal.open {
          opacity: 1;
          pointer-events: auto;
        }
        
        .modal-content {
          background-color: white;
          max-width: 900px;
          width: 90%;
          max-height: 90vh;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        @media (min-width: 768px) {
          .modal-content {
            flex-direction: row;
            max-height: 80vh;
          }
        }
        
        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 24px;
          color: white;
          background-color: rgba(0, 0, 0, 0.5);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
          transition: background-color 0.2s ease;
        }
        
        .close-button:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        
        .modal-image-container {
          flex: 1;
          min-height: 300px;
          max-height: 400px;
        }
        
        @media (min-width: 768px) {
          .modal-image-container {
            flex: 1.2;
            max-height: none;
          }
        }
        
        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .modal-details {
          flex: 1;
          padding: 30px;
          display: flex;
          flex-direction: column;
        }
        
        .modal-title {
          font-size: 28px;
          margin-bottom: 8px;
          color: #111;
        }
        
        .modal-category {
          display: inline-block;
          background-color: #f3f4f6;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          color: #4b5563;
          margin-bottom: 20px;
        }
        
        .modal-description {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 24px;
          flex-grow: 1;
        }
        
        .modal-price {
          font-size: 24px;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 24px;
        }
        
        .action-button {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          align-self: flex-start;
        }
        
        .action-button:hover {
          background-color: #005bd1;
        }
        
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .header h1 {
            font-size: 24px;
          }
          
          .header.scrolled h1 {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
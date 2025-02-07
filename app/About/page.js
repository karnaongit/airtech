'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect,useRef,useState } from 'react';
import { FaCheckCircle, FaUsers, FaPhoneAlt } from 'react-icons/fa';
import teamData from '../utils/teamData';

export default function About() {
  const [hoveredCert, setHoveredCert] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white text-center">
        <h1 className="text-6xl font-bold">About Us</h1>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission & Values</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">Why We Exist</h3>
            <p className="mt-4">We aim to revolutionize the multifilament yarn industry with innovative solutions.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">What We Stand For</h3>
            <p className="mt-4">Quality, sustainability, and excellence in every thread we produce.</p>
          </motion.div>
        </div>
      </section>

      {/* What We Do & Why Choose Us */}
      <section className="py-20 px-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg">We specialize in manufacturing high-quality multifilament yarn used in various industries.</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <div
            className="relative p-6 bg-white shadow-lg rounded-lg cursor-pointer"
            onMouseEnter={() => setHoveredCert('gov')}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <h3 className="text-2xl font-bold">Government Recognition for Excellence</h3>
            {hoveredCert === 'gov' && (
              <Image src="/certificates/gov_cert.jpg" width={300} height={200} alt="Gov Certificate" className="absolute top-0 left-0" />
            )}
          </div>
          <div
            className="relative p-6 bg-white shadow-lg rounded-lg cursor-pointer mt-4"
            onMouseEnter={() => setHoveredCert('trademark')}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <h3 className="text-2xl font-bold">Trademark Certification</h3>
            {hoveredCert === 'trademark' && (
              <Image src="/certificates/trademark_cert.jpg" width={300} height={200} alt="Trademark Certificate" className="absolute top-0 left-0" />
            )}
          </div>
        </div>
      </section>
            {/* Meet The Team */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">Meet The Team</h2>
        <div className="mt-10 flex flex-col items-center">
          <Image src="/owner.jpg" width={150} height={150} alt="Owner" className="rounded-full border-4 border-blue-500" />
          <h3 className="text-xl font-semibold mt-4">John Doe - Founder & CEO</h3>
        </div>
        
        <div ref={sliderRef} className="overflow-hidden whitespace-nowrap mt-10">
          <div className="inline-flex space-x-6">
            {teamData.map((member, index) => (
              <div key={index} className="w-40 flex-shrink-0 text-center">
                <Image src={member.image} width={100} height={100} alt={member.name} className="rounded-full mx-auto border-2 border-gray-300" />
                <p className="mt-2 font-medium">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 text-center bg-black text-white">
        <h2 className="text-4xl font-bold">Join Us in Innovation</h2>
        <p className="text-lg mt-4">Let’s create something extraordinary together.</p>
        <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">Contact Us</button>
      </section>
    </div>
  );
}

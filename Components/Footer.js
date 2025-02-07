'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`relative bottom-0 w-full bg-black text-white transition-all duration-500 ${isScrolled ? 'h-50vh' : 'h-40vh'}`}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Company Info */}
        <div>
          <h2 className="text-3xl font-bold">Airtech</h2>
          <p className="mt-2 text-lg">"Crafting quality that strengthens industries"</p>
          <p className="text-sm opacity-75">Founded in 20--</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {[{ name: "Home", path: "/" },
          { name: "About", path: "/About" },
          { name: "Product", path: "/Product" },
          { name: "Contact", path: "/Contact" },].map(({ name, path })  => (
              <li key={name}>
                <Link href={path} className="hover:text-gray-400 transition">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-lg">Five Star MIDC Shendra, AURANGABAD, 
                <br />
                MAHARASHTRA, 431007, INDIA</p>
          <p className="text-lg">Email: <a href="contact@airtechsailon.com" className="hover:text-gray-400">contact@airtechsailon.com</a></p>
          <p className="text-lg">Phone: <a
            href="https://wa.me/917972351030"
            className="text-lg text-blue-500 hover:text-blue-700 mb-4"
          >
             +91 7972351030
          </a></p>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 transition"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-gray-400 transition"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-gray-400 transition"><FaLinkedinIn size={24} /></a>
            <a href="#" className="hover:text-gray-400 transition"><FaInstagram size={24} /></a>
            <a href="https://wa.me/917972351030" className="hover:text-gray-400 transition"><FaWhatsapp size={24} /></a>
          </div>
        </div>
      </div>
      
      {/* Copyright Centered */}
      <div className="border-t border-gray-700 py-4 text-center text-lg">
        &copy; {new Date().getFullYear()} Airtech. All rights reserved.
      </div>
      
      {/* Made by Karan Gawande at Bottom */}
      <div className="text-center text-sm opacity-75 pb-4">
        Made by <a href="https://wa.me/917757907323" className="underline">Karan Gawande</a>
      </div>
    </footer>
  );
}
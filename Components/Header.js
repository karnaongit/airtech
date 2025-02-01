"use client"; // Required for Next.js App Router interactivity

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {["About", "Product", "Contact"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`}>
            <h4 className="relative px-6 py-2 border border-gray-400 rounded-full text-red-800 transition duration-300 overflow-hidden group">
              <span className="absolute inset-0 bg-black transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
              <span className="relative z-10 group-hover:text-white">{item}</span>
            </h4>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-36 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden">
          {["About", "Product", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="w-full text-center py-2 text-gray-700 hover:bg-gray-200">
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;

"use client"; // Required for Next.js App Router interactivity

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for menu

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll and update navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle full-screen menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-lg bg-white/70" : "bg-transparent"
        }`}
      >
        {/* Left: Logo */}
        <Link href="/">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={60}
              className={`transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </Link>

        {/* Right: Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/About" },
            { name: "Product", path: "/Product" },
            { name: "Gallery", path: "/Gallery" },
            { name: "Contact", path: "/Contact" },
          ].map(({ name, path }) => (
            <Link key={name} href={path}>
              <h4 className="relative px-6 py-2 font-bold bg-white rounded-full text-red-800 transition duration-300 overflow-hidden group border-none">
                <span className="absolute inset-0 bg-blue-700 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
                <span className="relative z-10 group-hover:text-white">{name}</span>
              </h4>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-auto" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#EFEAE3] z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/About" },
          { name: "Product", path: "/Product" },
          { name: "Contact", path: "/Contact" },
        ].map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className="text-4xl font-bold text-gray-800 hover:text-red-800"
            onClick={() => setIsMenuOpen(false)}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;

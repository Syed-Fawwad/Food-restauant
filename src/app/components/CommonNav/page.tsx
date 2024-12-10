'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Com = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      />

      <nav className="bg-[#0d0d0d] text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            Food<span className="text-[#FF9F0D]">tuck</span>
          </a>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li>
              <Link href="/mainpage" className="hover:underline hover:text-[#FF9F0D]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline hover:text-[#FF9F0D]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/details" className="hover:underline hover:text-[#FF9F0D]">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/info" className="hover:underline hover:text-[#FF9F0D]">
                About
              </Link>
            </li>
            <li>
              <Link href="/shopdetail" className="hover:underline hover:text-[#FF9F0D]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/error" className="hover:underline hover:text-[#FF9F0D]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons (Desktop) */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-[#FF9F0D] transition">
              <i className="fas fa-search"></i>
            </a>
            <Link
              href="/signup"
              className="text-white transition hover:underline hover:text-[#FF9F0D]"
            >
              <i className="far fa-user"></i>
            </Link>
            <Link
              href="/shoppingcart"
              className="text-white transition hover:underline hover:text-[#FF9F0D]"
            >
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>

          {/* Mobile Menu Button (Center the icon) */}
          <button
            className="md:hidden text-white focus:outline-none absolute left-1/2 transform -translate-x-1/2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0d0d0d] text-white py-4 px-6">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/mainpage"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/details"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/info"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/shopdetail"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/error"
                  className="hover:text-[#FF9F0D]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Com;
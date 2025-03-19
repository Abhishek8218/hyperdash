'use client'

import { Menu } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export const Navbar = () => {
  // State for controlling the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-[#1a1a1a] fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='flex justify-between items-center px-4 sm:px-20 text-white text-base h-[98px]'>
        {/* Left Links */}
        <div className='hidden md:flex gap-5.5'>
          <a href='#' className='hover:text-gray-400 transition-colors'>Air X</a>
          <a href='#' className='hover:text-gray-400 transition-colors'>Lexo Z</a>
          <a href='#' className='hover:text-gray-400 transition-colors'>Gravity 9</a>
        </div>

        {/* Logo */}
        <div>
          <Image alt="HyperDash" src="/Primary Logo.svg" height={23} width={118} />
        </div>

        {/* Right Links */}
        <div className='hidden md:flex gap-5.5'>
          <a href='#' className='hover:text-gray-400 transition-colors'>Shop</a>
          <a href='#' className='hover:text-gray-400 transition-colors'>Account</a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className='md:hidden'
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-[#1a1a1a] text-white text-lg px-4 py-4'>
          <a href='#' className='block py-2 hover:text-gray-400 transition-colors'>
            Air X
          </a>
          <a href='#' className='block py-2 hover:text-gray-400 transition-colors'>
            Lexo Z
          </a>
          <a href='#' className='block py-2 hover:text-gray-400 transition-colors'>
            Gravity 9
          </a>
          <a href='#' className='block py-2 hover:text-gray-400 transition-colors'>
            Shop
          </a>
          <a href='#' className='block py-2 hover:text-gray-400 transition-colors'>
            Account
          </a>
        </div>
      )}
    </nav>
  );
};

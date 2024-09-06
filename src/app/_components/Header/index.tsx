"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '../Navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full py-5 bg-tm-primary-bg sticky top-0 z-50">
      <div className="md:w-5/6 mx-auto flex justify-between items-center">
        {/* "TrustMe" text */}
        <div className="text-white text-5xl font-euclidCircularBRegular md:w-4/12 mr-9">
          TrustMe
        </div>

        {/* Hamburger Icon on Small Screens */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Image
              src={isOpen ? '/images/cross.png' : '/images/hambuger.jpg'}
              alt={isOpen ? 'Close Menu' : 'Open Menu'}
              width={36}
              height={36}
              className="ml-14" // Margin-left for spacing
            />
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden md:flex justify-end items-center">
          <Navigation className="flex justify-end" />
        </div>
      </div>

      {/* Right-Side Sidebar for Small Screens */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-96  w-60 bg-gradient-to-b from-gray-900 to-gray-700 text-white p-5 shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
          <button onClick={toggleMenu} className="focus:outline-none mb-5">
            <Image
              src='/images/cross.png'
              alt="Close Menu"
              width={24}
              height={24}
            />
          </button>
          <Navigation className="flex flex-col space-y-4" />

         <div className='m-10 text-xl space-y-4 ml-16'>
          <h3>Feature</h3>
          <h3>Feature</h3>
          <h3>Feature</h3>
          <h3>Feature</h3>
          
          </div>        
  

        </div>
      )}
    </div>
  );
};

export default Header;

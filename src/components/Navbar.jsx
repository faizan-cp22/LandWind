import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons from react-icons

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu on and off
  };

  return (
    <div className='flex w-full justify-between py-4 lg:px-24 px-6  shadow-2xl z-10'>
      {/* Logo */}
      <Link to="/" className='text-2xl font-extrabold'>
        Land<span className='text-[#4EBAAF] pl-1'>Wind</span>
      </Link>

      {/* Hamburger icon for mobile */}
      <div className='lg:hidden flex items-center' onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className='text-2xl' />
        ) : (
          <FaBars className='text-2xl' />
        )}
      </div>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex space-x-16 justify-center items-center'>
        <li className='hover:text-purple-700 font-semibold'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:text-purple-700 font-semibold'>
          <Link to="/partners">Partners</Link>
        </li>
        <li className='hover:text-purple-700 font-semibold'>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } lg:hidden flex-col items-center absolute top-16 left-0 w-full space-y-6 py-6 z-50 bg-white `}
      >
        <li className='hover:text-purple-700 font-semibold'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:text-purple-700 font-semibold'>
          <Link to="/partners">Partners</Link>
        </li>
        <li className='hover:text-purple-700 font-semibold'>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

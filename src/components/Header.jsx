import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaConciergeBell, FaCalendarAlt, FaBriefcase, FaEnvelope, FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import logo from '../assets/logoElectricEye.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 max-w-screen-xl">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Electric Eye Logo" className="w-10 h-10 mr-2" />
            <span className="font-bold text-xl">Electric Eye</span>
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-6 text-lg">
          <Link to="/electric-eye/" className="hover:text-black">Home</Link>
          <Link to="/electric-eye/about" className="hover:text-black">About Us</Link>
          <Link to="/electric-eye/products" className="hover:text-black">Products</Link>
          <Link to="/electric-eye/services" className="hover:text-black">Services</Link>
          <Link to="/electric-eye/events" className="hover:text-black">Events</Link>
          <Link to="/electric-eye/careers" className="hover:text-black">Careers</Link>
          <Link to="/electric-eye/blog" className="hover:text-black">Blog</Link>
        </nav>
        <div className="hidden lg:flex space-x-4">
          <Link to="/electric-eye/contact" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 text-lg">Contact</Link>
          <Link to="/electric-eye/signup" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 text-lg">Sign Up</Link>
          <Link to="/electric-eye/login" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 text-lg">Log In</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-blue-800 text-white">
          <nav className="flex flex-col items-center space-y-4 py-4 text-lg">
            <Link to="/electric-eye/" className="flex items-center hover:text-black">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link to="/electric-eye/about" className="flex items-center hover:text-black">
              <FaInfoCircle className="mr-2" /> About Us
            </Link>
            <Link to="/electric-eye/services" className="flex items-center hover:text-black">
              <FaConciergeBell className="mr-2" /> Services
            </Link>
            <Link to="/electric-eye/events" className="flex items-center hover:text-black">
              <FaCalendarAlt className="mr-2" /> Events
            </Link>
            <Link to="/electric-eye/careers" className="flex items-center hover:text-black">
              <FaBriefcase className="mr-2" /> Careers
            </Link>
            <Link to="/electric-eye/contact" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 flex items-center">
              <FaEnvelope className="mr-2" /> Contact
            </Link>
            <Link to="/electric-eye/signup" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 flex items-center">
              <FaUserPlus className="mr-2" /> Sign Up
            </Link>
            <Link to="/electric-eye/login" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 flex items-center">
              <FaSignInAlt className="mr-2" /> Log In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logoElectricEye.png'; // Ensure the logo path is correct

const Footer = () => {
  return (
    <div className="w-full bg-blue-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4 space-x-6">
          <a href="https://www.facebook.com/share/eFAqaBsM5igcDQUv/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/electric_eye_technology/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/company/electric-eye-technology/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
            <FaLinkedin size={30} />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-start mb-4 space-y-4 lg:space-y-0 lg:space-x-6 px-4 lg:px-16">
          <div className="flex flex-col items-center lg:items-start lg:w-1/3 lg:ml-8">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt size={24} className="mr-2" />
              <p className="text-lg font-bold">Address:</p>
            </div>
            <p className="text-lg text-center lg:text-left">National Incubation Center For Aerospace Technologies - NICAT</p>
          </div>
          <div className="flex flex-col items-center lg:items-center lg:w-1/3">
            <div className="flex items-center mb-2">
              <FaPhone size={24} className="mr-2" />
              <p className="text-lg font-bold">Phone:</p>
            </div>
            <p className="text-lg">0348-0231009</p>
          </div>
          <div className="flex flex-col items-center lg:items-start lg:w-1/3 mt-4 lg:mt-0 lg:mr-8">
            <div className="flex items-center mb-2">
              <FaEnvelope size={24} className="mr-2" />
              <p className="text-lg font-bold">Email:</p>
            </div>
            <p className="text-lg text-center lg:text-left">info@electriceyetechnology.com</p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm">&copy; 2024 Electric Eye. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

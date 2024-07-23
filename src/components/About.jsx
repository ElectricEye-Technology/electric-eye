import eye from "../assets/eye.jpeg";
import React, { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Real-time Tracking",
    description: "Enhance your riding experience with real-time tracking. Ensuring safety.",
    delay: 0,
  },
  {
    title: "Remote Control",
    description: "Now control your vehicle like never before. From anywhere, anytime.",
    delay: 0.2,
  },
  {
    title: "Advanced Security",
    description: "With our advance security techniques feel secure, feel free.",
    delay: 0.4,
  },
];

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <section className="bg-gray-100 dark:text-gray-800 my-8">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-blue-600 dark:text-gray-50 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="flex space-x-2 sm:space-x-4"
            >
              <SVGCont />
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  className="text-lg font-medium leading-snug"
                >
                  {feature.title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  className="leading-snug"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Image Section with Hover Effect */}
        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100 relative overflow-hidden">
          {/* Container for Image and Content */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card w-full h-full  shadow-lg overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image */}
            <img
              src={eye}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 transform-gpu"
            />
            {/* Card Content */}
            <motion.div
              className={`card__content absolute bottom-0 left-0 w-full bg-opacity-80 bg-gray-200 dark:bg-opacity-80 dark:bg-blue-800 p-4 md:p-8 lg:p-12 transform-gpu ${
                isHovered ? "rotateX-0" : "rotateX-90"
              }`}
              transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
              initial={false}
              animate={isHovered ? { height: "240px", opacity: 1 } : { height: 0, opacity: 0 }}
              style={{ visibility: isHovered ? "visible" : "hidden" }}
            >
              <p className="card__title text-2xl font-bold text-gray-900 dark:text-gray-100">
                Electric Eye
              </p>
              <p className="card__description text-base text-gray-700 dark:text-gray-300 mt-2">
                Electric Eye is an innovative application designed to give you control over your motorbike using your smartphone from anywhere, anytime.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    
    </>
  );
};

const SVGCont = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="flex-shrink-0 w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    ></path>
  </svg>
);

export default About;

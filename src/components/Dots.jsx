import React from "react";
import anime from "animejs";
import eye from "../assets/eye.jpeg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Dots = ({ boxShadow, border }) => {
  return (
    <div className="relative flex px-2 py-8">
      <div className="flex flex-col justify-evenly z-10 px-42 w-2/3">
        <RevealEffect />
        <motion.a
          style={{
            border,
            boxShadow,
          }}
          href="#"
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Connect Now
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.a>
      </div>
      <div className="w-2/3 -z-1">
        <DotGrid />
      </div>
    </div>
  );
};

const GRID_WIDTH = 18;
const GRID_HEIGHT = 18;
const RevealEffect = () => {
  const textGroups = [
    {
      heading: "Welcome to Our Website",
      subheading: "Discover Amazing Features",
      explanation:
        "Here you can find a variety of tools and resources to enhance your productivity.",
    },
    {
      heading: "Explore Our Services",
      subheading: "Tailored Solutions for You",
      explanation:
        "We offer a wide range of services to meet your specific needs.",
    },
    {
      heading: "Join Our Community",
      subheading: "Connect and Grow",
      explanation:
        "Become part of a vibrant community of like-minded individuals.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 7000; // Total duration for each set in milliseconds

    // Update the current index to show the next set
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textGroups.length);
    }, totalDuration);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [textGroups.length]);

  const currentGroup = textGroups[currentIndex];
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.9, // Quicker stagger delay
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const overlayVariants = {
    hidden: { width: "100%", left: 0 },
    show: { width: "0%", left: "100%" },
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-screen-sm">
      <div className="space-y-6 min-w-fit ">
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={containerVariants}
          className="space-y-2"
        >
          <div className="relative overflow-hidden">
            <motion.div
              variants={overlayVariants}
              className="absolute top-0 left-0 h-full bg-yellow-200"
              transition={{ duration: 1.2 }}
            />
            <motion.div
              variants={textVariants}
              className="relative text-white text-6xl font-bold"
            >
              {currentGroup.heading}
            </motion.div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              variants={overlayVariants}
              className="absolute top-0 left-0 h-full bg-blue-500"
              transition={{ duration: 1.2 }}
            />
            <motion.div
              variants={textVariants}
              className="relative text-white text-4xl font-medium"
            >
              {currentGroup.subheading}
            </motion.div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              variants={overlayVariants}
              className="absolute top-0 left-0 h-full bg-green-500"
              transition={{ duration: 1.2 }}
            />
            <motion.div
              variants={textVariants}
              className="relative text-white text-2xl font-normal"
            >
              {currentGroup.explanation}
            </motion.div>
          </div>
        </motion.div>

        {/* </AnimatePresence> */}
      </div>
    </div>
  );
};

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point rounded-full"
            data-index={index}
            style={{
              backgroundImage: `url(${eye})`,
              backgroundSize: "cover",
              width: "20px", // Adjust size as needed
              height: "20px", // Adjust size as needed
              opacity: 0.5,
            }}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit overflow-hidden"
    >
      {dots}
    </div>
  );
};

export default Dots;

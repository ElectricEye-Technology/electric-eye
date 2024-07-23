import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import eye from "../assets/eye.jpeg";

import bike from "../assets/honda bike.jpeg";
import security from "../assets/security.jpeg";
import company from "../assets/company.jpeg";
const IMG_PADDING = 12;
const features = [
  {
    title: "Real-time Tracking",
    description:
      "Enhance your riding experience with real-time tracking. Ensuring safety.",
    delay: 0,
  },
  {
    title: "Remote Control",
    description:
      "Now control your vehicle like never before. From anywhere, anytime.",
    delay: 0.2,
  },
  {
    title: "Advanced Security",
    description: "With our advance security techniques feel secure, feel free.",
    delay: 0.4,
  },
];
const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url("${imgUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ heading, desc }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{heading}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">{desc}</p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const contentData = [
  {
    imgUrl: bike,
    subheading: "Guard Your Wheel",
    heading: "Built for all of us.",
    content: [
      {
        heading: "Protection for You",
        desc: "Discover the pinnacle of bike security with Electric Eye. Our state-of-the-art technology ensures that your bike is always protected, whether you're at home or on the go. With realtime tracking, instant alerts, and advanced anti-theft measures, Electric Eye gives you the peace of mind to ride freely. Trust Electric Eye to be your bike's vigilant guardian, so you can focus on the journey ahead.",
      },
    ],
  },
  {
    imgUrl: security,
    subheading: "Protect Your Documentation",
    heading: "Never compromise on Security.",
    content: [
      {
        heading: "Safety First",
        desc: "At Electric Eye, we understand the importance of safeguarding your critical legal documentation. Our advanced security solutions ensure that your documents are protected against unauthorized access and potential threats. With our cutting-edge technology, you can securely store, manage, and monitor your important files, giving you peace of mind knowing that your sensitive information is safe. Whether you are a small business owner or an individual, our robust security features are designed to keep your documentation secure in the digital age.",
      },
    ],
  },
  {
    imgUrl: company,
    subheading: "Guard Your Business",
    heading: "Choose the best.",
    content: [
      {
        heading: "Reliability Redefined",
        desc: "At Electric Eye, we specialize in protecting small-scale businesses with our state-of-the-art security solutions. Our innovative products are designed to safeguard your business premises, assets, and operations against modern-day threats. From advanced surveillance systems to secure access controls, we offer comprehensive security measures tailored to meet your business needs. With Electric Eye, you can focus on growing your business with confidence, knowing that your safety and security are our top priorities.",
      },
    ],
  },
];
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

const Products = () => {
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
                transition={{
                  duration: 0.6,
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
                initial={false}
                animate={
                  isHovered
                    ? { height: "240px", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                style={{ visibility: isHovered ? "visible" : "hidden" }}
              >
                <p className="card__title text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Electric Eye
                </p>
                <p className="card__description text-base text-gray-700 dark:text-gray-300 mt-2">
                  Electric Eye is an innovative application designed to give you
                  control over your motorbike using your smartphone from
                  anywhere, anytime.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        {contentData.map((item, index) => (
          <TextParallaxContent
            key={index}
            imgUrl={item.imgUrl}
            subheading={item.subheading}
            heading={item.heading}
          >
            {item.content.map((content, index) => (
              <ExampleContent
                key={index}
                heading={content.heading}
                desc={content.desc}
              />
            ))}
          </TextParallaxContent>
        ))}
      </div>
      {/* <div className="bg-white">
    {exampleData.map((item) => (
      
    ))}
  </div> */}
    </>
  );
};

export default Products;

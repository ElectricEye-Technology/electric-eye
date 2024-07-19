import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import bike from "../assets/honda bike.jpeg";
import security from "../assets/security.jpeg";
import company from "../assets/company.jpeg";
const IMG_PADDING = 12;

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

const AboutUs = () => {
  return (
    <>
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

export default AboutUs;

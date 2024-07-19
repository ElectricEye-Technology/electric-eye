import React from "react";
import monitor from "../assets/monitor.jpeg";
import fire from "../assets/fire.jpeg";
import red from "../assets/red.jpeg";
import view from "../assets/view.jpeg";
import fuel from "../assets/fuel.jpeg";
import lock from "../assets/lock.jpeg";
import {motion} from "framer-motion";
const featuresData = [
  {
    imgSrc: monitor,
    tagline: "Be in charge of speed",
    title: "Speed Control",
    desc: "Enhance the security of your motorcycle with our wheel lock feature. This additional layer of protection prevents unauthorized movement and deters potential theft",
    reverse: false,
  },
  {
    imgSrc: fire,
    tagline: "Safety first, safety everywhere",
    title: "Wheel Lock",
    desc: "Enhance the security of your motorcycle with our wheel lock feature. This additional layer of protection prevents unauthorized movement and deters potential theft",
    reverse: true,
  },
  {
    imgSrc: red,
    tagline: "control your ride",
    title: "Real-time Tracking",
    desc: "Keep a constant eye on your motorcycle's location in real-time. Our live tracking feature allows you to monitor the exact whereabouts of your bike using GPS technology integrated into our mobile application",
    reverse: false,
  },
  {
    imgSrc: view,
    tagline: "docs handling like never before",
    title: "Vehicle Registration",
    desc: "Manage multiple motorcycles efficiently under one account. Our platform supports registration of multiple vehicles, allowing you to monitor and control each bike separately yet conveniently",
    reverse: true,
  },
  {
    imgSrc: lock,
    tagline: "parking made easy",
    title: "Lock/Unlock Functionality",
    desc: "Secure your bike with ease using our lock unlock feature. Whether you're parking your motorcycle or remotely securing it from a distance, you have full control right at your fingertips",
    reverse: false,
  },
  {
    imgSrc: fuel,
    tagline: "travel more, worry less",
    title: "Fuel Monitoring",
    desc: "Never worry about running out of fuel unexpectedly. Our fuel level monitoring feature lets you keep track of your motorcycle's fuel status remotely through the mobile app",
    reverse: true,
  },
];


const Services = () => {
  const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto space-y-12">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ${
              feature.reverse ? "lg:flex-row-reverse" : ""
            }`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <img
              src={feature.imgSrc}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <span className="text-xs uppercase dark:text-gray-600">
                {feature.tagline}
              </span>
              <h3 className="text-3xl font-bold">{feature.title}</h3>
              <p className="my-6 dark:text-gray-600">{feature.desc}</p>
              <a href="#"  className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default Services;

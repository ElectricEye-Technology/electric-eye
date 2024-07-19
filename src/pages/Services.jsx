import React from 'react';
import Card from '../components/Card';
import speedControlImage from '../assets/speedcontrol.jpeg';
import wheelLockImage from '../assets/wheellock.jpeg';
import realTimeTrackingImage from '../assets/Realtimetracking.jpeg';
import vehicleRegistrationImage from '../assets/registration.jpeg';
import lockUnlockImage from '../assets/lockunlock.jpeg';
import fuelMonitoringImage from '../assets/fuel-monitoring.jpeg';

const services = [
  {
    image: speedControlImage,
    title: 'Speed Control',
    description: 'Enhance the security of your motorcycle with our wheel lock feature. This additional layer of protection prevents unauthorized movement and deters potential theft.',
  },
  {
    image: wheelLockImage,
    title: 'Wheel Lock',
    description: 'Enhance the security of your motorcycle with our wheel lock feature. This additional layer of protection prevents unauthorized movement and deters potential theft.',
  },
  {
    image: realTimeTrackingImage,
    title: 'Real-Time Tracking',
    description: 'Keep a constant eye on your motorcycle\'s location in real-time. Our live tracking feature allows you to monitor the exact whereabouts of your bike using GPS technology integrated into our mobile application.',
  },
  {
    image: vehicleRegistrationImage,
    title: 'Vehicle Registration',
    description: 'Manage multiple motorcycles efficiently under one account. Our platform supports registration of multiple vehicles, allowing you to monitor and control each bike separately yet conveniently.',
  },
  {
    image: lockUnlockImage,
    title: 'Lock/Unlock Functionality',
    description: 'Secure your bike with ease using our lock unlock feature. Whether you\'re parking your motorcycle or remotely securing it from a distance, you have full control right at your fingertips.',
  },
  {
    image: fuelMonitoringImage,
    title: 'Fuel Monitoring',
    description: 'Never worry about running out of fuel unexpectedly. Our fuel level monitoring feature lets you keep track of your motorcycle\'s fuel status remotely through the mobile app.',
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-8">
      {/* <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-center text-gray-700 mb-12">Discover the range of services we offer.</p> */}
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <Card key={index} image={service.image} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;

import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white transition-transform transform hover:scale-105">
      <img className="w-full" src={image} alt={title} />
      <div className="text-center p-4">
        <div className="bg-blue-300 py-2 rounded-full text-white text-xl font-semibold mb-4">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;

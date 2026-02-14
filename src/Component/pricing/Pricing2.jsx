import React, { useState } from 'react';

const Pricing2 = () => {
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(!showCard); 
  };

  return (
    <div className="w-full py-8 flex flex-col justify-center items-center">
      <button
        onClick={handleClick}
        className="bg-pink-800 py-2 px-4 text-white rounded mb-6 hover:bg-pink-700 transition"
      >
        Compare Features
      </button>
      {showCard && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Feature Card</h2>
          <p className="text-gray-600 text-center">
            Here are some amazing features of our product. You can list them here.
          </p>
          <button
            onClick={() => setShowCard(false)}
            className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Pricing2;

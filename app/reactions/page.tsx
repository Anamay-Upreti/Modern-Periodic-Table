"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const compounds = ['H2O', 'CO2', 'NaCl', 'HCl', 'NaOH'];

// Define the reaction map (compound1 + compound2 -> product)
const reactions: { [key: string]: string } = {
  'NaCl+H2O': 'NaOH + HCl',
  'HCl+NaOH': 'NaCl + H2O',
  'CO2+H2O': 'H2CO3', // Carbon dioxide + water forms carbonic acid
  // Add more reactions here as needed
};

const Reactions = () => {
  const [compound1, setCompound1] = useState<string | null>(null);
  const [compound2, setCompound2] = useState<string | null>(null);
  const [reactionResult, setReactionResult] = useState<string | null>(null);

  // Function to handle the reaction when the button is clicked
  const handleReact = () => {
    if (compound1 && compound2) {
      // Construct the key to look up the reaction in the map
      const reactionKey = `${compound1}+${compound2}`;
      const reverseReactionKey = `${compound2}+${compound1}`;

      // Check if a reaction exists in the map for the given compounds
      const product = reactions[reactionKey] || reactions[reverseReactionKey] || 'No reaction found';
      setReactionResult(product);
    } else {
      setReactionResult('Please select both compounds.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12"
      >
        Chemical Reactions Game
      </motion.h1>

      <div className="grid grid-cols-2 gap-16 mb-8">
        {/* Compound 1 Selector */}
        <div className="flex flex-col items-center">
          <label htmlFor="compound1" className="text-2xl mb-4">Select Compound 1</label>
          <select
            id="compound1"
            className="bg-white text-black p-3 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            value={compound1 || ''}
            onChange={(e) => setCompound1(e.target.value)}
            aria-label="Select Compound 1"
          >
            <option value="" disabled>Select Compound</option>
            {compounds.map((compound, index) => (
              <option key={index} value={compound}>
                {compound}
              </option>
            ))}
          </select>
        </div>

        {/* Compound 2 Selector */}
        <div className="flex flex-col items-center">
          <label htmlFor="compound2" className="text-2xl mb-4">Select Compound 2</label>
          <select
            id="compound2"
            className="bg-white text-black p-3 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            value={compound2 || ''}
            onChange={(e) => setCompound2(e.target.value)}
            aria-label="Select Compound 2"
          >
            <option value="" disabled>Select Compound</option>
            {compounds.map((compound, index) => (
              <option key={index} value={compound}>
                {compound}
              </option>
            ))}
          </select>
        </div>
      </div>

      <motion.button
        onClick={handleReact}
        whileHover={{ scale: 1.1 }}
        className="bg-orange-500 py-2 px-6 rounded-lg shadow-lg hover:bg-orange-400 hover:shadow-xl transition-all duration-300 mb-8"
      >
        React!
      </motion.button>

      {/* Display the reaction result */}
      {reactionResult && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-semibold text-white mt-4"
        >
          {reactionResult}
        </motion.div>
      )}
    </div>
  );
};

export default Reactions;

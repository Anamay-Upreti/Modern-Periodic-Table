"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const compounds = ['H2O', 'CO2', 'NaCl', 'HCl', 'NaOH'];

const Reactions = () => {
  const [compound1, setCompound1] = useState<string | null>(null);
  const [compound2, setCompound2] = useState<string | null>(null);

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
        whileHover={{ scale: 1.1 }}
        className="bg-orange-500 py-2 px-6 rounded-lg shadow-lg hover:bg-orange-400 hover:shadow-xl transition-all duration-300"
      >
        React!
      </motion.button>
    </div>
  );
};

export default Reactions;

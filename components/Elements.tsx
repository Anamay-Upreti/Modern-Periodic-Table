import React from 'react';

const elements = [
  { symbol: 'H', name: 'Hydrogen', colStart: 1, rowStart: 1, group: 'nonmetal' },
  { symbol: 'He', name: 'Helium', colStart: 18, rowStart: 1, group: 'noble-gas' },
  { symbol: 'Li', name: 'Lithium', colStart: 1, rowStart: 2, group: 'alkali-metal' },
  { symbol: 'Be', name: 'Beryllium', colStart: 2, rowStart: 2, group: 'alkaline-earth-metal' },
  { symbol: 'B', name: 'Boron', colStart: 13, rowStart: 2, group: 'metalloid' },
  { symbol: 'C', name: 'Carbon', colStart: 14, rowStart: 2, group: 'nonmetal' },
  { symbol: 'N', name: 'Nitrogen', colStart: 15, rowStart: 2, group: 'nonmetal' },
  { symbol: 'O', name: 'Oxygen', colStart: 16, rowStart: 2, group: 'nonmetal' },
  { symbol: 'F', name: 'Fluorine', colStart: 17, rowStart: 2, group: 'halogen' },
  { symbol: 'Ne', name: 'Neon', colStart: 18, rowStart: 2, group: 'noble-gas' },

  { symbol: 'Na', name: 'Sodium', colStart: 1, rowStart: 3 , group: 'alkali-metal' },
  { symbol: 'Mg', name: 'Magnesium', colStart: 2, rowStart: 3 },
  { symbol: 'Al', name: 'Aluminum', colStart: 13, rowStart: 3 },
  { symbol: 'Si', name: 'Silicon', colStart: 14, rowStart: 3 },
  { symbol: 'P', name: 'Phosphorus', colStart: 15, rowStart: 3 },
  { symbol: 'S', name: 'Sulfur', colStart: 16, rowStart: 3 },
  { symbol: 'Cl', name: 'Chlorine', colStart: 17, rowStart: 3 },
  { symbol: 'Ar', name: 'Argon', colStart: 18, rowStart: 3 },

  { symbol: 'K', name: 'Potassium', colStart: 1, rowStart: 4, group: 'alkali-metal' },
  { symbol: 'Ca', name: 'Calcium', colStart: 2, rowStart: 4 },
  { symbol: 'Sc', name: 'Scandium', colStart: 3, rowStart: 4 },
  { symbol: 'Ti', name: 'Titanium', colStart: 4, rowStart: 4 },
  { symbol: 'V', name: 'Vanadium', colStart: 5, rowStart: 4 },
  { symbol: 'Cr', name: 'Chromium', colStart: 6, rowStart: 4 },
  { symbol: 'Mn', name: 'Manganese', colStart: 7, rowStart: 4 },
  { symbol: 'Fe', name: 'Iron', colStart: 8, rowStart: 4 },
  { symbol: 'Co', name: 'Cobalt', colStart: 9, rowStart: 4 },
  { symbol: 'Ni', name: 'Nickel', colStart: 10, rowStart: 4 },
  { symbol: 'Cu', name: 'Copper', colStart: 11, rowStart: 4 },
  { symbol: 'Zn', name: 'Zinc', colStart: 12, rowStart: 4 },
  { symbol: 'Ga', name: 'Gallium', colStart: 13, rowStart: 4 },
  { symbol: 'Ge', name: 'Germanium', colStart: 14, rowStart: 4 },
  { symbol: 'As', name: 'Arsenic', colStart: 15, rowStart: 4 },
  { symbol: 'Se', name: 'Selenium', colStart: 16, rowStart: 4 },
  { symbol: 'Br', name: 'Bromine', colStart: 17, rowStart: 4 },
  { symbol: 'Kr', name: 'Krypton', colStart: 18, rowStart: 4 },

  { symbol: 'Rb', name: 'Rubidium', colStart: 1, rowStart: 5 , group: 'alkali-metal'},
  { symbol: 'Sr', name: 'Strontium', colStart: 2, rowStart: 5 },
  { symbol: 'Y', name: 'Yttrium', colStart: 3, rowStart: 5 },
  { symbol: 'Zr', name: 'Zirconium', colStart: 4, rowStart: 5 },
  { symbol: 'Nb', name: 'Niobium', colStart: 5, rowStart: 5 },
  { symbol: 'Mo', name: 'Molybdenum', colStart: 6, rowStart: 5 },
  { symbol: 'Tc', name: 'Technetium', colStart: 7, rowStart: 5 },
  { symbol: 'Ru', name: 'Ruthenium', colStart: 8, rowStart: 5 },
  { symbol: 'Rh', name: 'Rhodium', colStart: 9, rowStart: 5 },
  { symbol: 'Pd', name: 'Palladium', colStart: 10, rowStart: 5 },
  { symbol: 'Ag', name: 'Silver', colStart: 11, rowStart: 5 },
  { symbol: 'Cd', name: 'Cadmium', colStart: 12, rowStart: 5 },
  { symbol: 'In', name: 'Indium', colStart: 13, rowStart: 5 },
  { symbol: 'Sn', name: 'Tin', colStart: 14, rowStart: 5 },
  { symbol: 'Sb', name: 'Antimony', colStart: 15, rowStart: 5 },
  { symbol: 'Te', name: 'Tellurium', colStart: 16, rowStart: 5 },
  { symbol: 'I', name: 'Iodine', colStart: 17, rowStart: 5 },
  { symbol: 'Xe', name: 'Xenon', colStart: 18, rowStart: 5 },

  { symbol: 'Cs', name: 'Cesium', colStart: 1, rowStart: 6 , group: 'alkali-metal'},
  { symbol: 'Ba', name: 'Barium', colStart: 2, rowStart: 6 },
  
  { symbol: 'La', name: 'Lanthanum', colStart: 3, rowStart: 6 }, // Lanthanides start here
  { symbol: 'Ce', name: 'Cerium', colStart: 4, rowStart: 9 },
  { symbol: 'Pr', name: 'Praseodymium', colStart: 5, rowStart: 9 },
  { symbol: 'Nd', name: 'Neodymium', colStart: 6, rowStart: 9 },
  { symbol: 'Pm', name: 'Promethium', colStart: 7, rowStart: 9 },
  { symbol: 'Sm', name: 'Samarium', colStart: 8, rowStart: 9 },
  { symbol: 'Eu', name: 'Europium', colStart: 9, rowStart: 9 },
  { symbol: 'Gd', name: 'Gadolinium', colStart: 10, rowStart: 9 },
  { symbol: 'Tb', name: 'Terbium', colStart: 11, rowStart: 9 },
  { symbol: 'Dy', name: 'Dysprosium', colStart: 12, rowStart: 9 },
  { symbol: 'Ho', name: 'Holmium', colStart: 13, rowStart: 9 },
  { symbol: 'Er', name: 'Erbium', colStart: 14, rowStart: 9 },
  { symbol: 'Tm', name: 'Thulium', colStart: 15, rowStart: 9 },
  { symbol: 'Yb', name: 'Ytterbium', colStart: 16, rowStart: 9 },
  { symbol: 'Lu', name: 'Lutetium', colStart: 17, rowStart: 9 },

  { symbol: 'Hf', name: 'Hafnium', colStart: 4, rowStart: 6 },
  { symbol: 'Ta', name: 'Tantalum', colStart: 5, rowStart: 6 },
  { symbol: 'W', name: 'Tungsten', colStart: 6, rowStart: 6 },
  { symbol: 'Re', name: 'Rhenium', colStart: 7, rowStart: 6 },
  { symbol: 'Os', name: 'Osmium', colStart: 8, rowStart: 6 },
  { symbol: 'Ir', name: 'Iridium', colStart: 9, rowStart: 6 },
  { symbol: 'Pt', name: 'Platinum', colStart: 10, rowStart: 6 },
  { symbol: 'Au', name: 'Gold', colStart: 11, rowStart: 6 },
  { symbol: 'Hg', name: 'Mercury', colStart: 12, rowStart: 6 },
  { symbol: 'Tl', name: 'Thallium', colStart: 13, rowStart: 6 },
  { symbol: 'Pb', name: 'Lead', colStart: 14, rowStart: 6 },
  { symbol: 'Bi', name: 'Bismuth', colStart: 15, rowStart: 6 },
  { symbol: 'Po', name: 'Polonium', colStart: 16, rowStart: 6 },
  { symbol: 'At', name: 'Astatine', colStart: 17, rowStart: 6 },
  { symbol: 'Rn', name: 'Radon', colStart: 18, rowStart: 6 },

  { symbol: 'Fr', name: 'Francium', colStart: 1, rowStart: 7 , group: 'alkali-metal'},
  { symbol: 'Ra', name: 'Radium', colStart: 2, rowStart: 7,  },
  { symbol: 'Ac', name: 'Actinium', colStart: 3, rowStart: 7 }, // Actinides start here
  { symbol: 'Th', name: 'Thorium', colStart: 4, rowStart: 10 },
  { symbol: 'Pa', name: 'Protactinium', colStart: 5, rowStart: 10 },
  { symbol: 'U', name: 'Uranium', colStart: 6, rowStart: 10 },
  { symbol: 'Np', name: 'Neptunium', colStart: 7, rowStart: 10 },
  { symbol: 'Pu', name: 'Plutonium', colStart: 8, rowStart: 10 },
  { symbol: 'Am', name: 'Americium', colStart: 9, rowStart: 10 },
  { symbol: 'Cm', name: 'Curium', colStart: 10, rowStart: 10 },
  { symbol: 'Bk', name: 'Berkelium', colStart: 11, rowStart: 10 },
  { symbol: 'Cf', name: 'Californium', colStart: 12, rowStart: 10 },
  { symbol: 'Es', name: 'Einsteinium', colStart: 13, rowStart: 10 },
  { symbol: 'Fm', name: 'Fermium', colStart: 14, rowStart: 10 },
  { symbol: 'Md', name: 'Mendelevium', colStart: 15, rowStart: 10 },
  { symbol: 'No', name: 'Nobelium', colStart: 16, rowStart: 10 },
  { symbol: 'Lr', name: 'Lawrencium', colStart: 17, rowStart: 10 },

  { symbol: 'Rf', name: 'Rutherfordium', colStart: 4, rowStart: 7 },
  { symbol: 'Db', name: 'Dubnium', colStart: 5, rowStart: 7 },
  { symbol: 'Sg', name: 'Seaborgium', colStart: 6, rowStart: 7 },
  { symbol: 'Bh', name: 'Bohrium', colStart: 7, rowStart: 7 },
  { symbol: 'Hs', name: 'Hassium', colStart: 8, rowStart: 7 },
  { symbol: 'Mt', name: 'Meitnerium', colStart: 9, rowStart: 7 },
  { symbol: 'Ds', name: 'Darmstadtium', colStart: 10, rowStart: 7 },
  { symbol: 'Rg', name: 'Roentgenium', colStart: 11, rowStart: 7 },
  { symbol: 'Cn', name: 'Copernicium', colStart: 12, rowStart: 7 },
  { symbol: 'Nh', name: 'Nihonium', colStart: 13, rowStart: 7 },
  { symbol: 'Fl', name: 'Flerovium', colStart: 14, rowStart: 7 },
  { symbol: 'Mc', name: 'Moscovium', colStart: 15, rowStart: 7 },
  { symbol: 'Lv', name: 'Livermorium', colStart: 16, rowStart: 7 },
  { symbol: 'Ts', name: 'Tennessine', colStart: 17, rowStart: 7 },
  { symbol: 'Og', name: 'Oganesson', colStart: 18, rowStart: 7 },
];

const groupColors = {
  'alkali-metal': 'bg-red-200 text-red-800',
  'alkaline-earth-metal': 'bg-orange-200 text-orange-800',
  'transition-metal': 'bg-yellow-200 text-yellow-800',
  'metalloid': 'bg-green-200 text-green-800',
  'nonmetal': 'bg-blue-200 text-blue-800',
  'halogen': 'bg-indigo-200 text-indigo-800',
  'noble-gas': 'bg-purple-200 text-purple-800',
  'lanthanide': 'bg-pink-200 text-pink-800',
  'actinide': 'bg-teal-200 text-teal-800',
  'post-transition-metal': 'bg-gray-200 text-gray-800',
  'unknown': 'bg-gray-100 text-gray-600'
};

const Elements = () => {
  return (
    <div className="grid grid-cols-18 sm:grid-cols-9 md:grid-cols-12 lg:grid-cols-18 gap-1 p-1 overflow-hidden max-w-full">
      {elements.map((element) => (
        <div
          key={element.symbol}
          className={`p-2 border text-center ${groupColors[element.group] || groupColors['unknown']}`}
          style={{ gridColumnStart: element.colStart, gridRowStart: element.rowStart }}
        >
          <div className="text-sm md:text-base lg:text-lg font-bold">{element.symbol}</div>
          <div className="text-xs md:text-sm lg:text-base">{element.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Elements;
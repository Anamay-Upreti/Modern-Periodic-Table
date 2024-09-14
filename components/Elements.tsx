import { group } from 'console';
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
  { symbol: 'Mg', name: 'Magnesium', colStart: 2, rowStart: 3 , group: 'alkaline-earth-metal' },
  { symbol: 'Al', name: 'Aluminum', colStart: 13, rowStart: 3 , group: 'post-transition-metal'},
  { symbol: 'Si', name: 'Silicon', colStart: 14, rowStart: 3 , group: 'metalloid'},
  { symbol: 'P', name: 'Phosphorus', colStart: 15, rowStart: 3 , group: 'nonmetal'},
  { symbol: 'S', name: 'Sulfur', colStart: 16, rowStart: 3, group: 'nonmetal' },
  { symbol: 'Cl', name: 'Chlorine', colStart: 17, rowStart: 3 , group: 'halogen'},
  { symbol: 'Ar', name: 'Argon', colStart: 18, rowStart: 3, group: 'noble-gas'},

  { symbol: 'K', name: 'Potassium', colStart: 1, rowStart: 4, group: 'alkali-metal' },
  { symbol: 'Ca', name: 'Calcium', colStart: 2, rowStart: 4 , group: 'alkaline-earth-metal'},
  { symbol: 'Sc', name: 'Scandium', colStart: 3, rowStart: 4, group: 'transition-metal' },
  { symbol: 'Ti', name: 'Titanium', colStart: 4, rowStart: 4, group: 'transition-metal'},
  { symbol: 'V', name: 'Vanadium', colStart: 5, rowStart: 4, group: 'transition-metal' },
  { symbol: 'Cr', name: 'Chromium', colStart: 6, rowStart: 4, group: 'transition-metal' },
  { symbol: 'Mn', name: 'Manganese', colStart: 7, rowStart: 4, group: 'transition-metal' },
  { symbol: 'Fe', name: 'Iron', colStart: 8, rowStart: 4, group: 'transition-metal' },
  { symbol: 'Co', name: 'Cobalt', colStart: 9, rowStart: 4, group: 'transition-metal' },
  { symbol: 'Ni', name: 'Nickel', colStart: 10, rowStart: 4, group: 'transition-metal' },
  { symbol: 'Cu', name: 'Copper', colStart: 11, rowStart: 4, group: 'transition-metal' },
  { symbol: 'Zn', name: 'Zinc', colStart: 12, rowStart: 4, group: 'transition-metal' },
  { symbol: 'Ga', name: 'Gallium', colStart: 13, rowStart: 4 ,group: 'post-transition-metal'},
  { symbol: 'Ge', name: 'Germanium', colStart: 14, rowStart: 4 , group: 'metalloid'},
  { symbol: 'As', name: 'Arsenic', colStart: 15, rowStart: 4 , group: 'metalloid'},
  { symbol: 'Se', name: 'Selenium', colStart: 16, rowStart: 4, group: 'nonmetal' },
  { symbol: 'Br', name: 'Bromine', colStart: 17, rowStart: 4 , group: 'halogen'},
  { symbol: 'Kr', name: 'Krypton', colStart: 18, rowStart: 4 , group: 'noble-gas'},

  { symbol: 'Rb', name: 'Rubidium', colStart: 1, rowStart: 5 , group: 'alkali-metal'},
  { symbol: 'Sr', name: 'Strontium', colStart: 2, rowStart: 5 , group: 'alkaline-earth-metal'},
  { symbol: 'Y', name: 'Yttrium', colStart: 3, rowStart: 5, group: 'transition-metal' },
  { symbol: 'Zr', name: 'Zirconium', colStart: 4, rowStart: 5 , group: 'transition-metal'},
  { symbol: 'Nb', name: 'Niobium', colStart: 5, rowStart: 5 , group: 'transition-metal'},
  { symbol: 'Mo', name: 'Molybdenum', colStart: 6, rowStart: 5, group: 'transition-metal' },
  { symbol: 'Tc', name: 'Technetium', colStart: 7, rowStart: 5 , group: 'transition-metal'},
  { symbol: 'Ru', name: 'Ruthenium', colStart: 8, rowStart: 5, group: 'transition-metal' },
  { symbol: 'Rh', name: 'Rhodium', colStart: 9, rowStart: 5, group: 'transition-metal' },
  { symbol: 'Pd', name: 'Palladium', colStart: 10, rowStart: 5, group: 'transition-metal' },
  { symbol: 'Ag', name: 'Silver', colStart: 11, rowStart: 5, group: 'transition-metal' },
  { symbol: 'Cd', name: 'Cadmium', colStart: 12, rowStart: 5, group: 'transition-metal' },
  { symbol: 'In', name: 'Indium', colStart: 13, rowStart: 5, group: 'post-transition-metal' },
  { symbol: 'Sn', name: 'Tin', colStart: 14, rowStart: 5, group: 'post-transition-metal' },
  { symbol: 'Sb', name: 'Antimony', colStart: 15, rowStart: 5, group: 'metalloid' },
  { symbol: 'Te', name: 'Tellurium', colStart: 16, rowStart: 5 , group: 'metalloid'},
  { symbol: 'I', name: 'Iodine', colStart: 17, rowStart: 5 , group: 'halogen'},
  { symbol: 'Xe', name: 'Xenon', colStart: 18, rowStart: 5 , group: 'noble-gas'},

  { symbol: 'Cs', name: 'Cesium', colStart: 1, rowStart: 6 , group: 'alkali-metal'},
  { symbol: 'Ba', name: 'Barium', colStart: 2, rowStart: 6 , group: 'alkaline-earth-metal'},
  
  { symbol: 'La', name: 'Lanthanum', colStart: 3, rowStart: 6, group: 'lanthanide' }, // Lanthanides start here
  { symbol: 'Ce', name: 'Cerium', colStart: 4, rowStart: 9 , group: 'lanthanide'},
  { symbol: 'Pr', name: 'Praseodymium', colStart: 5, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Nd', name: 'Neodymium', colStart: 6, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Pm', name: 'Promethium', colStart: 7, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Sm', name: 'Samarium', colStart: 8, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Eu', name: 'Europium', colStart: 9, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Gd', name: 'Gadolinium', colStart: 10, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Tb', name: 'Terbium', colStart: 11, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Dy', name: 'Dysprosium', colStart: 12, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Ho', name: 'Holmium', colStart: 13, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Er', name: 'Erbium', colStart: 14, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Tm', name: 'Thulium', colStart: 15, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Yb', name: 'Ytterbium', colStart: 16, rowStart: 9, group: 'lanthanide' },
  { symbol: 'Lu', name: 'Lutetium', colStart: 17, rowStart: 9, group: 'lanthanide' },

  { symbol: 'Hf', name: 'Hafnium', colStart: 4, rowStart: 6 , group: 'transition-metal'},
  { symbol: 'Ta', name: 'Tantalum', colStart: 5, rowStart: 6 , group: 'transition-metal'},
  { symbol: 'W', name: 'Tungsten', colStart: 6, rowStart: 6 , group: 'transition-metal'},
  { symbol: 'Re', name: 'Rhenium', colStart: 7, rowStart: 6 , group: 'transition-metal'},
  { symbol: 'Os', name: 'Osmium', colStart: 8, rowStart: 6 , group: 'transition-metal'},
  { symbol: 'Ir', name: 'Iridium', colStart: 9, rowStart: 6 , group: 'transition-metal'},
  { symbol: 'Pt', name: 'Platinum', colStart: 10, rowStart: 6 , group: 'transition-metal'},
  { symbol: 'Au', name: 'Gold', colStart: 11, rowStart: 6 , group: 'transition-metal'},
  { symbol: 'Hg', name: 'Mercury', colStart: 12, rowStart: 6 , group: 'transition-metal'},
  { symbol: 'Tl', name: 'Thallium', colStart: 13, rowStart: 6 , group: 'post-transition-metal'},
  { symbol: 'Pb', name: 'Lead', colStart: 14, rowStart: 6, group: 'post-transition-metal' },
  { symbol: 'Bi', name: 'Bismuth', colStart: 15, rowStart: 6,group: 'post-transition-metal' },
  { symbol: 'Po', name: 'Polonium', colStart: 16, rowStart: 6,group: 'post-transition-metal' },
  { symbol: 'At', name: 'Astatine', colStart: 17, rowStart: 6 , group: 'halogen'},
  { symbol: 'Rn', name: 'Radon', colStart: 18, rowStart: 6 , group: 'noble-gas'},

  { symbol: 'Fr', name: 'Francium', colStart: 1, rowStart: 7 , group: 'alkali-metal'},
  { symbol: 'Ra', name: 'Radium', colStart: 2, rowStart: 7,  group: 'alkaline-earth-metal'},
  { symbol: 'Ac', name: 'Actinium', colStart: 3, rowStart: 7, group: 'actinide'}, // Actinides start here
  { symbol: 'Th', name: 'Thorium', colStart: 4, rowStart: 10, group: 'actinide' },
  { symbol: 'Pa', name: 'Protactinium', colStart: 5, rowStart: 10, group: 'actinide' },
  { symbol: 'U', name: 'Uranium', colStart: 6, rowStart: 10 , group: 'actinide' },
  { symbol: 'Np', name: 'Neptunium', colStart: 7, rowStart: 10 , group: 'actinide'  },
  { symbol: 'Pu', name: 'Plutonium', colStart: 8, rowStart: 10 , group: 'actinide' },
  { symbol: 'Am', name: 'Americium', colStart: 9, rowStart: 10, group: 'actinide'  },
  { symbol: 'Cm', name: 'Curium', colStart: 10, rowStart: 10 , group: 'actinide' },
  { symbol: 'Bk', name: 'Berkelium', colStart: 11, rowStart: 10 , group: 'actinide' },
  { symbol: 'Cf', name: 'Californium', colStart: 12, rowStart: 10 , group: 'actinide' },
  { symbol: 'Es', name: 'Einsteinium', colStart: 13, rowStart: 10 , group: 'actinide' },
  { symbol: 'Fm', name: 'Fermium', colStart: 14, rowStart: 10 , group: 'actinide' },
  { symbol: 'Md', name: 'Mendelevium', colStart: 15, rowStart: 10 , group: 'actinide' },
  { symbol: 'No', name: 'Nobelium', colStart: 16, rowStart: 10 , group: 'actinide' },
  { symbol: 'Lr', name: 'Lawrencium', colStart: 17, rowStart: 10 , group: 'actinide' },

  { symbol: 'Rf', name: 'Rutherfordium', colStart: 4, rowStart: 7 , group: 'transition-metal'},
  { symbol: 'Db', name: 'Dubnium', colStart: 5, rowStart: 7, group: 'transition-metal' },
  { symbol: 'Sg', name: 'Seaborgium', colStart: 6, rowStart: 7 , group: 'transition-metal'},
  { symbol: 'Bh', name: 'Bohrium', colStart: 7, rowStart: 7 , group: 'transition-metal'},
  { symbol: 'Hs', name: 'Hassium', colStart: 8, rowStart: 7 , group: 'transition-metal'},
  { symbol: 'Mt', name: 'Meitnerium', colStart: 9, rowStart: 7 , group: 'transition-metal'},
  { symbol: 'Ds', name: 'Darmstadtium', colStart: 10, rowStart: 7 , group: 'transition-metal'},
  { symbol: 'Rg', name: 'Roentgenium', colStart: 11, rowStart: 7 , group: 'transition-metal'},
  { symbol: 'Cn', name: 'Copernicium', colStart: 12, rowStart: 7 , group: 'transition-metal'},
  { symbol: 'Nh', name: 'Nihonium', colStart: 13, rowStart: 7 , group: 'alkali-metal' },
  { symbol: 'Fl', name: 'Flerovium', colStart: 14, rowStart: 7 , group: 'alkali-metal'},
  { symbol: 'Mc', name: 'Moscovium', colStart: 15, rowStart: 7 , group: 'alkali-metal'},
  { symbol: 'Lv', name: 'Livermorium', colStart: 16, rowStart: 7, group: 'alkali-metal' },
  { symbol: 'Ts', name: 'Tennessine', colStart: 17, rowStart: 7 , group: 'halogen'},
  { symbol: 'Og', name: 'Oganesson', colStart: 18, rowStart: 7 , group: 'noble-gas'},
];

const groupColors = {
  'alkali-metal': 'bg-red-200 text-red-800',
  'alkaline-earth-metal': 'bg-orange-200 text-orange-800',
  'transition-metal': 'bg-yellow-800 text-yellow-200',
  'metalloid': 'bg-green-200 text-green-800',
  'nonmetal': 'bg-blue-200 text-blue-800',
  'halogen': 'bg-indigo-200 text-indigo-800',
  'noble-gas': 'bg-purple-200 text-purple-800',
  'lanthanide': 'bg-pink-800 text-pink-200',
  'actinide': 'bg-teal-200 text-teal-800',
  'post-transition-metal': 'bg-gray-800 text-gray-200',
  'unknown': 'bg-gray-100 text-gray-600'
};

const Elements = () => {
  return (
    <div className="grid grid-cols-18 sm:grid-cols-9 md:grid-cols-12 lg:grid-cols-18 gap-1 p-1 overflow-hidden max-w-full">
      {elements.map((element) => (
        <div
          key={element.symbol}
          className={`flex flex-col justify-center items-center p-2 border ${groupColors[element.group] || groupColors['unknown']}`}
          style={{ gridColumnStart: element.colStart, gridRowStart: element.rowStart, height: '80px', width: '80px' }}  // Set equal height and width for all boxes
        >
          <div className="text-sm md:text-base lg:text-lg font-bold">{element.symbol}</div>
          
        </div>
      ))}
    </div>
  );
};

export default Elements;
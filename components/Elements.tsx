import React from 'react';

const elements = [
  { symbol: 'H', name: 'Hydrogen', colStart: 1, rowStart: 1 },
  { symbol: 'Li', name: 'Lithium', colStart: 1, rowStart: 2 },
  { symbol: 'Be', name: 'Beryllium', colStart: 2, rowStart: 2 },
  { symbol: 'Na', name: 'Sodium', colStart: 1, rowStart: 3 },
  { symbol: 'Mg', name: 'Magnesium', colStart: 2, rowStart: 3 },
  { symbol: 'K', name: 'Potassium', colStart: 1, rowStart: 4 },
  { symbol: 'Ca', name: 'Calcium', colStart: 2, rowStart: 4 },
  { symbol: 'Rb', name: 'Rubidium', colStart: 1, rowStart: 5 },
  { symbol: 'Sr', name: 'Strontium', colStart: 2, rowStart: 5 },
  { symbol: 'Cs', name: 'Cesium', colStart: 1, rowStart: 6 },
  { symbol: 'Ba', name: 'Barium', colStart: 2, rowStart: 6 },
  { symbol: 'Fr', name: 'Francium', colStart: 1, rowStart: 7 },
  { symbol: 'Ra', name: 'Radium', colStart: 2, rowStart: 7 },
];

const Elements = () => {
  return (
    <div className="grid grid-cols-18 gap-2 p-4">
      {elements.map((element) => (
        <div
          key={element.symbol}
          className={`p-4 border text-center col-start-${element.colStart} row-start-${element.rowStart}`}
          style={{ gridColumnStart: element.colStart, gridRowStart: element.rowStart }}
        >
          <div className="text-xl font-bold">{element.symbol}</div>
          <div className="text-sm">{element.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Elements;

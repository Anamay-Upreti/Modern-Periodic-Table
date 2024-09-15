import React from "react";

const groupColors = [
  { name: "Alkali", color: "bg-red-500" },
  { name: "Alkaline Earth Metals", color: "bg-orange-500" },
  { name: "Transition Metals", color: "bg-yellow-500" },
  { name: "Post-Transition Metals", color: "bg-green-500" },
  { name: "Metalloids", color: "bg-teal-500" },
  { name: "Non-Metals", color: "bg-blue-500" },
  { name: "Halogens", color: "bg-indigo-500" },
  { name: "Noble Gases", color: "bg-purple-500" },
  { name: "Lanthanoids", color: "bg-pink-500" },
  { name: "Actinoids", color: "bg-gray-500" },
];

export default function ColorComposition() {
  // Split the groupColors array into two halves
  const firstHalf = groupColors.slice(0, 5);
  const secondHalf = groupColors.slice(5, 10);

  return (
    <div className="absolute top-24 left-1/4 transform -translate-x-1/2 bg-blue-100 border border-blue-500 p-4 rounded-lg shadow-lg z-10 text-xs flex space-x-12">
      {/* First Vertical Table */}
      <div className="text-center">
        {/* Headings */}
        <div className="flex justify-between mb-2 font-semibold">
          <span>Group</span>
          <span>Color</span>
        </div>
        {/* Table Rows */}
        {firstHalf.map((group, index) => (
          <div key={index} className="flex items-center justify-between space-x-4 mb-2">
            <span>{group.name}</span>
            <div className={`w-4 h-4 ${group.color}`}></div>
          </div>
        ))}
      </div>

      {/* Vertical Divider */}
      <div className="border-l border-gray-300"></div>

      {/* Second Vertical Table */}
      <div className="text-center">
        {/* Headings */}
        <div className="flex justify-between mb-2 font-semibold">
          <span>Group</span>
          <span>Color</span>
        </div>
        {/* Table Rows */}
        {secondHalf.map((group, index) => (
          <div key={index} className="flex items-center justify-between space-x-4 mb-2">
            <span>{group.name}</span>
            <div className={`w-4 h-4 ${group.color}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

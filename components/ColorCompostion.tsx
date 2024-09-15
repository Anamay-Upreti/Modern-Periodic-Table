import React from "react";

const groupColors = {
  alkali: "bg-red-500", // Example color for Alkali
  alkalineEarth: "bg-orange-500", // Example color for Alkaline Earth Metals
  transitionMetals: "bg-yellow-500", // Example color for Transition Metals
  postTransitionMetals: "bg-green-500", // Example color for Post-Transition Metals
  metalloids: "bg-teal-500", // Example color for Metalloids
  nonMetals: "bg-blue-500", // Example color for Non-Metals
  halogens: "bg-indigo-500", // Example color for Halogens
  nobleGases: "bg-purple-500", // Example color for Noble Gases
  lanthanoids: "bg-pink-500", // Example color for Lanthanoids
  actinoids: "bg-gray-500", // Example color for Actinoids
};

export default function ColorComposition() {
  return (
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-blue-100 border border-blue-500 p-3 rounded-lg shadow-lg z-10 text-sm">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-2 py-1 text-left">Group</th>
            <th className="px-2 py-1 text-left">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Alkali</td>
            <td className={`border px-2 py-1 ${groupColors.alkali}`}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Alkaline Earth Metals</td>
            <td className={`border px-2 py-1 ${groupColors.alkalineEarth}`}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Transition Metals</td>
            <td className={`border px-2 py-1 ${groupColors.transitionMetals}`}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Post-Transition Metals</td>
            <td className={`border px-2 py-1 ${groupColors.postTransitionMetals}`}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Metalloids</td>
            <td className={`border px-2 py-1 ${groupColors.metalloids}`}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Non-Metals</td>
            <td className={`border px-2 py-1 ${groupColors.nonMetals}`}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Halogens</td>
            <td className={`border px-2 py-1 ${groupColors.halogens}`}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Noble Gases</td>
            <td className={`border px-2 py-1 ${groupColors.nobleGases}`}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Lanthanoids</td>
            <td className={`border px-2 py-1 ${groupColors.lanthanoids}`}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Actinoids</td>
            <td className={`border px-2 py-1 ${groupColors.actinoids}`}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

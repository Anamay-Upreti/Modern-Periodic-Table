import React from "react";

const groupColors = {
  alkali: "bg-red-500", // Example color for Alkali
  nonMetal: "bg-green-500", // Example color for Non-Metals
  metalloids: "bg-yellow-500", // Example color for Metalloids
};

export default function Elements() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-blue-100 border border-blue-500 p-6 rounded-lg">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Group</th>
              <th className="px-4 py-2">Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Alkali</td>
              <td className={`border px-4 py-2 ${groupColors.alkali}`}></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Non Metal</td>
              <td className={`border px-4 py-2 ${groupColors.nonMetal}`}></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Metalloids</td>
              <td className={`border px-4 py-2 ${groupColors.metalloids}`}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

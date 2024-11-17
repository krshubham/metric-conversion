"use client";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [dhur, setDhur] = useState("");
  const [decimal, setDecimal] = useState("");
  const [acres, setAcres] = useState("");

  const handleConversion = (e) => {
    e.preventDefault();

    const dhurValue = parseFloat(dhur);
    if (!isNaN(dhurValue)) {
      const convertedDecimal = (dhurValue * 0.0172) / 0.025;
      const convertedAcres = dhurValue * 0.0172;

      setDecimal(convertedDecimal.toFixed(4));
      setAcres(convertedAcres.toFixed(4));
    } else {
      setDecimal("");
      setAcres("");
      alert("Please enter a valid number for Dhur");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Land Conversion Calculator</h1>
        <form onSubmit={handleConversion}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Enter value in Dhur:
            </label>
            <input
              type="number"
              value={dhur}
              onChange={(e) => setDhur(e.target.value)}
              placeholder="Enter Dhur"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Convert
          </button>
        </form>

        <div className="mt-6">
          {decimal && (
            <p className="text-gray-700">
              <strong>Decimal:</strong> {decimal}
            </p>
          )}
          {acres && (
            <p className="text-gray-700">
              <strong>Acres:</strong> {acres}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

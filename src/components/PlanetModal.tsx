import React from "react";
import { Exoplanet } from "../pages/SkyView";

export default function PlanetModal({
  planet,
  onClose,
}: {
  planet: Exoplanet;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-midnight text-star p-6 rounded-lg max-w-sm w-full space-y-4">
        <button onClick={onClose} className="text-red-400 float-right">
          ✕
        </button>
        <h2 className="text-2xl font-bold">{planet.hostname}</h2>
        <p>Distance: {planet.pl_masse?.toFixed(1) ?? "?"} ly</p>
        <p>Method: {planet.disc_year}</p>
        {/* add more fields as desired */}
      </div>
    </div>
  );
}

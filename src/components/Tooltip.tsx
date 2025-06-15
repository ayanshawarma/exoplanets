import React from "react";

export default function Tooltip({
  x,
  y,
  name,
  mass,
}: {
  x: number;
  y: number;
  name: string;
  mass: number | null;
}) {
  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        top: y + 10,
        left: x + 10,
      }}
      className="bg-black/80 text-star text-sm px-2 py-1 rounded"
    >
      {name}
      {mass}
    </div>
  );
}

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Exoplanet } from "../hooks/useExoplanets";
import { raDecToCartesian } from "../utils/astro";

export type PlanetMarkersProps = {
  planets: Exoplanet[];
  onCreate: (mesh: THREE.Points) => void;
};

export default function PlanetMarkers({
  planets,
  onCreate,
}: PlanetMarkersProps) {
  const meshRef = useRef<THREE.Points>(undefined);

  useEffect(() => {
    const valid = planets.filter((p) => p.distance != null);
    const distances = valid.map((p) => p.distance!);
    const maxDist = Math.max(...distances);

    const positions = new Float32Array(valid.length * 3);
    valid.forEach((p, i) => {
      const { right_ascension: ra, declination: dec } =
        p.equatorial_coordinates!;
      const [x, y, z] = raDecToCartesian(ra, dec);
      const r = p.distance!;
      positions[3 * i + 0] = x * r;
      positions[3 * i + 1] = y * r;
      positions[3 * i + 2] = z * r;
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const texCanvas = document.createElement("canvas");
    texCanvas.width = texCanvas.height = 64;
    const ctx = texCanvas.getContext("2d")!;
    ctx.fillStyle = "#ffd700";
    ctx.beginPath();
    ctx.arc(32, 32, 31, 0, Math.PI * 2);
    ctx.fill();
    const texture = new THREE.CanvasTexture(texCanvas);

    const mat = new THREE.PointsMaterial({
      size: 4,
      map: texture,
      alphaTest: 0.5,
      transparent: true,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, mat);
    meshRef.current = points;
    onCreate(points);

    return () => {
      geo.dispose();
      mat.dispose();
      texture.dispose();
    };
  }, [planets, onCreate]);

  return null;
}

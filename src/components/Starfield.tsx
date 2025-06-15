import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export type StarfieldProps = {
  radius: number;
  autoRotate: boolean;
  onCreate: (mesh: THREE.Points) => void;
};

export default function Starfield({
  radius,
  autoRotate,
  onCreate,
}: StarfieldProps) {
  const meshRef = useRef<THREE.Points>(undefined);

  // build starfield once
  useEffect(() => {
    const count = 10000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random(),
        v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      positions[3 * i + 0] = radius * Math.sin(phi) * Math.cos(theta);
      positions[3 * i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[3 * i + 2] = radius * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.7,
      color: 0xffffff,
      depthWrite: false,
    });
    const points = new THREE.Points(geo, mat);
    meshRef.current = points;
    onCreate(points);
    return () => {
      geo.dispose();
      mat.dispose();
    };
  }, [radius, onCreate]);

  // auto-rotate loop
  useEffect(() => {
    let id: number;
    const rotateLoop = () => {
      if (autoRotate && meshRef.current) {
        meshRef.current.rotation.y += 0.0005;
      }
      id = requestAnimationFrame(rotateLoop);
    };
    rotateLoop();
    return () => cancelAnimationFrame(id);
  }, [autoRotate]);

  return null;
}

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export type EarthIndicatorProps = {
  size: number;
  onCreate: (mesh: THREE.Mesh) => void;
};

export default function EarthIndicator({
  size,
  onCreate,
}: EarthIndicatorProps) {
  const meshRef = useRef<THREE.Mesh>(undefined);

  useEffect(() => {
    const geo = new THREE.SphereGeometry(size, 16, 16);
    const mat = new THREE.MeshBasicMaterial({ color: 0x3366ff });
    const mesh = new THREE.Mesh(geo, mat);
    meshRef.current = mesh;
    onCreate(mesh);
    return () => {
      geo.dispose();
      mat.dispose();
    };
  }, [size, onCreate]);

  return null;
}

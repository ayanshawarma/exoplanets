/**
 * Convert RA & Dec (in degrees) to a unit‐sphere position.
 */
export function raDecToCartesian(
  raDeg: number,
  decDeg: number
): [x: number, y: number, z: number] {
  const ra = (raDeg / 180) * Math.PI;
  const dec = (decDeg / 180) * Math.PI;
  // Spherical → Cartesian (unit radius)
  const x = Math.cos(dec) * Math.cos(ra);
  const y = Math.cos(dec) * Math.sin(ra);
  const z = Math.sin(dec);
  return [x, y, z];
}

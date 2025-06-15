import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { raDecToCartesian } from "../utils/astro";
import Tooltip from "../components/Tooltip";
import PlanetModal from "../components/PlanetModal";

export interface Exoplanet {
  pl_name: string;
  hostname: string;
  pl_letter: string;
  sy_mnum: number;
  disc_year: number;
  pl_orbper: number | null;
  pl_rade: number | null;
  pl_masse: number | null;
  pl_bmasse: number | null;
  pl_dens: number | null;
  ra: number;
  dec: number;
  glat: number;
  glon: number;
  sy_bmag: number;
  sy_vmag: number;
  sy_dist: number;
}

export default function SkyView() {
  const [planets, setPlanets] = useState<Exoplanet[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<THREE.Object3D>(undefined);
  const rootRef = useRef<THREE.Group>(undefined);
  const animRef = useRef<number>(undefined);
  const cameraRef = useRef<THREE.PerspectiveCamera>(undefined);
  const bgAudioRef = useRef<HTMLAudioElement>(null);
  const pointer = useRef(new THREE.Vector2());
  const raycaster = useRef(new THREE.Raycaster());

  // Load static JSON
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/exoplanets.json`)
      .then((r) => r.json())
      .then((data: Exoplanet[]) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Place your audio files in public/audio/
    const bg = new Audio(
      `${
        import.meta.env.BASE_URL
      }/cinematic-ambient-interstellar-music-153570.mp3`
    );
    bg.loop = true;
    bg.volume = 0.3;
    bg.play().catch(() => {});
    bgAudioRef.current = bg;
    return () => {
      bg.pause();
      bg.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || loading) return;

    // Clear previous renderer if any
    containerRef.current.innerHTML = "";

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene & group for rotation
    const scene = new THREE.Scene();
    const root = new THREE.Group();
    scene.add(root);
    rootRef.current = root;
    scene.background = new THREE.Color(0x0b0f17);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1e7);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = true;
    controls.enableZoom = true;

    // Compute distance & mag bounds
    const ds = planets.map((p) => p.sy_dist * 3.26156);
    const minDist = Math.min(...ds);
    const maxDist = Math.max(...ds);

    const mags = planets.map((p) => p.sy_vmag);
    const minMag = Math.min(...mags);
    const maxMag = Math.max(...mags);

    const power = 0.15;

    // Position camera
    camera.position.z = maxDist * 0.8;
    camera.far = maxDist * 2;
    camera.updateProjectionMatrix();
    controls.maxDistance = maxDist * 2;

    // Starfield
    const starCount = 10000;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const u = Math.random(),
        v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      starPos[3 * i] = maxDist * Math.sin(phi) * Math.cos(theta);
      starPos[3 * i + 1] = maxDist * Math.sin(phi) * Math.sin(theta);
      starPos[3 * i + 2] = maxDist * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ size: 0.5, color: 0x222222 });
    const starMesh = new THREE.Points(starGeo, starMat);
    root.add(starMesh);
    starMesh.userData.isStarfield = true;

    // Earth at origin
    const earthGeo = new THREE.SphereGeometry(maxDist * 0.005, 16, 16);
    const earthMat = new THREE.MeshBasicMaterial({ color: 0x3366ff });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    root.add(earthMesh);

    // Marker canvas
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = spriteCanvas.height = 64;
    const spriteCtx = spriteCanvas.getContext("2d")!;

    // Plot each planet
    planets.forEach((p, i) => {
      // radial scale
      const ly = p.sy_dist * 3.26156;
      const t = (ly - minDist) / (maxDist - minDist);
      const r = Math.pow(t, power) * maxDist;
      // unit vector
      const [ux, uy, uz] = raDecToCartesian(p.ra, p.dec);
      // brightness
      const mNorm = (p.sy_vmag - minMag) / (maxMag - minMag);
      const sat = THREE.MathUtils.lerp(1, 0.2, mNorm);
      const lit = THREE.MathUtils.lerp(1, 0.3, mNorm);
      const col = new THREE.Color().setHSL(0.15, sat, lit);
      // size
      const rawR = p.pl_rade ?? 1;
      const sizeNorm = THREE.MathUtils.clamp((rawR - 0.5) / (20 - 0.5), 0, 1);
      const size = THREE.MathUtils.lerp(4, 40, sizeNorm);
      // draw sprite
      spriteCtx.clearRect(0, 0, 64, 64);
      spriteCtx.fillStyle = col.getStyle();
      spriteCtx.beginPath();
      spriteCtx.arc(32, 32, 31, 0, 2 * Math.PI);
      spriteCtx.fill();
      const tex = new THREE.CanvasTexture(spriteCanvas);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        depthWrite: false,
      });
      const spr = new THREE.Sprite(mat);
      spr.scale.set(size, size, 1);
      spr.position.set(ux * r, uy * r, uz * r);
      spr.userData.isStarfield = false;
      spr.userData.planetIndex = i;
      root.add(spr);
      markerRef.current = spr; // last sprite, used for raycast check
    });

    // Pointer & hover
    const onPointer = (e: MouseEvent) => {
      const x = (e.clientX / width) * 2 - 1;
      const y = -(e.clientY / height) * 2 + 1;
      pointer.current.set(x, y);
      setPointerPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", onPointer);

    const onClick = (e: MouseEvent) => {
      raycaster.current.setFromCamera(pointer.current, camera);
      const hits = raycaster.current.intersectObjects(root.children, true);
      if (hits.length) {
        const idx = hits[0].object.userData.planetIndex;
        if (idx !== undefined) {
          setSelectedIdx(idx);
          // focus controls on the planet
          controls.target.copy(hits[0].object.position);
          controls.update();
        }
      }
    };
    renderer.domElement.addEventListener("click", onClick);

    const hoverLoop = () => {
      if (markerRef.current) {
        raycaster.current.setFromCamera(pointer.current, camera);
        const hits = raycaster.current.intersectObject(markerRef.current);
        setHoveredIdx(hits.length ? hits[0].index! : null);
      }
      requestAnimationFrame(hoverLoop);
    };
    hoverLoop();

    // Animate full system
    const animate = () => {
      if (autoRotate) root.rotation.y += 0.0005;
      controls.update();
      renderer.render(scene, camera);
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    // cleanup
    return () => {
      renderer.domElement.removeEventListener("click", onClick);
      cancelAnimationFrame(animRef.current!);
      window.removeEventListener("pointermove", onPointer);
      scene.clear();
      starGeo.dispose();
      starMat.dispose();
      earthGeo.dispose();
      earthMat.dispose();
      spriteCanvas.remove();
    };
  }, [planets, loading, autoRotate]);

  return (
    <div ref={containerRef} className="h-screen relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <span className="text-white text-xl">Loading planets…</span>
        </div>
      )}
      <button
        onClick={() => setAutoRotate((r) => !r)}
        className="absolute top-2 left-2 z-10 bg-black/50 text-white p-2 rounded"
      >
        {autoRotate ? "Stop Rotate" : "Start Rotate"}
      </button>
      {hoveredIdx !== null && (
        <Tooltip
          x={pointerPos.x}
          y={pointerPos.y}
          name={planets[hoveredIdx]?.pl_name}
          mass={planets[hoveredIdx]?.pl_masse}
        />
      )}
      {selectedIdx !== null && (
        <PlanetModal
          planet={planets[selectedIdx]}
          onClose={() => setSelectedIdx(null)}
        />
      )}
    </div>
  );
}

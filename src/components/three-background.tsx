
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BIRD_COLORS = [
  new THREE.Color("#FFD372"),
  new THREE.Color("#FFA99F"),
  new THREE.Color("#FF719A"),
  new THREE.Color("#F871A0"),
  new THREE.Color("#FFDEE2"),
  new THREE.Color("#FFB2CE"),
];

function clamp(x: number, min: number, max: number) {
  return Math.max(min, Math.min(x, max));
}

// Generate a single "bird" triangle shape
function makeBirdGeometry() {
  // Vertices roughly forming a triangle
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    0.2, 0, 0,
    -0.1, 0.15, 0,
    -0.1,-0.15, 0
  ]);
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  // Random color for each corner
  const color = BIRD_COLORS[Math.floor(Math.random() * BIRD_COLORS.length)];
  const colors = new Float32Array([
    color.r, color.g, color.b,
    color.r, color.g, color.b,
    color.r, color.g, color.b,
  ]);
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geometry;
}

function Bird({ bird, index }: { bird: any; index: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    // Animate birds' movement in 3d
    const t = state.clock.getElapsedTime() + index;
    bird.x += 0.03 * Math.sin(t + bird.seed);
    bird.y += 0.03 * Math.cos(t + bird.seed + 10);
    bird.z += 0.01 * Math.sin(t * 0.3 + bird.seed);
    // Wrap around for seamless motion
    if (bird.x > 25) bird.x = -25;
    if (bird.x < -25) bird.x = 25;
    if (bird.y > 12) bird.y = -12;
    if (bird.y < -12) bird.y = 12;
    if (bird.z > 10) bird.z = -10;
    if (bird.z < -10) bird.z = 10;
    // Hover effect
    ref.current.position.set(bird.x, bird.y, bird.z);
    // Wobble/flap animations for triangles
    ref.current.rotation.z = Math.sin(t * 2 + index) * 0.6;
    ref.current.rotation.y = Math.sin(t * 1.8 + bird.seed) * 0.5;
    ref.current.rotation.x = Math.cos(t * 1.6 + index) * 0.5;
    // "Point" birds in flying direction (optional!)
  });

  // Memoize geometry for perf
  const geometry = React.useMemo(() => makeBirdGeometry(), []);
  return (
    <mesh ref={ref} geometry={geometry}>
      <meshBasicMaterial
        vertexColors
        side={THREE.DoubleSide}
        transparent={true}
        opacity={0.79}
      />
    </mesh>
  );
}

function BirdsField({ count = 120, mouse }: { count?: number; mouse: THREE.Vector2 }) {
  // Generate birds with random positions and seeds for movement
  const birds = React.useMemo(() =>
    Array.from({ length: count }).map(() => ({
      x: (Math.random() - 0.3) * 50,
      y: (Math.random() - 0.2) * 20,
      z: (Math.random() - 0.5) * 20,
      seed: Math.random() * 1000,
    }))
  , [count]);

  return (
    <>
      {birds.map((b, i) => (
        <Bird key={i} bird={b} index={i} />
      ))}
    </>
  );
}

export const ThreeBackground = () => {
  const [mouse, setMouse] = useState<THREE.Vector2>(new THREE.Vector2(0, 0));
  // Mouse movement effect (camera parallax)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Normalize -1 to 1 horizontally/vertically
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMouse(new THREE.Vector2(x, y));
  };

  // Render Three.js Canvas background
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: "#06112B"
      }}
      onPointerMove={handlePointerMove}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 32], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none", // Let user interact with UI
        }}
      >
        {/* Camera parallax on mouse */}
        <ParallaxCamera mouse={mouse} />
        {/* Simple ambient and faint directional light (if needed) */}
        <ambientLight intensity={0.6} />
        <BirdsField count={140} mouse={mouse} />
      </Canvas>
    </div>
  );
};

// Component for a gentle parallax camera
function ParallaxCamera({ mouse }: { mouse: THREE.Vector2 }) {
  useFrame(({ camera }) => {
    camera.position.x += (mouse.x * 6 - camera.position.x) * 0.03;
    camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

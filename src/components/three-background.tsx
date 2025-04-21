
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BIRD_COLORS = [
  new THREE.Color("#FFD372"),
  new THREE.Color("#FFA99F"),
  new THREE.Color("#FF719A"),
  new THREE.Color("#9b87f5"),  // Use the vibrant primary purple
  new THREE.Color("#33C3F0"),  // Use sky blue
  new THREE.Color("#F871A0"),
  new THREE.Color("#FFDEE2"),
  new THREE.Color("#1EAEDB"),  // Bright blue
  new THREE.Color("#FFB2CE"),
  new THREE.Color("#D6BCFA"),  // Light purple accent
];

function clamp(x: number, min: number, max: number) {
  return Math.max(min, Math.min(x, max));
}

function makeBirdGeometry() {
  // Larger triangle for more visibility (scaled up from original)
  const geometry = new THREE.BufferGeometry();
  const scale = 1.5; // Increase size (original was ~0.2)
  const vertices = new Float32Array([
    0.36 * scale, 0, 0,
    -0.18 * scale, 0.31 * scale, 0,
    -0.18 * scale, -0.31 * scale, 0
  ]);
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  // Random color for each triangle
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
    bird.x += 0.035 * Math.sin(t + bird.seed);         // Slightly faster
    bird.y += 0.036 * Math.cos(t + bird.seed + 10);
    bird.z += 0.018 * Math.sin(t * 0.32 + bird.seed);

    // Wrap around for seamless motion
    if (bird.x > 28) bird.x = -28;
    if (bird.x < -28) bird.x = 28;
    if (bird.y > 14) bird.y = -14;
    if (bird.y < -14) bird.y = 14;
    if (bird.z > 18) bird.z = -18;
    if (bird.z < -18) bird.z = 18;

    ref.current.position.set(bird.x, bird.y, bird.z);

    // Motion/flap effect
    ref.current.rotation.z = Math.sin(t * 2.1 + index) * 0.6;
    ref.current.rotation.y = Math.sin(t * 1.7 + bird.seed) * 0.49;
    ref.current.rotation.x = Math.cos(t * 2.0 + index) * 0.44;
  });

  const geometry = React.useMemo(() => makeBirdGeometry(), []);
  return (
    <mesh ref={ref} geometry={geometry}>
      <meshBasicMaterial
        vertexColors
        side={THREE.DoubleSide}
        transparent={true}
        opacity={0.85}
      />
    </mesh>
  );
}

function BirdsField({ count = 220, mouse }: { count?: number; mouse: THREE.Vector2 }) {
  const birds = React.useMemo(() =>
    Array.from({ length: count }).map(() => ({
      x: (Math.random() - 0.3) * 56,
      y: (Math.random() - 0.2) * 26,
      z: (Math.random() - 0.5) * 36,
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
  // Capture mouse movement for parallax
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMouse(new THREE.Vector2(x, y));
  };

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: "radial-gradient(circle at 60% 40%, #0EA5E9 15%, #1A1F2C 98%)",
      }}
      onPointerMove={handlePointerMove}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 36], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <ParallaxCamera mouse={mouse} />
        <ambientLight intensity={0.69} />
        <BirdsField count={240} mouse={mouse} />
      </Canvas>
    </div>
  );
};

function ParallaxCamera({ mouse }: { mouse: THREE.Vector2 }) {
  useFrame(({ camera }) => {
    // Stronger movement for more effect
    camera.position.x += (mouse.x * 11 - camera.position.x) * 0.07;
    camera.position.y += (-mouse.y * 6 - camera.position.y) * 0.07;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

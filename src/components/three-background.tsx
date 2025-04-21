
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const particleCount = 800;

  // Generate positions and colors
  const positions = React.useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 140;
      arr[i + 1] = (Math.random() - 0.5) * 70;
      arr[i + 2] = (Math.random() - 0.5) * 100;
    }
    return arr;
  }, [particleCount]);

  const colors = React.useMemo(() => {
    // Interpolate between colors
    const color1 = new THREE.Color(0xff0000);
    const color2 = new THREE.Color(0x0d1fff);
    const colorArr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const t = Math.random();
      const color = color1.clone().lerp(color2, t);
      colorArr[i * 3] = color.r;
      colorArr[i * 3 + 1] = color.g;
      colorArr[i * 3 + 2] = color.b;
    }
    return colorArr;
  }, [particleCount]);

  // Animate rotation
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.001;
      pointsRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2.5}
        vertexColors
        transparent={true}
        opacity={1}
        sizeAttenuation={true}
      />
    </points>
  );
}

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 60], fov: 75 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: "#07192f" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

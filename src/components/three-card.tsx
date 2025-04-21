
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SKILLS = [
  "Python",
  "SQL",
  "Data Analytics",
  "Machine Learning",
  "Deep Learning",
  "Data Visualization",
];

export function SkillsCard(props: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.3;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={props.position ?? [0, 0, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial
        color="#1a1f2c"
        metalness={0.7}
        roughness={0.2}
        envMapIntensity={1}
      >
        <canvasTexture
          attach="map"
          image={(() => {
            const canvas = document.createElement("canvas");
            canvas.width = 512;
            canvas.height = 512;
            const ctx = canvas.getContext("2d")!;
            ctx.fillStyle = "#1a1f2c";
            ctx.fillRect(0, 0, 512, 512);
            ctx.font = "bold 48px Inter";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#9b87f5";
            SKILLS.forEach((skill, i) => {
              ctx.fillText(skill, 256, 100 + i * 60);
            });
            return canvas;
          })()}
        />
      </meshStandardMaterial>
    </mesh>
  );
}

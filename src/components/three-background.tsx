
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Util to randomly interpolate between two colors
function lerpColor(a: number, b: number, t: number) {
  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return (rr << 16) + (rg << 8) + rb;
}

export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07192f); // dark blue as in screenshot

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 60;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: true,
    });
    renderer.setClearColor(0x07192f, 1); // strong blue bg
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Particle geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 800;
    const positions = [];
    const colors = [];
    // Color settings as per screenshot
    const color1 = 0xff0000, color2 = 0x0d1fff;

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions.push(
        (Math.random() - 0.5) * 140,
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 100
      );
      // Gradually mix between two colors
      const t = Math.random();
      const rgb = lerpColor(color1, color2, t);
      colors.push(((rgb >> 16) & 0xff) / 255, ((rgb >> 8) & 0xff) / 255, (rgb & 0xff) / 255);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    // Particle material (vertex colors)
    const particlesMaterial = new THREE.PointsMaterial({
      size: 2.5, // larger, triangular-like effect
      vertexColors: true,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
    });

    // Create particles & add to scene
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animate
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      particles.rotation.x += 0.001;
      particles.rotation.y += 0.0012;
      renderer.render(scene, camera);
    };
    animate();

    // Responsive resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};

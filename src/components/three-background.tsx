
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Particle geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    
    const positionArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positionArray[i] = (Math.random() - 0.5) * 100;
      positionArray[i + 1] = (Math.random() - 0.5) * 100;
      positionArray[i + 2] = (Math.random() - 0.5) * 100;
      
      // Scale
      scaleArray[i / 3] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      color: 0x3a86ff,
      transparent: true,
      opacity: 0.8
    });
    
    // Create particles
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};


import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, MeshDistortMaterial, PerspectiveCamera, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

const FloatingPage = ({ position, rotation, color }: { position: [number, number, number], rotation: [number, number, number], color: string }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.2;
    mesh.current.rotation.z = rotation[2] + Math.cos(t * 0.3) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box ref={mesh} position={position} rotation={rotation} args={[1.5, 2, 0.05]}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Box>
    </Float>
  );
};

const AbstractOrb = ({ position, color, distort }: { position: [number, number, number], color: string, distort: number }) => {
  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={distort}
          radius={1}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#6366f1" intensity={0.5} />
      
      {/* Abstract Pages */}
      <FloatingPage position={[-4, 2, -2]} rotation={[0.2, 0.4, 0.1]} color="#6366f1" />
      <FloatingPage position={[4, -2, -3]} rotation={[-0.2, -0.4, -0.1]} color="#ec4899" />
      <FloatingPage position={[0, 3, -5]} rotation={[0.5, 0, 0.2]} color="#a855f7" />

      {/* Hero Central Piece */}
      <AbstractOrb position={[0, 0, -2]} color="#6366f1" distort={0.4} />
      
      <Environment preset="city" />
    </>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-100">
      <Suspense fallback={null}>
        <Canvas 
          dpr={[1, 2]} 
          gl={{ 
            antialias: true, 
            alpha: true,
            preserveDrawingBuffer: true,
            powerPreference: "high-performance" 
          }}
          onCreated={({ gl }) => {
            gl.domElement.style.touchAction = 'none';
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene3D;

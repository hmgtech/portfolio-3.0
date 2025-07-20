// components/SpaceshipCanvas.tsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Spaceship } from './Spaceship';

const SpaceshipCanvas = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 3], fov: 45 }}
      shadows
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {/* <Stars radius={100} depth={50} count={3000} factor={4} fade /> */}
      <Suspense fallback={null}>
        <Spaceship />
      </Suspense>
      <OrbitControls enableZoom={true} enablePan={false} autoRotate />
    </Canvas>
  );
};

export default SpaceshipCanvas;

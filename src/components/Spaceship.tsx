// components/Spaceship.tsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Spaceship() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/spaceship.glb') as any;

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return <primitive ref={group} object={scene} scale={0.09} />;
}

useGLTF.preload('/models/spaceship.glb');

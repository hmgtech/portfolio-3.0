import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Spaceship() {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/spaceship/scene.gltf') as any;

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={group} dispose={null} scale={0.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      >
        <meshStandardMaterial
          color="#4a9eff"
          metalness={0.8}
          roughness={0.2}
          emissive="#0066ff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/spaceship/scene.gltf');
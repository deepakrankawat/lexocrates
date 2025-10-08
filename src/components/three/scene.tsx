'use client';

import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

export function Scene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#192A56"
            attach="material"
            distort={0.5}
            speed={1.5}
            metalness={0.7}
            roughness={0.3}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
}

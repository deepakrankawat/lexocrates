'use client';

import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

export function Scene() {
  return (
    <Canvas style={{ background: 'linear-gradient(to bottom, #101C40, #0A122A)' }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Suspense>
    </Canvas>
  );
}

function AnimatedSphere() {
    return (
        <Sphere visible args={[1, 100, 200]} scale={1.8}>
            <MeshDistortMaterial
                color="#B8860B"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.6}
            />
        </Sphere>
    )
}

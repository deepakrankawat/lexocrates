'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';

const AnimatedText = ({ children, delay }: { children: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const Scene = () => {
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
};

const DynamicScene = dynamic(() => Promise.resolve(Scene), { ssr: false });


export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#101C40] to-[#0A122A] z-0">
             <div className="absolute inset-0 opacity-50">
                <DynamicScene />
             </div>
        </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <AnimatedText delay={0.2}>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Delivering Legal Outcomes with Precision
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-white/80">
            Empowering law firms and enterprises through secure, efficient, and scalable legal outsourcing.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Link href="/services">
                    Explore Services
                </Link>
            </Button>
          </div>
        </AnimatedText>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-white/50" />
      </motion.div>
    </section>
  );
}

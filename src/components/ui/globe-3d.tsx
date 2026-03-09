
'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export function Globe3D() {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      // Auto-rotation
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      
      // Focus on the path area with a smooth zoom effect
      // Initial state is slightly zoomed out
      globeRef.current.pointOfView({ lat: 35, lng: 0, altitude: 2.8 }, 0);
      
      // Delay the zoom to ensure the component is fully mounted and visible
      const timer = setTimeout(() => {
        globeRef.current.pointOfView({ lat: 35, lng: 0, altitude: 2.0 }, 3500);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [globeRef.current]);

  const arcsData = [
    {
      startLat: 26.9124,
      startLng: 75.7873,
      endLat: 43.65107,
      endLng: -79.347015,
      color: ['#b8860b', '#b8860b']
    }
  ];

  const ringsData = [
    { lat: 26.9124, lng: 75.7873, label: 'Jaipur, India' },
    { lat: 43.65107, lng: -79.347015, label: 'Canada' }
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center bg-transparent overflow-hidden">
      <Globe
        ref={globeRef}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={3}
        arcDashAnimateTime={2000}
        arcStroke={0.6}
        ringsData={ringsData}
        ringColor={() => '#b8860b'}
        ringMaxRadius={2.5}
        ringPropagationSpeed={2.5}
        ringRepeatPeriod={800}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}

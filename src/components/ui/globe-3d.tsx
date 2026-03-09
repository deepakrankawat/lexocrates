
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

export function Globe3D() {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  // Use theme accent color (Gold)
  const THEME_ACCENT = '#ceab30';

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
      // Auto-rotation config
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.controls().enableZoom = false;
      
      // Focus on the path area with a smooth zoom effect
      globeRef.current.pointOfView({ lat: 35, lng: 0, altitude: 2.8 }, 0);
      
      const timer = setTimeout(() => {
        globeRef.current.pointOfView({ lat: 35, lng: 0, altitude: 2.0 }, 3000);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const arcsData = [
    {
      startLat: 26.9124, // Jaipur
      startLng: 75.7873,
      endLat: 43.65107, // Canada (Toronto proxy)
      endLng: -79.347015,
      color: [THEME_ACCENT, THEME_ACCENT]
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
        atmosphereColor={THEME_ACCENT}
        atmosphereDaylightAlpha={0.1}
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.5}
        arcDashGap={2}
        arcDashAnimateTime={2000}
        arcStroke={1}
        ringsData={ringsData}
        ringColor={() => THEME_ACCENT}
        ringMaxRadius={2.5}
        ringPropagationSpeed={2.5}
        ringRepeatPeriod={800}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}

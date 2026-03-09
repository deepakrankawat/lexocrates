
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

export function Globe3D() {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [countries, setCountries] = useState({ features: [] });

  // Project Style Palette
  const GOLDEN_SURFACE = '#ceab30';
  const DARK_BLUE_WATER = '#06162e';
  const GREEN_ANIMATION = '#22c55e';

  useEffect(() => {
    // Fetch geojson for land surface hexagonal mesh
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries)
      .catch(err => console.error('Failed to load globe surface data:', err));

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
      color: [GREEN_ANIMATION, GREEN_ANIMATION]
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
        globeColor={DARK_BLUE_WATER}
        hexPolygonsData={countries.features}
        hexPolygonColor={() => GOLDEN_SURFACE}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        showAtmosphere={true}
        atmosphereColor={GOLDEN_SURFACE}
        atmosphereDaylightAlpha={0.1}
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.5}
        arcDashGap={2}
        arcDashAnimateTime={2000}
        arcStroke={1}
        ringsData={ringsData}
        ringColor={() => GREEN_ANIMATION}
        ringMaxRadius={2.5}
        ringPropagationSpeed={2.5}
        ringRepeatPeriod={800}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}

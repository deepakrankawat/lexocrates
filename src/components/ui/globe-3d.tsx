
'use client';

import React, { useEffect, useRef, useState } from 'react';

export function Globe3D() {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [countries, setCountries] = useState({ features: [] });
  const [GlobeComponent, setGlobeComponent] = useState<any>(null);

  // Project Style Palette (Deep Blue & Gold)
  const GOLDEN_SURFACE = '#B8860B';
  const DARK_BLUE_WATER = '#192A56';
  const DATA_STREAM_GLOW = '#ceab30';

  useEffect(() => {
    import('react-globe.gl').then((mod) => {
      setGlobeComponent(() => mod.default);
    });

    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries)
      .catch(err => console.error('Failed to load globe surface data:', err));

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.6;
      globeRef.current.controls().enableZoom = false;
      
      // Initial focus point
      globeRef.current.pointOfView({ lat: 35, lng: 0, altitude: 2.5 }, 0);
    }
  }, [GlobeComponent]);

  const arcsData = [
    {
      startLat: 26.9124, // Jaipur
      startLng: 75.7873,
      endLat: 43.65107, // Toronto, Canada
      endLng: -79.347015,
      color: [DATA_STREAM_GLOW, DATA_STREAM_GLOW]
    },
    {
      startLat: 26.9124, // Jaipur
      startLng: 75.7873,
      endLat: 51.5074, // London, UK
      endLng: -0.1278,
      color: [DATA_STREAM_GLOW, DATA_STREAM_GLOW]
    },
    {
      startLat: 26.9124, // Jaipur
      startLng: 75.7873,
      endLat: 40.7128, // New York, USA
      endLng: -74.0060,
      color: [DATA_STREAM_GLOW, DATA_STREAM_GLOW]
    }
  ];

  const ringsData = [
    { lat: 26.9124, lng: 75.7873, label: 'Jaipur Hub' },
    { lat: 43.65107, lng: -79.347015, label: 'Canada' },
    { lat: 51.5074, lng: -0.1278, label: 'United Kingdom' },
    { lat: 40.7128, lng: -74.0060, label: 'USA' }
  ];

  if (!GlobeComponent) {
    return (
      <div className="w-full h-full flex items-center justify-center text-accent/20 font-montserrat font-black uppercase tracking-[0.4em] text-[10px]">
        Establishing Global Node...
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center bg-transparent overflow-visible pointer-events-none md:pointer-events-auto">
      <GlobeComponent
        ref={globeRef}
        backgroundColor="rgba(0,0,0,0)"
        globeColor={DARK_BLUE_WATER}
        hexPolygonsData={countries.features}
        hexPolygonColor={() => GOLDEN_SURFACE}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        showAtmosphere={true}
        atmosphereColor={DATA_STREAM_GLOW}
        atmosphereDaylightAlpha={0.15}
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={1.5}
        arcDashAnimateTime={1500}
        arcStroke={1.5}
        ringsData={ringsData}
        ringColor={() => DATA_STREAM_GLOW}
        ringMaxRadius={2.5}
        ringPropagationSpeed={3}
        ringRepeatPeriod={1000}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}

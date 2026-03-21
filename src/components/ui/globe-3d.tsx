
'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the globe component to avoid SSR issues and improve initial bundle size
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
      <p className="text-accent/40 font-montserrat font-black uppercase tracking-[0.4em] text-[10px] animate-pulse">
        Initializing Global Node...
      </p>
    </div>
  ),
});

export function Globe3D() {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [countries, setCountries] = useState({ features: [] });

  // Project Style Palette (Deep Blue & Gold)
  const GOLDEN_SURFACE = '#B8860B';
  const DARK_BLUE_WATER = '#0c1a3d';
  const DATA_STREAM_GLOW = '#ceab30';

  useEffect(() => {
    // Faster, low-res landmass data for initial load
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
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.8;
        controls.enableZoom = false;
      }
      // Initial focus point: Center between India and North America
      globeRef.current.pointOfView({ lat: 25, lng: 10, altitude: 2.2 }, 1000);
    }
  }, [countries]); // Re-run when countries load to ensure focus is correct

  const locations = useMemo(() => [
    { lat: 26.9124, lng: 75.7873, name: 'JAIPUR HUB', isHub: true },
    { lat: 43.65107, lng: -79.347015, name: 'CANADA', isHub: false },
    { lat: 51.5074, lng: -0.1278, name: 'UK', isHub: false },
    { lat: 40.7128, lng: -74.0060, name: 'USA', isHub: false }
  ], []);

  const arcsData = useMemo(() => [
    {
      startLat: 26.9124,
      startLng: 75.7873,
      endLat: 43.65107,
      endLng: -79.347015,
      color: [DATA_STREAM_GLOW, DATA_STREAM_GLOW]
    },
    {
      startLat: 26.9124,
      startLng: 75.7873,
      endLat: 51.5074,
      endLng: -0.1278,
      color: [DATA_STREAM_GLOW, DATA_STREAM_GLOW]
    },
    {
      startLat: 26.9124,
      startLng: 75.7873,
      endLat: 40.7128,
      endLng: -74.0060,
      color: [DATA_STREAM_GLOW, DATA_STREAM_GLOW]
    }
  ], []);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center bg-transparent overflow-visible pointer-events-none md:pointer-events-auto">
      <Globe
        ref={globeRef}
        backgroundColor="rgba(0,0,0,0)"
        globeColor={DARK_BLUE_WATER}
        width={dimensions.width}
        height={dimensions.height}
        
        // Landmasses (Hex Polygons)
        hexPolygonsData={countries.features}
        hexPolygonColor={() => GOLDEN_SURFACE}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        showAtmosphere={true}
        atmosphereColor={DATA_STREAM_GLOW}
        atmosphereDaylightAlpha={0.1}
        
        // Arcs Layer (Data Streams)
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.5}
        arcDashGap={2}
        arcDashAnimateTime={2000}
        arcStroke={1.2}
        
        // Pulsing Rings Layer (Jurisdictional Nodes)
        ringsData={locations}
        ringLat={(d: any) => d.lat}
        ringLng={(d: any) => d.lng}
        ringColor={() => DATA_STREAM_GLOW}
        ringMaxRadius={(d: any) => d.isHub ? 4 : 3}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1200}
        
        // Solid Points Layer (Marker Core)
        pointsData={locations}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointColor={() => '#ffffff'}
        pointRadius={(d: any) => d.isHub ? 0.7 : 0.4}
        pointAltitude={0.01}
        
        // Labels Layer (Jurisdictional Names)
        labelsData={locations}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => d.name}
        labelSize={2.5}
        labelDotRadius={0}
        labelColor={() => DATA_STREAM_GLOW}
        labelResolution={3}
        labelAltitude={0.02}
      />
    </div>
  );
}

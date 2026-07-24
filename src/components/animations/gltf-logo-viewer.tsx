'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

type GltfLogoViewerProps = {
  activeCardIndex?: number | null;
};

export function GltfLogoViewer({ activeCardIndex = null }: GltfLogoViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const activeIndexRef = useRef<number | null>(activeCardIndex);

  useEffect(() => {
    activeIndexRef.current = activeCardIndex;
  }, [activeCardIndex]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Controls (Auto-rotation only, direct user touch/drag disabled)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;

    // Cinematic Studio Lighting with Gold & Blue Rim Highlights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(5, 12, 10);
    scene.add(keyLight);

    const goldRimLight = new THREE.DirectionalLight(0xfbbf24, 2.4);
    goldRimLight.position.set(-6, 8, -5);
    scene.add(goldRimLight);

    const blueRimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    blueRimLight.position.set(6, -6, -4);
    scene.add(blueRimLight);

    // Dynamic Radial Ground Shadow Plane
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(28, 38, 56, 0.55)');
      gradient.addColorStop(0.5, 'rgba(212, 175, 55, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 128, 128);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(3.5, 3.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.65,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.5;
    scene.add(shadowPlane);

    // 3D Particles Constellation Ring
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6.5;
      positions[i + 1] = (Math.random() - 0.5) * 6.5;
      positions[i + 2] = (Math.random() - 0.5) * 4.5;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.065,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    let modelNode: THREE.Object3D | null = null;
    let initialY = 0;
    let maxDimVal = 1;
    let currentScaleFactor = 1.0;

    // Load GLTF Model from /3d/torch-logo-3d.gltf
    const loader = new GLTFLoader();
    loader.load(
      '/3d/torch-logo-3d.gltf',
      (gltf) => {
        modelNode = gltf.scene;

        // Luxury Dual-Material Palette: Slate Navy Body (#1c2638), Gold Flame Crest (#e6b738) & White Inset (#ffffff)
        const slateNavyMaterial = new THREE.MeshStandardMaterial({
          color: 0x1c2638, // Lexocrates Premium Dark Slate Navy
          roughness: 0.25,
          metalness: 0.5,
          transparent: false,
          opacity: 1.0,
          side: THREE.FrontSide,
          depthWrite: true,
          depthTest: true,
        });

        const goldFlameMaterial = new THREE.MeshStandardMaterial({
          color: 0xe6b738, // Metallic Warm Gold Flame Crest
          roughness: 0.15,
          metalness: 0.9,
          transparent: false,
          opacity: 1.0,
          side: THREE.FrontSide,
          depthWrite: true,
          depthTest: true,
        });

        const whiteMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff, // Pure White Inset Box (#ffffff)
          roughness: 0.2,
          metalness: 0.1,
          transparent: false,
          opacity: 1.0,
          side: THREE.FrontSide,
          depthWrite: true,
          depthTest: true,
        });

        modelNode.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.renderOrder = 10;
            const name = mesh.name.toLowerCase();
            if (name.includes('flame') || name.includes('top') || name.includes('fire') || name.includes('gold')) {
              mesh.material = goldFlameMaterial;
            } else if (name.includes('box') || name.includes('inner') || name.includes('bar') || name.includes('inset') || name.includes('white')) {
              mesh.material = whiteMaterial;
            } else {
              mesh.material = slateNavyMaterial;
            }
          }
        });

        // Center & Auto-scale GLTF model (Base scale 2.3)
        const box = new THREE.Box3().setFromObject(modelNode);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        modelNode.position.sub(center);
        initialY = modelNode.position.y;

        maxDimVal = Math.max(size.x, size.y, size.z);
        if (maxDimVal > 0) {
          const scale = 2.3 / maxDimVal;
          modelNode.scale.set(scale, scale, scale);
        }

        scene.add(modelNode);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error('Error loading 3D GLTF model:', error);
        setLoading(false);
      }
    );

    // Target angles for each service card (0 to 5)
    const cardAngles: Record<number, number> = {
      0: -0.7,
      1: -0.35,
      2: 0,
      3: 0.35,
      4: 0.7,
      5: 1.0,
    };

    // Animation Loop with Dynamic Shadow, Levitating Motion & Card Zoom In/Out
    const clock = new THREE.Clock();
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Card Touch/Hover Dynamic Zoom In & Zoom Out Lerp
      const isCardActive = activeIndexRef.current !== null;
      const targetScaleFactor = isCardActive ? 1.38 : 1.0;
      currentScaleFactor += (targetScaleFactor - currentScaleFactor) * 0.08;

      if (modelNode && maxDimVal > 0) {
        const animatedScale = (2.3 * currentScaleFactor) / maxDimVal;
        modelNode.scale.set(animatedScale, animatedScale, animatedScale);
      }

      // Levitating Floating Motion & Dynamic Shadow Pulsing
      if (modelNode) {
        const floatOffsetY = Math.sin(elapsedTime * 1.8) * 0.15;
        modelNode.position.y = initialY + floatOffsetY;
        modelNode.rotation.z = Math.sin(elapsedTime * 1.2) * 0.04;

        // Dynamic Shadow Scale & Opacity with Zoom and Height
        const sFactor = Math.max(0.5, (1 - floatOffsetY * 0.6) * currentScaleFactor);
        shadowPlane.scale.set(sFactor, sFactor, 1);
        shadowMat.opacity = Math.max(0.3, 0.6 - floatOffsetY * 0.4);
      }

      // Pulsing Lights & Particles
      keyLight.intensity = (3.2 + Math.sin(elapsedTime * 2.5) * 0.7) * (isCardActive ? 1.2 : 1.0);
      particleMaterial.opacity = 0.5 + Math.sin(elapsedTime * 2) * 0.3;
      particles.rotation.y += 0.003;
      particles.rotation.x += 0.001;

      // Active Card Focus vs Smooth Auto Spin
      const currentCard = activeIndexRef.current;
      if (currentCard !== null && cardAngles[currentCard] !== undefined && modelNode) {
        const targetY = cardAngles[currentCard];
        modelNode.rotation.y += (targetY - modelNode.rotation.y) * 0.1;
      } else if (modelNode) {
        modelNode.rotation.y += 0.008;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[750px] mx-auto flex items-center justify-center pointer-events-none">
      {/* Background Soft Gold Glow */}
      <div className="absolute inset-0 bg-accent/15 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div ref={containerRef} className="w-full h-full relative z-10 pointer-events-none" />
    </div>
  );
}

import { useEffect, useRef } from 'react';
// three.js ambient import
// @ts-ignore -- types should resolve via package; ignore if TS path mapping not set yet
import * as THREE from 'three';

interface WebGLCircuitBackgroundProps {
  intensity: number; // scales material opacity
  quality: 'low' | 'high';
  active: boolean; // mount gate
}

/**
 * Lightweight Three.js circuit line field.
 * - Draws a grid of nodes with animated shimmering connections.
 * - Intentionally minimal to keep bundle impact low.
 */
export function WebGLCircuitBackground({ intensity, quality, active }: WebGLCircuitBackgroundProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const cleanupRef = useRef<() => void>();

  useEffect(() => {
    if (!active || !mountRef.current) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, quality === 'high' ? 2 : 1));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearAlpha(0);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Parameters
    const gridSize = quality === 'high' ? 14 : 9;
    const spacing = 2.2;
    const material = new THREE.PointsMaterial({ color: 0x4f46e5, size: 0.07, transparent: true, opacity: 0.35 * intensity });

    // Nodes
    const positions: number[] = [];
    for (let x = -gridSize; x <= gridSize; x++) {
      for (let y = -gridSize; y <= gridSize; y++) {
        positions.push(x * spacing, y * spacing, (Math.sin(x * 0.4) + Math.cos(y * 0.4)) * 0.6);
      }
    }
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const nodes = new THREE.Points(nodeGeometry, material);
    group.add(nodes);

    // Dynamic line segments (animate via shader-ish color/alpha updates)
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.18 * intensity });
    const lineGeom = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    const nodeCount = positions.length / 3;
    const targetLines = quality === 'high' ? 200 : 90;
    for (let i = 0; i < targetLines; i++) {
      const a = Math.floor(Math.random() * nodeCount);
      const b = Math.floor(Math.random() * nodeCount);
      linePositions.push(
        positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2],
        positions[b * 3], positions[b * 3 + 1], positions[b * 3 + 2]
      );
    }
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineSegments = new THREE.LineSegments(lineGeom, lineMaterial);
    group.add(lineSegments);

    // Animation
    let frameId: number;
    const tmpColor = new THREE.Color();
    const animate = (t: number) => {
      group.rotation.z = t * 0.00005;
      const pulse = (Math.sin(t * 0.0006) + 1) / 2; // 0..1
      material.opacity = (0.2 + 0.15 * pulse) * intensity;
      lineMaterial.opacity = (0.1 + 0.1 * (1 - pulse)) * intensity;
      // slight hue shift (simulate) by lerping color
      tmpColor.setHSL(0.68 + 0.02 * pulse, 0.7, 0.55);
      material.color.lerp(tmpColor, 0.1);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    cleanupRef.current = () => {
      try {
        cancelAnimationFrame(frameId);
        window.removeEventListener('resize', handleResize);
        // Context loss helps some drivers free resources sooner (safe no-op if already lost)
        // @ts-ignore optional method
        if (renderer.forceContextLoss) renderer.forceContextLoss();
        renderer.dispose();
        nodeGeometry.dispose();
        lineGeom.dispose();
        material.dispose();
        lineMaterial.dispose();
        if (renderer.domElement && renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      } catch (e) {
        // Swallow to avoid cascading errors during StrictMode double-unmount
        if (import.meta.env.DEV) console.warn('[WebGLCircuitBackground] cleanup error', e);
      }
    };

    return cleanupRef.current;
  }, [active, intensity, quality]);

  useEffect(() => () => cleanupRef.current?.(), []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />;
}

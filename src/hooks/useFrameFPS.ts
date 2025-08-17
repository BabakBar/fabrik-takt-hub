import { useEffect, useRef, useState } from 'react';

/** Minimal rAF FPS hook (development / diagnostics only). */
export function useFrameFPS(enabled = false, sampleMs = 1000) {
  const frameCount = useRef(0);
  const last = useRef(performance.now());
  const [fps, setFps] = useState<number | null>(null);
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    let frameId: number;
    const loop = (t: number) => {
      frameCount.current += 1;
      const delta = t - last.current;
      if (delta >= sampleMs) {
        setFps(Math.round((frameCount.current * 1000) / delta));
        frameCount.current = 0;
        last.current = t;
      }
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [enabled, sampleMs]);
  return fps;
}

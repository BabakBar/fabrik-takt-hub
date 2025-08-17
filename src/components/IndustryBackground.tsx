import { useId } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { TargetAndTransition } from 'motion';

// New simplified layer keys
export type LayerKey = 'factory' | 'data' | 'aiCore' | 'cloud' | 'gear' | 'gearsExtra' | 'neural' | 'robot';

export interface IndustryBackgroundProps {
  intensity?: number;
  motionLevel?: 'full' | 'lite' | 'off';
  enabledLayers?: Partial<Record<LayerKey, boolean>>;
}

/**
 * Simplified IndustryBackground
 * Focused calm metaphor: Factory base + flowing data lines + AI core + cloud + small gear.
 */
const IndustryBackground: React.FC<IndustryBackgroundProps> = ({
  intensity = 1,
  motionLevel = 'full',
  enabledLayers = {}
}) => {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced || motionLevel === 'off';
  const lite = motionLevel === 'lite';
  const uid = useId();
  // unique ids for gear cluster svg defs
  const gearGradId = useId();
  const gearFilterId = useId();

  const animated = (animate: TargetAndTransition, fallback: TargetAndTransition = {}) => (reduced ? fallback : animate) as TargetAndTransition;
  const on = (k: LayerKey) => enabledLayers[k] !== false;
  const op = (base: number) => Math.max(0, base * intensity);

  return (
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
      {/* Factory silhouette */}
      {on('factory') && (
        <div style={{ opacity: op(0.08) }} className="absolute inset-x-0 bottom-0 h-40">
          <svg viewBox="0 0 1200 160" className="w-full h-full" aria-hidden role="img">
            <title>Factory silhouette</title>
            <defs>
              <linearGradient id={`${uid}-facfade`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="1200" height="160" fill={`url(#${uid}-facfade)`} />
            <g fill="#1e293b" opacity={0.55}>
              {[80,170,250,360,440,540,620,720,810,900].map((x,i)=>(
                <rect key={x} x={x} y={70 + (i%3)*10} width={60 + (i%2)*10} height={50 - (i%3)*8} rx={3} />
              ))}
            </g>
            {!reduced && (
              <motion.rect x={270} y={46} width={10} height={28} fill="#334155" initial={{ opacity:0.1 }} animate={animated({ opacity:[0.1,0.35,0.1], y:[0,-4,0], transition:{ duration:12, repeat:Infinity } })} />
            )}
          </svg>
        </div>
      )}
      {/* Data lines */}
      {on('data') && (
        <div style={{ opacity: op(0.10) }} className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden role="img">
            <title>Data telemetry lines</title>
            <defs>
              <linearGradient id={`${uid}-dataPulse`} x1="0" x2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[{d:'M4 92 L68 18', delay:0},{d:'M18 96 L84 24', delay:3},{d:'M34 90 L96 20', delay:6}].map(p => (
              <motion.path key={p.d} d={p.d} stroke={`url(#${uid}-dataPulse)`} strokeWidth={0.4} strokeDasharray="2 16" initial={{ strokeDashoffset:0 }} animate={animated({ strokeDashoffset:[0,-18], transition:{ duration:16, repeat:Infinity, ease:'linear', delay:p.delay } })} />
            ))}
          </svg>
        </div>
      )}
      {/* AI Core */}
      {on('aiCore') && (
        <div style={{ opacity: op(0.12) }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
          <div className="relative w-full h-full">
            <motion.div className="absolute inset-0 rounded-full" style={{ background:'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.25), rgba(17,24,39,0) 60%)' }} initial={{ opacity:0.4, scale:0.85 }} animate={animated({ opacity:[0.4,0.55,0.4], scale:[0.85,1,0.85], transition:{ duration:18, repeat:Infinity } })} />
            {!lite && !reduced && (
              <motion.div className="absolute inset-10 rounded-full border border-indigo-400/30" initial={{ rotate:0 }} animate={animated({ rotate:360, transition:{ duration:160, repeat:Infinity, ease:'linear' } })} />
            )}
            <motion.div className="absolute inset-[46%] rounded-full bg-indigo-400/70" initial={{ scale:0.9, opacity:0.55 }} animate={animated({ scale:[0.9,1.04,0.9], opacity:[0.55,0.75,0.55], transition:{ duration:10, repeat:Infinity } })} />
          </div>
        </div>
      )}
      {/* Cloud */}
      {on('cloud') && (
        <div style={{ opacity: op(0.11) }} className="absolute top-10 right-14 w-40 h-28">
          <svg viewBox="0 0 160 100" className="w-full h-full">
            <title>Cloud</title>
            <motion.path d="M120 64c-4-18-18-32-36-32-14 0-26 7-32 18-14 2-22 13-22 26 0 16 11 26 28 26h54c14 0 22-9 22-22 0-11-7-20-16-16z" fill="#334155" opacity={0.55} animate={animated({ y:[0,-3,0], transition:{ duration:20, repeat:Infinity, ease:'easeInOut' } })} />
            {!reduced && (
              <motion.circle cx={72} cy={40} r={6} fill="#6366f1" initial={{ opacity:0.2 }} animate={animated({ opacity:[0.2,0.65,0.2], transition:{ duration:14, repeat:Infinity } })} />
            )}
          </svg>
        </div>
      )}
      {/* Gear Accent */}
      {(on('gear') || on('gearsExtra')) && (
        <div style={{ opacity: op(0.12) }} className="absolute left-8 top-16 md:left-16 md:top-20 w-[340px] h-[260px] pointer-events-none">
          <svg viewBox="0 0 340 260" className="w-full h-full" aria-hidden role="img">
            <title>Interlocking industrial gear cluster</title>
            <defs>
              <radialGradient id={gearGradId} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#6366f1" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </radialGradient>
              <filter id={gearFilterId} x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            {/* Subtle glow behind cluster */}
            <circle cx="140" cy="120" r="110" fill={`url(#${gearGradId})`} filter={`url(#${gearFilterId})`} />
            {/* Gear rendering helper via map */}
            {[
              { id:'g-main', cx:140, cy:120, r:54, teeth:14, spin: (lite?160:95), dir:1, accent:'#6366f1' },
              { id:'g-right', cx:232, cy:132, r:38, teeth:11, spin: (lite?130:80), dir:-1, accent:'#38bdf8' },
              { id:'g-top', cx:156, cy:54, r:28, teeth:10, spin:(lite?110:70), dir:-1, accent:'#8b5cf6' },
              { id:'g-small-a', cx:88, cy:64, r:20, teeth:9, spin:(lite?90:55), dir:1, accent:'#06b6d4' },
              { id:'g-small-b', cx:72, cy:156, r:26, teeth:10, spin:(lite?105:65), dir:-1, accent:'#6366f1' },
              { id:'g-tiny', cx:208, cy:70, r:16, teeth:8, spin:(lite?75:50), dir:1, accent:'#38bdf8' }
            ].map(g => {
              const teeth = Array.from({length:g.teeth}).map((_,i)=> i)
              const toothW = Math.max(4, g.r*0.18)
              const toothH = Math.max(6, g.r*0.42)
              return (
                <motion.g key={g.id} style={{ transformOrigin: `${g.cx}px ${g.cy}px` }} animate={animated({ rotate: g.dir*360, transition:{ duration:g.spin, repeat:Infinity, ease:'linear' } })}>
                  <circle cx={g.cx} cy={g.cy} r={g.r*0.72} fill="#0f172a" opacity={0.4} />
                  <circle cx={g.cx} cy={g.cy} r={g.r} stroke="#1e293b" strokeWidth={g.r*0.18} fill="none" />
                  {teeth.map(i=>{
                    const angle = (360/teeth.length)*i
                    return (
                      <rect key={`tooth-${g.id}-${i}`} x={g.cx - toothW/2} y={g.cy - (g.r + toothH)} width={toothW} height={toothH} rx={2} fill="#334155" style={{ transformOrigin:`${g.cx}px ${g.cy}px`, transform:`rotate(${angle}deg)` }} />
                    )
                  })}
                  <circle cx={g.cx} cy={g.cy} r={g.r*0.32} fill="#0f172a" stroke={g.accent} strokeWidth={2} />
                  {!lite && !reduced && (
                    <motion.circle cx={g.cx} cy={g.cy} r={g.r*0.32} fill="none" stroke={g.accent} strokeWidth={2} strokeDasharray="4 12" animate={animated({ rotate: g.dir*360, transition:{ duration:g.spin*1.2, repeat:Infinity, ease:'linear' } })} style={{ transformOrigin:`${g.cx}px ${g.cy}px` }} />
                  )}
                </motion.g>
              )
            })}
            {/* Connection lines between gear centers */}
            {[[140,120,232,132],[140,120,156,54],[140,120,88,64],[140,120,72,156],[156,54,88,64],[232,132,208,70]].map(p => (
              <motion.line key={`ln-${p.join('-')}`} x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]} stroke="#475569" strokeWidth={1} strokeDasharray="2 6" initial={{ pathLength:0, opacity:0 }} animate={animated({ pathLength:1, opacity:0.55, transition:{ duration:6, repeat:Infinity, repeatType:'reverse', delay: (p[0]+p[2])%5 } })} />
            ))}
          </svg>
        </div>
      )}
      
      {/* Mini Neural Network cluster (symbolic AI) */}
      {on('neural') && (
        <div style={{ opacity: op(0.11) }} className="absolute top-24 left-1/2 -translate-x-1/2 w-56 h-40">
          <svg viewBox="0 0 180 120" className="w-full h-full" aria-hidden role="img">
            <title>Mini neural cluster</title>
            {[
              ['20 30','60 20'],['20 50','60 40'],['20 70','60 60'],['20 90','60 80'],
              ['60 20','100 40'],['60 40','100 50'],['60 60','100 70'],
              ['100 40','140 60'],['100 70','140 60']
            ].map(p => (<path key={`ln-${p[0]}-${p[1]}`} d={`M${p[0]} L${p[1]}`} stroke="#475569" strokeWidth={0.5} opacity={0.5} />))}
            {[{x:20,y:[30,50,70,90],c:'#38bdf8',d:0},{x:60,y:[20,40,60,80],c:'#06b6d4',d:0.6},{x:100,y:[40,50,70],c:'#6366f1',d:1.2},{x:140,y:[60],c:'#8b5cf6',d:1.8}].flatMap(group => group.y.map((yy,i)=>(
              <motion.circle key={`n-${group.x}-${yy}`} cx={group.x} cy={yy} r={group.x===140?5:4} fill={group.c} initial={{ opacity:0.3, scale:0.8 }} animate={animated({ opacity:[0.3,0.85,0.3], scale:[0.8,1,0.8], transition:{ duration:5, repeat:Infinity, delay: group.d + i*0.15 } })} />
            )))}
            {!reduced && !lite && (
              <motion.circle cx={20} cy={30} r={6} fill="#f1f5f9" opacity={0.12} animate={animated({ x:[20,60,100,140], y:[30,20,40,60], transition:{ duration:8, repeat:Infinity, ease:'easeInOut' } })} />
            )}
          </svg>
        </div>
      )}
      {/* Minimal robotic arm silhouette */}
      {on('robot') && (
        <div style={{ opacity: op(0.11) }} className="absolute bottom-24 right-16 w-40 h-48 md:right-28 md:bottom-28">
          <svg viewBox="0 0 200 240" className="w-full h-full" aria-hidden role="img">
            <title>Assistive factory robot</title>
            {/* Ground shadow */}
            <ellipse cx="100" cy="214" rx="46" ry="10" fill="#0f172a" opacity={0.35} />
            {/* Body */}
            <rect x="62" y="110" width="76" height="74" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="3" />
            {/* Chest panel */}
            <rect x="76" y="126" width="48" height="26" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <motion.rect x="80" y="130" width="12" height="18" rx="2" fill="#6366f1" animate={animated({ opacity:[0.3,1,0.3], transition:{ duration:4, repeat:Infinity } })} />
            <motion.rect x="96" y="130" width="12" height="18" rx="2" fill="#38bdf8" animate={animated({ opacity:[0.3,0.9,0.3], transition:{ duration:5, repeat:Infinity, delay:1 } })} />
            <motion.rect x="112" y="130" width="12" height="18" rx="2" fill="#8b5cf6" animate={animated({ opacity:[0.3,0.95,0.3], transition:{ duration:6, repeat:Infinity, delay:2 } })} />
            {/* Head */}
            <motion.g style={{ transformOrigin:'100px 108px' }} animate={animated({ rotate:[0,4,-4,0], transition:{ duration:12, repeat:Infinity, ease:'easeInOut' } })}>
              <rect x="70" y="66" width="60" height="46" rx="14" fill="#1e293b" stroke="#475569" strokeWidth="3" />
              <motion.circle cx="92" cy="90" r="10" fill="#6366f1" animate={animated({ opacity:[0.4,1,0.4], transition:{ duration:3, repeat:Infinity } })} />
              <motion.circle cx="108" cy="90" r="10" fill="#38bdf8" animate={animated({ opacity:[0.4,0.95,0.4], transition:{ duration:3.5, repeat:Infinity } })} />
              <rect x="90" y="72" width="20" height="6" rx="3" fill="#334155" />
              {/* Antenna */}
              <line x1="100" y1="66" x2="100" y2="48" stroke="#475569" strokeWidth={3} strokeLinecap="round" />
              <motion.circle cx="100" cy="46" r="6" fill="#6366f1" animate={animated({ scale:[1,1.3,1], opacity:[0.6,1,0.6], transition:{ duration:4.5, repeat:Infinity } })} />
            </motion.g>
            {/* Arms */}
            <motion.g style={{ transformOrigin:'62px 132px' }} animate={animated({ rotate:[0,-12,4,0], transition:{ duration:14, repeat:Infinity, ease:'easeInOut' } })}>
              <rect x="36" y="124" width="26" height="12" rx="6" fill="#334155" />
              <rect x="24" y="120" width="14" height="20" rx="6" fill="#475569" />
              <circle cx="26" cy="130" r="6" fill="#6366f1" />
            </motion.g>
            <motion.g style={{ transformOrigin:'138px 132px' }} animate={animated({ rotate:[0,12,-6,0], transition:{ duration:13, repeat:Infinity, ease:'easeInOut' } })}>
              <rect x="138" y="124" width="26" height="12" rx="6" fill="#334155" />
              <rect x="164" y="120" width="14" height="20" rx="6" fill="#475569" />
              <circle cx="172" cy="130" r="6" fill="#8b5cf6" />
            </motion.g>
            {/* Legs */}
            <rect x="78" y="184" width="20" height="34" rx="6" fill="#334155" />
            <rect x="102" y="184" width="20" height="34" rx="6" fill="#334155" />
            {/* Tool (wrench) simplistic */}
            {!lite && !reduced && (
              <motion.g style={{ transformOrigin:'172px 130px' }} animate={animated({ rotate:[-10,10,-10], transition:{ duration:9, repeat:Infinity } })}>
                <path d="M178 118 L186 110 L192 116 L184 124 L188 132 L180 140 L172 132 Z" fill="#0f172a" stroke="#475569" strokeWidth={2} />
              </motion.g>
            )}
          </svg>
        </div>
      )}
    </div>
  );
};

export default IndustryBackground;

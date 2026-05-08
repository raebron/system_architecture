'use client';

export default function House({
  className = '',
  showFloors = false,
  highlightFloor = null,
  ipAddress,
}: {
  className?: string;
  showFloors?: boolean;
  highlightFloor?: 'top' | 'middle' | 'basement' | null;
  ipAddress?: string;
}) {
  const floorColor = (floor: string) =>
    highlightFloor === floor ? 'rgba(255,110,199,0.15)' : 'transparent';

  return (
    <svg viewBox="0 0 300 350" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="house-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE4E1" />
          <stop offset="100%" stopColor="#FFD1CC" />
        </linearGradient>
        <linearGradient id="house-roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6EC7" />
          <stop offset="100%" stopColor="#CC3399" />
        </linearGradient>
      </defs>

      {/* Roof */}
      <polygon points="150,20 40,110 260,110" fill="url(#house-roof)" stroke="#CC3399" strokeWidth="2" />

      {/* Walls */}
      <rect x="55" y="110" width="190" height="210" fill="url(#house-wall)" stroke="#CC3399" strokeWidth="2" />

      {showFloors && (
        <>
          {/* Top floor */}
          <rect x="56" y="111" width="188" height="68" fill={floorColor('top')} />
          {highlightFloor === 'top' && <rect x="56" y="111" width="188" height="68" fill="rgba(255,110,199,0.2)" stroke="#FF6EC7" strokeWidth="1" />}

          {/* Middle floor */}
          <rect x="56" y="180" width="188" height="68" fill={floorColor('middle')} />
          <line x1="56" y1="180" x2="244" y2="180" stroke="#CC3399" strokeWidth="1" strokeDasharray="5,5" />
          {highlightFloor === 'middle' && <rect x="56" y="180" width="188" height="68" fill="rgba(0,191,255,0.15)" stroke="#00BFFF" strokeWidth="1" />}

          {/* Basement floor */}
          <rect x="56" y="249" width="188" height="70" fill={floorColor('basement')} />
          <line x1="56" y1="249" x2="244" y2="249" stroke="#CC3399" strokeWidth="1" strokeDasharray="5,5" />
          {highlightFloor === 'basement' && <rect x="56" y="249" width="188" height="70" fill="rgba(57,255,20,0.1)" stroke="#39FF14" strokeWidth="1" />}

          {/* Floor labels */}
          <text x="150" y="130" textAnchor="middle" fill="#CC3399" fontSize="9" fontFamily="monospace" opacity="0.7">TOP FLOOR</text>
          <text x="150" y="200" textAnchor="middle" fill="#0080AA" fontSize="9" fontFamily="monospace" opacity="0.7">FIRST FLOOR</text>
          <text x="150" y="268" textAnchor="middle" fill="#1A8A0A" fontSize="9" fontFamily="monospace" opacity="0.7">BASEMENT</text>
        </>
      )}

      {/* Door */}
      <rect x="125" y="260" width="50" height="60" rx="3" fill="#CC3399" stroke="#990066" strokeWidth="2" />
      <circle cx="168" cy="295" r="3" fill="#FFD700" />

      {/* Windows */}
      <rect x="75" y="135" width="35" height="35" rx="2" fill="#B3E5FF" stroke="#CC3399" strokeWidth="1.5" />
      <line x1="92.5" y1="135" x2="92.5" y2="170" stroke="#CC3399" strokeWidth="1" />
      <line x1="75" y1="152.5" x2="110" y2="152.5" stroke="#CC3399" strokeWidth="1" />

      <rect x="190" y="135" width="35" height="35" rx="2" fill="#B3E5FF" stroke="#CC3399" strokeWidth="1.5" />
      <line x1="207.5" y1="135" x2="207.5" y2="170" stroke="#CC3399" strokeWidth="1" />
      <line x1="190" y1="152.5" x2="225" y2="152.5" stroke="#CC3399" strokeWidth="1" />

      {/* Chimney */}
      <rect x="210" y="45" width="25" height="65" fill="#CC3399" stroke="#990066" strokeWidth="1.5" />

      {/* IP Address label */}
      {ipAddress && (
        <g>
          <rect x="80" y="330" width="140" height="18" rx="3" fill="#1a0a2e" stroke="#00FFFF" strokeWidth="1" />
          <text x="150" y="343" textAnchor="middle" fill="#00FFFF" fontSize="10" fontFamily="monospace">{ipAddress}</text>
        </g>
      )}
    </svg>
  );
}

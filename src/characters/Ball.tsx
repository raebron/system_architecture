'use client';

export default function Ball({
  className = '',
  color = '#00FFFF',
  label,
  size = 50,
}: {
  className?: string;
  color?: string;
  label?: string;
  size?: number;
}) {
  return (
    <svg viewBox="0 0 50 50" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`ball-grad-${color.replace('#', '')}`} cx="35%" cy="35%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </radialGradient>
      </defs>

      <circle cx="25" cy="25" r="20" fill={`url(#ball-grad-${color.replace('#', '')})`} stroke={color} strokeWidth="1.5" />
      <circle cx="18" cy="18" r="4" fill="white" opacity="0.4" />

      {label && (
        <text x="25" y="28" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">{label}</text>
      )}
    </svg>
  );
}

'use client';

export default function Browser({
  className = '',
  url = 'damndelicious.net',
  content,
}: {
  className?: string;
  url?: string;
  content?: React.ReactNode;
}) {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="browser-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
      </defs>

      {/* Window frame */}
      <rect x="5" y="5" width="390" height="290" rx="8" fill="#C0C0C0" stroke="#808080" strokeWidth="2" />

      {/* Title bar */}
      <rect x="5" y="5" width="390" height="30" rx="8" fill="url(#browser-bar)" />
      <rect x="5" y="25" width="390" height="10" fill="url(#browser-bar)" />

      {/* Window buttons */}
      <circle cx="22" cy="20" r="6" fill="#FF5F57" stroke="#E0443E" strokeWidth="1" />
      <circle cx="42" cy="20" r="6" fill="#FEBC2E" stroke="#DEA123" strokeWidth="1" />
      <circle cx="62" cy="20" r="6" fill="#28C840" stroke="#1AAB29" strokeWidth="1" />

      {/* Tab */}
      <rect x="80" y="8" width="120" height="22" rx="4" fill="white" stroke="#D0D0D0" strokeWidth="1" />
      <text x="140" y="23" textAnchor="middle" fill="#666" fontSize="8" fontFamily="sans-serif">Chrome</text>

      {/* URL bar */}
      <rect x="15" y="40" width="370" height="25" rx="12" fill="white" stroke="#D0D0D0" strokeWidth="1" />
      {/* Lock icon */}
      <circle cx="32" cy="52" r="4" fill="none" stroke="#28C840" strokeWidth="1.5" />
      <rect x="29" y="52" width="6" height="5" rx="1" fill="#28C840" />
      {/* URL text */}
      <text x="50" y="57" fill="#333" fontSize="11" fontFamily="monospace">{url}</text>

      {/* Nav buttons */}
      <text x="385" y="57" textAnchor="end" fill="#999" fontSize="10" fontFamily="sans-serif">⟳</text>

      {/* Content area */}
      <rect x="5" y="70" width="390" height="225" fill="white" />

      {/* Default content placeholder if no children */}
      {!content && (
        <>
          <rect x="20" y="85" width="180" height="12" rx="2" fill="#E8E8E8" />
          <rect x="20" y="105" width="360" height="8" rx="2" fill="#F0F0F0" />
          <rect x="20" y="120" width="340" height="8" rx="2" fill="#F0F0F0" />
          <rect x="20" y="135" width="350" height="8" rx="2" fill="#F0F0F0" />
          <rect x="20" y="160" width="110" height="80" rx="4" fill="#FFE4E1" />
          <rect x="145" y="160" width="110" height="80" rx="4" fill="#E8F5E9" />
          <rect x="270" y="160" width="110" height="80" rx="4" fill="#E3F2FD" />
        </>
      )}
    </svg>
  );
}

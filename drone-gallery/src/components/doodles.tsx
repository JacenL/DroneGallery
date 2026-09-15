export function Cloud({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 80" className={className} aria-hidden>
      <ellipse cx="58" cy="48" rx="38" ry="24" fill="white" stroke="#1c2230" strokeWidth="3" />
      <ellipse cx="96" cy="42" rx="46" ry="28" fill="white" stroke="#1c2230" strokeWidth="3" />
      <ellipse cx="40" cy="40" rx="24" ry="18" fill="white" stroke="#1c2230" strokeWidth="3" />
    </svg>
  );
}

export function Sun({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <circle cx="60" cy="60" r="28" fill="#ffd166" stroke="#1c2230" strokeWidth="3.5" />
      <g stroke="#1c2230" strokeWidth="3" strokeLinecap="round">
        <path d="M60 10v12M60 98v12M10 60h12M98 60h12M24 24l8 8M88 88l8 8M24 96l8-8M88 32l8-8" />
      </g>
    </svg>
  );
}

export function CartoonDrone({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 80" className={className} aria-hidden>
      <ellipse cx="28" cy="18" rx="20" ry="6" fill="#ffd166" stroke="#1c2230" strokeWidth="3" />
      <ellipse cx="112" cy="18" rx="20" ry="6" fill="#ffd166" stroke="#1c2230" strokeWidth="3" />
      <path d="M28 18h84" stroke="#1c2230" strokeWidth="3" />
      <rect x="48" y="26" width="44" height="28" rx="12" fill="#ff7b54" stroke="#1c2230" strokeWidth="3" />
      <circle cx="62" cy="40" r="5" fill="white" stroke="#1c2230" strokeWidth="2.5" />
      <circle cx="78" cy="40" r="5" fill="white" stroke="#1c2230" strokeWidth="2.5" />
      <circle cx="70" cy="58" r="7" fill="#5bb4e6" stroke="#1c2230" strokeWidth="2.5" />
    </svg>
  );
}

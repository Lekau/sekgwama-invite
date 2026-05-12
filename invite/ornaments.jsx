// ornaments.jsx — SVG floral & decorative ornaments

function CornerFloral({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 320 320" fill="none" stroke="currentColor"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="var(--gold)" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* main vine */}
        <path d="M0 60 Q 40 50, 70 70 T 140 90 Q 180 100, 210 80" strokeWidth="0.9" opacity="0.85" />
        <path d="M0 30 Q 30 20, 60 32 T 120 50" strokeWidth="0.6" opacity="0.55" />
        <path d="M30 0 Q 40 30, 70 50 T 130 100 Q 150 130, 160 170" strokeWidth="0.9" opacity="0.85" />
        <path d="M60 0 Q 70 24, 92 40 T 130 80" strokeWidth="0.6" opacity="0.55" />

        {/* leaves */}
        <g strokeWidth="0.7" opacity="0.78" fill="var(--gold-soft)" fillOpacity="0.18">
          <path d="M55 75 q -10 -14, 6 -22 q 16 -2, 14 14 q -2 14, -20 8 z" />
          <path d="M105 95 q -8 -16, 10 -22 q 16 0, 12 16 q -4 14, -22 6 z" />
          <path d="M75 35 q 4 -16, 22 -10 q 10 8, 0 20 q -12 8, -22 -10 z" />
          <path d="M120 60 q 6 -14, 22 -8 q 8 10, -2 20 q -12 6, -20 -12 z" />
          <path d="M40 110 q -4 -16, 14 -18 q 14 2, 8 18 q -8 12, -22 0 z" />
        </g>

        {/* small rose buds */}
        <g strokeWidth="0.7" opacity="0.85">
          <g transform="translate(160 90)">
            <circle r="9" fill="var(--blush)" fillOpacity="0.45" stroke="var(--maroon-soft)" strokeWidth="0.5" />
            <path d="M -5 -1 q 4 -6, 10 -1 q 0 5, -4 6 q -6 1, -6 -5 z" stroke="var(--maroon-soft)" strokeWidth="0.5" fill="none" />
            <path d="M -3 3 q 6 -2, 8 2" stroke="var(--maroon-soft)" strokeWidth="0.5" fill="none" />
          </g>
          <g transform="translate(28 105)">
            <circle r="7" fill="var(--blush)" fillOpacity="0.4" stroke="var(--maroon-soft)" strokeWidth="0.5" />
            <path d="M -4 -1 q 3 -5, 8 -1 q 0 4, -3 5 q -5 1, -5 -4 z" stroke="var(--maroon-soft)" strokeWidth="0.5" fill="none" />
          </g>
          <g transform="translate(140 160)">
            <circle r="6" fill="var(--blush)" fillOpacity="0.4" stroke="var(--maroon-soft)" strokeWidth="0.5" />
          </g>
        </g>

        {/* tiny stars / sparks */}
        <g stroke="var(--gold)" strokeWidth="0.5" opacity="0.7">
          <path d="M180 40 l 0 6 M177 43 l 6 0" />
          <path d="M210 130 l 0 4 M208 132 l 4 0" />
          <path d="M50 150 l 0 4 M48 152 l 4 0" />
        </g>
      </g>
    </svg>
  );
}

function Fleuron({ size = 22, className = "" }) {
  return (
    <svg className={className} width={size} height={size * 0.5} viewBox="0 0 44 22"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
        <path d="M2 11 L 14 11" />
        <path d="M30 11 L 42 11" />
        <path d="M22 4 L 18 11 L 22 18 L 26 11 Z" />
        <circle cx="22" cy="11" r="1.4" fill="currentColor" />
      </g>
    </svg>
  );
}

function Divider({ width = 240 }) {
  return (
    <div className="ornament" style={{ color: "var(--gold)" }}>
      <span className="rule" style={{ flexBasis: width / 2 }}></span>
      <Fleuron size={26} />
      <span className="rule" style={{ flexBasis: width / 2 }}></span>
    </div>
  );
}

function MonogramCrest({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none">
        <path d="M32 8 q -16 4, -20 22 q -2 14, 8 22" opacity="0.85" />
        <path d="M32 8 q 16 4, 20 22 q 2 14, -8 22" opacity="0.85" />
        <path d="M14 22 q 4 -2, 6 2 q 0 4, -4 4 q -4 -2, -2 -6 z" opacity="0.7" />
        <path d="M50 22 q -4 -2, -6 2 q 0 4, 4 4 q 4 -2, 2 -6 z" opacity="0.7" />
        <path d="M10 36 q 5 -1, 6 4 q -1 4, -5 3 q -4 -2, -1 -7 z" opacity="0.7" />
        <path d="M54 36 q -5 -1, -6 4 q 1 4, 5 3 q 4 -2, 1 -7 z" opacity="0.7" />
        <path d="M20 52 q 4 0, 5 4" opacity="0.7" />
        <path d="M44 52 q -4 0, -5 4" opacity="0.7" />
      </g>
      <g fill="currentColor" opacity="0.9">
        <circle cx="32" cy="34" r="1.6" />
        <path d="M32 26 l 0 4 M28 30 l 8 0 M30 34 l 4 0" stroke="currentColor" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function GiftOrnament({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none">
        <path d="M4 16 L 32 16" opacity="0.7" />
        <path d="M48 16 L 76 16" opacity="0.7" />
        <path d="M40 6 q -6 6, 0 12 q 6 -6, 0 -12 z" />
        <path d="M40 26 q -6 -6, 0 -12 q 6 6, 0 12 z" />
        <circle cx="40" cy="16" r="1.4" fill="currentColor" />
      </g>
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor"
         strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="6" width="21" height="18" rx="0.5" />
      <path d="M3.5 11 L 24.5 11" />
      <path d="M9 3.5 L 9 8.5 M19 3.5 L 19 8.5" />
      <circle cx="9" cy="16" r="0.8" fill="currentColor" />
      <circle cx="14" cy="16" r="0.8" fill="currentColor" />
      <circle cx="19" cy="16" r="0.8" fill="currentColor" />
      <circle cx="9" cy="20" r="0.8" fill="currentColor" />
      <circle cx="14" cy="20" r="0.8" fill="currentColor" />
    </svg>
  );
}
function IconLocation() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor"
         strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 25 C 6 17, 6 11, 14 5 C 22 11, 22 17, 14 25 Z" />
      <circle cx="14" cy="12" r="3" />
    </svg>
  );
}
function IconDress() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor"
         strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 4 L 14 8 L 18 4" />
      <path d="M10 4 L 6 14 L 9 14 L 7 24 L 21 24 L 19 14 L 22 14 L 18 4" />
      <path d="M14 8 L 14 24" opacity="0.4" />
    </svg>
  );
}
function IconBed() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor"
         strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 22 L 3 10 L 25 10 L 25 22" />
      <path d="M3 16 L 25 16" />
      <path d="M9 16 L 9 10" />
      <circle cx="11" cy="13" r="1.4" />
    </svg>
  );
}

Object.assign(window, {
  CornerFloral, Fleuron, Divider, MonogramCrest, GiftOrnament,
  IconCalendar, IconLocation, IconDress, IconBed,
});

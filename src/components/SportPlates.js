import React from 'react';

/**
 * Animated sport plates, rendered inline.
 *
 * These were .svg files loaded through <img>, but several browsers (Safari
 * in particular) refuse to run SMIL animation inside an image element.
 * Inline SVG animates everywhere, so the geometry lives here as JSX.
 * Printed-paper palette is fixed on purpose — they read as plates, like
 * every other figure on the site.
 */

const P = {
  bg: '#f4f1ea',
  ink: '#231f1c',
  soft: '#8a8378',
  faint: '#c9c2b4',
  acc: '#b3401f',
};

function Frame({ title, footer, children }) {
  return (
    <svg viewBox="0 0 1200 1500" className="h-full w-full" role="img" aria-label={`${title} — animated illustration`}>
      <rect width="1200" height="1500" fill={P.bg} />
      <g stroke={P.faint} strokeWidth="1" opacity="0.5">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="1500" />
        ))}
        {Array.from({ length: 16 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
        ))}
      </g>
      <text x="70" y="100" fontFamily="monospace" fontSize="30" letterSpacing="6" fill={P.soft}>
        {title}
      </text>
      <line x1="70" y1="130" x2="1130" y2="130" stroke={P.ink} strokeWidth="3" />
      {children}
      <text x="70" y="1380" fontFamily="monospace" fontSize="26" fill={P.soft}>
        {footer}
      </text>
    </svg>
  );
}

export function CricketPlate() {
  return (
    <Frame title="CRICKET" footer="FIG. — PITCHED ON MIDDLE, TOOK OFF STUMP">
      <line x1="200" y1="1150" x2="1000" y2="1150" stroke={P.ink} strokeWidth="5" />
      <g stroke={P.ink} strokeWidth="9" strokeLinecap="round">
        <line x1="720" y1="640" x2="720" y2="1150" />
        <line x1="810" y1="640" x2="810" y2="1150" />
        <line x1="900" y1="640" x2="900" y2="1150" />
      </g>
      {/* left bail stays put */}
      <line x1="722" y1="622" x2="806" y2="622" stroke={P.ink} strokeWidth="9" strokeLinecap="round" />
      {/* right bail pops when the ball arrives */}
      <line x1="814" y1="622" x2="898" y2="622" stroke={P.ink} strokeWidth="9" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 0; 34 -110; 60 40; 60 40; 0 0"
          keyTimes="0; 0.5; 0.62; 0.78; 0.97; 1"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
      {/* bat waiting at the crease */}
      <g transform="rotate(-28 300 980)">
        <rect x="262" y="700" width="82" height="400" rx="32" fill={P.bg} stroke={P.ink} strokeWidth="7" />
        <rect x="286" y="565" width="34" height="140" rx="16" fill={P.bg} stroke={P.ink} strokeWidth="7" />
      </g>
      {/* the delivery: in, one bounce, into the stumps */}
      <circle r="42" fill={P.acc}>
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyPoints="0;0;0.45;0.75;1;1"
          keyTimes="0;0.1;0.32;0.42;0.5;1"
          path="M 120 300 Q 420 700 560 1105 Q 690 940 812 618 L 812 618"
        />
      </circle>
      {/* deflection after impact */}
      <circle r="42" fill={P.acc} opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;0;0"
          keyTimes="0;0.5;0.55;0.9;1"
          dur="3s"
          repeatCount="indefinite"
        />
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyPoints="0;0;0;1;1"
          keyTimes="0;0.5;0.55;0.85;1"
          path="M 812 618 Q 1000 760 1080 1100"
        />
      </circle>
    </Frame>
  );
}

export function TableTennisPlate() {
  return (
    <Frame title="TABLE TENNIS" footer="FIG. — RALLY IN PROGRESS, NOBODY CONCEDING">
      <line x1="120" y1="1020" x2="1080" y2="1020" stroke={P.ink} strokeWidth="6" />
      <g stroke={P.ink} strokeWidth="4">
        <line x1="600" y1="890" x2="600" y2="1020" />
        {Array.from({ length: 6 }, (_, i) => (
          <line key={i} x1={562 + i * 15} y1="900" x2={562 + i * 15} y2="1015" opacity="0.45" />
        ))}
        <line x1="558" y1="900" x2="650" y2="900" />
      </g>
      {/* left paddle flicks on contact */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 265 760; -22 265 760; 0 265 760; 0 265 760"
          keyTimes="0;0.05;0.18;1"
          dur="2.4s"
          repeatCount="indefinite"
        />
        <ellipse cx="250" cy="700" rx="118" ry="140" fill={P.acc} stroke={P.ink} strokeWidth="7" />
        <rect x="228" y="832" width="46" height="140" rx="20" fill={P.bg} stroke={P.ink} strokeWidth="7" />
      </g>
      {/* right paddle answers half a cycle later */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 935 760; 0 935 760; 22 935 760; 0 935 760; 0 935 760"
          keyTimes="0;0.5;0.55;0.68;1"
          dur="2.4s"
          repeatCount="indefinite"
        />
        <ellipse cx="950" cy="700" rx="118" ry="140" fill={P.bg} stroke={P.ink} strokeWidth="7" />
        <rect x="926" y="832" width="46" height="140" rx="20" fill={P.bg} stroke={P.ink} strokeWidth="7" />
      </g>
      {/* the rally */}
      <circle r="26" fill={P.bg} stroke={P.ink} strokeWidth="6">
        <animateMotion
          dur="2.4s"
          repeatCount="indefinite"
          calcMode="linear"
          keyPoints="0;0.5;0.5;1"
          keyTimes="0;0.5;0.5;1"
          path="M 360 660 Q 480 480 600 690 Q 660 800 730 995 Q 800 850 850 680 M 850 680 Q 730 470 600 690 Q 540 800 470 995 Q 410 850 360 660"
        />
      </circle>
    </Frame>
  );
}

export function TennisPlate() {
  return (
    <Frame title="TENNIS" footer="FIG. — SECOND SERVE, FULL COMMITMENT">
      <g stroke={P.ink} strokeWidth="5" opacity="0.9">
        <line x1="100" y1="1180" x2="1100" y2="1180" />
        <line x1="200" y1="1180" x2="330" y2="880" />
        <line x1="1000" y1="1180" x2="870" y2="880" />
        <line x1="330" y1="880" x2="870" y2="880" />
      </g>
      {/* racquet: wind-up and swing */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-30 560 780; -30 560 780; -70 560 780; 24 560 780; -30 560 780"
          keyTimes="0; 0.30; 0.42; 0.52; 1"
          dur="3s"
          repeatCount="indefinite"
        />
        <ellipse cx="560" cy="470" rx="175" ry="228" fill={P.bg} stroke={P.ink} strokeWidth="9" />
        <clipPath id="tennis-head-clip">
          <ellipse cx="560" cy="470" rx="168" ry="221" />
        </clipPath>
        <g stroke={P.faint} strokeWidth="3" clipPath="url(#tennis-head-clip)">
          {Array.from({ length: 7 }, (_, i) => (
            <line key={`s${i}`} x1={420 + i * 47} y1="242" x2={420 + i * 47} y2="698" />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`t${i}`} x1="385" y1={300 + i * 47} x2="735" y2={300 + i * 47} />
          ))}
        </g>
        <rect x="528" y="688" width="62" height="220" rx="24" fill={P.bg} stroke={P.ink} strokeWidth="8" />
      </g>
      {/* toss, strike, into the court */}
      <circle r="42" fill={P.acc}>
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyPoints="0; 0.32; 0.52; 1; 1"
          keyTimes="0; 0.30; 0.52; 0.9; 1"
          path="M 700 900 Q 730 300 705 245 Q 690 260 700 300 L 700 300 Q 850 700 980 1160 L 700 900"
        />
        <animate
          attributeName="opacity"
          values="1;1;1;1;0;1"
          keyTimes="0;0.5;0.85;0.9;0.98;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </Frame>
  );
}

export function F1Plate() {
  return (
    <Frame title="FORMULA 1" footer="FIG. — LIGHTS OUT AND AWAY WE GO">
      {/* start lights: five reds that blink out together */}
      <g>
        {Array.from({ length: 5 }, (_, i) => (
          <circle key={i} cx={440 + i * 66} cy="300" r="24" fill={P.acc} stroke={P.ink} strokeWidth="4">
            <animate
              attributeName="fill"
              values={`${P.acc};${P.acc};${P.bg};${P.bg};${P.acc}`}
              keyTimes="0;0.12;0.16;0.9;1"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </circle>
        ))}
        <line x1="404" y1="252" x2="768" y2="252" stroke={P.ink} strokeWidth="5" />
      </g>

      {/* finish strip — actually checkered this time */}
      <g>
        <rect x="1020" y="860" width="52" height="104" fill={P.bg} stroke={P.ink} strokeWidth="3" />
        {Array.from({ length: 4 }, (_, row) => (
          <rect
            key={row}
            x={1020 + (row % 2) * 26}
            y={860 + row * 26}
            width="26"
            height="26"
            fill={P.ink}
            opacity="0.85"
          />
        ))}
      </g>

      {/* track */}
      <line x1="80" y1="1120" x2="1120" y2="1120" stroke={P.ink} strokeWidth="6" />

      {/* the car: waits for lights-out, then launches across */}
      <g transform="translate(0 1062) scale(1.7)">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-430 0; -430 0; 800 0; 800 0"
            keyTimes="0; 0.16; 0.62; 1"
            dur="3.2s"
            repeatCount="indefinite"
            calcMode="linear"
          />
          {/* rear wing */}
          <rect x="4" y="-78" width="16" height="44" fill={P.bg} stroke={P.ink} strokeWidth="5" />
          <line x1="16" y1="-36" x2="42" y2="-22" stroke={P.ink} strokeWidth="5" />
          {/* body */}
          <path
            d="M 22 -8 L 56 -34 L 148 -42 Q 196 -70 252 -44 L 330 -26 L 408 -18 L 416 -2 L 30 -2 Z"
            fill={P.bg}
            stroke={P.ink}
            strokeWidth="6"
            strokeLinejoin="round"
          />
          {/* halo */}
          <path d="M 160 -46 Q 200 -76 244 -46" fill="none" stroke={P.ink} strokeWidth="6" />
          {/* front wing */}
          <rect x="396" y="-12" width="44" height="8" fill={P.bg} stroke={P.ink} strokeWidth="5" />
          {/* wheels with a spinning spoke mark */}
          {[
            [92, 34],
            [330, 30],
          ].map(([cx, r]) => (
            <g key={cx}>
              <circle cx={cx} cy="0" r={r} fill={P.ink} />
              <circle cx={cx} cy="0" r={r * 0.42} fill={P.bg} />
              <line x1={cx - r * 0.4} y1="0" x2={cx + r * 0.4} y2="0" stroke={P.ink} strokeWidth="4">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${cx} 0`}
                  to={`360 ${cx} 0`}
                  dur="0.25s"
                  repeatCount="indefinite"
                />
              </line>
            </g>
          ))}
          {/* speed trail */}
          <g stroke={P.soft} strokeWidth="5" strokeLinecap="round">
            <line x1="-96" y1="-52" x2="-16" y2="-52" />
            <line x1="-72" y1="-28" x2="-8" y2="-28" />
            <line x1="-110" y1="-6" x2="-30" y2="-6" />
          </g>
        </g>
      </g>
    </Frame>
  );
}

const SPORT_PLATES = {
  cricket: CricketPlate,
  tt: TableTennisPlate,
  tennis: TennisPlate,
  f1: F1Plate,
};

export default SPORT_PLATES;

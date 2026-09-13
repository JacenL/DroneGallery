type Star = { x: number; y: number; r: number };
type Group = {
  name: string;
  dx?: number;
  dy?: number;
  stars: Star[];
  lines: [number, number][][];
};

const FIELD: Star[] = [
  { x: 40, y: 210, r: 0.55 },
  { x: 90, y: 260, r: 0.7 },
  { x: 160, y: 320, r: 0.5 },
  { x: 230, y: 380, r: 0.65 },
  { x: 310, y: 420, r: 0.5 },
  { x: 430, y: 390, r: 0.6 },
  { x: 520, y: 450, r: 0.5 },
  { x: 610, y: 410, r: 0.7 },
  { x: 700, y: 360, r: 0.55 },
  { x: 780, y: 430, r: 0.5 },
  { x: 860, y: 380, r: 0.65 },
  { x: 940, y: 300, r: 0.5 },
  { x: 980, y: 180, r: 0.6 },
  { x: 20, y: 140, r: 0.5 },
  { x: 450, y: 160, r: 0.45 },
  { x: 980, y: 80, r: 0.55 },
  { x: 390, y: 200, r: 0.5 },
  { x: 740, y: 90, r: 0.45 },
  { x: 80, y: 480, r: 0.55 },
  { x: 180, y: 500, r: 0.45 },
  { x: 340, y: 470, r: 0.6 },
  { x: 470, y: 510, r: 0.5 },
  { x: 620, y: 490, r: 0.55 },
  { x: 760, y: 520, r: 0.45 },
  { x: 880, y: 470, r: 0.6 },
  { x: 250, y: 440, r: 0.5 },
  { x: 540, y: 400, r: 0.45 },
];

const GROUPS: Group[] = [
  {
    name: 'Ursa Major',
    dy: 24,
    stars: [
      { x: 52, y: 158, r: 1.4 },
      { x: 102, y: 132, r: 1.5 },
      { x: 148, y: 122, r: 1.6 },
      { x: 198, y: 136, r: 1.3 },
      { x: 212, y: 182, r: 1.5 },
      { x: 268, y: 178, r: 1.6 },
      { x: 278, y: 128, r: 1.8 },
    ],
    lines: [
      [
        [52, 158],
        [102, 132],
        [148, 122],
        [198, 136],
        [278, 128],
        [268, 178],
        [212, 182],
        [198, 136],
      ],
    ],
  },
  {
    name: 'Ursa Minor',
    dy: 32,
    stars: [
      { x: 338, y: 58, r: 2.1 },
      { x: 354, y: 82, r: 1.1 },
      { x: 368, y: 104, r: 1.1 },
      { x: 384, y: 124, r: 1.2 },
      { x: 408, y: 114, r: 1.5 },
      { x: 424, y: 136, r: 1.2 },
      { x: 400, y: 146, r: 1.15 },
    ],
    lines: [
      [
        [338, 58],
        [354, 82],
        [368, 104],
        [384, 124],
        [408, 114],
        [424, 136],
        [400, 146],
        [384, 124],
      ],
    ],
  },
  {
    name: 'Cassiopeia',
    dy: 36,
    stars: [
      { x: 548, y: 108, r: 1.4 },
      { x: 592, y: 72, r: 1.6 },
      { x: 638, y: 106, r: 1.5 },
      { x: 684, y: 68, r: 1.7 },
      { x: 732, y: 100, r: 1.4 },
    ],
    lines: [
      [
        [548, 108],
        [592, 72],
        [638, 106],
        [684, 68],
        [732, 100],
      ],
    ],
  },
  {
    name: 'Orion',
    dx: -70,
    dy: 72,
    stars: [
      { x: 792, y: 148, r: 2.2 },
      { x: 896, y: 140, r: 1.8 },
      { x: 822, y: 206, r: 1.6 },
      { x: 852, y: 200, r: 1.7 },
      { x: 882, y: 194, r: 1.6 },
      { x: 812, y: 276, r: 1.7 },
      { x: 904, y: 270, r: 2.3 },
      { x: 852, y: 228, r: 1.15 },
    ],
    lines: [
      [
        [792, 148],
        [896, 140],
      ],
      [
        [792, 148],
        [822, 206],
        [812, 276],
      ],
      [
        [896, 140],
        [882, 194],
        [904, 270],
      ],
      [
        [822, 206],
        [852, 200],
        [882, 194],
      ],
      [
        [812, 276],
        [904, 270],
      ],
      [
        [852, 200],
        [852, 228],
      ],
    ],
  },
  {
    name: 'Leo',
    dy: 86,
    stars: [
      { x: 478, y: 298, r: 2.0 },
      { x: 492, y: 258, r: 1.4 },
      { x: 512, y: 228, r: 1.5 },
      { x: 548, y: 214, r: 1.6 },
      { x: 582, y: 228, r: 1.3 },
      { x: 598, y: 262, r: 1.4 },
      { x: 638, y: 288, r: 1.3 },
      { x: 692, y: 278, r: 1.8 },
      { x: 548, y: 318, r: 1.2 },
    ],
    lines: [
      [
        [478, 298],
        [492, 258],
        [512, 228],
        [548, 214],
        [582, 228],
        [598, 262],
      ],
      [
        [478, 298],
        [548, 318],
        [638, 288],
        [692, 278],
      ],
    ],
  },
];

export default function Constellations() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden dark:block"
      aria-hidden
    >
      <svg viewBox="0 0 1000 560" className="constellation-sky h-full w-full" preserveAspectRatio="xMidYMid slice">
        {FIELD.map((star, i) => (
          <circle
            key={`field-${i}`}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="#d7e6f6"
            className="star-twinkle"
            style={{
              animationDelay: `${(i % 8) * 0.4}s`,
              animationDuration: `${3 + (i % 4) * 0.5}s`,
            }}
          />
        ))}

        {GROUPS.map((group) => (
          <g
            key={group.name}
            transform={
              group.dx || group.dy ? `translate(${group.dx ?? 0} ${group.dy ?? 0})` : undefined
            }
          >
            {group.lines.map((path, i) => (
              <polyline
                key={`${group.name}-line-${i}`}
                fill="none"
                stroke="rgba(186, 214, 236, 0.28)"
                strokeWidth="1"
                points={path.map(([x, y]) => `${x},${y}`).join(' ')}
              />
            ))}
            {group.stars.map((star, i) => (
              <circle
                key={`${group.name}-star-${i}`}
                cx={star.x}
                cy={star.y}
                r={star.r}
                fill="#e8f2ff"
                className="star-twinkle"
                style={{
                  animationDelay: `${(i % 7) * 0.32}s`,
                  animationDuration: `${2.5 + (i % 5) * 0.4}s`,
                }}
              />
            ))}
          </g>
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111111] to-transparent" />
    </div>
  );
}

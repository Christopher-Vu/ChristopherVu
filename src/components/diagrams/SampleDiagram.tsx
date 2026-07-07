export function SampleDiagram() {
  return (
    <svg
      viewBox="0 0 640 160"
      width="100%"
      role="img"
      aria-label="Sample diagram with four labeled stages"
    >
      <rect
        x="10"
        y="40"
        width="140"
        height="80"
        fill="var(--diagram-blue)"
        opacity="0.85"
      />
      <rect
        x="180"
        y="40"
        width="140"
        height="80"
        fill="var(--diagram-rose)"
        opacity="0.85"
      />
      <rect
        x="350"
        y="40"
        width="140"
        height="80"
        fill="var(--diagram-green)"
        opacity="0.85"
      />
      <rect
        x="490"
        y="40"
        width="140"
        height="80"
        fill="var(--diagram-violet)"
        opacity="0.85"
      />
      <text x="80" y="85" textAnchor="middle" fill="#fff" fontSize="14">
        Input
      </text>
      <text x="250" y="85" textAnchor="middle" fill="#fff" fontSize="14">
        Encode
      </text>
      <text x="420" y="85" textAnchor="middle" fill="#fff" fontSize="14">
        Decode
      </text>
      <text x="560" y="85" textAnchor="middle" fill="#fff" fontSize="14">
        Output
      </text>
    </svg>
  );
}

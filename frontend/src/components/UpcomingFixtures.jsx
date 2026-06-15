export default function UpcomingFixtures({ fixtures }) {
  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ background: "#251b50", border: "1px solid rgba(175,169,236,0.18)" }}>

      <div className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid rgba(175,169,236,0.18)" }}>
        <div className="flex items-center gap-2 text-base font-medium" style={{ color: "#f0eeff" }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7F77DD" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Upcoming Fixtures
        </div>
        <button className="text-xs" style={{ color: "#7F77DD", background: "none", border: "none", cursor: "pointer" }}>
          View all →
        </button>
      </div>

      {fixtures.map((f, i) => (
        <div key={i} className="flex items-center gap-3 px-5 py-4"
          style={{ borderTop: i === 0 ? "none" : "1px solid rgba(175,169,236,0.18)" }}>
          <div className="text-xs min-w-[72px]" style={{ color: "#a89fd8" }}>{f.date}</div>
          <div className="flex-1 text-sm" style={{ color: "#f0eeff" }}>
            {f.home} <span className="text-xs mx-1" style={{ color: "#a89fd8" }}>vs</span> {f.away}
          </div>
          <span className="text-xs px-3 py-1 rounded-full"
            style={f.isLiveSoon
              ? { background: "rgba(34,197,94,0.15)", color: "#22c55e" }
              : { background: "rgba(127,119,221,0.15)", color: "#AFA9EC" }}>
            {f.competition}
          </span>
        </div>
      ))}
    </div>
  );
}
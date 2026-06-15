export default function TopScorers({ scorers }) {
  const max = scorers[0]?.goals || 1;

  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ background: "#251b50", border: "1px solid rgba(175,169,236,0.18)" }}>

      <div className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid rgba(175,169,236,0.18)" }}>
        <div className="flex items-center gap-2 text-base font-medium" style={{ color: "#f0eeff" }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7F77DD" strokeWidth="2">
            <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
          Top Scorers
        </div>
        <button className="text-xs" style={{ color: "#7F77DD", background: "none", border: "none", cursor: "pointer" }}>
          See all →
        </button>
      </div>

      {scorers.map((s, i) => (
        <div key={s.name} className="flex items-center gap-3 px-5 py-3"
          style={{ borderTop: i === 0 ? "none" : "1px solid rgba(175,169,236,0.18)" }}>

          <div className="w-6 text-sm font-medium text-center"
            style={{ color: i === 0 ? "#EF9F27" : "#a89fd8" }}>
            {i + 1}
          </div>

          <div className="flex-1">
            <div className="text-sm font-medium" style={{ color: "#f0eeff" }}>{s.name}</div>
            <div className="text-xs" style={{ color: "#a89fd8" }}>{s.team}</div>
          </div>

          <div className="w-20 h-1 rounded-full overflow-hidden" style={{ background: "rgba(175,169,236,0.18)" }}>
            <div className="h-full rounded-full transition-all"
              style={{
                width: `${(s.goals / max) * 100}%`,
                background: i === 0 ? "#EF9F27" : "#534AB7",
              }} />
          </div>

          <div className="text-lg font-medium min-w-[28px] text-right" style={{ color: "#7F77DD" }}>
            {s.goals}
          </div>
        </div>
      ))}
    </div>
  );
}
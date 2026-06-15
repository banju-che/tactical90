const posStyle = (pos) => {
  if (pos <= 3) return { background: "#534AB7", color: "#fff" };
  if (pos <= 5) return { background: "rgba(127,119,221,0.15)", color: "#7F77DD" };
  return { background: "rgba(239,159,39,0.12)", color: "#EF9F27" };
};

const formColor = { W: { bg: "rgba(34,197,94,0.2)", color: "#22c55e" },
                    D: { bg: "rgba(175,169,236,0.15)", color: "#a89fd8" },
                    L: { bg: "rgba(239,68,68,0.15)", color: "#f87171" } };

export default function LeagueTable({ teams }) {
  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ background: "#251b50", border: "1px solid rgba(175,169,236,0.18)" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid rgba(175,169,236,0.18)" }}>
        <div className="flex items-center gap-2 text-base font-medium" style={{ color: "#f0eeff" }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7F77DD" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          League Table
        </div>
        <button className="text-xs" style={{ color: "#7F77DD", background: "none", border: "none", cursor: "pointer" }}>
          See all →
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            {["#", "Team", "P", "W", "D", "L", "Pts", "Form"].map((h, i) => (
              <th key={h} className="text-xs px-5 py-3"
                style={{ color: "#a89fd8", textAlign: i <= 1 ? "left" : "center", fontWeight: 400 }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => (
            <tr key={team.name}
              className="transition-colors duration-100"
              style={{ borderTop: "1px solid rgba(175,169,236,0.18)" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(127,119,221,0.07)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>

              <td className="px-5 py-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-medium"
                  style={posStyle(idx + 1)}>
                  {idx + 1}
                </div>
              </td>

              <td className="px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                    style={{ background: team.badgeBg }}>
                    {team.emoji}
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#f0eeff" }}>{team.name}</span>
                </div>
              </td>

              {[team.played, team.won, team.drawn, team.lost].map((val, i) => (
                <td key={i} className="px-5 py-3 text-sm text-center" style={{ color: "#a89fd8" }}>{val}</td>
              ))}

              <td className="px-5 py-3 text-center text-base font-medium" style={{ color: "#f0eeff" }}>
                {team.points}
              </td>

              <td className="px-5 py-3">
                <div className="flex gap-1 justify-center">
                  {team.form.split("").map((r, i) => (
                    <span key={i} className="w-5 h-5 rounded text-xs flex items-center justify-center font-medium"
                      style={{ background: formColor[r].bg, color: formColor[r].color }}>
                      {r}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
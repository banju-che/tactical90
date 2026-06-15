export default function HeroMatch({ match }) {
  const {
    homeTeam, awayTeam,
    homeScore, awayScore,
    minute, stadium, league,
    possession, shots, corners, yellowCards,
  } = match;

  return (
    <div className="rounded-2xl p-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3C3489 0%, #26215C 60%, #3a2070 100%)",
        border: "1px solid rgba(175,169,236,0.18)",
      }}>

      {/* decorative circle */}
      <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full pointer-events-none"
        style={{ background: "rgba(239,159,39,0.07)" }} />

      {/* League label */}
      <div className="flex items-center gap-2 text-xs tracking-widest uppercase mb-5"
        style={{ color: "#EF9F27", letterSpacing: "0.15em" }}>
        <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
        Live Match · {league}
      </div>

      {/* Score row */}
      <div className="flex items-center justify-between">
        {/* Home */}
        <div className="flex flex-col items-center gap-2 min-w-[110px]">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: "rgba(30,102,245,0.18)" }}>
            {homeTeam.emoji}
          </div>
          <div className="text-base font-medium" style={{ color: "#f0eeff" }}>{homeTeam.name}</div>
          <div className="text-xs" style={{ color: "#a89fd8" }}>{homeTeam.short}</div>
        </div>

        {/* Score */}
        <div className="text-center">
          <div className="text-5xl font-medium tracking-widest" style={{ color: "#fff", letterSpacing: "0.2em" }}>
            {homeScore} · {awayScore}
          </div>
          <div className="text-xs mt-2" style={{ color: "#a89fd8" }}>{stadium}</div>
          <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full"
            style={{ background: "rgba(239,159,39,0.18)", color: "#EF9F27" }}>
            ⏱ {minute}'
          </span>
        </div>

        {/* Away */}
        <div className="flex flex-col items-center gap-2 min-w-[110px]">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: "rgba(239,68,68,0.18)" }}>
            {awayTeam.emoji}
          </div>
          <div className="text-base font-medium" style={{ color: "#f0eeff" }}>{awayTeam.name}</div>
          <div className="text-xs" style={{ color: "#a89fd8" }}>{awayTeam.short}</div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex gap-6 mt-5 pt-5"
        style={{ borderTop: "1px solid rgba(175,169,236,0.18)" }}>
        {[
          { label: "Possession", value: `${possession[0]}% – ${possession[1]}%` },
          { label: "Shots",      value: `${shots[0]} – ${shots[1]}` },
          { label: "Corners",    value: `${corners[0]} – ${corners[1]}` },
          { label: "Yellow Cards", value: `${yellowCards[0]} – ${yellowCards[1]}` },
        ].map(({ label, value }) => (
          <div key={label} className="text-xs" style={{ color: "#a89fd8" }}>
            {label} <span className="font-medium ml-1" style={{ color: "#f0eeff" }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
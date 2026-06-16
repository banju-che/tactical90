import { useEffect, useState } from "react";
import { getLeagues } from "../services/leagues";

// ─── tiny helpers ────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <div className="flex items-center justify-center py-24">
      <div
        className="w-10 h-10 rounded-full border-4 animate-spin"
        style={{ borderColor: "#534AB7", borderTopColor: "#EF9F27" }}
      />
    </div>
  );
}

function StatPill({ label, value, accent = "purple" }) {
  const colors = {
    purple: { bg: "rgba(127,119,221,0.15)", color: "#7F77DD" },
    gold:   { bg: "rgba(239,159,39,0.15)",  color: "#EF9F27" },
    green:  { bg: "rgba(34,197,94,0.12)",   color: "#22c55e" },
    red:    { bg: "rgba(239,68,68,0.12)",   color: "#f87171" },
  };
  return (
    <div
      className="flex flex-col items-center px-4 py-2 rounded-xl"
      style={{ background: colors[accent].bg }}
    >
      <span className="text-lg font-semibold" style={{ color: colors[accent].color }}>
        {value}
      </span>
      <span className="text-xs mt-0.5" style={{ color: "#a89fd8" }}>
        {label}
      </span>
    </div>
  );
}

// ─── League Card ─────────────────────────────────────────────────────────────

function LeagueCard({ league, onClick, isSelected }) {
  const { name, country, icon_url, cl_spot, uel_spot, relegation_spot } = league;

  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-2xl p-5 transition-all duration-200 group"
      style={{
        background: isSelected
          ? "linear-gradient(135deg, #534AB7 0%, #3C3489 100%)"
          : "#251b50",
        border: isSelected
          ? "1px solid #7F77DD"
          : "1px solid rgba(175,169,236,0.18)",
        cursor: "pointer",
        outline: "none",
      }}
      onMouseEnter={(e) => {
        if (!isSelected) e.currentTarget.style.border = "1px solid #534AB7";
      }}
      onMouseLeave={(e) => {
        if (!isSelected)
          e.currentTarget.style.border = "1px solid rgba(175,169,236,0.18)";
      }}
    >
      {/* Header row */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 p-2"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          {icon_url ? (
            <img
              src={icon_url}
              alt={name}
              className="w-full h-full object-contain"
              onError={(e) => (e.target.style.display = "none")}
            />
          ) : (
            <span className="text-2xl">🏆</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div
            className="text-base font-semibold truncate"
            style={{ color: "#f0eeff" }}
          >
            {name}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs" style={{ color: "#a89fd8" }}>
              {country}
            </span>
          </div>
        </div>

        {/* Arrow */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isSelected ? "#EF9F27" : "#534AB7"}
          strokeWidth="2"
          className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>

      {/* Divider */}
      <div
        className="mb-4"
        style={{ borderTop: "1px solid rgba(175,169,236,0.12)" }}
      />

      {/* Stats row */}
      <div className="flex gap-3">
        <StatPill label="UCL Spots"    value={cl_spot}        accent="purple" />
        <StatPill label="UEL Spots"    value={uel_spot}       accent="gold"   />
        <StatPill label="Relegation"   value={relegation_spot} accent="red"   />
      </div>
    </button>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function LeagueDetail({ league }) {
  if (!league) {
    return (
      <div
        className="rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]"
        style={{
          background: "#251b50",
          border: "1px solid rgba(175,169,236,0.18)",
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: "rgba(83,74,183,0.2)" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="1.5">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        </div>
        <p className="text-sm" style={{ color: "#a89fd8 " }}>
          Select a league to see details
        </p>
      </div>
    );
  }

  const { name, country, icon_url, cl_spot, uel_spot, relegation_spot, league_id } = league;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#251b50",
        border: "1px solid rgba(175,169,236,0.18)",
      }}
    >
      {/* Hero band */}
      <div
        className="p-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #3C3489 0%, #26215C 60%, #1a103d 100%)",
        }}
      >
        <div
          className="absolute -right-10 -top-10 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "rgba(239,159,39,0.07)" }}
        />
        <div className="flex items-center gap-5 relative z-10">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center p-3 flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            {icon_url ? (
              <img src={icon_url} alt={name} className="w-full h-full object-contain" />
            ) : (
              <span className="text-4xl">🏆</span>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: "#f0eeff" }}>
              {name}
            </h2>
            <p className="text-sm mt-1" style={{ color: "#a89fd8" }}>
              {country} · League ID #{league_id}
            </p>
          </div>
        </div>
      </div>

      {/* Info grid */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#a89fd8" }}>
          Competition Rules
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Champions League Spots", value: cl_spot,          accent: "purple", icon: "🏆" },
            { label: "Europa League Spots",    value: uel_spot,          accent: "gold",   icon: "🥈" },
            { label: "Relegation Zone Starts", value: relegation_spot,  accent: "red",    icon: "⬇️" },
          ].map(({ label, value, accent, icon }) => {
            const colors = {
              purple: { bg: "rgba(127,119,221,0.15)", color: "#7F77DD",  border: "rgba(127,119,221,0.3)" },
              gold:   { bg: "rgba(239,159,39,0.15)",  color: "#EF9F27",  border: "rgba(239,159,39,0.3)"  },
              red:    { bg: "rgba(239,68,68,0.12)",   color: "#f87171",  border: "rgba(239,68,68,0.25)"  },
            };
            return (
              <div
                key={label}
                className="rounded-xl p-4"
                style={{
                  background: colors[accent].bg,
                  border: `1px solid ${colors[accent].border}`,
                }}
              >
                <div className="text-xl mb-2">{icon}</div>
                <div className="text-2xl font-bold mb-1" style={{ color: colors[accent].color }}>
                  {value}
                </div>
                <div className="text-xs leading-tight" style={{ color: "#a89fd8" }}>
                  {label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Placeholder for future data */}
        <div
          className="rounded-xl p-4 text-sm"
          style={{
            background: "rgba(127,119,221,0.08)",
            border: "1px solid rgba(175,169,236,0.12)",
            color: "#a89fd8",
          }}
        >
          💡 Standings, fixtures, and top scorers for <span style={{ color: "#f0eeff" }}>{name}</span> will appear here once connected to the <code style={{ color: "#EF9F27" }}>/api/standings/?league={league_id}</code> endpoint.
        </div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Leagues() {
  const [leagues, setLeagues]       = useState([]);
  const [selected, setSelected]     = useState(null);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);
  const [search, setSearch]         = useState("");

  useEffect(() => {
    getLeagues()
      .then((data) => {
        setLeagues(data);
        setSelected(data[0] ?? null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = leagues.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-[1400px] mx-auto">

      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#f0eeff" }}>
            Leagues
          </h1>
          <p className="text-sm mt-1" style={{ color: "#a89fd8" }}>
            {leagues.length} competitions tracked
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2"
            width="15" height="15" viewBox="0 0 24 24"
            fill="none" stroke="#a89fd8" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search leagues..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-xl text-sm outline-none"
            style={{
              background: "#251b50",
              border: "1px solid rgba(175,169,236,0.18)",
              color: "#f0eeff",
              width: 220,
            }}
          />
        </div>
      </div>

      {/* States */}
      {loading && <Spinner />}

      {error && (
        <div
          className="rounded-xl p-4 text-sm"
          style={{ background: "rgba(239,68,68,0.1)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)" }}
        >
          ⚠️ Failed to load leagues: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-[1fr_1.4fr] gap-6 items-start">

          {/* Left — League list */}
          <div className="flex flex-col gap-3">
            {filtered.length === 0 ? (
              <p className="text-sm" style={{ color: "#a89fd8" }}>No leagues match "{search}"</p>
            ) : (
              filtered.map((league) => (
                <LeagueCard
                  key={league.league_id}
                  league={league}
                  isSelected={selected?.league_id === league.league_id}
                  onClick={() => setSelected(league)}
                />
              ))
            )}
          </div>

          {/* Right — Detail */}
          <div className="sticky top-6">
            <LeagueDetail league={selected} />
          </div>

        </div>
      )}
    </div>
  );
}
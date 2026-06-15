import { useEffect, useState, useMemo } from "react";
import { getMatches } from "../services/matchesServices";
import { getLeagues } from "../services/leagues";

// ─── helpers ─────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-10 h-10 rounded-full border-4 animate-spin"
        style={{ borderColor: "#534AB7", borderTopColor: "#EF9F27" }} />
    </div>
  );
}

function formatDate(utc) {
  return new Date(utc).toLocaleDateString("en-GB", {
    weekday: "short", day: "numeric", month: "short", year: "numeric",
  });
}

function WinnerBadge({ winner, isHome }) {
  const won =
    (winner === "HOME_TEAM" && isHome) || (winner === "AWAY_TEAM" && !isHome);
  const draw = winner === "DRAW";

  if (draw) return (
    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
      style={{ background: "rgba(175,169,236,0.15)", color: "#a89fd8" }}>D</span>
  );
  if (won) return (
    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
      style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e" }}>W</span>
  );
  return (
    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
      style={{ background: "rgba(239,68,68,0.12)", color: "#f87171" }}>L</span>
  );
}

// ─── Match Row ────────────────────────────────────────────────────────────────

function MatchRow({ match }) {
  const { home_team, away_team, winner, utc_date } = match;

  return (
    <div className="flex items-center gap-4 px-5 py-4 transition-colors duration-100"
      style={{ borderTop: "1px solid rgba(175,169,236,0.10)" }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(127,119,221,0.06)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>

      {/* Date */}
      <div className="text-xs min-w-[90px]" style={{ color: "#a89fd8" }}>
        {formatDate(utc_date)}
      </div>

      {/* Home team */}
      <div className="flex items-center gap-2 flex-1 justify-end">
        <WinnerBadge winner={winner} isHome={true} />
        <span className="text-sm font-medium text-right" style={{ color: "#f0eeff" }}>
          {home_team.name}
        </span>
        <img src={home_team.cresturl} alt={home_team.name}
          className="w-7 h-7 object-contain"
          onError={e => e.target.style.display = "none"} />
      </div>

      {/* VS divider */}
      <div className="flex flex-col items-center gap-1 min-w-[60px]">
        <div className="text-xs font-semibold px-3 py-1 rounded-lg"
          style={{ background: "rgba(83,74,183,0.25)", color: "#AFA9EC" }}>
          {winner === "HOME_TEAM" ? "1 – 0" : winner === "AWAY_TEAM" ? "0 – 1" : "1 – 1"}
        </div>
        <div className="text-xs" style={{ color: "#534AB7" }}>FT</div>
      </div>

      {/* Away team */}
      <div className="flex items-center gap-2 flex-1">
        <img src={away_team.cresturl} alt={away_team.name}
          className="w-7 h-7 object-contain"
          onError={e => e.target.style.display = "none"} />
        <span className="text-sm font-medium" style={{ color: "#f0eeff" }}>
          {away_team.name}
        </span>
        <WinnerBadge winner={winner} isHome={false} />
      </div>
    </div>
  );
}

// ─── Matchday Accordion ───────────────────────────────────────────────────────

function MatchdayBlock({ matchday, matches, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const dates = [...new Set(matches.map(m => m.utc_date))].sort();

  return (
    <div className="rounded-2xl overflow-hidden mb-3"
      style={{ background: "#251b50", border: "1px solid rgba(175,169,236,0.18)" }}>

      {/* Accordion header */}
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 transition-colors duration-150"
        style={{ background: open ? "rgba(83,74,183,0.15)" : "transparent", border: "none", cursor: "pointer" }}>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ background: "#534AB7", color: "#fff" }}>
            {matchday}
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold" style={{ color: "#f0eeff" }}>
              Matchday {matchday}
            </div>
            <div className="text-xs" style={{ color: "#a89fd8" }}>
              {dates.map(formatDate).join(" · ")}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-1 rounded-full"
            style={{ background: "rgba(127,119,221,0.15)", color: "#7F77DD" }}>
            {matches.length} {matches.length === 1 ? "match" : "matches"}
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="#534AB7" strokeWidth="2"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* Matches list */}
      {open && (
        <div>
          {matches.map(match => (
            <MatchRow key={match.match_id} match={match} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── League Tab ──────────────────────────────────────────────────────────────

function LeagueTab({ league, active, onClick, count }) {
  return (
    <button onClick={onClick}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 flex-shrink-0"
      style={{
        background: active ? "#534AB7" : "#251b50",
        border: active ? "1px solid #7F77DD" : "1px solid rgba(175,169,236,0.18)",
        color: active ? "#fff" : "#a89fd8",
        cursor: "pointer",
      }}
      onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = "#534AB7"; e.currentTarget.style.color = "#f0eeff"; }}}
      onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = "rgba(175,169,236,0.18)"; e.currentTarget.style.color = "#a89fd8"; }}}>

      {league.icon_url && (
        <img src={league.icon_url} alt={league.name}
          className="w-5 h-5 object-contain flex-shrink-0"
          onError={e => e.target.style.display = "none"} />
      )}
      <span>{league.name}</span>
      <span className="text-xs px-1.5 py-0.5 rounded-full ml-1"
        style={{ background: active ? "rgba(255,255,255,0.15)" : "rgba(127,119,221,0.15)", color: active ? "#fff" : "#7F77DD" }}>
        {count}
      </span>
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Matches() {
  const [allMatches, setAllMatches]   = useState([]);
  const [leagues, setLeagues]         = useState([]);
  const [activeLeague, setActiveLeague] = useState(null);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const [search, setSearch]           = useState("");

  // Load leagues + all matches in parallel
  useEffect(() => {
    Promise.all([getLeagues(), getMatches()])
      .then(([leagueData, matchData]) => {
        setLeagues(leagueData);
        setAllMatches(matchData);
        setActiveLeague(leagueData[0]?.league_id ?? null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filter by active league + search
  const filtered = useMemo(() => {
    return allMatches.filter(m => {
      const leagueMatch = activeLeague ? m.league.league_id === activeLeague : true;
      const searchMatch = search
        ? m.home_team.name.toLowerCase().includes(search.toLowerCase()) ||
          m.away_team.name.toLowerCase().includes(search.toLowerCase())
        : true;
      return leagueMatch && searchMatch;
    });
  }, [allMatches, activeLeague, search]);

  // Group by matchday
  const byMatchday = useMemo(() => {
    const map = {};
    filtered.forEach(m => {
      if (!map[m.matchday]) map[m.matchday] = [];
      map[m.matchday].push(m);
    });
    // Sort matchdays descending (most recent first)
    return Object.entries(map)
      .sort((a, b) => Number(b[0]) - Number(a[0]));
  }, [filtered]);

  // Count per league for tab badges
  const countPerLeague = useMemo(() => {
    const map = {};
    allMatches.forEach(m => {
      map[m.league.league_id] = (map[m.league.league_id] || 0) + 1;
    });
    return map;
  }, [allMatches]);

  const activeLeagueName = leagues.find(l => l.league_id === activeLeague)?.name ?? "";

  return (
    <div className="p-6 max-w-[1400px] mx-auto">

      {/* Page header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#f0eeff" }}>Matches</h1>
          <p className="text-sm mt-1" style={{ color: "#a89fd8" }}>
            {filtered.length} matches{activeLeagueName ? ` · ${activeLeagueName}` : ""}
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2"
            width="15" height="15" viewBox="0 0 24 24"
            fill="none" stroke="#a89fd8" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Search teams..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-xl text-sm outline-none"
            style={{ background: "#251b50", border: "1px solid rgba(175,169,236,0.18)", color: "#f0eeff", width: 220 }} />
        </div>
      </div>

      {/* League tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {leagues.map(league => (
          <LeagueTab
            key={league.league_id}
            league={league}
            active={activeLeague === league.league_id}
            count={countPerLeague[league.league_id] ?? 0}
            onClick={() => { setActiveLeague(league.league_id); setSearch(""); }}
          />
        ))}
      </div>

      {/* States */}
      {loading && <Spinner />}

      {error && (
        <div className="rounded-xl p-4 text-sm"
          style={{ background: "rgba(239,68,68,0.1)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)" }}>
          ⚠️ Failed to load matches: {error}
        </div>
      )}

      {!loading && !error && byMatchday.length === 0 && (
        <div className="rounded-2xl p-12 flex flex-col items-center gap-3"
          style={{ background: "#251b50", border: "1px solid rgba(175,169,236,0.18)" }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" />
          </svg>
          <p className="text-sm" style={{ color: "#a89fd8" }}>No matches found{search ? ` for "${search}"` : ""}</p>
        </div>
      )}

      {/* Matchday accordions */}
      {!loading && !error && byMatchday.map(([matchday, matches], idx) => (
        <MatchdayBlock
          key={matchday}
          matchday={Number(matchday)}
          matches={matches}
          defaultOpen={idx === 0}
        />
      ))}
    </div>
  );
}
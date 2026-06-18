import React, { useEffect, useState } from "react";
import { LayoutGrid } from "lucide-react";
import { getTeams } from "../services/teamsServices";
import { getLeagues } from "../services/leagues";
import TeamCard from "../components/TeamCard";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load leagues once, for the filter dropdown
  useEffect(() => {
    getLeagues()
      .then(setLeagues)
      .catch((err) => console.error("Failed to load leagues:", err));
  }, []);

  // Load teams whenever the selected league changes
  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getTeams(selectedLeague || undefined);
        setTeams(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [selectedLeague]);

  return (
    <div className="min-h-screen p-6" style={{ background: "#1a103d" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-xl font-bold" style={{ color: "#f0eeff" }}>
          <LayoutGrid size={20} style={{ color: "#7F77DD" }} />
          Teams
        </div>

        <select
          value={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
          className="rounded-xl px-3 py-2 text-sm outline-none"
          style={{
            background: "#251b50",
            color: "#f0eeff",
            border: "1px solid rgba(175,169,236,0.18)",
          }}
        >
          <option value="">All Leagues</option>
          {leagues.map((league) => (
            <option key={league.league_id} value={league.league_id}>
              {league.name}
            </option>
          ))}
        </select>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex justify-center py-20">
          <div
            className="w-10 h-10 rounded-full border-4 animate-spin"
            style={{ borderColor: "#534AB7", borderTopColor: "#EF9F27" }}
          />
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div
          className="rounded-xl p-4 text-sm"
          style={{
            background: "rgba(239,68,68,0.1)",
            color: "#f87171",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && teams.length === 0 && (
        <div
          className="rounded-2xl p-10 text-center text-sm"
          style={{
            background: "#251b50",
            border: "1px solid rgba(175,169,236,0.18)",
            color: "#a89fd8",
          }}
        >
          No teams found{selectedLeague ? " for this league" : ""}.
        </div>
      )}

      {/* Grid */}
      {!loading && !error && teams.length > 0 && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teams.map((team) => (
            <TeamCard key={team.team_id} team={team} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Teams;
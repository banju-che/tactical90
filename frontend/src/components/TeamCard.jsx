import { Shield, Calendar } from "lucide-react";

// NOTE: stadium_id, league_id, coach_id are raw IDs for now.
// Swap these stubs for real lookups once the serializer nests
// stadium/coach/league objects (or once those services exist).
function TeamCard({ team }) {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4 transition-transform hover:-translate-y-0.5"
      style={{ background: "#251b50", border: "1px solid rgba(175,169,236,0.18)" }}
    >
      <div className="flex items-center gap-3">
        {team.cresturl ? (
          <img
            src={team.cresturl}
            alt={`${team.name} crest`}
            className="w-12 h-12 rounded-full object-contain"
            style={{ background: "#1e1540", border: "1px solid rgba(175,169,236,0.18)" }}
          />
        ) : (
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "#1e1540", border: "1px solid rgba(175,169,236,0.18)" }}
          >
            <Shield size={20} style={{ color: "#7F77DD" }} />
          </div>
        )}

        <div className="flex flex-col">
          <span className="font-bold text-sm" style={{ color: "#f0eeff" }}>
            {team.name}
          </span>
          <span className="text-xs" style={{ color: "#a89fd8" }}>
            Team #{team.team_id}
          </span>
        </div>
      </div>

      <div
        className="flex items-center justify-between pt-3"
        style={{ borderTop: "1px solid rgba(175,169,236,0.18)" }}
      >
        <div className="flex items-center gap-1.5 text-xs" style={{ color: "#a89fd8" }}>
          <Calendar size={13} style={{ color: "#7F77DD" }} />
          Founded {team.founded_year || "—"}
        </div>

        {/* Stub pills — replace with real names once nested serializer data lands */}
        <div className="flex gap-1.5">
          <span
            className="rounded-full px-2 py-0.5 text-xs"
            style={{ background: "rgba(127,119,221,0.15)", color: "#7F77DD" }}
          >
            Stadium #{team.stadium_id ?? "—"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
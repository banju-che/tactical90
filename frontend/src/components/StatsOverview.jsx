import { CalendarDays, Circle, Trophy } from "lucide-react";

const stats = [
  { label: "Matches today", value: "14", icon: CalendarDays, accent: "purple" },
  { label: "Live now", value: "3", icon: Circle, accent: "gold" },
  { label: "Current gameweek", value: "GW28", icon: Trophy, accent: "green" },
];

const accentStyles = {
  purple: { bg: "rgba(127,119,221,0.18)", color: "#7F77DD" },
  gold:   { bg: "rgba(239,159,39,0.15)",  color: "#EF9F27" },
  green:  { bg: "rgba(34,197,94,0.12)",   color: "#22c55e" },
};

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map(({ label, value, icon: Icon, accent }) => (
        <div key={label} className="flex items-center gap-4 p-4 rounded-xl"
          style={{ background: "#251b50", border: "1px solid rgba(175,169,236,0.18)" }}>
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: accentStyles[accent].bg }}>
            <Icon size={20} style={{ color: accentStyles[accent].color }} />
          </div>
          <div>
            <div className="text-2xl font-medium" style={{ color: "#f0eeff" }}>{value}</div>
            <div className="text-xs" style={{ color: "#a89fd8" }}>{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
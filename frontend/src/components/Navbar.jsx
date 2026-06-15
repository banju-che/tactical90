import { useState } from "react";
import { LayoutDashboard, CalendarDays, Trophy, Shirt, PersonStanding, BarChart2, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Leagues", icon: CalendarDays, path: "/leagues" },
  { label: "Matches", icon: Trophy, path: "/matches" },
  { label: "Teams", icon: Shirt, path: "/teams" },
  { label: "Players", icon: PersonStanding, path: "/players" },
  { label: "Stats", icon: BarChart2, path: "/stats" },
];

export default function Navbar({ activePage = "Dashboard" }) {
  const [active, setActive] = useState(activePage);

  return (
    <nav className="w-full h-14 flex items-center px-6 gap-0"
      style={{ background: "#26215C", borderBottom: "1px solid rgba(175,169,236,0.18)" }}>

      {/* Logo */}
      <div className="flex items-center gap-2 mr-9">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "#EF9F27" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a103d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
          </svg>
        </div>
        <span className="text-lg font-medium tracking-widest" style={{ color: "#EF9F27" }}>
          TACTICAL90
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex gap-1 flex-1">
        {navLinks.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-150 ${
                isActive
                  ? "bg-[#534AB7] text-white"
                  : "text-[#a89fd8] hover:bg-[rgba(175,169,236,0.1)] hover:text-[#f0eeff]"
              }`
            }
          >
            <Icon size={15} />
            {label}
          </NavLink>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium px-3 py-1 rounded-full"
          style={{ background: "#EF9F27", color: "#1a103d" }}>
          LIVE
        </span>
        <Bell size={18} style={{ color: "#a89fd8" }} />
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white"
          style={{ background: "#534AB7", border: "2px solid #EF9F27" }}>
          FV
        </div>
      </div>
    </nav>
  );
}
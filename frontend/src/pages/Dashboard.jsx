import Navbar from "../components/Navbar";
import StatsOverview from "../components/StatsOverview";
import HeroMatch from "../components/HeroMatch";
import LeagueTable from "../components/LeagueTable";
import UpcomingFixtures from "../components/UpcomingFixtures";
import TopScorers from "../components/TopScorers";
import { liveMatch, standings, fixtures, topScorers } from "../data/mockData";

export default function Dashboard() {
  return (
    <div className="min-h-screen" style={{ background: "#1a103d", color: "#f0eeff" }}>
      {/*<Navbar activePage="Dashboard" />*/}

      <div className="p-6 flex flex-col gap-5 max-w-[1400px] mx-auto">

        {/* Quick stats */}
        <StatsOverview />

        {/* Featured live match */}
        <HeroMatch match={liveMatch} />

        {/* Standings + Right column */}
        <div className="grid grid-cols-2 gap-5">
          <LeagueTable teams={standings} />

          <div className="flex flex-col gap-5">
            <UpcomingFixtures fixtures={fixtures} />
            <TopScorers scorers={topScorers} />
          </div>
        </div>

      </div>
    </div>
  );
}
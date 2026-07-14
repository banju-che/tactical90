import { React, useState, useEffect } from 'react';
import { getMatches } from '../../services/matchesServices';
import { getSeasons } from '../../services/seasonsServices';
import { getLeagues } from '../../services/leagues';
import MatchSkeleton  from '../../components/loaders/MatchSkeleton'


function Matches(){

    const [ matches,    setMatches ]    = useState([]);
    const [ loading,    setLoading ]    = useState(true);

    const [ search,     setSearch  ]    = useState("");
    const [ season,     setSeason]      = useState("");      
    const [ seasons,    setSeasons]     = useState([]);    
    const [ league,     setLeague]      = useState("");      
    const [ leagues,    setLeagues]     = useState([]);    
    const [ matchday,   setMatchday]    = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [matchesData, seasonsData, leaguesData] = await Promise.all([
                    getMatches(),
                    getSeasons(),
                    getLeagues(),
                ]);

                setMatches(matchesData.results);
                setSeasons(seasonsData.results);
                setLeagues(leaguesData.results);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    {/* search */}
    const fetchMatches = async () => {
        setLoading(true);

        try {
            const matchesList = await getMatches({
                search,
                season,
                league,
                matchday
            });

            setMatches(matchesList.results);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
    return (
        <div>
        <MatchSkeleton />
        <MatchSkeleton />
        <MatchSkeleton />
        <MatchSkeleton />
        </div>
    );
    }

    return(
        <div>
            <div className='text-white'>
                <p>render page heading hear</p>
            </div>

            {/* Search */}
            <div className="w-[80%] mx-auto flex gap-3 justify-end items-center my-4 flex-wrap">

                {/* Search */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={fetchMatches}
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                    >
                        🔍
                    </button>

                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10 pr-4 py-2 rounded-xl bg-[#251b50] text-white outline-none"
                    />
                </div>

                {/* Season */}
                <select
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    className="px-4 py-2 rounded-xl bg-[#251b50] text-white"
                >
                    <option value="">All Seasons</option>

                    {seasons.map((item) => (
                        <option
                            key={item.season_id}
                            value={item.name}
                        >
                            {item.name}
                        </option>
                    ))}
                </select>

                {/* League */}
                <select
                    value={league}
                    onChange={(e) => setLeague(e.target.value)}
                    className="px-4 py-2 rounded-xl bg-[#251b50] text-white"
                >
                    <option value="">All Leagues</option>

                    {leagues.map((item) => (
                        <option
                            key={item.league_id}
                            value={item.name}
                        >
                            {item.name}
                        </option>
                    ))}
                </select>

                {/* Matchday */}
                <select
                    value={matchday}
                    onChange={(e) => setMatchday(e.target.value)}
                    className="px-4 py-2 rounded-xl bg-[#251b50] text-white"
                >
                    <option value="">All Matchdays</option>

                    {Array.from({ length: 38 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            Matchday {i + 1}
                        </option>
                    ))}
                </select>

                <button
                    onClick={fetchMatches}
                    className="bg-[#534AB7] hover:bg-[#6c63d9] text-white px-5 py-2 rounded-xl"
                >
                    Search
                </button>

            </div>

            {/* League tabs */}
            <div className=' w-[80%] mx-auto rounded-xl bg-[#26215C] '>
                {matches.map((match) => (
                    <div className="flex items-center gap-4 px-5 py-4 transition-colors duration-100 " key={match.match_id}
                        style={{ borderTop: "1px solid rgba(175,169,236,0.10)" }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(127,119,221,0.06)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}>

                        {/* Date */}
                        <div className="text-xs min-w-[90px]" style={{ color: "#a89fd8" }}>
                            {match.utc_date}
                        </div>

                        {/* Home team */}
                        <div className="flex items-center gap-2 flex-1 justify-end">
                            
                            <span className="text-sm font-medium text-right" style={{ color: "#f0eeff" }}>
                            {match.home_team.name}
                            </span>
                            <img src={match.home_team.cresturl} alt={match.home_team.name}
                            className="w-7 h-7 object-contain"
                            onError={e => e.target.style.display = "none"} />
                        </div>

                        {/* VS divider */}
                        <div className="flex flex-col items-center gap-1 min-w-[60px]">
                            <div className="text-xs font-semibold px-3 py-1 rounded-lg"
                            style={{ background: "rgba(83,74,183,0.25)", color: "#AFA9EC" }}>
                            {/*winner === "HOME_TEAM" ? "1 – 0" : winner === "AWAY_TEAM" ? "0 – 1" : "1 – 1"*/}
                            </div>
                            <div className="text-xs" style={{ color: "#534AB7" }}>FT</div>
                        </div>

                        {/* Away team */}
                        <div className="flex items-center gap-2 flex-1">
                            <img src={match.away_team.cresturl} alt={match.away_team.name}
                            className="w-7 h-7 object-contain"
                            onError={e => e.target.style.display = "none"} />
                            <span className="text-sm font-medium" style={{ color: "#f0eeff" }}>
                            {match.away_team.name}
                            </span>
                            
                        </div>
                    </div>
                ))}
            </div>

        </div>
    
    )
}

export default Matches;
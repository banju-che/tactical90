import React, { useEffect, useState } from "react";
import { getTeams } from "../../services/teamsServices";
import TeamCard from "../../components/TeamCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Teams() {
    const [teams, setTeams] = useState([]);
    
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const data = await getTeams();
                setTeams(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTeams();
    }, []);

    return (
        <div className="bg-[#1a103d] px-6">
            <div>
                <h1 className="text-white font-bold">Teams</h1>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {teams.map((team) => (
                    <Link
                        key={team.team_id}
                        to={`/teams/${team.team_id}/`}
                    >
                        <TeamCard key={team.team_id} team={team} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Teams;
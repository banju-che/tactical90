import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getTeam, deleteTeam } from "../../services/teamsServices";

function TeamDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [team, setTeam] = useState(null);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const data = await getTeam(id);
                console.log(data)
                setTeam(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTeam();
    }, [id]);

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this team?"
        );

        if (!confirmed) return;

        try {
            await deleteTeam(id);
            navigate("/teams");
        } catch (error) {
            console.error(error);
        }
    };

    if (!team) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-[#1e1540] p-6 text-white">
            <div className="bg-[#251b50] rounded-lg p-6 mb-6 flex items-center gap-4">
                <img
                    src={team.cresturl}
                    alt={team.name}
                    className="w-20 h-20 object-contain"
                />

                <h2 className="font-bold text-2xl">
                    {team.name}
                </h2>
            </div>

            <div className="bg-[#251b50] rounded-lg p-6">
                <p>Founded Year: {team.founded_year}</p>
                <p>Stadium: {team.stadium_name}</p>
                <p>League: {team.league_name}</p>
                <p>Coach: {team.coach_name}</p>

                <div className="flex gap-4 mt-6">
                    <Link
                        to="/teams/create"
                        className="bg-blue-600 px-4 py-2 rounded"
                    >
                        Create Team
                    </Link>

                    <Link
                        to={`/teams/${id}/edit`}
                        className="bg-green-600 px-4 py-2 rounded"
                    >
                        Edit Team
                    </Link>

                    <button
                        onClick={handleDelete}
                        className="bg-red-600 px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TeamDetail;
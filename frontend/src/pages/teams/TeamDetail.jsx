import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeam } from "../../services/teamsServices";

function TeamDetail() {
    const { id } = useParams();
    const [team, setTeam] = useState(null);

    useEffect(() => {
        const fetchTeam = async () => {
            const data = await getTeam(id);
            setTeam(data);
        };

        fetchTeam();
    }, [id]);

    if (!team) return <p>Loading...</p>;

    return (
        <>
            <h1>{team.name}</h1>
            <p>City: {team.city}</p>
        </>
    );
}

export default TeamDetail;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    createTeam,
    updateTeam,
    getTeam,
} from "../../services/teamsServices";

function TeamForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const isEditMode = Boolean(id);

    const [formData, setFormData] = useState({
        team_id: "",
        name: "",
        founded_year: "",
        cresturl: "",
        stadium: "",
        league: "",
        coach: "",
    });

    useEffect(() => {
        if (!isEditMode) return;

        const fetchTeam = async () => {
            try {
                const team = await getTeam(id);

                setFormData({
                    team_id: team.team_id || "",
                    name: team.name || "",
                    founded_year: team.founded_year || "",
                    cresturl: team.cresturl || "",
                    stadium: team.stadium || "",
                    league: team.league || "",
                    coach: team.coach || "",
                });
            } catch (error) {
                console.error("Error fetching team:", error);
            }
        };

        fetchTeam();
    }, [id, isEditMode]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditMode) {
                await updateTeam(id, formData);
            } else {
                await createTeam(formData);
            }

            navigate("/teamslist");
        } catch (error) {
            console.error("Error saving team:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#251b50] p-6 text-white">
            <h1 className="text-center text-3xl font-bold mb-8">
                {isEditMode ? "Edit Team" : "Create Team"}
            </h1>

            <div className="w-[60%] mx-auto rounded-2xl border border-white/20 bg-[rgba(175,169,236,0.18)] p-6">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col">
                        <label htmlFor="team_id">Team ID</label>
                        <input
                            id="team_id"
                            name="team_id"
                            value={formData.team_id}
                            onChange={handleChange}
                            className="p-2 rounded text-white border border-white/20"
                            disabled={isEditMode}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="name">Team Name</label>
                        <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 rounded text-white border border-white/20"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="founded_year">
                            Founded Year
                        </label>
                        <input
                            id="founded_year"
                            name="founded_year"
                            value={formData.founded_year}
                            onChange={handleChange}
                            className="p-2 rounded text-white border border-white/20"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="cresturl">Crest URL</label>
                        <input
                            id="cresturl"
                            name="cresturl"
                            value={formData.cresturl}
                            onChange={handleChange}
                            className="p-2 rounded text-white border border-white/20"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="stadium">Stadium ID</label>
                        <input
                            id="stadium"
                            name="stadium"
                            value={formData.stadium}
                            onChange={handleChange}
                            className="p-2 rounded text-white border border-white/20"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="league">League ID</label>
                        <input
                            id="league"
                            name="league"
                            value={formData.league}
                            onChange={handleChange}
                            className="p-2 rounded text-white border border-white/20"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="coach">Coach ID</label>
                        <input
                            id="coach"
                            name="coach"
                            value={formData.coach}
                            onChange={handleChange}
                            className="p-2 rounded text-white border border-white/20"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`mt-4 px-4 py-2 rounded font-semibold ${
                            isEditMode
                                ? "bg-yellow-600 hover:bg-yellow-700"
                                : "bg-green-600 hover:bg-green-700"
                        }`}
                    >
                        {isEditMode
                            ? "Update Team"
                            : "Create Team"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TeamForm;
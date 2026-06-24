import api from "../api/axios";

export const getTeams = async () => 
{
    const rensponse = await api.get("/teams/") 
    return rensponse.data
}

export const getTeam = async (id) =>
{
    const response = await api.get(`/teams/${id}/`)
    return response.data
}
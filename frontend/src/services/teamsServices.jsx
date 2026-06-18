import api from "../api/axios";

export const getTeams = async () => 
{
    const rensponse = await api.get("/teams/") 
    return rensponse.data
}
import api from "../api/axios"

export const getCoaches = async () => 
{
    const response = await api.get("/coaches/");
    return response.data;
}
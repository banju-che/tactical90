import api from "../api/axios";

export const getSeasons = async () => {
    const response = await api.get('/seasons/');
    return response.data;
}
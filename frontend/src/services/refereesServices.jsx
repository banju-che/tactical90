import api from "../api/axios";

export const getReferee = async () => {
    const response = await api.get("/referees/");
    return response.data;
};
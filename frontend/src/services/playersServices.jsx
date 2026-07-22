import api from "../api/axios";

export const getPlayers = async (filters={}) => {
  const response = await api.get("/players/", {
    params:filters
  });
  return response.data;
};

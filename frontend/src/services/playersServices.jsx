import api from "../api/axios";

export const getPlayers = async () => {
  const response = await api.get("/players/");
  return response.data;
};

import api from "../api/axios";

export const getMatches = async (filters={}) => {
  const response = await api.get("/matches/", {
      params:filters,
  });
  return response.data;
};

export const getMatch = async (id) => {
  const response = await api.get(`/matches/${id}`);
  return response.data;
};

export const createMatch = async (data) => {
  const response = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const updateMatch = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const deleteMatch = async (id) => {
  await fetch(`${API_URL}/${id}/`, {
    method: "DELETE",
  });
};
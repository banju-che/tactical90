const API_URL = "http://127.0.0.1:8000/api/leagues";
import api from "../api/axios";

export const getLeagues = async () => {
  const response = await api.get('/leagues/');
  return response.data;
};

export const getLeague = async (id) => {
  const response = await fetch(`${API_URL}/${id}/`);
  return response.json();
};

export const createLeague = async (data) => {
  const response = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const updateLeague = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const deleteLeague = async (id) => {
  await fetch(`${API_URL}/${id}/`, {
    method: "DELETE",
  });
};
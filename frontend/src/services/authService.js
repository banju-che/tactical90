import api from "../api/axios";

export const login = async (email, password) => {
    try {
        const response = await api.post("/token/", {
            email,
            password,
        });

        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);

        return response.data;
    } catch (err) {
        console.log(err.response?.data);
        throw err;
    }
};

export const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
};
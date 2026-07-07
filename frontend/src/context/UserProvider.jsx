import { useState, useEffect } from "react";
import { UserContext } from "./userContext";
import { getCurrentUser } from "../services/authService";

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("access");

            if (!token) return;

            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } catch (err) {
                console.error(err);
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
            }
        };

        loadUser();
    }, []);

    const isAdmin = user?.role === "Administrators";
    const isDataManager = user?.role === "Data Managers";

    const permissions = {
        canCreate: isAdmin || isDataManager,
        canEdit: isAdmin || isDataManager,
        canDelete: isAdmin,
    };

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                permissions,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
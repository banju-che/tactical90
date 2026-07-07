import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login, getCurrentUser } from "../services/authService";
import { UserContext } from "../context/userContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { login: loginUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Authenticate and save JWT tokens
            await login(email, password);

            // Fetch logged-in user's details
            const currentUser = await getCurrentUser();

            // Store user in context
            loginUser(currentUser);

            // Redirect to home page
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen bg-[#251b50] flex items-center justify-center p-6 text-white">
            <div className="w-full max-w-md rounded-2xl border border-white/20 bg-[rgba(175,169,236,0.18)] p-8">
                <h1 className="text-center text-3xl font-bold mb-8">
                    Login
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                >
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded border border-white/20 bg-transparent p-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-2">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded border border-white/20 bg-transparent p-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 rounded bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
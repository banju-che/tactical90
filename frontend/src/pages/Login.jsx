import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      navigate("/");
    } catch {
      alert("Invalid credentials");
    }
  };

return (
        <div className="min-h-screen bg-[#251b50] p-6 text-white">
            <h1 className="text-center text-3xl font-bold mb-8">
                LOGIN
            </h1>

            <div className="w-[60%] mx-auto rounded-2xl border border-white/20 bg-[rgba(175,169,236,0.18)] p-6">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col">
                        <label htmlFor="user">Username</label>
                        <input
                            id="user"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="p-2 rounded text-white border border-white/20"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-2 rounded text-white border border-white/20"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 rounded font-semibold"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
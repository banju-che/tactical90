import { useState } from "react";
import { login } from "../services/authService";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      alert("Login successful");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
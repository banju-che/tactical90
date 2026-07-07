import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Dashboard from "./pages/Dashboard";
import Leagues from "./pages/Leagues";
import Players from "./pages/Players";
import Referees from "./pages/Referees";
import Coaches from "./pages/Coaches";

import TeamsList from "./pages/teams/TeamsList";
import TeamForm from "./pages/teams/TeamForm";
import TeamDetail from "./pages/teams/TeamDetail";

import Matches from "./pages/matches/Matches";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/players" element={<Players />} />

          <Route path="/teams" element={<TeamsList />} />
          <Route path="/teams/create" element={<TeamForm />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/teams/:id/edit" element={<TeamForm />} />

          <Route path="/matches" element={<Matches />} />

          <Route path="/referees" element={<Referees />} />
          <Route path="/coaches" element={<Coaches />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
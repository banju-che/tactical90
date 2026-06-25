import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Leagues from "./pages/Leagues";
import Matches from "./pages/Matches";
import Players from "./pages/Players";
import Referees from "./pages/Referees";
import Coaches from "./pages/Coaches";

import TeamsList from "./pages/teams/TeamsList";
import TeamForm from "./pages/teams/TeamForm";
import TeamDetail from "./pages/teams/TeamDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/players" element={<Players/>} />

        <Route path="/teamslist" element={<TeamsList />} />
        <Route path="/teams/:id" element={<TeamDetail />} /> 
        <Route path="/teams/create" element={<TeamForm />} /> 
        <Route path="/teams/:id/edit" element={<TeamForm />} /> 
        
        <Route path="/referees" element={<Referees />} />
        <Route path="/coaches" element={<Coaches />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Leagues from "./pages/Leagues";
import Matches from "./pages/Matches";
import Players from "./pages/Players"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/players" element={<Players/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
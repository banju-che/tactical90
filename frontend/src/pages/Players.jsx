import React, { useEffect, useState } from "react";
import { getPlayers } from "../services/playersServices";

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getPlayers();
        setPlayers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

    return (
    <div className="p-6 bg-[#251b50]">
        <h1 className="text-2xl font-bold mb-6 text-white">Players</h1>

        <div className="overflow-x-auto bg-[#534AB7] rounded-lg shadow">
        <table className="min-w-full">
            <thead className="bg-[#1306a0]">
            <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Player
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Club
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Position
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Nationality
                </th>
            </tr>
            </thead>

            <tbody>
            {players.map((player) => (
                <tr
                key={player.player_id}
                className="border-b hover:bg-[#5446f0] transition text-white"
                >
                <td className="px-6 py-4">
                    {player.name} 
                </td>

                <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <img
                    src={player.team_logo}
                    alt={player.team_name}
                    className="w-8 h-8 object-contain"
                    />

                    <span>{player.team_name}</span>
                </div>
                </td> 

                <td className="px-6 py-4">
                    {player.position}
                </td>

                <td className="px-6 py-4">
                    {player.nationality}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    );
}

export default Players;
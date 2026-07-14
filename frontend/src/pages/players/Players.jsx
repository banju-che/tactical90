import React, { useEffect, useState } from "react";
import  { getPlayers } from "../../services/playersServices";
import { Search } from "lucide-react";

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

        <div>

            <div className="relative max-w-md">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-200"
                />

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
            </div>

            <div>
                
            </div>

        </div>

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
import { useEffect, useState } from "react";
import { getCoaches  } from "../services/coachesServices";

function Coaches ()
{
    const [ coaches, setCoaches ] = useState([]);

    useEffect(() => {
        const fetchCoaches = async () =>
            {
                try{
                    const data = await getCoaches()
                    console.log(data)
                    setCoaches(data)
                }catch(error)
                {
                    console.log(error)
                }
            }
        

    fetchCoaches()
    }, [])

    return(
        <div className="p-6 bg-[#251b50]">
        <h1 className="text-2xl font-bold mb-6 text-white">Coaches</h1>

        <div className="overflow-x-auto bg-[#534AB7] rounded-lg shadow">
        <table className="min-w-full">
            <thead className="bg-[#1306a0]">
            <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Team_id
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Naionality
                </th>
                
            </tr>
            </thead>

            <tbody>
            {coaches.map((coach) => (
                <tr
                key={coach.coaches_id}
                className="border-b hover:bg-[#5446f0] transition text-white"
                >
                <td className="px-6 py-4">
                    {coach.name} 
                </td>

                <td className="px-6 py-4">
                    {coach.team_id}
                </td>

                <td className="px-6 py-4">
                    {coach.nationality}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    )
}

export default Coaches
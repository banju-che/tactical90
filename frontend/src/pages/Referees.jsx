import React, { useEffect, useState } from "react";
import { getReferee } from "../services/refereesServices";

function Referees() {
    const [referees, setReferees] = useState([]);

    useEffect(() => {
        const fetchReferee = async () => {
            try {
                const data = await getReferee();
                setReferees(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchReferee();
    }, []);

    return (
        <div className="p-6 bg-[#251b50]">
            <h1 className="text-2xl font-bold mb-6 text-white">Referees</h1>

            <div className="overflow-x-auto bg-[#534AB7] rounded-lg shadow">
            <table className="min-w-full">
                <thead className="bg-[#1306a0]">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                            Nationality
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {referees.map((referee) => (
                        <tr key={referee.referee_id}
                            className="border-b hover:bg-[#5446f0] transition text-white"
                        >

                            <td className="px-6 py-4" >
                                {referee.name}
                            </td>

                            <td className="px-6 py-4">
                                {referee.nationality}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Referees;
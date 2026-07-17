import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMatch } from "../../services/matchesServices";

function MatchDetail () {

    const { id } = useParams();

    const [match, setMatch] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatch = async () => {
            try {
                const data = await getMatch(id);
                setMatch(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMatch();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!match) {
        return <p>No match found.</p>;
    }

    return(
        <div className="w-[60%] h-[600px] mx-auto my-10 rounded-[6%] bg-[#26215C] flex flex-col">
            <div className="flex-1 flex flex-col">
                <div className="border-[#FF0000]">
                    
                    <img 
                        src={match.away_team.cresturl}
                        alt={match.away_team.name}
                        className="w-7 h-7 object-contain"
                        onError={e => e.target.style.display = "none"}
                    />
                
                </div>

                <div></div>

                <div className="border-[#FF0000]">
                    
                    <img 
                        src={match.home_team.cresturl}
                        alt={match.home_team.name}
                        className="w-7 h-7 object-contain"
                        onError={e => e.target.style.display = "none"}
                    />
                
                </div>
            </div>

            <div className="h-3/4 w-full bg-[#3C3489] rounded-[8%] p-10">
                <p className="text-white">This is my details page</p>
            </div>
        </div>
    )
}

export default MatchDetail;
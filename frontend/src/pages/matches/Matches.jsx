import { React, useState, useEffect } from 'react';
import { getMatches } from '../../services/matchesServices'

function Matches(){

    const [ matches, setMatches ] = useState([])

    useEffect(()=>{
        const fetchMatches = async () =>
        {
            try{
                const matchesList = await getMatches()
                console.log("hello", matchesList)
                setMatches(matchesList)
                console.log(matches)
            }
            catch(err){
                console.error(err)
            }
            
        }
        fetchMatches()
    },[])

    return(
        <div>
        <p>this is match list pages</p>
        <div>
            {matches.map((match) => (
                <>
                <h1>{match.season}</h1>
                <p>{match.league}</p>
                <p>{match.matchday}</p>
                </>
            ))}
        </div>
        </div>
    )
}

export default Matches;
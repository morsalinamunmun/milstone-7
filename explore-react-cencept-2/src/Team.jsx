import { useState } from "react"

export default function Team(){
    const [team, teamCount] = useState(11);
    const teamStyle={
        border: '2px solid blue',
        borderRadius: '10px',
        padding: '15px',
        margin:'15px'
    }
    const handleAdd = () =>{
        const Add = team + 1;
        teamCount(Add);
    }
    const handleRemove = () =>{
        teamCount(team - 1);
    }
    return(
        <div style={teamStyle}>
            <h3>players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}
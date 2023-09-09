import { useState } from "react"

export default function Counter(){
    const [count, updateCount] = useState(0);
    const handlerAdd = () =>{
        const newCount = count + 1;
        updateCount(newCount);
    }
    const HandleReduce = () =>{
        const reduce = count - 1;
        updateCount(reduce);
    }

    return(
        <div style={{border: '2px solid yellow'}}>
            <h3>counter:{count} </h3>
            <button onClick={handlerAdd}>Add</button>
            <button onClick={HandleReduce}>Reduce</button>
        </div>
    )
}
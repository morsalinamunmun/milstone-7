import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])
    return(
        <div>
            <h3>Users: {users.length}</h3>
           {
              users.map(user => <User></User>)
           }
        </div>
    )
}

function User({user}){
    return(
        <div>
            <h4>Name:</h4>
            <h4>Email:</h4>
        </div>
    )
}
/* 
1.state to hold data
2. use effect with dependency array
3. use fetch to load data
4.set loaded data to the state
 */
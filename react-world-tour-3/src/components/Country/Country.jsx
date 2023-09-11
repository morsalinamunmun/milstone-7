import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitCountry, handleVisitedFlags}) => {
    //console.log(country);
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'black': 'purple'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitCountry(country)}>Mark Visited</button>
            <button onClick={()=>handleVisitedFlags(flags.png)}>Visit Flag</button>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {/* {visited && 'I have visited'} */}
            {visited ? 'I have visited':'I want visited'}
        </div>
    );
};

export default Country;
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitCountries, setVisitCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, [])

    const handleVisitCountry =(country)=>{
        const newVisitCountries = [...visitCountries, country];
        setVisitCountries(newVisitCountries)
    }
    const handleVisitedFlags = (flag)=>{
        const addVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(addVisitedFlags);
    }
    //remove item from an array in a state
    //use filter to select all the elements except the one you want to remove
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited countries: {visitCountries.length}</h3>
                <ul>
                    {
                        visitCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    // visitedFlags.map(flag => <img key={flag[0]} src={flag} alt=""></img>)
                    visitedFlags.map((flag, index) => <img key={index} src={flag} alt=""></img>)
                }
            </div>
            <div className="countries-container">
            {
                countries.map(country=><Country handleVisitCountry={handleVisitCountry} handleVisitedFlags={handleVisitedFlags} key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;

//aitar 8 no class optional kaj likha hoy nai
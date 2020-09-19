import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Countries length : {countries.length}</h1>
            {
                countries.map(country => <Country country={country} key={country.name}></Country>)
            }
            
        </div>
    );
};

export default Home;
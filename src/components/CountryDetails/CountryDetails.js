import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    let { countryName } = useParams();
    const [countries, setcountries] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setcountries(data[0]))
    }, [])
    return (
        <div>
            <h1>{countries.length}</h1>
            <h1>Country Name: {countries.name}</h1>
            <h1>Capital Name: { countries.capital}</h1>
            <h1>Population: { countries.population}</h1>
        </div>
    );
};

export default CountryDetails;
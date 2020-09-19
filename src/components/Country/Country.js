import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    // console.log(props.country);
    let history = useHistory();
    const { name, flag , capital, region} = props.country;
    const handleCountry= (countryName) =>{
        const url=`/country/${countryName}`
        history.push(url);
    }
    let countryFlagStyle={
        height: "100px"
    }
    return (
        <div>
            <h1>Country Name: {name}</h1>
            <img style={countryFlagStyle} src={flag} alt=""/>
            <h3>Capital : {capital}</h3>
            <h5>Region: {region}</h5>
            <Link to={`/country/${name}`}>
                <button>show country details: {name}</button>
            </Link>
            <br/>
            <button onClick={() => handleCountry(name)}>Click me</button>
        </div>
    );
};

export default Country;
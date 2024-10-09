// CountryData.js
import React from 'react';
import '../styles/CountryData.css';

const CountryData = ({ country }) => {
    return (
        <div className="country-card">
            <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
            <h3 className="country-name">{country.name}</h3>
            <p className="country-capital">{country.capital}</p>
        </div>
    );
};

export default CountryData;

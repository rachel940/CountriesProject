import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountryData from './CountryData.jsx';
import '../styles/CountriesMainPage.css';

function CountriesMainPage({ countries }) {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const filteredCountries = Array.isArray(countries) ? countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    const handleCountryClick = (country) => {
        navigate(`/country/${country.name}`, { state: { country } });
    };

    return (
        <div className="dropdown-container-wrapper">
            <div className="dropdown-container">
                <h1>Asian countries</h1>
                <div className="controls-container">
                    <select onChange={(e) => handleCountryClick(countries.find(country => country.name === e.target.value))}>
                        <option value="">Select a country</option>
                        {filteredCountries.map((country) => (
                            <option key={country.name} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Search for a country"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="country-cards-container">
                    {countries.length === 0 ? (
                        <p>Loading...</p>) : (
                        filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                                <CountryData key={country.name} country={country} />
                            ))) : (
                            <p>Countries not found.</p>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default CountriesMainPage;

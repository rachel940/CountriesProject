import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/CountryDetails.css';

function CountryDetails() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const country = state?.country;

    if (!country) {
        return <p>No country data available.</p>;
    }

    return (
        <div className="country-details-wrapper">
            <div className="country-details-container">
                <h2 className="country-name">{country.name}</h2>
                <p className="country-capital">Capital: {country.capital}</p>
                <img className="country-flag" src={country.flag} alt={`${country.name} flag`} />

                <h3 className="section-title">Currencies:</h3>
                <ul className="currency-list">
                    {country.currencies ? (
                        country.currencies.map((currency, index) => (
                            <li key={index} className="currency-item">
                                {currency.name} ({currency.code}) - Symbol: {currency.symbol}
                            </li>
                        ))
                    ) : (
                        <li className="currency-item">N/A</li>
                    )}
                </ul>

                <button className="back-button" onClick={() => navigate('/')}>Back</button>
            </div>
        </div>
    );
}

export default CountryDetails;
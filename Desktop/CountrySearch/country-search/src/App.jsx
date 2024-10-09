import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountriesMainPage from './components/CountriesMainPage.jsx';
import CountryDetails from './components/CountryDetails.jsx';
import { getAsianCountries } from './services/CountriesService.jsx';

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await getAsianCountries();
                setCountries(response);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<CountriesMainPage countries={countries} />} />
                <Route path="/country/:countryName" element={<CountryDetails />} />
            </Routes>
        </Router>
    );
}

export default App;

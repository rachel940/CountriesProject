import axios from 'axios';

const API_URL = 'http://localhost:21089/countries/Country/GetAsianCountries';

// Function for getting asian countries 
export const getAsianCountries = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data || [];
    } catch (error) {
        console.error('Error fetching Asian countries:', error);
        throw error;
    }
};

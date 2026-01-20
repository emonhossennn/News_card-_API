import axios from "axios";

export const fetchNewsByCountry = async (country) => {
    // Use a relative path for production (Vercel) and localhost for development
    const baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';
    const response = await axios.get(`${baseURL}/api/news/${country}`);
    return response.data;
};
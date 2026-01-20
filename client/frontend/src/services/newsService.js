import axios from "axios";

export const fetchNewsByCountry = async (country) => {
const response = await axios.get(`http://localhost:5000/api/news/${country}`);
return response.data;
};
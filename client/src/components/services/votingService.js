import axios from 'axios';

// Define the base URL for your voting-related backend API
const BASE_URL = '/api/voting'; // Adjust this as per your actual server's API endpoint

// Function to submit a voter prompt to the server
export const submitPrompt = async (prompt) => {
  try {
    // Make a POST request to submit the prompt
    const response = await axios.post(`${BASE_URL}/submit`, { prompt });
    // Return the response data (e.g., confirmation, initial results, etc.)
    return response.data;
  } catch (error) {
    // Log and re-throw the error for handling in the component
    console.error('Error submitting prompt:', error);
    throw error;
  }
};

// Function to fetch voting results from the server
export const getResults = async () => {
  try {
    // Make a GET request to fetch the results
    const response = await axios.get(`${BASE_URL}/results`);
    // Return the results data
    return response.data;
  } catch (error) {
    // Log and re-throw the error for handling in the component
    console.error('Error fetching results:', error);
    throw error;
  }
};

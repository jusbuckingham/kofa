const axios = require('axios');
const fs = require('fs');

const BALLOTPEDIA_API_KEY = process.env.BALLOTPEDIA_API_KEY; // Set this in your environment
const API_ENDPOINT = 'https://api.ballotpedia.org/ballot'; // Replace with the actual Ballotpedia API endpoint

const fetchBallotData = async () => {
  try {
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        'Authorization': `Bearer ${BALLOTPEDIA_API_KEY}`,
        // Add other necessary headers
      },
      params: {
        // Add necessary parameters (like date, location, etc.)
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching ballot data:', error);
    throw error;
  }
};

const saveDataToFile = (data) => {
  const fileName = `ballotData_${new Date().toISOString()}.json`;
  fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('Error writing data to file:', err);
      return;
    }
    console.log(`Ballot data saved to ${fileName}`);
  });
};

fetchBallotData()
  .then(saveDataToFile)
  .catch(error => console.error('An error occurred:', error));

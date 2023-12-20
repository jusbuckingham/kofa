import axios from 'axios';

export const getBallotChoices = async (address) => {
  try {
    const response = await axios.get(`/api/ballot/choices?address=${encodeURIComponent(address)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ballot choices:', error);
    return [];
  }
};

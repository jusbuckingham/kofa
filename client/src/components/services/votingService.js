import axios from 'axios';

export const makeDecision = async (prompt) => {
  const response = await axios.post('/api/voting/decision', { prompt });
  return response.data;
};

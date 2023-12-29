import axios from 'axios';

export const loginUser = async (email, password) => {
  return axios.post('http://localhost:5000/api/auth/login', { email, password });
};

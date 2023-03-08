import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchProifle = async () => {
  const result = await axiosInstance.get('/profile');
  return result.data;
};

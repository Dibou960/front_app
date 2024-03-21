import axios from 'axios';
import ENVIRONMENT from '../environments/environment.prod';

const api = axios.create({
  baseURL: ENVIRONMENT.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchEmployees = async () => {
  try {
    const response = await api.get('/employees');
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export default api;

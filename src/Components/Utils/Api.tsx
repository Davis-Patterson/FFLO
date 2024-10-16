import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import axios, { AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Api = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('No Context');
  }

  const { authToken, setAuthToken } = context;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : '',
      'Content-Type': 'application/json',
    },
  });

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response: AxiosResponse<{ token: string }> =
        await axiosInstance.post(
          '/auth/login/',
          { email, password } // Change 'username' to 'email'
        );
      setAuthToken(response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return {
    login,
  };
};

export default Api;

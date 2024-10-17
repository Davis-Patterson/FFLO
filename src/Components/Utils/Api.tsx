import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Api = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('No Context');
  }

  const { authToken, setAuthToken, clearAuthToken } = context;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: authToken ? `Token ${authToken}` : '',
      'Content-Type': 'application/json',
    },
  });

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response: AxiosResponse<{ token: string }> =
        await axiosInstance.post('/auth/login/', { email, password });
      setAuthToken(response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const response = await axiosInstance.post('/auth/logout/');
      if (response.status === 200) {
        clearAuthToken();
        console.log(response.data.detail);
      }
    } catch (err) {
      const error = err as AxiosError;

      if (error.response && error.response.status === 401) {
        clearAuthToken();
        console.log('Invalid or expired token, clearing session.');
      } else {
        console.log('Logout failed: ', error);
      }
    }
  };

  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    password2: string
  ): Promise<void> => {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        '/auth/register/',
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          password2,
        }
      );
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const forgot = async (email: string): Promise<void> => {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        '/auth/password/reset/',
        { email }
      );
      console.log('Password reset email sent:', response.data);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response && err.response.status === 400) {
        console.error('Invalid email address:', err.response.data);
      } else {
        console.error('Password reset request failed:', error);
      }
    }
  };

  return {
    login,
    logout,
    register,
    forgot,
  };
};

export default Api;

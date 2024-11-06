import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import axios, { AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ReservationApi = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('No Context');
  }

  const { authToken } = context;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (authToken) {
        config.headers.Authorization = `Token ${authToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const reserveBook = async (
    bookId: number
  ): Promise<{ success: boolean; data?: any; error?: string }> => {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        `/api/books/${bookId}/reserve/`
      );

      if (response.status === 200) {
        console.log(`Book ID ${bookId} reserved successfully:`, response.data);
        return { success: true, data: response.data };
      } else {
        return {
          success: false,
          error: 'Unexpected response status',
          data: response.data,
        };
      }
    } catch (error) {
      let errorMessage = 'Failed to reserve book';

      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data?.detail || errorMessage;
      }

      console.error(`Failed to reserve book with ID ${bookId}:`, error);
      return { success: false, error: errorMessage };
    }
  };

  const cancelReservation = async (
    bookId: number
  ): Promise<{ success: boolean; data?: any; error?: string }> => {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        `/api/books/${bookId}/cancel-reservation/`
      );

      if (response.status === 200) {
        console.log(
          `Reservation for book ID ${bookId} canceled successfully:`,
          response.data
        );
        return { success: true, data: response.data };
      } else {
        return {
          success: false,
          error: 'Unexpected response status',
          data: response.data,
        };
      }
    } catch (error) {
      let errorMessage = 'Failed to cancel reservation';

      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data?.detail || errorMessage;
      }

      console.error(
        `Failed to cancel reservation for book ID ${bookId}:`,
        error
      );
      return { success: false, error: errorMessage };
    }
  };

  const activateReservation = async (
    email: string
  ): Promise<{ success: boolean; data?: any; error?: string }> => {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        `/api/rentals/activate/`,
        { email }
      );

      if (response.status === 200) {
        console.log(`Reservation activated successfully:`, response.data);
        return { success: true, data: response.data };
      } else {
        return {
          success: false,
          error: 'Unexpected response status',
          data: response.data,
        };
      }
    } catch (error) {
      let errorMessage = 'Failed to activate reservation';

      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data?.detail || errorMessage;
      }

      console.error('Failed to activate reservation:', error);
      return { success: false, error: errorMessage };
    }
  };

  const returnBook = async (
    bookId: number,
    email: string
  ): Promise<{ success: boolean; data?: any; error?: string }> => {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        `/api/books/${bookId}/return/`,
        { email }
      );

      if (response.status === 200) {
        console.log(`Book ID ${bookId} returned successfully:`, response.data);
        return { success: true, data: response.data };
      } else {
        return {
          success: false,
          error: 'Unexpected response status',
          data: response.data,
        };
      }
    } catch (error) {
      let errorMessage = 'Failed to return book';

      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data?.detail || errorMessage;
      }

      console.error(`Failed to return book with ID ${bookId}:`, error);
      return { success: false, error: errorMessage };
    }
  };

  return {
    reserveBook,
    cancelReservation,
    activateReservation,
    returnBook,
  };
};

export default ReservationApi;

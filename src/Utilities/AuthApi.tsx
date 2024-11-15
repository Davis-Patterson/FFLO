import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AuthApi = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('No Context');
  }

  const { authToken, clearAuthToken, clearAuthUser } = context;

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

  const verifyToken = async (): Promise<{
    success: boolean;
    tokenValid?: boolean;
    user_info?: any;
  }> => {
    try {
      const response: AxiosResponse = await axiosInstance.get(
        '/auth/token/verify/',
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Token is valid. User info:', response.data.user_info);
        return {
          success: true,
          tokenValid: true,
          user_info: response.data.user_info,
        };
      } else {
        return { success: false };
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.log('Invalid or expired token.');
        clearAuthToken();
        clearAuthUser();
      } else {
        console.error('An unexpected error occurred:', error);
        clearAuthToken();
        clearAuthUser();
      }
      return { success: false, tokenValid: false };
    }
  };

  const verifyAdmin = async (): Promise<
    | {
        success: boolean;
        isAdmin?: boolean;
        error?: string;
      }
    | undefined
  > => {
    try {
      const response: AxiosResponse = await axiosInstance.get('/auth/admin/');
      if (response.status === 200) {
        console.log('User is a staff member.');
        return { success: true, isAdmin: true };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 403) {
            console.log('User is not a staff member.');
            return {
              success: true,
              isAdmin: false,
              error: 'User is not a staff member.',
            };
          } else if (error.response.status === 401) {
            console.log('Invalid or expired token.');
            clearAuthToken();
            clearAuthUser();
            return { success: false, error: 'Invalid or expired token.' };
          }
        }
      }
      console.error('An unexpected error occurred:', error);
      return { success: false, error: 'An unexpected error occurred.' };
    }

    return { success: false, error: 'Unhandled error in verifyAdmin.' };
  };

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; data?: { token: string; user: any } }> => {
    try {
      const response: AxiosResponse<{ token: string; user: any }> =
        await axiosInstance.post('/auth/login/', { email, password });

      if (response.status === 200 && response.data.token) {
        return {
          success: true,
          data: { token: response.data.token, user: response.data.user },
        };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false };
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const response = await axiosInstance.post('/auth/logout/');
      if (response.status === 200) {
        clearAuthToken();
        clearAuthUser();
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
  ): Promise<{ success: boolean; data?: { token: string; user: any } }> => {
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

      const loginResponse = await login(email, password);

      if (loginResponse.success && loginResponse.data) {
        return { success: true, data: loginResponse.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Registration failed:', error);
      return { success: false };
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

  const updateProfile = async (
    firstName: string,
    lastName: string,
    phone: string | null,
    imageFile: File | null,
    removeImage: boolean = false
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName || '');
      formData.append('phone', phone || '');
      if (imageFile) {
        formData.append('image_file', imageFile);
      }
      if (removeImage) {
        formData.append('remove_image', 'true');
      }

      const response: AxiosResponse = await axiosInstance.put(
        '/auth/users/update-profile/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        console.log('Profile updated successfully:', response.data);
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Profile update failed:', error);
      return { success: false };
    }
  };

  return {
    verifyToken,
    verifyAdmin,
    login,
    logout,
    register,
    forgot,
    updateProfile,
  };
};

export default AuthApi;

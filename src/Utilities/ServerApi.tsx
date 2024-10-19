import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import axios, { AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ServerApi = () => {
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

  const getCategories = async (): Promise<{ success: boolean; data?: any }> => {
    try {
      const response: AxiosResponse = await axiosInstance.get(
        '/api/categories/'
      );

      if (response.status === 200) {
        console.log('Categories retrieved successfully:', response.data);
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Failed to retrieve categories:', error);
      return { success: false };
    }
  };

  const createCategory = async (
    name: string,
    description?: string
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const categoryData = {
        name: name,
        description: description || '',
      };

      const response: AxiosResponse = await axiosInstance.post(
        '/api/categories/',
        categoryData // Send as JSON
      );

      if (response.status === 201) {
        console.log('Category created successfully:', response.data);
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Failed to create category:', error);
      return { success: false };
    }
  };

  const deleteCategory = async (
    categoryId: number
  ): Promise<{ success: boolean }> => {
    try {
      const response: AxiosResponse = await axiosInstance.delete(
        `/api/categories/${categoryId}/`
      );

      if (response.status === 204) {
        console.log(`Category with ID ${categoryId} deleted successfully.`);
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error(`Failed to delete category with ID ${categoryId}:`, error);
      return { success: false };
    }
  };

  const updateCategory = async (
    categoryId: number,
    name: string,
    description: string
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const categoryData = {
        name: name,
        description: description,
      };

      const response: AxiosResponse = await axiosInstance.put(
        `/api/categories/${categoryId}/`,
        categoryData // Send as JSON
      );

      if (response.status === 200) {
        console.log(
          `Category ${categoryId} updated successfully:`,
          response.data
        );
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error(`Failed to update category with ID ${categoryId}:`, error);
      return { success: false };
    }
  };

  const createBook = async (
    title: string,
    author: string,
    inventory: number = 1,
    images: File[],
    categories: number[],
    flair?: string
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('inventory', inventory.toString());

      if (flair) {
        formData.append('flair', flair);
      }

      images.forEach((image) => {
        formData.append('images', image);
      });

      categories.forEach((categoryId) => {
        formData.append('categories', categoryId.toString());
      });

      const response: AxiosResponse = await axiosInstance.post(
        '/api/books/create/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 201) {
        console.log('Book created successfully:', response.data);
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Book creation failed:', error);
      return { success: false };
    }
  };

  return {
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory,
    createBook,
  };
};

export default ServerApi;
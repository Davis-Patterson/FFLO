import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import type { Book } from 'Contexts/AppContext';
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
    description: string,
    icon: number,
    color: number,
    flair?: string
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const categoryData: {
        name: string;
        description: string;
        icon: number;
        color: number;
        flair?: string;
      } = {
        name: name,
        description: description,
        icon: icon,
        color: color,
      };

      if (flair) {
        categoryData.flair = flair;
      }

      const response: AxiosResponse = await axiosInstance.post(
        '/api/categories/',
        categoryData
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

  const updateCategory = async (
    categoryId: number,
    name: string,
    description: string,
    icon: number,
    color: number,
    flair: string = ''
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const categoryData: {
        name: string;
        description: string;
        icon: number;
        color: number;
        flair: string;
      } = {
        name: name,
        description: description,
        icon: icon,
        color: color,
        flair: flair,
      };

      const response: AxiosResponse = await axiosInstance.put(
        `/api/categories/${categoryId}/`,
        categoryData
      );
      console.log('category data, ', categoryData);

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

  const updateCategorySortOrder = async (
    order: number[]
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        '/api/categories/reorder/',
        {
          order,
        }
      );

      if (response.status === 200) {
        console.log('Categories reordered successfully:', response.data);
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Failed to reorder categories:', error);
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

  const createBook = async (
    title: string,
    author: string,
    description: string,
    inventory: number = 1,
    images: File[],
    categories: number[],
    flair?: string
  ): Promise<{ success: boolean; data?: any; error?: string }> => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('description', description);
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
        return { success: false, error: 'Unexpected response status' };
      }
    } catch (error) {
      let errorMessage = 'Book creation failed';

      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data?.title?.[0] || errorMessage;
      }

      console.error('Book creation failed:', error);
      return { success: false, error: errorMessage };
    }
  };

  const updateBook = async (
    bookId: number,
    title: string,
    author: string,
    description: string,
    inventory: number = 1,
    images: File[],
    imagesToRemove: number[],
    categories: number[],
    categoriesToRemove: number[],
    flair?: string
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('description', description);
      formData.append('inventory', inventory.toString());

      if (flair) {
        formData.append('flair', flair);
      }

      images.forEach((image) => {
        formData.append('images', image);
      });

      if (categories.length > 0) {
        formData.append('categories', categories.join(','));
      }

      if (categoriesToRemove.length > 0) {
        formData.append('categories_to_remove', categoriesToRemove.join(','));
      }

      imagesToRemove.forEach((imageId) => {
        formData.append('images_to_remove', imageId.toString());
      });

      const response: AxiosResponse = await axiosInstance.put(
        `/api/books/${bookId}/update/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        console.log('Book updated successfully:', response.data);
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error(`Failed to update book with ID ${bookId}:`, error);
      return { success: false };
    }
  };

  const getBooks = async (): Promise<{ success: boolean; data?: Book[] }> => {
    try {
      const response: AxiosResponse = await axiosInstance.get('/api/books/');
      if (response.status === 200) {
        console.log('Books retrieved successfully:', response.data);
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Failed to retrieve books:', error);
      return { success: false };
    }
  };

  const archiveBook = async (
    bookId: number
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const response: AxiosResponse = await axiosInstance.post(
        `/api/books/${bookId}/archive/`
      );

      if (response.status === 200) {
        console.log(
          `Book with ID ${bookId} archived/unarchived successfully:`,
          response.data
        );
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error(`Failed to archive book with ID ${bookId}:`, error);
      return { success: false };
    }
  };

  const deleteBook = async (
    bookId: number
  ): Promise<{ success: boolean; data?: any }> => {
    try {
      const response: AxiosResponse = await axiosInstance.delete(
        `/api/books/${bookId}/delete/`
      );

      if (response.status === 200) {
        console.log(
          `Book with ID ${bookId} deleted successfully:`,
          response.data
        );
        return { success: true, data: response.data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error(`Failed to delete book with ID ${bookId}:`, error);
      return { success: false };
    }
  };

  return {
    getCategories,
    createCategory,
    updateCategory,
    updateCategorySortOrder,
    deleteCategory,
    createBook,
    updateBook,
    getBooks,
    archiveBook,
    deleteBook,
  };
};

export default ServerApi;

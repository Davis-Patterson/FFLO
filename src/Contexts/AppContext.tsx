import { createContext, ReactNode, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

export interface BookImage {
  image_url: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  images: BookImage[];
  inventory: number;
  available: number;
  created_date: string;
  flair: string | null;
  categories: number[];
  archived: boolean;
  on_hold: boolean;
}

interface Membership {
  active_membership: boolean;
  monthly_books: number;
  next_payment_date: string | null;
  start_date?: string;
  end_date?: string;
  transaction_history?: any[];
  recurrence?: string | null;
}

interface UserImage {
  image_url: string | null;
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string | null;
  phone: string | null;
  image: UserImage | null;
  is_staff: boolean;
  joined_date: string;
  membership: Membership | null;
  checked_out: any[];
  on_hold: any | null;
  book_history: any[];
}

interface AppContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  showFullscreen: boolean;
  setShowFullscreen: (value: boolean) => void;
  showAuth: boolean;
  setShowAuth: (value: boolean) => void;
  showEdit: boolean;
  setShowEdit: (value: boolean) => void;
  showAddBookWindow: boolean;
  setShowAddBookWindow: (value: boolean) => void;
  language: string;
  setLanguage: (language: string) => void;
  categories: any[];
  setCategories: (categories: any[]) => void;
  allBooks: Book[];
  setAllBooks: (books: Book[]) => void;
  clearAuthToken: () => void;
  clearAuthUser: () => void;
  handleLanguageChange: (newLanguage: string | null) => void;
  authUser: User | null;
  setAuthUser: (user: User | null) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [authToken, setAuthToken] = useLocalStorageState<string | null>(
    'authToken',
    {
      defaultValue: null,
    }
  );
  const [authUser, setAuthUser] = useState<User | null>(null);

  const [showFullscreen, setShowFullscreen] = useState<boolean>(false);
  const [showAuth, setShowAuth] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showAddBookWindow, setShowAddBookWindow] = useState<boolean>(false);
  const [language, setLanguage] = useLocalStorageState<string>('EN', {
    defaultValue: 'EN',
  });

  const [categories, setCategories] = useState<any[]>([]);
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  const clearAuthToken = () => {
    setAuthToken(null);
  };

  const clearAuthUser = () => {
    setAuthUser(null);
  };

  const handleLanguageChange = (newLanguage: string | null) => {
    if (newLanguage) {
      setLanguage(newLanguage);
    }
  };

  return (
    <AppContext.Provider
      value={{
        authToken,
        setAuthToken,
        authUser,
        setAuthUser,
        showFullscreen,
        setShowFullscreen,
        showAuth,
        setShowAuth,
        showEdit,
        setShowEdit,
        showAddBookWindow,
        setShowAddBookWindow,
        language,
        setLanguage,
        categories,
        setCategories,
        allBooks,
        setAllBooks,
        clearAuthToken,
        clearAuthUser,
        handleLanguageChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { createContext, ReactNode, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

interface AppContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  showFullscreen: boolean;
  setShowFullscreen: (value: boolean) => void;
  showAuth: boolean;
  setShowAuth: (value: boolean) => void;
  language: string;
  setLanguage: (language: string) => void;
  clearAuthToken: () => void;
  handleLanguageChange: (newLanguage: string | null) => void;
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

  const [showFullscreen, setShowFullscreen] = useState<boolean>(false);
  const [showAuth, setShowAuth] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>('EN');

  const clearAuthToken = () => {
    setAuthToken(null);
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
        showFullscreen,
        setShowFullscreen,
        showAuth,
        setShowAuth,
        language,
        setLanguage,
        clearAuthToken,
        handleLanguageChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { createContext, ReactNode, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

interface AppContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  clearAuthToken: () => void;
  showFullscreen: boolean;
  setShowFullscreen: (value: boolean) => void;
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

  const clearAuthToken = () => {
    setAuthToken(null);
  };

  return (
    <AppContext.Provider
      value={{
        authToken,
        setAuthToken,
        clearAuthToken,
        showFullscreen,
        setShowFullscreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

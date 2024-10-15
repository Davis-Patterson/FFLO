import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';

interface AppContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  clearAuthToken: () => void;
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

  const navigate = useNavigate();

  const clearAuthToken = () => {
    setAuthToken(null);
  };

  return (
    <AppContext.Provider value={{ authToken, setAuthToken, clearAuthToken }}>
      {children}
    </AppContext.Provider>
  );
};

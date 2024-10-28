import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('No Context');
  }

  const { authToken, authUser, setShowAuth } = context;

  useEffect(() => {
    if (!authToken) {
      setShowAuth(true);
    }
  }, [authToken, authUser, setShowAuth]);

  if (!authToken) {
    console.log('Route protected. Please log in.');
  }

  return children;
};

export default ProtectedRoute;

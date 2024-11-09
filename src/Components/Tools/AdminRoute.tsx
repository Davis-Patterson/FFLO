import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'Contexts/AppContext';
import AuthApi from 'Utilities/AuthApi';

interface AdminRouteProps {
  children: JSX.Element;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { verifyAdmin } = AuthApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const { authToken, setShowAuth } = context;
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!authToken) {
        setShowAuth(true);
        navigate('/restricted');
        return;
      }

      const result = await verifyAdmin();

      if (result && result.success && result.isAdmin) {
        return;
      } else if (result && result.error === 'Invalid or expired token.') {
        setShowAuth(true);
        navigate('/restricted');
      } else {
        navigate('/restricted');
      }
    };

    checkAdminStatus();
  }, [authToken, setShowAuth, navigate, verifyAdmin]);

  return authToken ? children : null;
};

export default AdminRoute;

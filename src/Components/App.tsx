import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Routes, Route } from 'react-router-dom';
import AuthApi from 'Utilities/AuthApi';
import Menu from 'Utils/Menu';
import Fullscreen from 'Utils/Fullscreen';
import Auth from 'Components/Utils/Auth';
import EditProfile from 'Utils/EditProfile';
import AddBook from 'Utils/AddBook';
import Nav from 'Components/Nav';
import Home from 'Components/Home';
import UserProfile from 'Components/UserProfile';
import NotFound from 'Utils/NotFound';
import Footer from 'Components/Footer';
import ProtectedRoute from 'Utils/ProtectedRoute';
import 'Styles/App.css';

const App: React.FC = () => {
  const { verifyToken, logout } = AuthApi();
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('No Context');
  }

  const { authToken, authUser, setAuthUser, showFullscreen } = context;

  useEffect(() => {
    const checkUser = async () => {
      if (authToken && !authUser) {
        const result = await verifyToken();
        if (result.success && result.tokenValid) {
          console.log('Token is valid.');
        } else {
          console.log('Token is invalid or expired.');
          await logout();
        }
      }
    };

    checkUser();
  }, [authToken, authUser, setAuthUser, verifyToken]);

  return (
    <>
      <Menu />
      {showFullscreen && <Fullscreen />}
      <Auth />
      <EditProfile />
      <AddBook />
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </>
  );
};

export default App;

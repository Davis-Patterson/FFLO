import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Routes, Route } from 'react-router-dom';
import AuthApi from 'Utilities/AuthApi';
import ServerApi from 'Utilities/ServerApi';
import Fullscreen from 'Utils/Fullscreen';
import Auth from 'Components/Utils/Auth';
import EditProfile from 'Utils/EditProfile';
import AddBook from 'Utils/AddBook';
import EditBook from 'Utils/EditBook';
import EditCategories from 'Utils/EditCategories';
import PolicyPanel from 'Utils/PolicyPanel';
import Nav from 'Components/Nav';
import Home from 'Components/Home';
import About from 'Components/About';
import Books from 'Components/Books';
import Book from 'Components/Book';
import UserProfile from 'Components/UserProfile';
import NotFound from 'Utils/NotFound';
import Footer from 'Components/Footer';
import ProtectedRoute from 'Tools/ProtectedRoute';
import 'Styles/App.css';

const App: React.FC = () => {
  const { verifyToken, logout } = AuthApi();
  const { getBooks } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    authUser,
    setAuthUser,
    showFullscreen,
    allBooks,
    setAllBooks,
    fetchError,
    setFetchError,
    isFetched,
    setIsFetched,
  } = context;

  useEffect(() => {
    const checkUser = async () => {
      if (authToken && !authUser) {
        const result = await verifyToken();
        if (result.success && result.tokenValid) {
        } else {
          console.log('Token is invalid or expired.');
          await logout();
        }
      }
    };

    checkUser();
  }, [authToken, authUser, setAuthUser, verifyToken]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (allBooks.length === 0 && !fetchError && !isFetched) {
        try {
          const result = await getBooks();
          if (result.success) {
            setAllBooks(result.data ?? []);
            setFetchError(false);
          } else {
            console.error('Failed to load books');
            setFetchError(true);
          }
        } catch (error) {
          console.error('Error fetching books:', error);
          setFetchError(true);
        } finally {
          setIsFetched(true);
        }
      }
    };

    fetchBooks();
  }, [getBooks, allBooks, setAllBooks, fetchError, isFetched]);

  return (
    <>
      {showFullscreen && <Fullscreen />}
      <Auth />
      <EditProfile />
      <AddBook />
      <EditBook />
      <EditCategories />
      <PolicyPanel />
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/:title' element={<Book />} />
          <Route path='/books' element={<Books />} />
          <Route path='/about' element={<About />} />
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

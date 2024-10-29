import React, { useContext, useEffect, lazy, Suspense } from 'react';
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
import NotFound from 'Tools/NotFound';
import Footer from 'Components/Footer';
import ProtectedRoute from 'Tools/ProtectedRoute';
import Fallback from 'Tools/Fallback';
import 'Styles/App.css';

const Book = lazy(() => import('Components/Book'));
const Books = lazy(() => import('Components/Books'));
const About = lazy(() => import('Components/About'));
const UserProfile = lazy(() => import('Components/UserProfile'));

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
          <Route
            path='/books/:title'
            element={
              <Suspense fallback={<Fallback />}>
                <Book />
              </Suspense>
            }
          />
          <Route
            path='/books'
            element={
              <Suspense fallback={<Fallback />}>
                <Books />
              </Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <Suspense fallback={<Fallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Suspense fallback={<Fallback />}>
                  <UserProfile />
                </Suspense>
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

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
import Contact from 'Components/Contact';
import NotFound from 'Tools/NotFound';
import BookNotFound from 'Tools/BookNotFound';
import Footer from 'Components/Footer';
import ProtectedRoute from 'Tools/ProtectedRoute';
import AdminRoute from 'Tools/AdminRoute';
import Fallback from 'Tools/Fallback';
import BookFallback from 'Tools/BookFallback';
import AboutFallback from 'Tools/AboutFallback';
import UserProfileFallback from 'Tools/UserProfileFallback';
import Restricted from 'Tools/Restricted';
import 'Styles/App.css';

const Book = lazy(() => import('Components/Book'));
const Books = lazy(() => import('Components/Books'));
const About = lazy(() => import('Components/About'));
const UserProfile = lazy(() => import('Components/UserProfile'));
const Membership = lazy(() => import('Components/Membership'));
const AdminPanel = lazy(() => import('Admin/AdminPanel'));

const App: React.FC = () => {
  const { verifyToken, logout } = AuthApi();
  const { getBooks } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    setAuthToken,
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
          if (result.success) {
            console.log('Logout successful');
          } else {
            setAuthToken('');
            console.log('Logout failed. AuthToken reset.');
          }
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
            path='/library/:title'
            element={
              <Suspense fallback={<BookFallback />}>
                <Book />
              </Suspense>
            }
          />
          <Route path='/library/not_found' element={<BookNotFound />} />
          <Route
            path='/library'
            element={
              <Suspense fallback={<Fallback />}>
                <Books />
              </Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <Suspense fallback={<AboutFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path='/contact'
            element={
              <ProtectedRoute>
                <Suspense fallback={<Fallback />}>
                  <Contact />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path='/membership'
            element={
              <ProtectedRoute>
                <Suspense fallback={<Fallback />}>
                  <Membership />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Suspense fallback={<UserProfileFallback />}>
                  <UserProfile />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/*'
            element={
              <AdminRoute>
                <Suspense fallback={<Fallback />}>
                  <AdminPanel />
                </Suspense>
              </AdminRoute>
            }
          />
          <Route path='/fallback' element={<BookFallback />} />
          <Route path='/restricted' element={<Restricted />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </>
  );
};

export default App;

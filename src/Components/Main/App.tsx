import React, {
  useContext,
  useEffect,
  useCallback,
  lazy,
  Suspense,
} from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Routes, Route } from 'react-router-dom';
import AuthApi from 'Utilities/AuthApi';
import ServerApi from 'Utilities/ServerApi';
import Fullscreen from 'Utils/Fullscreen';
import Auth from 'Utils/Auth';
import Membership from 'Components/Main/Membership';
import AdminPanel from 'Admin/AdminPanel';
import EditProfile from 'Utils/EditProfile';
import AddBook from 'Utils/AddBook';
import EditBook from 'Utils/EditBook';
import EditCategories from 'Utils/EditCategories';
import PolicyPanel from 'Utils/PolicyPanel';
import AnnouncementBanner from 'Utils/AnnouncementBanner';
import Nav from 'Components/Main/Nav';
import Menu from 'Components/Main/Menu';
import NotFound from 'Tools/NotFound';
import BookNotFound from 'Tools/BookNotFound';
import Footer from 'Utils/Footer';
import ProtectedRoute from 'Tools/ProtectedRoute';
import AdminRoute from 'Tools/AdminRoute';
import Construction from 'Tools/Construction';
import BookFallback from 'Tools/BookFallback';
import BooksFallback from 'Tools/BooksFallback';
import HomeFallback from 'Tools/HomeFallback';
import AboutFallback from 'Tools/AboutFallback';
import ContactFallback from 'Tools/ContactFallback';
import UserProfileFallback from 'Tools/UserProfileFallback';
import Restricted from 'Tools/Restricted';
import 'Styles/Main/App.css';

const Home = lazy(() => import('Components/Main/Home'));
const Book = lazy(() => import('Components/Main/Book'));
const Categories = lazy(() => import('Components/Main/Categories'));
const About = lazy(() => import('Components/Main/About'));
const Contact = lazy(() => import('Components/Main/Contact'));
const UserProfile = lazy(() => import('Components/Main/UserProfile'));

let isVerificationRunning = false;
let areBooksFetching = false;
let areCategoriesFetching = false;
let areReviewsFetching = false;

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const App: React.FC = () => {
  const { verifyToken, logout } = AuthApi();
  const { getBooks, getCategories, getReviews } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    setAuthToken,
    setAuthUser,
    tokenVerified,
    setTokenVerified,
    booksFetched,
    setBooksFetched,
    categoriesFetched,
    setCategoriesFetched,
    reviewsFetched,
    setReviewsFetched,
    reviews,
    setReviews,
    setShowAuth,
    allBooks,
    setAllBooks,
    categories,
    setCategories,
    setBookmarkedBooks,
    fetchError,
    setFetchError,
  } = context;

  const memoizedVerifyToken = useCallback(verifyToken, [authToken]);

  useEffect(() => {
    const checkUser = async () => {
      if (!isVerificationRunning && authToken && !tokenVerified) {
        isVerificationRunning = true;
        const result = await memoizedVerifyToken();
        if (result.success && result.tokenValid && result.user_info) {
          setAuthUser(result.user_info);
          setBookmarkedBooks(result.user_info.bookmarked_books);
          setTokenVerified(true);
        } else {
          console.log('Token is invalid or expired.');
          await logout();
          setAuthToken('');
          setAuthUser(null);
          setShowAuth(true);
        }
        isVerificationRunning = false;
      }
    };

    checkUser();
  }, [authToken, memoizedVerifyToken]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (
        !booksFetched &&
        !areBooksFetching &&
        !fetchError &&
        allBooks.length === 0
      ) {
        areBooksFetching = true;
        try {
          const result = await getBooks();
          if (result.success) {
            setAllBooks(result.data ?? []);
            setFetchError(false);
            setBooksFetched(true);
          } else {
            console.error('Failed to load books');
            setFetchError(true);
          }
        } catch (error) {
          console.error('Error fetching books:', error);
          setFetchError(true);
        } finally {
          areBooksFetching = false;
        }
      }
    };

    fetchBooks();
  }, [
    allBooks,
    getBooks,
    setAllBooks,
    fetchError,
    booksFetched,
    setBooksFetched,
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      if (
        !categoriesFetched &&
        !areCategoriesFetching &&
        categories.length === 0
      ) {
        areCategoriesFetching = true;
        try {
          const result = await getCategories();
          if (result.success) {
            setCategories(result.data);
            setCategoriesFetched(true);
          } else {
            console.error('Failed to load categories');
          }
        } catch (error) {
          console.error('Error fetching categories:', error);
        } finally {
          areCategoriesFetching = false;
        }
      }
    };

    fetchCategories();
  }, [
    categories,
    getCategories,
    categoriesFetched,
    setCategories,
    setCategoriesFetched,
  ]);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!reviewsFetched && !areReviewsFetching && reviews.length === 0) {
        areReviewsFetching = true;
        try {
          const result = await getReviews();
          if (result.success) {
            setReviews(shuffleArray(result.data));
            setReviewsFetched(true);
          } else {
            console.error('Failed to load reviews');
          }
        } catch (error) {
          console.error('Error fetching reviews:', error);
        } finally {
          areReviewsFetching = false;
        }
      }
    };

    fetchReviews();
  }, [reviews, getReviews, reviewsFetched, setReviews, setReviewsFetched]);

  return (
    <>
      <Fullscreen />
      <Menu />
      <Auth />
      <EditProfile />
      <AddBook />
      <EditBook />
      <EditCategories />
      <PolicyPanel />
      <>
        <AnnouncementBanner />
        <Nav />
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<HomeFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path='/library'
            element={
              <Suspense fallback={<BooksFallback />}>
                <Categories />
              </Suspense>
            }
          />
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
              <Suspense fallback={<ContactFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path='/membership'
            element={
              <ProtectedRoute>
                <Membership />
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
                <AdminPanel />
              </AdminRoute>
            }
          />
          <Route path='/construction' element={<Construction />} />
          <Route path='/restricted' element={<Restricted />} />
          <Route path='/fallback' element={<HomeFallback />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </>
  );
};

export default App;

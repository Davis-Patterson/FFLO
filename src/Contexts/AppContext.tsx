import { createContext, ReactNode, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import BunnyIcon from 'Svgs/BunnyIcon';
import ChickenIcon from 'Svgs/ChickenIcon';
import FrogIcon from 'Svgs/FrogIcon';
import HedgehogIcon from 'Svgs/HedgehogIcon';
import FoxIcon from 'Svgs/FoxIcon';
import RaccoonIcon from 'Svgs/RaccoonIcon';
import OwlIcon from 'Svgs/OwlIcon';
import Bird1Icon from 'Svgs/Bird1Icon';
import BearIcon from 'Svgs/BearIcon';
import SquirrelIcon from 'Svgs/SquirrelIcon';
import Bird2Icon from 'Svgs/Bird2Icon';
import DeerIcon from 'Svgs/DeerIcon';

export interface BookImage {
  id: number;
  image_url: string | null;
  image_small: string | null;
}

export interface BookRating {
  id: number;
  book: number;
  user: number;
  rating: number;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  language: string;
  images: BookImage[];
  inventory: number;
  available: number;
  created_date: string;
  flair: string | null;
  categories: number[];
  archived: boolean;
  on_hold: boolean;
  rating: number | null;
  ratings: BookRating[] | null;
}

interface CheckedOutBook {
  rental_date: string;
  return_date: string | null;
  is_active: boolean;
  book: Book;
}

interface RentalHistoryItem extends CheckedOutBook {}

export interface Category {
  id: number;
  name: string;
  description: string;
  flair: string | null;
  icon: number;
  color: number;
  sort_order: number;
  quantity: number;
}

interface Membership {
  active: boolean;
  monthly_books: number;
  next_payment_date: string | null;
  start_date?: string;
  end_date?: string;
  transaction_history?: any[];
  recurrence?: string | null;
}

interface UserImage {
  image_url: string | null;
  image_small: string | null;
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string | null;
  phone: string | null;
  image: UserImage | null;
  is_staff: boolean;
  joined_date: string;
  membership: Membership | null;
  checked_out: CheckedOutBook[];
  on_hold: any | null;
  book_history: RentalHistoryItem[];
}

interface IconProps {
  className?: string;
  onMouseDown?: React.MouseEventHandler<SVGSVGElement>;
}

interface FullscreenData {
  src: string;
  alt: string;
  title: string;
  author: string;
  desc: string;
}

interface AppContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  authUser: User | null;
  setAuthUser: (user: User | null) => void;
  allBooks: Book[];
  setAllBooks: (books: Book[]) => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  bookmarkedBooks: Book[];
  setBookmarkedBooks: (books: Book[]) => void;
  selectedBook: Book | null;
  setSelectedBook: (book: Book | null) => void;
  showFullscreen: boolean;
  setShowFullscreen: (value: boolean) => void;
  fullscreenData: FullscreenData;
  setFullscreenData: (data: FullscreenData) => void;
  showAuth: boolean;
  setShowAuth: (value: boolean) => void;
  showEdit: boolean;
  setShowEdit: (value: boolean) => void;
  showAddBookWindow: boolean;
  setShowAddBookWindow: (value: boolean) => void;
  showBookEditWindow: boolean;
  setShowBookEditWindow: (value: boolean) => void;
  showCategoryEditWindow: boolean;
  setShowCategoryEditWindow: (value: boolean) => void;
  showPolicyWindow: boolean;
  setShowPolicyWindow: (value: boolean) => void;
  language: string;
  setLanguage: (language: string) => void;
  categoryFilter: number | null;
  setCategoryFilter: (categoryFilter: number | null) => void;
  fetchError: boolean;
  setFetchError: (value: boolean) => void;
  isFetched: boolean;
  setIsFetched: (value: boolean) => void;
  clearAuthToken: () => void;
  clearAuthUser: () => void;
  handleLanguageChange: (
    event: React.MouseEvent,
    newLanguage: string | null
  ) => void;
  formatTitleForURL: (inputString: string) => string;
  fullscreenOpen: (
    src: string,
    alt: string,
    title?: string,
    author?: string,
    desc?: string
  ) => void;
  fullscreenClose: (event: React.MouseEvent) => void;
  categoryIconOptions: { [key: number]: React.FC };
  categoryColorOptions: { [key: number]: string };
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
  const [authUser, setAuthUser] = useState<User | null>(null);

  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [bookmarkedBooks, setBookmarkedBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const [showFullscreen, setShowFullscreen] = useState<boolean>(false);
  const [fullscreenData, setFullscreenData] = useState({
    src: '',
    alt: '',
    title: '',
    author: '',
    desc: '',
  });

  const [showAuth, setShowAuth] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showAddBookWindow, setShowAddBookWindow] = useState<boolean>(false);
  const [showBookEditWindow, setShowBookEditWindow] = useState<boolean>(false);
  const [showCategoryEditWindow, setShowCategoryEditWindow] =
    useState<boolean>(false);
  const [showPolicyWindow, setShowPolicyWindow] = useState<boolean>(false);

  const [language, setLanguage] = useLocalStorageState<string>('EN', {
    defaultValue: 'EN',
  });
  const [categoryFilter, setCategoryFilter] = useState<number | null>(null);

  const [fetchError, setFetchError] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const clearAuthToken = () => {
    setAuthToken(null);
  };

  const clearAuthUser = () => {
    setAuthUser(null);
  };

  const handleLanguageChange = (
    event: React.MouseEvent,
    newLanguage: string | null
  ) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (newLanguage) {
      setLanguage(newLanguage);
    }
  };

  const formatTitleForURL = (inputString: string): string => {
    return inputString
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+$/, '');
  };

  const fullscreenOpen = (
    src: string,
    alt: string,
    title: string = '',
    author: string = '',
    desc: string = ''
  ) => {
    setFullscreenData({
      src,
      alt,
      title,
      author,
      desc,
    });
    setShowFullscreen(true);
  };

  const fullscreenClose = () => {
    setShowFullscreen(false);
    setFullscreenData({
      src: '',
      alt: '',
      title: '',
      author: '',
      desc: '',
    });
  };

  const categoryIconOptions: { [key: number]: React.FC<IconProps> } = {
    1: FoxIcon,
    2: RaccoonIcon,
    3: ChickenIcon,
    4: OwlIcon,
    5: Bird1Icon,
    6: BearIcon,
    7: SquirrelIcon,
    8: FrogIcon,
    9: Bird2Icon,
    10: DeerIcon,
    11: HedgehogIcon,
    12: BunnyIcon,
  };

  const categoryColorOptions: { [key: number]: string } = {
    1: 'var(--clr-toute)',
    2: 'var(--clr-petite)',
    3: 'var(--clr-moyenne)',
    4: 'var(--clr-goldenrod)',
    5: 'var(--clr-celadon)',
    6: 'var(--clr-lavender)',
  };

  return (
    <AppContext.Provider
      value={{
        authToken,
        setAuthToken,
        authUser,
        setAuthUser,
        allBooks,
        setAllBooks,
        categories,
        setCategories,
        bookmarkedBooks,
        setBookmarkedBooks,
        selectedBook,
        setSelectedBook,
        showFullscreen,
        setShowFullscreen,
        fullscreenData,
        setFullscreenData,
        showAuth,
        setShowAuth,
        showEdit,
        setShowEdit,
        showAddBookWindow,
        setShowAddBookWindow,
        showBookEditWindow,
        setShowBookEditWindow,
        showCategoryEditWindow,
        setShowCategoryEditWindow,
        showPolicyWindow,
        setShowPolicyWindow,
        language,
        setLanguage,
        categoryFilter,
        setCategoryFilter,
        fetchError,
        setFetchError,
        isFetched,
        setIsFetched,
        clearAuthToken,
        clearAuthUser,
        handleLanguageChange,
        formatTitleForURL,
        fullscreenOpen,
        fullscreenClose,
        categoryIconOptions,
        categoryColorOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

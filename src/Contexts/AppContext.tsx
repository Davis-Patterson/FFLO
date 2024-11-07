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
import Flower1 from 'Svgs/Flower1';
import Flower2 from 'Svgs/Flower2';
import PlantIcon from 'Svgs/PlantIcon';
import BerryBranch from 'Svgs/BerryBranch';
import Branch1 from 'Svgs/Branch1';
import Branch2 from 'Svgs/Branch2';
import Branch3 from 'Svgs/Branch3';
import Flower3 from 'Svgs/Flower3';
import FlowerBranch1 from 'Svgs/FlowerBranch1';
import FlowerBranch2 from 'Svgs/FlowerBranch2';
import GrassesIcon from 'Svgs/GrassesIcon';
import GrassIcon from 'Svgs/GrassIcon';
import Leaf2 from 'Svgs/Leaf2';
import Leaf3 from 'Svgs/Leaf3';
import PlantBuds1 from 'Svgs/PlantBuds1';
import PlantBuds2 from 'Svgs/PlantBuds2';
import TreeBranch from 'Svgs/TreeBranch';
import WreathIcon from 'Svgs/WreathIcon';

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
  due_date: string;
  reserved: boolean;
  is_active: boolean;
  late: boolean;
  book: Book;
  language: string;
  rating: number | null;
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
  updateSingleBook: (updatedBook: Book) => void;
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
  formatDate: (dateString: string) => string;
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
  natureIcons: { [key: number]: React.FC };
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
  const updateSingleBook = (updatedBook: Book) => {
    setAllBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

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

  const months: { [key: number]: string } = {
    1: language === 'English' ? 'Jan' : 'Jan',
    2: language === 'English' ? 'Feb' : 'Fév',
    3: language === 'English' ? 'Mar' : 'Mar',
    4: language === 'English' ? 'Apr' : 'Avr',
    5: language === 'English' ? 'May' : 'Mai',
    6: language === 'English' ? 'Jun' : 'Juin',
    7: language === 'English' ? 'Jul' : 'Juil',
    8: language === 'English' ? 'Aug' : 'Août',
    9: language === 'English' ? 'Sep' : 'Sep',
    10: language === 'English' ? 'Oct' : 'Oct',
    11: language === 'English' ? 'Nov' : 'Nov',
    12: language === 'English' ? 'Dec' : 'Déc',
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = months[date.getMonth() + 1];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
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

  const natureIcons: { [key: number]: React.FC } = {
    1: BerryBranch,
    2: Branch1,
    3: Branch2,
    4: Branch3,
    5: Flower1,
    6: Flower2,
    7: Flower3,
    8: FlowerBranch1,
    9: FlowerBranch2,
    10: GrassesIcon,
    11: GrassIcon,
    12: Leaf2,
    13: Leaf3,
    14: PlantBuds1,
    15: PlantBuds2,
    16: PlantIcon,
    17: TreeBranch,
    18: WreathIcon,
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
        updateSingleBook,
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
        formatDate,
        fullscreenOpen,
        fullscreenClose,
        categoryIconOptions,
        categoryColorOptions,
        natureIcons,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

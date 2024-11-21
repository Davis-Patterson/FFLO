import { createContext, ReactNode, useState, useEffect } from 'react';
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
import BerryBranch1 from 'Svgs/BerryBranch1';
import BerryBranch2 from 'Svgs/BerryBranch2';
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
import BeanstalkIcon from 'Svgs/BeanstalkIcon';
import Flowers1 from 'Svgs/Flowers1';
import Flowers2 from 'Svgs/Flowers2';
import Flowers3 from 'Svgs/Flowers3';
import ButterflyIcon from 'Svgs/ButterflyIcon';
import FlowerDots from 'Svgs/FlowerDots';

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

interface OnHoldBook {
  hold_date: string;
  book: Book;
}

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
  on_hold: OnHoldBook[];
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

export interface Review {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

interface AppContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  authUser: User | null;
  setAuthUser: (user: User | null) => void;
  allBooks: Book[];
  setAllBooks: (books: Book[]) => void;
  updateSingleBook: (updatedBook: Book) => void;
  deleteSingleBook: (bookId: number) => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  updateSingleCategory: (updatedCategory: Category) => void;
  deleteSingleCategory: (categoryId: number) => void;
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
  updateSingleReview: (updatedReview: Review) => void;
  deleteSingleReview: (reviewId: number) => void;

  tokenVerified: boolean;
  setTokenVerified: (value: boolean) => void;
  booksFetched: boolean;
  setBooksFetched: (value: boolean) => void;
  categoriesFetched: boolean;
  setCategoriesFetched: (value: boolean) => void;
  reviewsFetched: boolean;
  setReviewsFetched: (value: boolean) => void;

  bookmarkedBooks: Book[];
  setBookmarkedBooks: (books: Book[]) => void;
  selectedBook: Book | null;
  setSelectedBook: (book: Book | null) => void;

  membershipBannerDismissed: boolean;
  setMembershipBannerDismissed: (value: boolean) => void;

  showFullscreen: boolean;
  setShowFullscreen: (value: boolean) => void;
  fullscreenData: FullscreenData;
  setFullscreenData: (data: FullscreenData) => void;
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
  wasPaused: boolean;
  setWasPaused: (value: boolean) => void;

  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
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

  mobileWidth: boolean;
  visibleCategories: number;
  visibleBooks: number;
  bookRows: number;
  setBookRows: (bookRows: number) => void;

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
  fullscreenClose: () => void;
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
    setAllBooks((prevBooks) => {
      const bookExists = prevBooks.some((book) => book.id === updatedBook.id);

      return bookExists
        ? prevBooks.map((book) =>
            book.id === updatedBook.id ? updatedBook : book
          )
        : [...prevBooks, updatedBook];
    });
  };
  const deleteSingleBook = (bookId: number) => {
    setAllBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const [categories, setCategories] = useState<any[]>([]);
  const updateSingleCategory = (updatedCategory: Category) => {
    setCategories((prevCategories) => {
      const categoryExists = prevCategories.some(
        (category) => category.id === updatedCategory.id
      );

      return categoryExists
        ? prevCategories.map((category) =>
            category.id === updatedCategory.id ? updatedCategory : category
          )
        : [...prevCategories, updatedCategory];
    });
  };
  const deleteSingleCategory = (categoryId: number) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryId)
    );
  };

  const [reviews, setReviews] = useState<Review[]>([]);
  const updateSingleReview = (updatedReview: Review) => {
    setReviews((prevReviews) => {
      const reviewExists = prevReviews.some(
        (review) => review.id === updatedReview.id
      );

      return reviewExists
        ? prevReviews.map((review) =>
            review.id === updatedReview.id ? updatedReview : review
          )
        : [...prevReviews, updatedReview];
    });
  };
  const deleteSingleReview = (reviewId: number) => {
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== reviewId)
    );
  };

  const [tokenVerified, setTokenVerified] = useState<boolean>(false);
  const [booksFetched, setBooksFetched] = useState<boolean>(false);
  const [categoriesFetched, setCategoriesFetched] = useState<boolean>(false);
  const [reviewsFetched, setReviewsFetched] = useState<boolean>(false);

  const [bookmarkedBooks, setBookmarkedBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const [membershipBannerDismissed, setMembershipBannerDismissed] =
    useState(false);
  const [showFullscreen, setShowFullscreen] = useState<boolean>(false);
  const [fullscreenData, setFullscreenData] = useState({
    src: '',
    alt: '',
    title: '',
    author: '',
    desc: '',
  });
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [wasPaused, setWasPaused] = useState<boolean>(false);

  const [showMenu, setShowMenu] = useState(false);
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

  const [fetchError, setFetchError] = useState<boolean>(false);

  const [mobileWidth, setMobileWidth] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<number>(4);
  const [visibleBooks, setVisibleBooks] = useState<number>(4);
  const [bookRows, setBookRows] = useState<number>(2);

  const determineScreenWidth = (): void => {
    if (window.innerWidth <= 620) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  };

  const determineCategoryItems = (): void => {
    if (window.innerWidth <= 649) {
      setVisibleCategories(2);
    }
    if (window.innerWidth >= 650 && window.innerWidth <= 849) {
      setVisibleCategories(3);
    }
    if (window.innerWidth >= 850 && window.innerWidth <= 1049) {
      setVisibleCategories(4);
    }
    if (window.innerWidth >= 1050 && window.innerWidth <= 1249) {
      setVisibleCategories(5);
    }
    if (window.innerWidth >= 1250 && window.innerWidth <= 1449) {
      setVisibleCategories(6);
    }
    if (window.innerWidth > 1450) {
      setVisibleCategories(7);
    }
  };

  const determineBookItems = (): void => {
    if (window.innerWidth <= 549) {
      setVisibleBooks(2);
    }
    if (window.innerWidth >= 550 && window.innerWidth <= 620) {
      setVisibleBooks(3);
    }
    if (window.innerWidth >= 621 && window.innerWidth <= 699) {
      setVisibleBooks(2);
    }
    if (window.innerWidth >= 700 && window.innerWidth <= 879) {
      setVisibleBooks(3);
    }
    if (window.innerWidth >= 880 && window.innerWidth <= 1059) {
      setVisibleBooks(4);
    }
    if (window.innerWidth >= 1060 && window.innerWidth <= 1249) {
      setVisibleBooks(5);
    }
    if (window.innerWidth >= 1250 && window.innerWidth <= 1439) {
      setVisibleBooks(6);
    }
    if (window.innerWidth >= 1440 && window.innerWidth <= 1629) {
      setVisibleBooks(7);
    }
    if (window.innerWidth >= 1630 && window.innerWidth <= 1819) {
      setVisibleBooks(8);
    }
    if (window.innerWidth >= 1820 && window.innerWidth <= 2009) {
      setVisibleBooks(9);
    }
    if (window.innerWidth > 2010) {
      setVisibleBooks(10);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      determineScreenWidth();
      determineCategoryItems();
      determineBookItems();
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    setIsPaused(wasPaused);
    setTimeout(() => {
      setFullscreenData({
        src: '',
        alt: '',
        title: '',
        author: '',
        desc: '',
      });
    }, 350);
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

  const natureIcons: {
    [key: number]: React.FC<React.SVGProps<SVGSVGElement>>;
  } = {
    1: BeanstalkIcon,
    2: BerryBranch1,
    3: BerryBranch2,
    4: Branch1,
    5: Branch2,
    6: Branch3,
    7: ButterflyIcon,
    8: Flower1,
    9: Flower2,
    10: Flower3,
    11: FlowerBranch1,
    12: FlowerBranch2,
    13: FlowerDots,
    14: Flowers1,
    15: Flowers2,
    16: Flowers3,
    17: GrassesIcon,
    18: GrassIcon,
    19: Leaf2,
    20: Leaf3,
    21: PlantBuds1,
    22: PlantBuds2,
    23: PlantIcon,
    24: TreeBranch,
    25: WreathIcon,
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
        deleteSingleBook,
        categories,
        setCategories,
        updateSingleCategory,
        deleteSingleCategory,
        reviews,
        setReviews,
        updateSingleReview,
        deleteSingleReview,

        tokenVerified,
        setTokenVerified,
        booksFetched,
        setBooksFetched,
        categoriesFetched,
        setCategoriesFetched,
        reviewsFetched,
        setReviewsFetched,

        bookmarkedBooks,
        setBookmarkedBooks,
        selectedBook,
        setSelectedBook,

        membershipBannerDismissed,
        setMembershipBannerDismissed,

        showFullscreen,
        setShowFullscreen,
        fullscreenData,
        setFullscreenData,
        isPaused,
        setIsPaused,
        wasPaused,
        setWasPaused,

        showMenu,
        setShowMenu,
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

        mobileWidth,
        visibleCategories,
        visibleBooks,
        bookRows,
        setBookRows,

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

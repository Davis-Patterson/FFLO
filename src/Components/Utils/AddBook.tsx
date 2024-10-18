import React, { useState, useEffect, useRef } from 'react';
import ServerApi from 'Utilities/ServerApi';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Utils/AddBook.css';

const AddBook: React.FC = () => {
  const { getCategories, createBook } = ServerApi();

  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    showAddBook,
    setShowAddBook,
    language,
    handleLanguageChange,
  } = context;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const [buttonActive, setButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const addBookContainerRef = useRef<HTMLDivElement>(null);

  // Translations
  const bookCreateHeaderText =
    language === 'EN' ? 'Add Book' : 'Ajouter un Livre';
  const bookCreateSubtext =
    language === 'EN'
      ? 'Upload new books to the library'
      : 'Téléchargez de nouveaux livres dans la bibliothèque';
  const bookTitlePlaceholder = language === 'EN' ? 'Title*' : 'Titre*';
  const bookAuthorPlaceholder = language === 'EN' ? 'Author*' : 'Auteur*';
  const bookQuantityPlaceholder = language === 'EN' ? 'Quantity' : 'Quantité';
  const bookCreateSubmitText = language === 'EN' ? 'Submit' : 'Soumettre';

  useEffect(() => {
    if (showAddBook) {
      setCategoriesLoading(true);
      const fetchCategories = async () => {
        const result = await getCategories();
        if (result.success) {
          setCategories(result.data);
        } else {
          console.error('Failed to load categories');
        }
        // setCategoriesLoading(false);
      };

      fetchCategories();
      document.body.classList.add('book-open');
    } else {
      document.body.classList.remove('book-open');
    }
  }, [showAddBook]);

  useEffect(() => {
    if (showAddBook) {
      document.body.classList.add('book-open');
    } else {
      document.body.classList.remove('book-open');
    }
  }, [showAddBook]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addBookContainerRef.current &&
        !addBookContainerRef.current.contains(event.target as Node)
      ) {
        setShowAddBook(false);
      }
    };

    if (showAddBook) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAddBook, setShowAddBook]);

  useEffect(() => {
    const isFormEmpty = !title.trim() || !author.trim();
    setButtonActive(!isFormEmpty);
  }, [title, author]);

  const handleBookCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const selectedQuantity = parseInt(quantity) || 1;

    const result = await createBook(
      title,
      author,
      selectedQuantity,
      imageFile ? [imageFile] : [],
      selectedCategories
    );

    if (result.success) {
      console.log('Book created successfully');
      setShowAddBook(false);
    } else {
      setErrorMessage('Failed to create book');
    }

    setIsLoading(false);
  };

  const handleClose = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowAddBook(false);
  };

  return (
    <>
      {showAddBook && (
        <div className='edit-overlay'>
          <section
            ref={addBookContainerRef}
            className={`edit-container ${showAddBook ? 'fade-in' : 'fade-out'}`}
          >
            <div className='edit-language-toggle'>
              {language === 'FR' && (
                <p
                  className='edit-lang-toggle'
                  onClick={() => handleLanguageChange('EN')}
                >
                  EN
                </p>
              )}
              {language === 'EN' && (
                <p
                  className='edit-lang-toggle'
                  onClick={() => handleLanguageChange('FR')}
                >
                  FR
                </p>
              )}
            </div>
            <XIcon
              className='edit-x-icon'
              onMouseDown={(e) => handleClose(e)}
            />
            {authToken && (
              <>
                <div className='book-create-header'>
                  <TitleFlair className='book-create-flair-left' />
                  <p className='book-create-header-text'>
                    {bookCreateHeaderText}
                  </p>
                  <TitleFlair className='book-create-flair-right' />
                </div>
                <p className='book-create-header-subtext'>
                  {bookCreateSubtext}
                </p>
                <form onSubmit={handleBookCreate}>
                  <div>
                    <input
                      type='file'
                      name='image'
                      accept='image/*'
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        setImageFile(file || null);
                      }}
                      className='book-create-input'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      name='title'
                      value={title}
                      required
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={bookTitlePlaceholder}
                      className='book-create-input'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      name='author'
                      value={author}
                      required
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder={bookAuthorPlaceholder}
                      className='book-create-input'
                    />
                  </div>
                  <div>
                    <input
                      type='number'
                      name='quantity'
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder={bookQuantityPlaceholder}
                      className='book-create-input'
                    />
                  </div>
                  {categoriesLoading ? (
                    <LinearProgress
                      color='inherit'
                      style={{ margin: '-3px 0px 4px 0px' }}
                    />
                  ) : (
                    categories.length > 0 && (
                      <div>
                        <h3>Select Categories:</h3>
                        {categories.map((category) => (
                          <div key={category.id}>
                            <label>
                              <input
                                type='checkbox'
                                value={category.id}
                                onChange={(e) => {
                                  const categoryId = parseInt(e.target.value);
                                  if (e.target.checked) {
                                    setSelectedCategories([
                                      ...selectedCategories,
                                      categoryId,
                                    ]);
                                  } else {
                                    setSelectedCategories(
                                      selectedCategories.filter(
                                        (id) => id !== categoryId
                                      )
                                    );
                                  }
                                }}
                              />
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    )
                  )}
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    type='submit'
                    className={`${
                      buttonActive ? 'submit-button' : 'inactive-button'
                    }`}
                    disabled={!buttonActive || isLoading}
                  >
                    {isLoading ? (
                      <LinearProgress
                        style={{ marginTop: '-2px' }}
                        color='inherit'
                      />
                    ) : (
                      bookCreateSubmitText
                    )}
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default AddBook;

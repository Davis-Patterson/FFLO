import React, { useState, useEffect, useRef } from 'react';
import ServerApi from 'Utilities/ServerApi';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import GearIcon from 'Svgs/GearIcon';
import BackArrow from 'Svgs/BackArrow';
import BookIcon from 'Svgs/BookIcon';
import TrashIcon from 'Svgs/TrashIcon';
import CheckIcon from 'Svgs/CheckIcon';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Utils/AddBook.css';

const AddBook: React.FC = () => {
  const {
    getCategories,
    createBook,
    createCategory,
    deleteCategory,
    updateCategory,
    getBooks,
  } = ServerApi();

  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    showAddBookWindow,
    setShowAddBookWindow,
    language,
    handleLanguageChange,
    categories,
    setCategories,
    setAllBooks,
    categoryIconOptions,
    categoryColorOptions,
  } = context;

  const [initialCategoryData, setInitialCategoryData] = useState<{
    initialCategoryName: string;
    initialCategoryDesc: string;
    initialCategoryIcon: number | null;
    initialCategoryColor: number | null;
  }>({
    initialCategoryName: '',
    initialCategoryDesc: '',
    initialCategoryIcon: null,
    initialCategoryColor: null,
  });

  const [showAddBook, setShowAddBook] = useState(true);
  const [showAddCategories, setShowAddCategories] = useState(false);
  const [showEditCategory, setShowEditCategory] = useState(false);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [flair, setFlair] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryIcon, setCategoryIcon] = useState<number | null>(null);
  const [categoryColor, setCategoryColor] = useState<number | null>(null);

  const [showAddBookWindowButtonActive, setShowAddBookWindowButtonActive] =
    useState(false);
  const [showAddCategoryButtonActive, setShowAddCategoryButtonActive] =
    useState(false);
  const [showEditCategoryButtonActive, setShowEditCategoryButtonActive] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoryAddLoading, setCategoryAddLoading] = useState(false);
  const [categoryEditLoading, setCategoryEditLoading] = useState(false);
  const [showDeletes, setShowDeletes] = useState(false);

  const [editCategoryId, setEditCategoryId] = useState('');
  const [editCategoryName, setEditCategoryName] = useState('');
  const [editCategoryDesc, setEditCategoryDesc] = useState('');
  const [editCategoryIcon, setEditCategoryIcon] = useState<number | null>(null);
  const [editCategoryColor, setEditCategoryColor] = useState<number | null>(
    null
  );

  const showAddBookWindowContainerRef = useRef<HTMLDivElement>(null);

  // Translations
  const bookCreateHeaderText =
    language === 'EN' ? 'Add Book' : 'Ajouter un Livre';
  const bookCreateSubtext =
    language === 'EN'
      ? 'Upload a new book to the collection'
      : 'Téléchargez un nouveau livre dans la collection';
  const bookTitlePlaceholder = language === 'EN' ? 'Title*' : 'Titre*';
  const bookAuthorPlaceholder = language === 'EN' ? 'Author*' : 'Auteur*';
  const descPlaceholder = language === 'EN' ? 'Description' : 'Description';
  const bookFlairPlaceholder = language === 'EN' ? 'Flair' : 'Flair';
  const bookQuantityPlaceholder = language === 'EN' ? 'Quantity' : 'Quantité';
  const bookCreateSubmitText = language === 'EN' ? 'Submit' : 'Soumettre';
  const requiredText = language === 'EN' ? '*required' : '*obligatoire';
  const categoriesText = language === 'EN' ? 'Categories:' : 'Catégories:';
  const noCategoriesText =
    language === 'EN' ? 'No categories.' : 'Aucune catégorie.';
  const categoryAddHeaderText = language === 'EN' ? 'Categories' : 'Catégories';
  const categoryAddSubtext =
    language === 'EN' ? 'Add a new category' : 'Ajouter une nouvelle catégorie';
  const categoryEditSubtext =
    language === 'EN'
      ? 'Make category modifications'
      : 'Apporter des modifications à la catégorie';
  const categoryNamePlaceholder =
    language === 'EN' ? 'Category Name*' : 'Nom de la Catégorie*';
  const categoryDescPlaceholder =
    language === 'EN'
      ? 'Category Description*'
      : 'Description de la catégorie*';
  const categoryIconPlaceholder =
    language === 'EN' ? 'Category Icon' : 'Icône de catégorie';
  const categoryColorPlaceholder =
    language === 'EN' ? 'Category Color' : 'Catégorie couleur';
  const categoryEditHeaderText =
    language === 'EN' ? 'Edit Category' : 'Modifier la Catégorie';

  const categoryHeaderStyle = {
    margin: showAddBookWindowButtonActive
      ? '-2px 0px 0px 0px'
      : '-12px 0px 0px 0px',
  };
  const categoryGearStyle = {
    margin: showAddBookWindowButtonActive
      ? '1px 0px 0px 5px'
      : '3px 0px 0px 5px',
  };

  useEffect(() => {
    if (showAddBookWindow) {
      setCategoriesLoading(true);
      const fetchCategories = async () => {
        const result = await getCategories();
        if (result.success) {
          setCategories(result.data);
        } else {
          console.error('Failed to load categories');
        }
        setCategoriesLoading(false);
      };

      fetchCategories();
      document.body.classList.add('book-open');
    } else {
      document.body.classList.remove('book-open');
    }
  }, [showAddBookWindow]);

  useEffect(() => {
    if (showAddBookWindow) {
      document.body.classList.add('book-open');
    } else {
      document.body.classList.remove('book-open');
    }
  }, [showAddBookWindow]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showAddBookWindowContainerRef.current &&
        !showAddBookWindowContainerRef.current.contains(event.target as Node)
      ) {
        setShowAddBookWindow(false);
        setShowAddBook(true);
        setShowAddCategories(false);
        setShowDeletes(false);
        setShowEditCategory(false);
        setTitle('');
        setAuthor('');
        setQuantity('');
        setImageFile(null);
        setSelectedCategories([]);
        setFlair('');
        setCategoryIcon(null);
        setEditCategoryIcon(null);
        setCategoryColor(null);
        setEditCategoryColor(null);
      }
    };

    if (showAddBookWindow) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAddBookWindow, setShowAddBookWindow]);

  useEffect(() => {
    const isFormEmpty = !title.trim() || !author.trim();
    setShowAddBookWindowButtonActive(!isFormEmpty);

    const isCategoryFormEmpty =
      !categoryName.trim() ||
      !categoryDescription.trim() ||
      categoryIcon === null ||
      categoryColor === null;
    setShowAddCategoryButtonActive(!isCategoryFormEmpty);

    const hasCategoryFormChanged =
      (editCategoryName.trim() !== initialCategoryData.initialCategoryName &&
        editCategoryName.trim() !== '') ||
      (editCategoryDesc.trim() !== initialCategoryData.initialCategoryDesc &&
        editCategoryDesc.trim() !== '') ||
      (editCategoryIcon !== initialCategoryData.initialCategoryIcon &&
        editCategoryIcon !== null) ||
      (editCategoryColor !== initialCategoryData.initialCategoryColor &&
        editCategoryColor !== null);

    setShowEditCategoryButtonActive(hasCategoryFormChanged);
  }, [
    title,
    author,
    categoryName,
    editCategoryName,
    categoryDescription,
    editCategoryDesc,
    categoryIcon,
    editCategoryIcon,
    categoryColor,
    editCategoryColor,
    initialCategoryData,
  ]);

  const handleBookCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const selectedQuantity = parseInt(quantity) || 1;

    const result = await createBook(
      title,
      author,
      description,
      selectedQuantity,
      imageFile ? [imageFile] : [],
      selectedCategories,
      flair
    );

    if (result.success) {
      console.log('Book created successfully');
      setShowAddBookWindow(false);
      setShowDeletes(false);
    } else {
      setErrorMessage('Failed to create book');
      setTimeout(() => setErrorMessage(''), 3000);
    }

    const fetchBooks = async () => {
      const result = await getBooks();
      if (result.success) {
        setAllBooks(result.data ?? []);
      } else {
        console.error('Failed to load books');
      }
    };

    fetchBooks();

    setIsLoading(false);
    setTitle('');
    setAuthor('');
    setDescription('');
    setQuantity('');
    setImageFile(null);
    setSelectedCategories([]);
    setFlair('');
  };

  const handleCategoryCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCategoryAddLoading(true);

    if (
      !categoryName.trim() ||
      !categoryDescription.trim() ||
      categoryIcon === null ||
      categoryColor === null
    ) {
      setErrorMessage('Please ensure all fields are filled.');
      setCategoryAddLoading(false);
      return;
    }

    const result = await createCategory(
      categoryName,
      categoryDescription,
      categoryIcon,
      categoryColor
    );

    if (result.success) {
      setCategories(result.data.categories);

      setCategoryName('');
      setCategoryDescription('');
      setCategoryIcon(null);
      setCategoryColor(null);
    } else {
      setErrorMessage('Failed to create category');
      setTimeout(() => setErrorMessage(''), 3000);
    }

    setCategoryAddLoading(false);
  };

  const handleDeleteCategory = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    categoryId: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    try {
      const result = await deleteCategory(categoryId);
      if (result.success) {
        console.log(`Category ${categoryId} deleted successfully.`);
        setCategories(
          categories.filter((category) => category.id !== categoryId)
        );
      } else {
        console.error('Failed to delete category');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleCategoryUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCategoryEditLoading(true);

    try {
      const result = await updateCategory(
        Number(editCategoryId),
        editCategoryName,
        editCategoryDesc,
        editCategoryIcon ?? 1,
        editCategoryColor ?? 1
      );

      if (result.success) {
        console.log(`Category ${editCategoryId} updated successfully`);

        setCategories(result.data.categories);

        setEditCategoryId('');
        setEditCategoryName('');
        setEditCategoryDesc('');
        setEditCategoryIcon(null);
        setEditCategoryColor(null);
        setShowEditCategory(false);
        setShowAddCategories(true);
      } else {
        setErrorMessage('Failed to update category');
      }
    } catch (error) {
      console.error('Error updating category:', error);
      setErrorMessage('Error occurred while updating category');
    } finally {
      setCategoryEditLoading(false);
    }
  };

  const handleShowCategories = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowAddBook(false);
    setShowEditCategory(false);
    setShowAddCategories(true);
  };

  const handleCloseCategories = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowAddCategories(false);
    setShowEditCategory(false);
    setShowAddBook(true);
  };

  const handleCategoryIconSelect = (
    e: React.MouseEvent,
    iconNumber: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setCategoryIcon((prevIcon) =>
      prevIcon === iconNumber ? null : iconNumber
    );
  };

  const handleEditCategoryIconSelect = (
    e: React.MouseEvent,
    iconNumber: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setEditCategoryIcon((prevIcon) =>
      prevIcon === iconNumber ? null : iconNumber
    );
  };

  const handleCategoryColorSelect = (
    e: React.MouseEvent,
    colorNumber: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setCategoryColor((prevColor) =>
      prevColor === colorNumber ? null : colorNumber
    );
  };

  const handleEditCategoryColorSelect = (
    e: React.MouseEvent,
    colorNumber: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setEditCategoryColor((prevColor) =>
      prevColor === colorNumber ? null : colorNumber
    );
  };

  const handleClose = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowAddBookWindow(false);
    setShowEditCategory(false);
    setShowDeletes(false);
    setShowAddBook(true);

    setTitle('');
    setAuthor('');
    setQuantity('');
    setImageFile(null);
    setSelectedCategories([]);
    setFlair('');
  };

  const handleShowDeletes = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowDeletes(true);
  };

  const handleHideDeletes = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowDeletes(false);
  };

  const handleShowEditCategory = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    categoryId: number,
    categoryName: string,
    categoryDesc: string,
    categoryIcon: number,
    categoryColor: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setEditCategoryId(categoryId.toString());
    setEditCategoryName(categoryName);
    setEditCategoryDesc(categoryDesc);
    setEditCategoryIcon(categoryIcon);
    setEditCategoryColor(categoryColor);
    setInitialCategoryData({
      initialCategoryName: categoryName,
      initialCategoryDesc: categoryDesc,
      initialCategoryIcon: categoryIcon,
      initialCategoryColor: categoryColor,
    });

    setShowAddBook(false);
    setShowAddCategories(false);
    setShowEditCategory(true);
  };

  const handleBackToCategories = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setEditCategoryId('');
    setEditCategoryName('');
    setEditCategoryDesc('');

    setShowAddBook(false);
    setShowEditCategory(false);
    setShowAddCategories(true);
  };

  const sortedCategories = categories.sort((a, b) => {
    const isANumber = /^\d/.test(a.name);
    const isBNumber = /^\d/.test(b.name);

    if (isANumber && !isBNumber) {
      return -1;
    }
    if (!isANumber && isBNumber) {
      return 1;
    }

    return a.name.localeCompare(b.name);
  });

  return (
    <>
      {showAddBookWindow && authToken && (
        <div className='book-create-overlay'>
          <section
            ref={showAddBookWindowContainerRef}
            className={`book-create-container ${
              showAddBookWindow ? 'fade-in' : 'fade-out'
            }`}
          >
            <div className='book-create-language-toggle'>
              {language === 'FR' && (
                <p
                  className='book-create-lang-toggle'
                  onClick={() => handleLanguageChange('EN')}
                >
                  EN
                </p>
              )}
              {language === 'EN' && (
                <p
                  className='book-create-lang-toggle'
                  onClick={() => handleLanguageChange('FR')}
                >
                  FR
                </p>
              )}
            </div>
            {showAddBook && (
              <XIcon
                className='book-create-x-icon'
                onMouseDown={(e) => handleClose(e)}
              />
            )}
            {showAddCategories && (
              <BackArrow
                className='book-create-x-icon'
                onMouseDown={(e) => handleCloseCategories(e)}
              />
            )}
            {showEditCategory && (
              <BackArrow
                className='book-create-x-icon'
                onMouseDown={(e) => handleBackToCategories(e)}
              />
            )}
            {showAddBook && (
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
                      type='text'
                      name='title'
                      value={title}
                      required
                      maxLength={255}
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
                      maxLength={255}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder={bookAuthorPlaceholder}
                      className='book-create-input'
                    />
                  </div>
                  <div>
                    <textarea
                      name='description'
                      value={description}
                      maxLength={1200}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={descPlaceholder}
                      className='book-add-desc-input'
                    />
                  </div>
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
                  <div className='book-create-flair-quantity-container'>
                    <div>
                      <input
                        type='text'
                        name='flair'
                        value={flair}
                        maxLength={10}
                        onChange={(e) => setFlair(e.target.value)}
                        placeholder={bookFlairPlaceholder}
                        className='book-create-flair-input'
                      />
                    </div>
                    <div>
                      <input
                        type='number'
                        name='quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder={`${bookQuantityPlaceholder} 1`}
                        className='book-create-quantity-input'
                      />
                    </div>
                  </div>
                  {!showAddBookWindowButtonActive && (
                    <p className='auth-required'>{requiredText}</p>
                  )}
                  <div className='category-container'>
                    <div
                      className='category-header-container'
                      style={categoryHeaderStyle}
                    >
                      <p className='category-title'>{categoriesText}</p>
                      <GearIcon
                        className='gear-icon'
                        onMouseDown={(e) => handleShowCategories(e)}
                        style={categoryGearStyle}
                      />
                    </div>
                    {categoriesLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      <>
                        {categories.length > 0 ? (
                          <>
                            {sortedCategories.map((category) => (
                              <div
                                key={category.id}
                                className='category-item-checkbox'
                                onClick={(e) => {
                                  const target = e.target as HTMLElement;
                                  if (target.tagName !== 'INPUT') {
                                    const categoryId = category.id;
                                    const isSelected =
                                      selectedCategories.includes(categoryId);
                                    if (isSelected) {
                                      setSelectedCategories(
                                        selectedCategories.filter(
                                          (id) => id !== categoryId
                                        )
                                      );
                                    } else {
                                      setSelectedCategories([
                                        ...selectedCategories,
                                        categoryId,
                                      ]);
                                    }
                                  }
                                }}
                              >
                                <label className='category-label'>
                                  <input
                                    type='checkbox'
                                    value={category.id}
                                    checked={selectedCategories.includes(
                                      category.id
                                    )}
                                    className='category-checkbox'
                                    onChange={(e) => {
                                      const categoryId = parseInt(
                                        e.target.value
                                      );
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
                                  <span className='category-text'>
                                    {category.name}
                                  </span>
                                  <div className='category-quantity-container'>
                                    <BookIcon className='book-icon' />
                                    <div className='category-quantity'>
                                      {category.quantity}
                                    </div>
                                  </div>
                                </label>
                              </div>
                            ))}
                          </>
                        ) : (
                          <p className='book-create-no-categories'>
                            {noCategoriesText}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    type='submit'
                    className={`${
                      showAddBookWindowButtonActive
                        ? 'submit-button'
                        : 'inactive-button'
                    }`}
                    disabled={!showAddBookWindowButtonActive || isLoading}
                  >
                    {isLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      bookCreateSubmitText
                    )}
                  </button>
                </form>
              </>
            )}
            {showAddCategories && (
              <>
                <div className='book-create-header'>
                  <TitleFlair className='book-create-flair-left' />
                  <p className='book-create-header-text'>
                    {categoryAddHeaderText}
                  </p>
                  <TitleFlair className='book-create-flair-right' />
                </div>
                <div className='category-container'>
                  <div className='category-header-container'>
                    <div className='category-title-garbage-container'>
                      <p className='category-title'>{categoriesText}</p>
                      {!showDeletes && categories.length > 0 && (
                        <TrashIcon
                          className='trash-icon'
                          onMouseDown={(e) => handleShowDeletes(e)}
                        />
                      )}
                      {showDeletes && categories.length > 0 && (
                        <CheckIcon
                          className='check-icon'
                          onMouseDown={(e) => handleHideDeletes(e)}
                        />
                      )}
                    </div>
                  </div>
                  {categoriesLoading ? (
                    <LinearProgress color='inherit' />
                  ) : (
                    <>
                      {categories.length > 0 ? (
                        <>
                          {sortedCategories.map((category) => (
                            <div key={category.id} className='category-item'>
                              <div className='category-list-container'>
                                <div className='category-list' />
                                <p className='category-text'>{`${category.name}`}</p>
                                <div className='category-quantity-container'>
                                  <BookIcon className='book-icon' />
                                  <div className='category-quantity'>
                                    {category.quantity}
                                  </div>
                                </div>
                              </div>
                              <div className='category-controls-container'>
                                <div className='category-garbage-container'>
                                  {showDeletes ? (
                                    <TrashIcon
                                      className='trash-icon'
                                      onMouseDown={(e) =>
                                        handleDeleteCategory(e, category.id)
                                      }
                                    />
                                  ) : (
                                    <GearIcon
                                      className='gear-icon'
                                      onMouseDown={(e) =>
                                        handleShowEditCategory(
                                          e,
                                          category.id,
                                          category.name,
                                          category.description,
                                          category.icon,
                                          category.color
                                        )
                                      }
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <p className='book-create-no-categories'>
                          {noCategoriesText}
                        </p>
                      )}
                    </>
                  )}
                </div>
                <form onSubmit={handleCategoryCreate}>
                  <p
                    className='book-create-header-subtext'
                    style={{ padding: '8px 0px 0px 0px' }}
                  >
                    {categoryAddSubtext}
                  </p>
                  <div>
                    <input
                      type='text'
                      name='name'
                      value={categoryName}
                      required
                      maxLength={15}
                      onChange={(e) => setCategoryName(e.target.value)}
                      placeholder={categoryNamePlaceholder}
                      className='book-create-input'
                    />
                  </div>
                  <div>
                    <textarea
                      name='description'
                      value={categoryDescription}
                      required
                      maxLength={50}
                      onChange={(e) => setCategoryDescription(e.target.value)}
                      placeholder={categoryDescPlaceholder}
                      className='category-desc-input'
                    />
                  </div>
                  <p className='category-label-text'>
                    {categoryIconPlaceholder}
                    {!showAddCategoryButtonActive ? '*' : null}
                  </p>
                  <div className='category-icon-container'>
                    {Object.entries(categoryIconOptions).map(
                      ([iconNumber, IconComponent]) => {
                        const iconNum = parseInt(iconNumber);
                        const isSelected = categoryIcon === iconNum;
                        const className = `category-icon ${
                          categoryIcon === null
                            ? ''
                            : isSelected
                            ? 'icon-selected'
                            : 'icon-inactive'
                        }`;
                        return (
                          <div
                            key={iconNum}
                            className={className}
                            onMouseDown={(e) =>
                              handleCategoryIconSelect(e, iconNum)
                            }
                          >
                            <IconComponent />
                          </div>
                        ) as React.ReactElement;
                      }
                    )}
                  </div>
                  <p className='category-label-text'>
                    {categoryColorPlaceholder}
                    {!showAddCategoryButtonActive ? '*' : null}
                  </p>
                  <div className='category-color-container'>
                    {Object.entries(categoryColorOptions).map(
                      ([colorNumber, colorValue]) => {
                        const colorNum = parseInt(colorNumber);
                        const isSelected = categoryColor === colorNum;
                        const className = `category-color-option ${
                          categoryColor === null
                            ? ''
                            : isSelected
                            ? 'color-selected'
                            : 'color-inactive'
                        }`;
                        return (
                          <div
                            key={colorNum}
                            className={className}
                            style={{ backgroundColor: colorValue }}
                            onMouseDown={(e) =>
                              handleCategoryColorSelect(e, colorNum)
                            }
                          />
                        ) as React.ReactElement;
                      }
                    )}
                  </div>
                  {!showAddCategoryButtonActive && (
                    <p className='auth-required'>{requiredText}</p>
                  )}
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    type='submit'
                    className={`${
                      showAddCategoryButtonActive
                        ? 'submit-button'
                        : 'inactive-button'
                    }`}
                    disabled={
                      !showAddCategoryButtonActive || categoryAddLoading
                    }
                  >
                    {categoryAddLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      bookCreateSubmitText
                    )}
                  </button>
                </form>
              </>
            )}
            {showEditCategory && (
              <>
                <div className='book-create-header'>
                  <TitleFlair className='book-create-flair-left' />
                  <p className='book-create-header-text'>
                    {categoryEditHeaderText}
                  </p>
                  <TitleFlair className='book-create-flair-right' />
                </div>
                <form onSubmit={handleCategoryUpdate}>
                  <p
                    className='book-create-header-subtext'
                    style={{ padding: '8px 0px 0px 0px' }}
                  >
                    {categoryEditSubtext}
                  </p>
                  <div>
                    <input
                      type='text'
                      name='name'
                      value={editCategoryName}
                      required
                      onChange={(e) => setEditCategoryName(e.target.value)}
                      placeholder={categoryNamePlaceholder}
                      className='book-create-input'
                    />
                  </div>
                  <div>
                    <textarea
                      name='description'
                      value={editCategoryDesc}
                      onChange={(e) => setEditCategoryDesc(e.target.value)}
                      placeholder={categoryDescPlaceholder}
                      className='category-desc-input'
                    />
                  </div>
                  <p className='category-label-text'>
                    {categoryIconPlaceholder}
                    {!showEditCategoryButtonActive ? '*' : null}
                  </p>
                  <div className='category-icon-container'>
                    {Object.entries(categoryIconOptions).map(
                      ([iconNumber, IconComponent]) => {
                        const iconNum = parseInt(iconNumber);
                        const isSelected = editCategoryIcon === iconNum;
                        const className = `category-icon ${
                          editCategoryIcon === null
                            ? ''
                            : isSelected
                            ? 'icon-selected'
                            : 'icon-inactive'
                        }`;
                        return (
                          <div
                            key={iconNum}
                            className={className}
                            onMouseDown={(e) =>
                              handleEditCategoryIconSelect(e, iconNum)
                            }
                          >
                            <IconComponent />
                          </div>
                        ) as React.ReactElement;
                      }
                    )}
                  </div>
                  <p className='category-label-text'>
                    {categoryColorPlaceholder}
                    {!showEditCategoryButtonActive ? '*' : null}
                  </p>
                  <div className='category-color-container'>
                    {Object.entries(categoryColorOptions).map(
                      ([colorNumber, colorValue]) => {
                        const colorNum = parseInt(colorNumber);
                        const isSelected = editCategoryColor === colorNum;
                        const className = `category-color-option ${
                          editCategoryColor === null
                            ? ''
                            : isSelected
                            ? 'color-selected'
                            : 'color-inactive'
                        }`;
                        return (
                          <div
                            key={colorNum}
                            className={className}
                            style={{ backgroundColor: colorValue }}
                            onMouseDown={(e) =>
                              handleEditCategoryColorSelect(e, colorNum)
                            }
                          />
                        ) as React.ReactElement;
                      }
                    )}
                  </div>
                  {!showEditCategoryButtonActive && (
                    <p className='auth-required'>{requiredText}</p>
                  )}
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    type='submit'
                    className={`${
                      showEditCategoryButtonActive
                        ? 'submit-button'
                        : 'inactive-button'
                    }`}
                    disabled={
                      !showEditCategoryButtonActive || categoryEditLoading
                    }
                  >
                    {categoryEditLoading ? (
                      <LinearProgress color='inherit' />
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

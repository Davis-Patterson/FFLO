import React, { useState, useEffect, useRef } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { CSS } from '@dnd-kit/utilities';
import ServerApi from 'Utilities/ServerApi';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import GearIcon from 'Svgs/GearIcon';
import BackArrow from 'Svgs/BackArrow';
import BookOpenIcon from 'Svgs/BookOpenIcon';
import TrashIcon from 'Svgs/TrashIcon';
import CheckIcon from 'Svgs/CheckIcon';
import DragIcon from 'Svgs/DragIcon';
import UKFlag from 'Svgs/UKFlag';
import FrenchFlag from 'Svgs/FrenchFlag';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Utils/AddBook.css';

const AddBook: React.FC = () => {
  const {
    getCategories,
    createBook,
    createCategory,
    deleteCategory,
    updateCategory,
    updateCategorySortOrder,
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
    initialCategoryFlair: string | null;
  }>({
    initialCategoryName: '',
    initialCategoryDesc: '',
    initialCategoryIcon: null,
    initialCategoryColor: null,
    initialCategoryFlair: '',
  });

  const [showAddBook, setShowAddBook] = useState(true);
  const [showListCategories, setShowListCategories] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showEditCategory, setShowEditCategory] = useState(false);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [bookLanguage, setBookLanguage] = useState<string>('');
  const [flair, setFlair] = useState<string>('');
  const [quantity, setQuantity] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryFlair, setCategoryFlair] = useState('');
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
  const [editCategoryFlair, setEditCategoryFlair] = useState('');
  const [editCategoryIcon, setEditCategoryIcon] = useState<number | null>(null);
  const [editCategoryColor, setEditCategoryColor] = useState<number | null>(
    null
  );

  const [categoryOrder, setCategoryOrder] = useState<number[]>([]);

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
  const languageText = language === 'EN' ? 'Language' : 'Langue';
  const languagePlaceholder =
    language === 'EN' ? 'Other language' : 'Autre langue';
  const requiredText = language === 'EN' ? '*required' : '*obligatoire';
  const noCategoriesText =
    language === 'EN' ? 'No categories.' : 'Aucune catégorie.';
  const categoryAddHeaderText = language === 'EN' ? 'Categories' : 'Catégories';
  const categoriesText = language === 'EN' ? 'Categories:' : 'Catégories:';
  const allCategoriesText =
    language === 'EN' ? 'All categories:' : 'Toutes les catégories:';
  const newCategoryText =
    language === 'EN' ? 'New Category' : 'Nouvelle catégorie';
  const addCategoryButtonText =
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
    if (errorMessage) {
      setTimeout(() => {
        console.log('Clearing Error Message.');
        setErrorMessage('');
      }, 3000);
    }
  }, [errorMessage]);

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
        setShowListCategories(false);
        setShowAddCategory(false);
        setShowDeletes(false);
        setShowEditCategory(false);
        setTitle('');
        setAuthor('');
        setQuantity('');
        setImageFile(null);
        setSelectedCategories([]);
        setFlair('');
        setBookLanguage('');
        setCategoryName('');
        setCategoryDescription('');
        setCategoryFlair('');
        setCategoryIcon(null);
        setCategoryColor(null);
        setEditCategoryName('');
        setEditCategoryDesc('');
        setEditCategoryFlair('');
        setEditCategoryIcon(null);
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
    const isFormEmpty = !title.trim() || !author.trim() || !bookLanguage.trim();
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
        editCategoryColor !== null) ||
      (initialCategoryData.initialCategoryFlair
        ? editCategoryFlair.trim().toLowerCase() !==
          initialCategoryData.initialCategoryFlair.trim().toLowerCase()
        : editCategoryFlair.trim() !== '');

    setShowEditCategoryButtonActive(hasCategoryFormChanged);
  }, [
    title,
    author,
    bookLanguage,
    categoryName,
    editCategoryName,
    categoryDescription,
    editCategoryDesc,
    categoryIcon,
    editCategoryIcon,
    categoryColor,
    editCategoryColor,
    editCategoryFlair,
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
      bookLanguage,
      selectedQuantity,
      imageFile ? [imageFile] : [],
      selectedCategories,
      flair
    );

    if (result.success) {
      console.log('Book created successfully');
      setShowAddBookWindow(false);
      setShowDeletes(false);
      setTitle('');
      setAuthor('');
      setDescription('');
      setQuantity('');
      setImageFile(null);
      setSelectedCategories([]);
      setFlair('');
      setBookLanguage('');

      const booksResult = await getBooks();
      if (booksResult.success) {
        setAllBooks(booksResult.data ?? []);
      } else {
        console.error('Failed to load books');
      }
    } else {
      setErrorMessage(result.error || 'Failed to create book');
    }

    setIsLoading(false);
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
      categoryColor,
      categoryFlair.trim() || undefined
    );

    if (result.success) {
      setCategories(result.data.categories);

      setCategoryName('');
      setCategoryDescription('');
      setCategoryIcon(null);
      setCategoryColor(null);
      setCategoryFlair('');
      setShowAddCategory(false);
      setShowListCategories(true);
    } else {
      setErrorMessage('Failed to create category');
    }

    setCategoryAddLoading(false);
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
        editCategoryColor ?? 1,
        editCategoryFlair.trim() || undefined
      );

      if (result.success) {
        console.log(`Category ${editCategoryId} updated successfully`);

        setCategories(result.data.categories);

        setEditCategoryId('');
        setEditCategoryName('');
        setEditCategoryDesc('');
        setEditCategoryFlair('');
        setEditCategoryIcon(null);
        setEditCategoryColor(null);
        setShowEditCategory(false);
        setShowAddCategory(false);
        setShowListCategories(true);
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

  const handleSetBookLanguage = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    languageOption: string
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    if (languageOption === bookLanguage) {
      setBookLanguage('');
    } else {
      setBookLanguage(languageOption);
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
    setShowAddCategory(false);
    setShowListCategories(true);
  };

  const handleCloseCategories = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowListCategories(false);
    setShowEditCategory(false);
    setShowAddCategory(false);
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

    setTitle('');
    setAuthor('');
    setQuantity('');
    setImageFile(null);
    setSelectedCategories([]);
    setFlair('');
    setBookLanguage('');

    setShowAddBookWindow(false);
    setShowEditCategory(false);
    setShowAddCategory(false);
    setShowDeletes(false);
    setShowAddBook(true);
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
    categoryColor: number,
    categoryFlair: string | null
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setEditCategoryId(categoryId.toString());
    setEditCategoryName(categoryName);
    setEditCategoryDesc(categoryDesc);
    setEditCategoryIcon(categoryIcon);
    setEditCategoryColor(categoryColor);
    setEditCategoryFlair(categoryFlair || '');
    setInitialCategoryData({
      initialCategoryName: categoryName,
      initialCategoryDesc: categoryDesc,
      initialCategoryIcon: categoryIcon,
      initialCategoryColor: categoryColor,
      initialCategoryFlair: categoryFlair,
    });

    setShowAddBook(false);
    setShowListCategories(false);
    setShowAddCategory(false);
    setShowEditCategory(true);
  };

  const handleShowAddCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowListCategories(false);
    setShowEditCategory(false);
    setShowAddCategory(true);
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
    setEditCategoryFlair('');
    setEditCategoryIcon(null);
    setEditCategoryColor(null);

    setShowAddBook(false);
    setShowEditCategory(false);
    setShowAddCategory(false);
    setShowListCategories(true);
  };

  useEffect(() => {
    setCategoryOrder(
      categories
        .map((category) => category.id)
        .sort((a: number, b: number) => {
          const categoryA = categories.find((cat) => cat.id === a);
          const categoryB = categories.find((cat) => cat.id === b);
          return (categoryA?.sort_order || 0) - (categoryB?.sort_order || 0);
        })
    );
  }, [categories]);

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = categoryOrder.indexOf(active.id);
      const newIndex = categoryOrder.indexOf(over.id);

      const newOrder = arrayMove(categoryOrder, oldIndex, newIndex);
      setCategoryOrder(newOrder);

      const orderedCategoryIds = newOrder;

      const result = await updateCategorySortOrder(orderedCategoryIds);
      if (result.success) {
        setCategories(result.data.categories);
      } else {
        console.error('Failed to persist category reordering on the server.');
      }
    }
  };

  const SortableCategoryItem = ({ category }: { category: any }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: category.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        className='category-item'
        {...attributes}
        {...listeners}
      >
        <div className='category-list-container'>
          <div className='category-list' />
          <p className='category-text'>{category.name}</p>
          <div className='category-quantity-container'>
            <BookOpenIcon className='book-icon' />
            <div className='category-quantity'>{category.quantity}</div>
          </div>
        </div>
        <div className='category-controls-container'>
          <div className='category-drag-container'>
            <DragIcon className='drag-icon' />
          </div>
          <div className='category-garbage-gear-container'>
            {showDeletes ? (
              <TrashIcon
                className='trash-icon'
                onMouseDown={(e) => handleDeleteCategory(e, category.id)}
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
                    category.color,
                    category.flair
                  )
                }
              />
            )}
          </div>
        </div>
      </div>
    );
  };

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
            <div className='portal-top-toggles'>
              <div className='book-create-language-toggle'>
                {language === 'FR' && (
                  <UKFlag
                    className='flag-icon'
                    onMouseDown={(e) => handleLanguageChange(e, 'EN')}
                  />
                )}
                {language === 'EN' && (
                  <>
                    <FrenchFlag
                      className='flag-icon'
                      onMouseDown={(e) => handleLanguageChange(e, 'FR')}
                    />
                  </>
                )}
              </div>
              {showAddBook && (
                <XIcon
                  className='book-create-x-icon'
                  onMouseDown={(e) => handleClose(e)}
                />
              )}
              {showListCategories && (
                <BackArrow
                  className='book-create-x-icon'
                  onMouseDown={(e) => handleCloseCategories(e)}
                />
              )}
              {showAddCategory && (
                <BackArrow
                  className='book-create-x-icon'
                  onMouseDown={(e) => handleBackToCategories(e)}
                />
              )}
              {showEditCategory && (
                <BackArrow
                  className='book-create-x-icon'
                  onMouseDown={(e) => handleBackToCategories(e)}
                />
              )}
            </div>
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
              </>
            )}
            {showListCategories && (
              <div className='book-create-header'>
                <TitleFlair className='book-create-flair-left' />
                <p className='book-create-header-text'>
                  {categoryAddHeaderText}
                </p>
                <TitleFlair className='book-create-flair-right' />
              </div>
            )}
            {showAddCategory && (
              <div className='book-create-header'>
                <TitleFlair className='book-create-flair-left' />
                <p className='book-create-header-text'>{newCategoryText}</p>
                <TitleFlair className='book-create-flair-right' />
              </div>
            )}
            {showEditCategory && (
              <div className='book-create-header'>
                <TitleFlair className='book-create-flair-left' />
                <p className='book-create-header-text'>
                  {categoryEditHeaderText}
                </p>
                <TitleFlair className='book-create-flair-right' />
              </div>
            )}
            <div className='scrollable-container'>
              {showAddBook && (
                <>
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
                    <p className='book-create-label-text'>{`${languageText}${
                      bookLanguage ? '' : '*'
                    }`}</p>
                    <div className='book-create-language-container'>
                      <div className='book-create-flag-input'>
                        <FrenchFlag
                          className={`create-flag ${
                            !bookLanguage
                              ? ''
                              : bookLanguage.toLowerCase() === 'french'
                              ? 'selected'
                              : 'unselected'
                          }`}
                          onMouseDown={(e) =>
                            handleSetBookLanguage(e, 'French')
                          }
                        />
                        <UKFlag
                          className={`create-flag ${
                            !bookLanguage
                              ? ''
                              : bookLanguage.toLowerCase() === 'english'
                              ? 'selected'
                              : 'unselected'
                          }`}
                          onMouseDown={(e) =>
                            handleSetBookLanguage(e, 'English')
                          }
                        />
                      </div>
                      <input
                        type='text'
                        name='Language'
                        value={bookLanguage}
                        maxLength={20}
                        onChange={(e) => setBookLanguage(e.target.value)}
                        placeholder={languagePlaceholder}
                        className='book-create-language-input'
                      />
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
                      <div className='category-book-add-scoll'>
                        {categoriesLoading ? (
                          <LinearProgress color='inherit' />
                        ) : (
                          <>
                            {categories.length > 0 ? (
                              <>
                                {categoryOrder.map((categoryId) => {
                                  const category = categories.find(
                                    (cat) => cat.id === categoryId
                                  );
                                  return category ? (
                                    <div
                                      key={category.id}
                                      className='category-item-checkbox'
                                      onClick={(e) => {
                                        const target = e.target as HTMLElement;
                                        if (target.tagName !== 'INPUT') {
                                          const isSelected =
                                            selectedCategories.includes(
                                              category.id
                                            );
                                          if (isSelected) {
                                            setSelectedCategories(
                                              selectedCategories.filter(
                                                (id) => id !== category.id
                                              )
                                            );
                                          } else {
                                            setSelectedCategories([
                                              ...selectedCategories,
                                              category.id,
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
                                          <BookOpenIcon className='book-icon' />
                                          <div className='category-quantity'>
                                            {category.quantity}
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  ) : null;
                                })}
                              </>
                            ) : (
                              <p className='book-create-no-categories'>
                                {noCategoriesText}
                              </p>
                            )}
                          </>
                        )}
                      </div>
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
              {showListCategories && (
                <>
                  <div className='category-container'>
                    <div className='category-header-container'>
                      <div className='category-title-garbage-container'>
                        <p className='category-title'>{allCategoriesText}</p>
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
                          <DndContext
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                            autoScroll={false}
                            modifiers={[restrictToVerticalAxis]}
                          >
                            <SortableContext
                              items={categoryOrder}
                              strategy={verticalListSortingStrategy}
                            >
                              {categoryOrder.map((categoryId) => {
                                const category = categories.find(
                                  (cat) => cat.id === categoryId
                                );
                                return category ? (
                                  <SortableCategoryItem
                                    key={category.id}
                                    category={category}
                                  />
                                ) : null;
                              })}
                            </SortableContext>
                          </DndContext>
                        ) : (
                          <p className='categories-create-no-categories'>
                            {noCategoriesText}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                  <button
                    type='submit'
                    className='submit-button'
                    onMouseDown={(e) => handleShowAddCategory(e)}
                    style={{ margin: '25px 0px 0px 0px' }}
                  >
                    {addCategoryButtonText}
                  </button>
                </>
              )}
              {showAddCategory && (
                <>
                  <form onSubmit={handleCategoryCreate}>
                    <div>
                      <input
                        type='text'
                        name='name'
                        value={categoryName}
                        required
                        maxLength={15}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder={categoryNamePlaceholder}
                        className='categories-create-input'
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
                    <div>
                      <input
                        type='text'
                        name='flair'
                        value={categoryFlair}
                        maxLength={10}
                        onChange={(e) => setCategoryFlair(e.target.value)}
                        placeholder={bookFlairPlaceholder}
                        className='book-create-input'
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
                    <div>
                      <input
                        type='text'
                        name='flair'
                        value={editCategoryFlair}
                        maxLength={10}
                        onChange={(e) => setEditCategoryFlair(e.target.value)}
                        placeholder={bookFlairPlaceholder}
                        className='book-create-input'
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
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default AddBook;

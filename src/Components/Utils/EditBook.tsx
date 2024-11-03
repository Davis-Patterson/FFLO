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
import { useContext } from 'react';
import { AppContext, BookImage } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import GearIcon from 'Svgs/GearIcon';
import BackArrow from 'Svgs/BackArrow';
import BookOpenIcon from 'Svgs/BookOpenIcon';
import TrashIcon from 'Svgs/TrashIcon';
import CheckIcon from 'Svgs/CheckIcon';
import BookCoverIcon from 'Svgs/BookCoverIcon';
import DragIcon from 'Svgs/DragIcon';
import UKFlag from 'Svgs/UKFlag';
import FrenchFlag from 'Svgs/FrenchFlag';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Utils/EditBook.css';

const EditBook: React.FC = () => {
  const {
    getCategories,
    updateBook,
    createCategory,
    deleteCategory,
    updateCategory,
    updateCategorySortOrder,
    getBooks,
    archiveBook,
    deleteBook,
  } = ServerApi();

  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    showBookEditWindow,
    setShowBookEditWindow,
    language,
    handleLanguageChange,
    categories,
    setCategories,
    setAllBooks,
    selectedBook,
    setSelectedBook,
    categoryIconOptions,
    categoryColorOptions,
  } = context;

  const [initialBookData, setInitialBookData] = useState<{
    title: string;
    author: string;
    description: string;
    bookLanguage: string;
    flair: string;
    quantity: string;
    selectedCategories: number[];
    images: BookImage[] | null;
  }>({
    title: '',
    author: '',
    description: '',
    bookLanguage: '',
    flair: '',
    quantity: '',
    selectedCategories: [] as number[],
    images: [],
  });

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

  const [showEditBook, setShowEditBook] = useState(true);
  const [showListCategories, setShowListCategories] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showEditCategory, setShowEditCategory] = useState(false);
  const [showArchiveOrDeleteBook, setShowArchiveOrDeleteBook] = useState(false);
  const [showArchiveBook, setShowArchiveBook] = useState(false);
  const [showDeleteBook, setShowDeleteBook] = useState(false);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [flair, setFlair] = useState('');
  const [bookLanguage, setBookLanguage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagesToRemove, setImagesToRemove] = useState<number[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [categoriesToRemove, setCategoriesToRemove] = useState<number[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryFlair, setCategoryFlair] = useState('');
  const [categoryIcon, setCategoryIcon] = useState<number | null>(null);
  const [categoryColor, setCategoryColor] = useState<number | null>(null);

  const [bookEditButtonActive, setBookEditButtonActive] = useState(false);
  const [showAddCategoryButtonActive, setShowAddCategoryButtonActive] =
    useState(false);
  const [showEditCategoryButtonActive, setShowEditCategoryButtonActive] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoryAddLoading, setCategoryAddLoading] = useState(false);
  const [categoryEditLoading, setCategoryEditLoading] = useState(false);
  const [archiveLoading, setArchiveLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeletes, setShowDeletes] = useState(false);

  const [editCategoryId, setEditCategoryId] = useState('');
  const [editCategoryName, setEditCategoryName] = useState('');
  const [editCategoryDesc, setEditCategoryDesc] = useState('');
  const [editCategoryFlair, setEditCategoryFlair] = useState('');
  const [editCategoryIcon, setEditCategoryIcon] = useState<number | null>(null);
  const [editCategoryColor, setEditCategoryColor] = useState<number | null>(
    null
  );

  console.log('images to remove, ', imagesToRemove);

  const [categoryOrder, setCategoryOrder] = useState<number[]>([]);

  const showBookEditWindowContainerRef = useRef<HTMLDivElement>(null);

  // Translations
  const bookEditHeaderText =
    language === 'EN' ? 'Modify Book' : 'Modifier le livre';
  const bookCreateSubtext =
    language === 'EN'
      ? 'Update the information of this book'
      : 'Mettre à jour les informations de ce livre';
  const bookTitlePlaceholder = language === 'EN' ? 'Title' : 'Titre';
  const bookAuthorPlaceholder = language === 'EN' ? 'Author' : 'Auteur';
  const descPlaceholder = language === 'EN' ? 'Description' : 'Description';
  const languageText = language === 'EN' ? 'Language' : 'Langue';
  const languagePlaceholder =
    language === 'EN' ? 'Other language' : 'Autre langue';
  const bookFlairPlaceholder = language === 'EN' ? 'Flair' : 'Flair';
  const bookQuantityPlaceholder = language === 'EN' ? 'Quantity' : 'Quantité';
  const bookCreateSubmitText = language === 'EN' ? 'Submit' : 'Soumettre';
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
      ? 'Category description*'
      : 'Description de la catégorie*';
  const categoryIconPlaceholder =
    language === 'EN' ? 'Category Icon' : 'Icône de catégorie';
  const categoryColorPlaceholder =
    language === 'EN' ? 'Category Color' : 'Catégorie couleur';
  const categoryEditHeaderText =
    language === 'EN' ? 'Edit Category' : 'Modifier la Catégorie';
  const newImagesUploadText =
    language === 'EN' ? 'Upload new images' : 'Télécharger de nouvelles images';
  const bookArchiveOrDeleteText =
    language === 'EN' ? 'Archive or Delete' : 'Archiver ou Supprimer';
  const archiveSubtext =
    language === 'EN' ? 'Archive the current book' : 'Archiver le livre actuel';
  const bookArchiveText = language === 'EN' ? 'Archive' : 'Archiver';
  const deleteSubtext =
    language === 'EN' ? 'Delete the current book' : 'Supprimer le livre actuel';
  const bookDeleteText = language === 'EN' ? 'Delete' : 'Supprimer';
  const confirmArchiveText =
    language === 'EN' ? 'Confirm Archive' : 'Confirmer la Archiver';
  const confirmDeleteText =
    language === 'EN' ? 'Confirm Delete' : 'Confirmer la Supprimer';
  const noImagesForThisBookText =
    language === 'EN'
      ? 'No images available for this book'
      : 'Aucune image disponible pour ce livre';

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        console.log('Clearing Error Message.');
        setErrorMessage('');
      }, 3000);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (selectedBook) {
      setTitle(selectedBook.title || '');
      setAuthor(selectedBook.author || '');
      setDescription(selectedBook.description || '');
      setBookLanguage(selectedBook.language || '');
      setFlair(selectedBook.flair || '');
      setQuantity(selectedBook.inventory.toString() || '');
      setSelectedCategories(selectedBook.categories || []);

      setInitialBookData({
        title: selectedBook.title || '',
        author: selectedBook.author || '',
        description: selectedBook.description || '',
        bookLanguage: selectedBook.language || '',
        flair: selectedBook.flair || '',
        quantity: selectedBook.inventory.toString() || '',
        selectedCategories: selectedBook.categories || [],
        images: selectedBook.images || [],
      });
    }
  }, [selectedBook]);

  useEffect(() => {
    if (showBookEditWindow) {
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
  }, [showBookEditWindow]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showBookEditWindowContainerRef.current &&
        !showBookEditWindowContainerRef.current.contains(event.target as Node)
      ) {
        setShowBookEditWindow(false);
        setShowListCategories(false);
        setShowAddCategory(false);
        setShowDeletes(false);
        setShowEditCategory(false);
        setShowArchiveOrDeleteBook(false);
        setShowDeleteBook(false);
        setShowArchiveBook(false);
        setShowEditBook(true);
        setSelectedBook(null);

        setTitle('');
        setAuthor('');
        setDescription('');
        setBookLanguage('');
        setQuantity('');
        setImageFile(null);
        setSelectedCategories([]);
        setFlair('');
        setImagesToRemove([]);
        setCategoryIcon(null);
        setEditCategoryIcon(null);
        setCategoryColor(null);
        setEditCategoryColor(null);
      }
    };

    if (showBookEditWindow) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showBookEditWindow, setShowBookEditWindow]);

  useEffect(() => {
    const hasChanges = (): boolean => {
      if (!title.trim() || !author.trim() || !bookLanguage.trim()) {
        return false;
      }

      const fieldsChanged =
        title !== initialBookData.title ||
        author !== initialBookData.author ||
        description !== initialBookData.description ||
        bookLanguage !== initialBookData.bookLanguage ||
        flair !== initialBookData.flair ||
        quantity !== initialBookData.quantity;

      const categoriesChanged = !(
        selectedCategories.length ===
          initialBookData.selectedCategories.length &&
        selectedCategories.every((id) =>
          initialBookData.selectedCategories.includes(id)
        )
      );

      const imagesChanged = imagesToRemove.length > 0 || imageFile !== null;

      return fieldsChanged || categoriesChanged || imagesChanged;
    };

    setBookEditButtonActive(hasChanges());

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
    description,
    bookLanguage,
    flair,
    quantity,
    selectedCategories,
    imagesToRemove,
    imageFile,
    categoryName,
    editCategoryName,
    categoryDescription,
    categoryFlair,
    editCategoryDesc,
    editCategoryFlair,
    categoryIcon,
    editCategoryIcon,
    categoryColor,
    editCategoryColor,
    initialBookData,
    initialCategoryData,
  ]);

  const handleBookEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!selectedBook) {
      setErrorMessage('No book selected');
      setIsLoading(false);
      return;
    }

    const selectedQuantity = parseInt(quantity) || 1;

    const result = await updateBook(
      selectedBook.id,
      title,
      author,
      description,
      bookLanguage,
      selectedQuantity,
      imageFile ? [imageFile] : [],
      imagesToRemove,
      selectedCategories,
      categoriesToRemove,
      flair
    );

    if (result.success) {
      console.log('Book updated successfully');
      setShowBookEditWindow(false);
      setShowDeletes(false);
    } else {
      setErrorMessage('Failed to update book');
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
    setImagesToRemove([]);
    setCategoriesToRemove([]);
  };

  const handleBookArchive = async (e: React.FormEvent) => {
    e.preventDefault();
    setArchiveLoading(true);

    if (!selectedBook) {
      setErrorMessage('No book selected');
      setArchiveLoading(false);
      return;
    }

    const result = await archiveBook(selectedBook.id);

    if (result.success) {
      console.log(
        `Book with ID ${selectedBook.id} archived/unarchived successfully.`
      );
      setShowBookEditWindow(false);
    } else {
      setErrorMessage('Failed to archive/unarchive the book');
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

    setArchiveLoading(false);
    setSelectedBook(null);
    setShowArchiveOrDeleteBook(false);
    setShowArchiveBook(false);
    setShowBookEditWindow(false);
    setShowEditBook(true);
  };

  const handleBookDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setDeleteLoading(true);

    if (!selectedBook) {
      setErrorMessage('No book selected');
      setDeleteLoading(false);
      return;
    }

    const result = await deleteBook(selectedBook.id);

    if (result.success) {
      console.log(`Book with ID ${selectedBook.id} deleted successfully.`);
      setShowBookEditWindow(false);
    } else {
      setErrorMessage('Failed to delete the book');
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

    setDeleteLoading(false);
    setSelectedBook(null);
    setShowArchiveOrDeleteBook(false);
    setShowDeleteBook(false);
    setShowBookEditWindow(false);
    setShowEditBook(true);
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
      console.log('Category created successfully:', result.data);

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

    setShowEditBook(false);
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
    setShowAddCategory(false);
    setShowEditCategory(false);
    setShowEditBook(true);
  };

  const handleClose = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowBookEditWindow(false);
    setShowEditCategory(false);
    setShowDeletes(false);
    setShowArchiveOrDeleteBook(false);
    setShowEditBook(true);
    setShowAddCategory(false);
    setShowEditCategory(false);
    setShowListCategories(false);
    setSelectedBook(null);

    setTitle('');
    setAuthor('');
    setDescription('');
    setBookLanguage('');
    setQuantity('');
    setImageFile(null);
    setSelectedCategories([]);
    setFlair('');
    setImagesToRemove([]);
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

    setShowEditBook(false);
    setShowListCategories(false);
    setShowArchiveOrDeleteBook(false);
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

  const handleShowArchiveOrDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowEditBook(false);
    setShowListCategories(false);
    setShowEditCategory(false);
    setShowArchiveOrDeleteBook(true);
  };

  const handleShowDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowArchiveOrDeleteBook(false);
    setShowEditBook(false);
    setShowListCategories(false);
    setShowEditCategory(false);
    setShowDeleteBook(true);
  };

  const handleShowArchive = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowArchiveOrDeleteBook(false);
    setShowEditBook(false);
    setShowListCategories(false);
    setShowEditCategory(false);
    setShowArchiveBook(true);
  };

  const handleBackToEditBook = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowArchiveOrDeleteBook(false);
    setShowArchiveBook(false);
    setShowDeleteBook(false);
    setShowListCategories(false);
    setShowEditCategory(false);
    setShowEditBook(true);
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

    setShowEditBook(false);
    setShowEditCategory(false);
    setShowAddCategory(false);
    setShowListCategories(true);
  };

  const handleDeleteBookImage = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    imageId: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setImagesToRemove((prevImagesToRemove) => {
      if (prevImagesToRemove.includes(imageId)) {
        return prevImagesToRemove.filter((id) => id !== imageId);
      } else {
        return [...prevImagesToRemove, imageId];
      }
    });
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
      {showBookEditWindow && authToken && (
        <div className='book-edit-overlay'>
          <section
            ref={showBookEditWindowContainerRef}
            className={`${
              showEditBook ? 'book-edit-container' : 'edit-container'
            } ${showBookEditWindow ? 'fade-in' : 'fade-out'}`}
          >
            <div className='portal-top-toggles'>
              <div className='book-edit-language-toggle'>
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
              {showEditBook && (
                <XIcon
                  className='book-edit-x-icon'
                  onMouseDown={(e) => handleClose(e)}
                />
              )}
              {showListCategories && (
                <BackArrow
                  className='book-edit-x-icon'
                  onMouseDown={(e) => handleCloseCategories(e)}
                />
              )}
              {showAddCategory && (
                <BackArrow
                  className='book-edit-x-icon'
                  onMouseDown={(e) => handleBackToCategories(e)}
                />
              )}
              {showEditCategory && (
                <BackArrow
                  className='book-edit-x-icon'
                  onMouseDown={(e) => handleBackToCategories(e)}
                />
              )}
              {showArchiveOrDeleteBook && (
                <BackArrow
                  className='book-edit-x-icon'
                  onMouseDown={(e) => handleBackToEditBook(e)}
                />
              )}
              {showArchiveBook && (
                <BackArrow
                  className='book-edit-x-icon'
                  onMouseDown={(e) => handleBackToEditBook(e)}
                />
              )}
              {showDeleteBook && (
                <BackArrow
                  className='book-edit-x-icon'
                  onMouseDown={(e) => handleBackToEditBook(e)}
                />
              )}
            </div>
            {showEditBook && (
              <>
                <div className='book-edit-header'>
                  <TitleFlair className='book-edit-flair-left' />
                  <p className='book-edit-header-text'>{bookEditHeaderText}</p>
                  <TitleFlair className='book-edit-flair-right' />
                </div>
                <p className='book-edit-header-subtext'>{bookCreateSubtext}</p>
              </>
            )}
            {showListCategories && (
              <div className='book-edit-header'>
                <TitleFlair className='book-edit-flair-left' />
                <p className='book-edit-header-text'>{categoryAddHeaderText}</p>
                <TitleFlair className='book-edit-flair-right' />
              </div>
            )}
            {showAddCategory && (
              <div className='categories-create-header'>
                <TitleFlair className='categories-create-flair-left' />
                <p className='categories-create-header-text'>
                  {newCategoryText}
                </p>
                <TitleFlair className='categories-create-flair-right' />
              </div>
            )}
            {showEditCategory && (
              <div className='book-edit-header'>
                <TitleFlair className='book-edit-flair-left' />
                <p className='book-edit-header-text'>
                  {categoryEditHeaderText}
                </p>
                <TitleFlair className='book-edit-flair-right' />
              </div>
            )}
            <div className='scrollable-container'>
              {showEditBook && (
                <>
                  <form onSubmit={handleBookEdit}>
                    <div className='book-edit-split-container'>
                      <div className='book-edit-input-container'>
                        <div className='book-edit-title-author-container'>
                          <div>
                            <input
                              type='text'
                              name='title'
                              value={title}
                              required
                              maxLength={255}
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder={bookTitlePlaceholder}
                              className='book-edit-title-input'
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
                              className='book-edit-author-input'
                            />
                          </div>
                        </div>
                        <div>
                          <textarea
                            name='description'
                            value={description}
                            maxLength={1200}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={descPlaceholder}
                            className='book-edit-desc-input'
                          />
                        </div>
                        <div className='book-edit-flair-quantity-container'>
                          <div>
                            <input
                              type='text'
                              name='flair'
                              value={flair}
                              maxLength={10}
                              onChange={(e) => setFlair(e.target.value)}
                              placeholder={bookFlairPlaceholder}
                              className='book-edit-flair-input'
                            />
                          </div>
                          <div>
                            <input
                              type='number'
                              name='quantity'
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              placeholder={`${bookQuantityPlaceholder} 1`}
                              className='book-edit-quantity-input'
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
                                  : bookLanguage === 'French'
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
                                  : bookLanguage === 'English'
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
                        <div className='category-book-edit-container'>
                          <div
                            className='category-header-container'
                            style={{ margin: '-2px 0px 0px 0px' }}
                          >
                            <p className='category-title'>{categoriesText}</p>
                            <GearIcon
                              className='gear-icon'
                              onMouseDown={(e) => handleShowCategories(e)}
                              style={{ margin: '1px 0px 0px 5px' }}
                            />
                          </div>
                          <div className='category-book-edit-scoll'>
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
                                            const target =
                                              e.target as HTMLElement;
                                            if (target.tagName !== 'INPUT') {
                                              const isSelected =
                                                selectedCategories.includes(
                                                  category.id
                                                );
                                              if (isSelected) {
                                                setSelectedCategories((prev) =>
                                                  prev.filter(
                                                    (id) => id !== category.id
                                                  )
                                                );
                                                setCategoriesToRemove((prev) =>
                                                  prev.includes(category.id)
                                                    ? prev
                                                    : [...prev, category.id]
                                                );
                                              } else {
                                                setSelectedCategories((prev) =>
                                                  prev.includes(category.id)
                                                    ? prev
                                                    : [...prev, category.id]
                                                );
                                                setCategoriesToRemove((prev) =>
                                                  prev.filter(
                                                    (id) => id !== category.id
                                                  )
                                                );
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
                      </div>
                      <div className='book-edit-images-container'>
                        <div className='book-edit-old-images'>
                          {selectedBook && selectedBook.images.length > 0 ? (
                            <div className='book-edit-image-thumbnails'>
                              {selectedBook.images.map((image, index) => {
                                const hasImage = !!image.image_url;
                                const isSelected = imagesToRemove.includes(
                                  image.id
                                );
                                return (
                                  <div
                                    key={image.id}
                                    className={`image-thumbnail ${
                                      isSelected ? 'selected' : ''
                                    }`}
                                  >
                                    <div
                                      className={`image-thumbnail-overlay ${
                                        isSelected ? 'selected' : ''
                                      }`}
                                    />
                                    <div
                                      className={
                                        isSelected
                                          ? 'book-edit-image-x-container'
                                          : 'book-edit-image-trash-container'
                                      }
                                    >
                                      {isSelected ? (
                                        <BackArrow
                                          className='book-edit-trash-x'
                                          onMouseDown={(e) =>
                                            handleDeleteBookImage(e, image.id)
                                          }
                                        />
                                      ) : (
                                        <TrashIcon
                                          className='book-edit-trash-icon'
                                          onMouseDown={(e) =>
                                            handleDeleteBookImage(e, image.id)
                                          }
                                        />
                                      )}
                                    </div>
                                    <div
                                      className={`book-detail-image-wrapper ${
                                        hasImage ? 'blur-load' : ''
                                      }`}
                                      style={{
                                        backgroundImage: `url(${image.image_small})`,
                                      }}
                                    >
                                      {hasImage ? (
                                        <>
                                          <img
                                            src={image.image_url || ''}
                                            alt={`Thumbnail ${index + 1}`}
                                            className='book-detail-image'
                                            onLoad={(e) => {
                                              const imgElement =
                                                e.target as HTMLImageElement;
                                              imgElement.parentElement?.classList.add(
                                                'loaded'
                                              );
                                            }}
                                          />
                                        </>
                                      ) : (
                                        <BookCoverIcon className='book-icon-thumbnail' />
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className='no-images-text-container'>
                              <p className='edit-book-no-images-text'>
                                {noImagesForThisBookText}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className='book-edit-new-image-container'>
                          <p className='book-edit-new-image-text'>
                            {newImagesUploadText}
                          </p>
                          <input
                            type='file'
                            name='image'
                            accept='image/*'
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              setImageFile(file || null);
                            }}
                            className='book-edit-image-input'
                          />
                        </div>
                      </div>
                    </div>
                    {errorMessage && (
                      <p className='error-message'>{errorMessage}</p>
                    )}
                    <div className='book-edit-submit-container'>
                      <button
                        type='submit'
                        className={`${
                          bookEditButtonActive
                            ? 'submit-button'
                            : 'inactive-button'
                        }`}
                        disabled={!bookEditButtonActive || isLoading}
                      >
                        {isLoading ? (
                          <LinearProgress color='inherit' />
                        ) : (
                          bookCreateSubmitText
                        )}
                      </button>
                      <button
                        onMouseDown={(e) => handleShowArchiveOrDelete(e)}
                        className='archive-delete-button'
                        disabled={isLoading}
                      >
                        <p className='archive-or-delete-text'>
                          {bookArchiveOrDeleteText}
                        </p>
                      </button>
                    </div>
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
                      className='book-edit-header-subtext'
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
                        className='book-edit-input'
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
              {showArchiveOrDeleteBook && (
                <>
                  <div className='book-edit-header'>
                    <TitleFlair className='book-edit-flair-left' />
                    <p className='book-edit-header-text'>
                      {bookArchiveOrDeleteText}
                    </p>
                    <TitleFlair className='book-edit-flair-right' />
                  </div>
                  <p
                    className='book-edit-header-subtext'
                    style={{ padding: '8px 0px 0px 0px' }}
                  >
                    {archiveSubtext}
                  </p>
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    onMouseDown={(e) => handleShowArchive(e)}
                    className={
                      deleteLoading ? 'inactive-button' : 'archive-button'
                    }
                    disabled={deleteLoading || archiveLoading}
                  >
                    {archiveLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      bookArchiveText
                    )}
                  </button>
                  <p
                    className='book-edit-header-subtext'
                    style={{ padding: '8px 0px 0px 0px' }}
                  >
                    {deleteSubtext}
                  </p>
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    onMouseDown={(e) => handleShowDelete(e)}
                    className={
                      archiveLoading ? 'inactive-button' : 'delete-button'
                    }
                    disabled={archiveLoading || deleteLoading}
                  >
                    {deleteLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      bookDeleteText
                    )}
                  </button>
                </>
              )}
              {showArchiveBook && (
                <>
                  <div className='book-edit-header'>
                    <TitleFlair className='book-edit-flair-left' />
                    <p className='book-edit-header-text'>
                      {confirmArchiveText}
                    </p>
                    <TitleFlair className='book-edit-flair-right' />
                  </div>
                  <p
                    className='book-edit-header-subtext'
                    style={{ padding: '8px 0px 0px 0px' }}
                  >
                    {archiveSubtext}
                  </p>
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    onMouseDown={(e) => handleBookArchive(e)}
                    className={
                      archiveLoading ? 'inactive-button' : 'delete-button'
                    }
                    disabled={archiveLoading || deleteLoading}
                  >
                    {deleteLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      bookArchiveText
                    )}
                  </button>
                </>
              )}
              {showDeleteBook && (
                <>
                  <div className='book-edit-header'>
                    <TitleFlair className='book-edit-flair-left' />
                    <p className='book-edit-header-text'>{confirmDeleteText}</p>
                    <TitleFlair className='book-edit-flair-right' />
                  </div>
                  <p
                    className='book-edit-header-subtext'
                    style={{ padding: '8px 0px 0px 0px' }}
                  >
                    {deleteSubtext}
                  </p>
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    onMouseDown={(e) => handleBookDelete(e)}
                    className={
                      deleteLoading ? 'inactive-button' : 'delete-button'
                    }
                    disabled={archiveLoading || deleteLoading}
                  >
                    {deleteLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      bookDeleteText
                    )}
                  </button>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default EditBook;

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
import 'Styles/Utils/EditBook.css';

const EditBook: React.FC = () => {
  const {
    getCategories,
    updateBook,
    createCategory,
    deleteCategory,
    updateCategory,
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
  } = context;

  const [initialBookData, setInitialBookData] = useState({
    title: '',
    author: '',
    description: '',
    flair: '',
    quantity: '',
    selectedCategories: [] as number[],
    images: [] as any[],
  });

  const [showEditBook, setShowEditBook] = useState(true);
  const [showAddCategories, setShowAddCategories] = useState(false);
  const [showEditCategory, setShowEditCategory] = useState(false);
  const [showArchiveOrDeleteBook, setShowArchiveOrDeleteBook] = useState(false);
  const [showArchiveBook, setShowArchiveBook] = useState(false);
  const [showDeleteBook, setShowDeleteBook] = useState(false);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [flair, setFlair] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagesToRemove, setImagesToRemove] = useState<number[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

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
    language === 'EN' ? 'Category description' : 'Description de la catégorie';
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
      setFlair(selectedBook.flair || '');
      setQuantity(selectedBook.inventory.toString() || '');
      setSelectedCategories(selectedBook.categories || []);

      setInitialBookData({
        title: selectedBook.title || '',
        author: selectedBook.author || '',
        description: selectedBook.description || '',
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
      document.body.classList.add('book-open');
    } else {
      document.body.classList.remove('book-open');
    }
  }, [showBookEditWindow]);

  useEffect(() => {
    if (showBookEditWindow) {
      document.body.classList.add('book-open');
    } else {
      document.body.classList.remove('book-open');
    }
  }, [showBookEditWindow]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showBookEditWindowContainerRef.current &&
        !showBookEditWindowContainerRef.current.contains(event.target as Node)
      ) {
        setShowBookEditWindow(false);
        setShowAddCategories(false);
        setShowDeletes(false);
        setShowEditCategory(false);
        setShowArchiveOrDeleteBook(false);
        setShowDeleteBook(false);
        setShowArchiveBook(false);
        setShowEditBook(true);
        setSelectedBook(null);
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
    const isCategoryFormEmpty = !categoryName.trim();
    setShowAddCategoryButtonActive(!isCategoryFormEmpty);
    const isCategoryEditFormEmpty = !editCategoryName.trim();
    setShowEditCategoryButtonActive(!isCategoryEditFormEmpty);
  }, [title, author, categoryName, editCategoryName]);

  useEffect(() => {
    const hasChanges = (): boolean => {
      const fieldsChanged =
        title !== initialBookData.title ||
        author !== initialBookData.author ||
        description !== initialBookData.description ||
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
  }, [
    title,
    author,
    description,
    flair,
    quantity,
    selectedCategories,
    imagesToRemove,
    imageFile,
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
      selectedQuantity,
      imageFile ? [imageFile] : [],
      imagesToRemove,
      selectedCategories,
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

    const result = await createCategory(categoryName, categoryDescription);

    if (result.success) {
      console.log('Category created successfully:', result.data);

      setCategories(result.data.categories);

      setCategoryName('');
      setCategoryDescription('');
    } else {
      setErrorMessage('Failed to create category');
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
        editCategoryDesc
      );

      if (result.success) {
        console.log(`Category ${editCategoryId} updated successfully`);

        setCategories(result.data.categories);

        setEditCategoryId('');
        setEditCategoryName('');
        setEditCategoryDesc('');
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

    setShowEditBook(false);
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
    setSelectedBook(null);

    setTitle('');
    setAuthor('');
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

  const handleShowEditCategory = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    categoryId: number,
    categoryName: string,
    categoryDesc: string
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setEditCategoryId(categoryId.toString());
    setEditCategoryName(categoryName);
    setEditCategoryDesc(categoryDesc);

    setShowEditBook(false);
    setShowAddCategories(false);
    setShowArchiveOrDeleteBook(false);
    setShowEditCategory(true);
  };

  const handleShowArchiveOrDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setShowEditBook(false);
    setShowAddCategories(false);
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
    setShowAddCategories(false);
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
    setShowAddCategories(false);
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
    setShowAddCategories(false);
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

    setShowEditBook(false);
    setShowEditCategory(false);
    setShowAddCategories(true);
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
      {showBookEditWindow && authToken && (
        <div className='book-edit-overlay'>
          <section
            ref={showBookEditWindowContainerRef}
            className={`${
              showEditBook ? 'book-edit-container' : 'edit-container'
            } ${showBookEditWindow ? 'fade-in' : 'fade-out'}`}
          >
            <div className='book-edit-language-toggle'>
              {language === 'FR' && (
                <p
                  className='book-edit-lang-toggle'
                  onClick={() => handleLanguageChange('EN')}
                >
                  EN
                </p>
              )}
              {language === 'EN' && (
                <p
                  className='book-edit-lang-toggle'
                  onClick={() => handleLanguageChange('FR')}
                >
                  FR
                </p>
              )}
            </div>
            {showEditBook && (
              <XIcon
                className='book-edit-x-icon'
                onMouseDown={(e) => handleClose(e)}
              />
            )}
            {showAddCategories && (
              <BackArrow
                className='book-edit-x-icon'
                onMouseDown={(e) => handleCloseCategories(e)}
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
            {showEditBook && (
              <>
                <div className='book-edit-header'>
                  <TitleFlair className='book-edit-flair-left' />
                  <p className='book-edit-header-text'>{bookEditHeaderText}</p>
                  <TitleFlair className='book-edit-flair-right' />
                </div>
                <p className='book-edit-header-subtext'>{bookCreateSubtext}</p>
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
                      <div className='category-container'>
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
                                          selectedCategories.includes(
                                            categoryId
                                          );
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
                              <p className='book-edit-no-categories'>
                                {noCategoriesText}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div className='book-edit-images-container'>
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
                                    <p>No image available</p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p>No images available for this book</p>
                      )}
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
                      className='edit-button'
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
            {showAddCategories && (
              <>
                <div className='book-edit-header'>
                  <TitleFlair className='book-edit-flair-left' />
                  <p className='book-edit-header-text'>
                    {categoryAddHeaderText}
                  </p>
                  <TitleFlair className='book-edit-flair-right' />
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
                                          category.description
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
                        <p className='book-edit-no-categories'>
                          {noCategoriesText}
                        </p>
                      )}
                    </>
                  )}
                </div>
                <form onSubmit={handleCategoryCreate}>
                  <p
                    className='book-edit-header-subtext'
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
                      maxLength={255}
                      onChange={(e) => setCategoryName(e.target.value)}
                      placeholder={categoryNamePlaceholder}
                      className='book-edit-input'
                    />
                  </div>
                  <div>
                    <textarea
                      name='description'
                      value={categoryDescription}
                      maxLength={255}
                      onChange={(e) => setCategoryDescription(e.target.value)}
                      placeholder={categoryDescPlaceholder}
                      className='category-desc-input'
                    />
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
                <div className='book-edit-header'>
                  <TitleFlair className='book-edit-flair-left' />
                  <p className='book-edit-header-text'>
                    {categoryEditHeaderText}
                  </p>
                  <TitleFlair className='book-edit-flair-right' />
                </div>
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
                  <p className='book-edit-header-text'>{confirmArchiveText}</p>
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
          </section>
        </div>
      )}
    </>
  );
};

export default EditBook;

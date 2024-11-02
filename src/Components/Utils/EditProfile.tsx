import React, { useState, useEffect, useRef } from 'react';
import AuthApi from 'Utilities/AuthApi';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import UKFlag from 'Svgs/UKFlag';
import FrenchFlag from 'Svgs/FrenchFlag';
import UserIcon from 'Svgs/UserIcon';
import BackArrow from 'Svgs/BackArrow';
import TrashIcon from 'Svgs/TrashIcon';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Utils/EditProfile.css';

const EditProfile: React.FC = () => {
  const { updateProfile } = AuthApi();

  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authUser,
    authToken,
    showEdit,
    setShowEdit,
    language,
    handleLanguageChange,
  } = context;

  const [initialUserData, setInitialUserData] = useState<{
    initialFirstName: string;
    initialLastName: string;
    initialPhone: string | null;
  }>({
    initialFirstName: '',
    initialLastName: '',
    initialPhone: '',
  });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [removeImage, setRemoveImage] = useState(false);

  const [buttonActive, setButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const editContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Translations
  const editProfileText =
    language === 'EN' ? 'Edit Profile' : 'Modifier le Profil';
  const editSubtext =
    language === 'EN'
      ? 'Update your profile information'
      : 'Mettez à jour les informations de votre profil';
  const firstNamePlaceholder = language === 'EN' ? 'First Name' : 'Prénom';
  const lastNamePlaceholder =
    language === 'EN' ? 'Last Name' : 'Nom de Famille';
  const phonePlaceholder = language === 'EN' ? 'Phone' : 'Téléphone';
  const updateText = language === 'EN' ? 'Update' : 'Mise à jour';

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        console.log('Clearing Error Message.');
        setErrorMessage('');
      }, 3000);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (authUser && showEdit) {
      setInitialUserData({
        initialFirstName: authUser.first_name || '',
        initialLastName: authUser.last_name || '',
        initialPhone: authUser.phone || '',
      });
      setFirstName(authUser.first_name || '');
      setLastName(authUser.last_name || '');
      setPhone(authUser.phone || '');
      setImageFile(null);
      setRemoveImage(false);
      setLoaded(true);
    }
  }, [authUser, showEdit]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        editContainerRef.current &&
        !editContainerRef.current.contains(event.target as Node)
      ) {
        setInitialUserData({
          initialFirstName: '',
          initialLastName: '',
          initialPhone: '',
        });
        setFirstName('');
        setLastName('');
        setPhone('');
        setImageFile(null);
        setRemoveImage(false);
        setLoaded(false);
        setShowEdit(false);
      }
    };

    if (showEdit) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEdit, setShowEdit]);

  useEffect(() => {
    if (loaded) {
      const hasFormChanged =
        (firstName.trim() !== '' &&
          firstName !== initialUserData.initialFirstName) ||
        lastName !== initialUserData.initialLastName ||
        phone !== initialUserData.initialPhone ||
        !!imageFile ||
        removeImage;

      setButtonActive(hasFormChanged);
    }
  }, [
    firstName,
    lastName,
    phone,
    imageFile,
    removeImage,
    initialUserData,
    loaded,
  ]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim()) {
      setErrorMessage('First name is required.');
      return;
    }
    setIsLoading(true);
    try {
      const result = await updateProfile(
        firstName,
        lastName,
        phone,
        imageFile,
        removeImage
      );
      if (result.success) {
        console.log('Profile updated successfully');
        setShowEdit(false);
        setInitialUserData({
          initialFirstName: firstName,
          initialLastName: lastName,
          initialPhone: phone,
        });
        setLoaded(false);
      } else {
        setErrorMessage('Failed to update profile');
      }
    } catch (error) {
      setErrorMessage('An error occurred while updating profile');
    }

    setIsLoading(false);
  };

  const handleClose = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setInitialUserData({
      initialFirstName: '',
      initialLastName: '',
      initialPhone: '',
    });
    setFirstName('');
    setLastName('');
    setPhone('');
    setImageFile(null);
    setRemoveImage(false);
    setLoaded(false);
    setShowEdit(false);
  };

  const handleDeleteBookImage = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setRemoveImage(true);
  };

  const handleUndoDeleteBookImage = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    setRemoveImage(false);
    setImageFile(null);

    // Clear the file input field
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      {showEdit && (
        <div className='edit-overlay'>
          <section
            ref={editContainerRef}
            className={`edit-profile-container ${
              showEdit ? 'fade-in' : 'fade-out'
            }`}
          >
            <div className='portal-top-toggles'>
              <div className='edit-language-toggle'>
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
              <XIcon
                className='edit-x-icon'
                onMouseDown={(e) => handleClose(e)}
              />
            </div>
            {authToken && (
              <>
                <div className='edit-header'>
                  <TitleFlair className='edit-flair-left' />
                  <p className='edit-header-text'>{editProfileText}</p>
                  <TitleFlair className='edit-flair-right' />
                </div>
                <p className='edit-header-subtext'>{editSubtext}</p>
                <form onSubmit={handleUpdateProfile}>
                  <div className='user-edit-input'>
                    <div className='user-delete-upload-container'>
                      <div className='user-image-delete-container'>
                        {authUser &&
                          (authUser.image?.image_url ? (
                            <div
                              className={`user-edit-image-container ${
                                removeImage === true ? 'selected' : ''
                              }`}
                            >
                              <div
                                className={`image-thumbnail-overlay ${
                                  removeImage === true ? 'selected' : ''
                                }`}
                              />
                              <div
                                className={
                                  removeImage === true
                                    ? 'user-edit-image-x-container'
                                    : 'user-edit-image-trash-container'
                                }
                              >
                                {removeImage === true ? (
                                  <BackArrow
                                    className='user-edit-trash-x'
                                    onMouseDown={(e) =>
                                      handleUndoDeleteBookImage(e)
                                    }
                                  />
                                ) : (
                                  <TrashIcon
                                    className='user-edit-trash-icon'
                                    onMouseDown={(e) =>
                                      handleDeleteBookImage(e)
                                    }
                                  />
                                )}
                              </div>
                              <div
                                className='user-edit-image-wrapper blur-load'
                                style={{
                                  backgroundImage: `url(${authUser.image.image_small})`,
                                }}
                              >
                                <img
                                  src={authUser.image.image_url}
                                  alt='User'
                                  className='user-edit-image'
                                  onLoad={(e) => {
                                    const imgElement =
                                      e.target as HTMLImageElement;
                                    imgElement.parentElement?.classList.add(
                                      'loaded'
                                    );
                                  }}
                                />
                              </div>
                            </div>
                          ) : (
                            <div className='user-edit-placeholder-container'>
                              <div className='user-edit-image-wrapper'>
                                <UserIcon className='user-edit-icon' />
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className='image-file-upload'>
                        <input
                          type='file'
                          name='image'
                          accept='image/*'
                          ref={fileInputRef}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            setImageFile(file || null);
                            if (file) {
                              setRemoveImage(true);
                            }
                          }}
                          className='image-file-text'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='auth-name-inputs'>
                    <div>
                      <input
                        type='text'
                        name='fname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={firstNamePlaceholder}
                        className='auth-name-input first'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        name='lname'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={lastNamePlaceholder}
                        className='auth-name-input last'
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type='text'
                      name='phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={phonePlaceholder}
                      className='auth-input'
                    />
                  </div>
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
                      <LinearProgress color='inherit' />
                    ) : (
                      updateText
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

export default EditProfile;

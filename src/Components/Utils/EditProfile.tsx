import React, { useState, useEffect, useRef } from 'react';
import AuthApi from 'Utilities/AuthApi';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import UKFlag from 'Svgs/UKFlag';
import FrenchFlag from 'Svgs/FrenchFlag';
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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [buttonActive, setButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const editContainerRef = useRef<HTMLDivElement>(null);

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
    if (authUser) {
      if (authUser.first_name) {
        setFirstName(authUser.first_name);
      }
      if (authUser.last_name) {
        setLastName(authUser.last_name);
      }
      if (authUser.phone) {
        setPhone(authUser.phone);
      }
    }
  }, [authUser]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        editContainerRef.current &&
        !editContainerRef.current.contains(event.target as Node)
      ) {
        setShowEdit(false);
      }
    };

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEdit, setShowEdit]);

  useEffect(() => {
    const isFormEmpty =
      !firstName.trim() && !lastName.trim() && !phone.trim() && !imageFile;
    setButtonActive(!isFormEmpty);
  }, [firstName, lastName, phone, imageFile]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await updateProfile(firstName, lastName, phone, imageFile);

      if (result.success) {
        console.log('Profile updated successfully');
        setShowEdit(false);
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

    setShowEdit(false);
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
                  <div>
                    <input
                      type='file'
                      name='image'
                      accept='image/*'
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        setImageFile(file || null);
                      }}
                      className='auth-input'
                    />
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

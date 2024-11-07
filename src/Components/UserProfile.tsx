import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import MiniBookList from 'Components/Utils/MiniBookList';
import MembershipStatus from 'Utils/MembershipStatus';
import CheckedOut from 'Utils/CheckedOut';
import UserIcon from 'Svgs/UserIcon';
import Leaf1 from 'Svgs/Leaf1';
import GearIcon from 'Svgs/GearIcon';
import TacksIcon from 'Svgs/TacksIcon';
import ScissorsIcon from 'Svgs/ScissorsIcon';
import GlueIcon from 'Svgs/GlueIcon';
import Paperclip1 from 'Svgs/Paperclip1';
import Paperclip2 from 'Svgs/Paperclip2';
import PointingIcon from 'Svgs/PointingIcon';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/UserProfile.css';
import RentalHistory from './Utils/RentalHistory';

const UserProfile: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    setAuthToken,
    authUser,
    setShowAuth,
    setShowEdit,
    setShowAddBookWindow,
    language,
  } = context;

  const [isAdminLoading, setIsAdminLoading] = useState(false);
  const [token, setToken] = useState('');
  const [adminToken, setAdminToken] = useState('');

  const navigate = useNavigate();

  // Translations
  const headerText = language === 'EN' ? 'Profile' : 'Profil';
  const nameText = language === 'EN' ? 'Name' : 'Nom';
  const emailText = language === 'EN' ? 'Email' : 'Courriel';
  const phoneText = language === 'EN' ? 'Phone' : 'Téléphone';
  const logoutText = language === 'EN' ? 'Logout' : 'Déconnexion';
  const loginText = language === 'EN' ? 'Login' : 'Se connecter';
  const staffText = language === 'EN' ? 'Staff' : 'Personnelle';
  const noBookMemberSubText =
    language === 'EN'
      ? 'Explore our library to find your next read!'
      : 'Explorez pour trouver votre prochaine lecture !';
  const editCategoriesToggleText =
    language === 'EN' ? 'Update Profile' : 'Mettre à jour le profil';

  const handleUpdate = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowEdit(true);
  };

  const handleAddBook = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowAddBookWindow(true);
  };

  const handleLogout = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowAuth(true);
  };

  const handleAdmin = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsAdminLoading(true);
    setTimeout(() => {
      console.log('Handle Cancel.');
      setIsAdminLoading(false);
    }, 1000);
  };

  const handleBooksLink = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    navigate('/books');
  };

  const handleTokenSet = () => {
    setAuthToken(token);
  };

  const handleAdminTokenSet = () => {
    setAuthToken(adminToken);
  };

  const renderPlaceholders = () => (
    <>
      <div className='user-info-container'>
        <div className='user-info-membership-container'>
          <div className='user-info'>
            <div className='user-info-header'>
              <UserIcon className='user-profile-icon' />
              <TacksIcon className='tacks-icon' />
            </div>
            <p className='user-name'>{nameText}</p>
            <p className='user-email'>{emailText}</p>
            <div className='user-phone-edit-icon-container'>
              <div className='user-phone-edit-container'>
                <p className='user-phone'>{phoneText}</p>
                <div className='user-profile-logout-container'>
                  <button
                    className='login-button'
                    onMouseDown={(e) => handleLogout(e)}
                    style={{ width: `{}` }}
                  >
                    {loginText}
                  </button>
                </div>
              </div>
              <div className='user-phone-edit-icons'>
                <ScissorsIcon className='scissors-icon' />
              </div>
            </div>
          </div>
          <div className='user-membership-container'>
            <MembershipStatus />
            <div className='user-membership-icon-container'>
              <Paperclip2
                className='paperclip-icon'
                style={{ fill: 'var(--clr-toute)' }}
              />
              <Paperclip1
                className='paperclip-icon'
                style={{ fill: 'var(--clr-moyenne)' }}
              />
            </div>
          </div>
        </div>
        <div className='user-checked-out-container'>
          <CheckedOut />
          <div className='profile-mini-list-container'>
            <div className='mini-list-books-link-container'>
              <p
                className='mini-list-books-link-text'
                onMouseDown={(e) => handleBooksLink(e)}
              >
                {noBookMemberSubText}
              </p>
              <PointingIcon
                className='pointing-icon'
                onMouseDown={(e) => handleBooksLink(e)}
              />
            </div>
            <MiniBookList />
          </div>
        </div>
      </div>
    </>
  );

  const renderUserInfo = () => (
    <>
      <div className='user-info-container'>
        <div className='user-info-membership-container'>
          <div className='user-info'>
            <div className='user-info-header'>
              {authUser ? (
                authUser.image?.image_url ? (
                  <div className='user-profile-image-container'>
                    <div
                      className='user-profile-image-wrapper blur-load'
                      style={{
                        backgroundImage: `url(${authUser.image.image_small})`,
                      }}
                    >
                      <img
                        src={authUser.image.image_url}
                        alt='User'
                        className='user-profile-image'
                        onLoad={(e) => {
                          const imgElement = e.target as HTMLImageElement;
                          imgElement.parentElement?.classList.add('loaded');
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className='user-profile-image-container'>
                    <img
                      src={`https://robohash.org/set_set4/${authUser.email}`}
                      alt='User'
                      className='user-profile-image'
                    />
                  </div>
                )
              ) : (
                <UserIcon className='user-profile-icon' />
              )}
              <TacksIcon className='tacks-icon' />
            </div>
            {authUser?.first_name && (
              <p className='user-name'>
                {authUser.first_name} {authUser.last_name}
              </p>
            )}
            {authUser?.email && <p className='user-email'>{authUser.email}</p>}
            <div className='user-phone-edit-icon-container'>
              <div className='user-phone-edit-container'>
                {authUser?.phone && (
                  <p className='user-phone'>{authUser.phone}</p>
                )}
                <div className='user-profile-toggle-container'>
                  <p
                    className='user-profile-toggle-text'
                    onMouseDown={(e) => handleUpdate(e)}
                  >
                    {editCategoriesToggleText}
                  </p>
                  <GearIcon
                    className='gear-icon'
                    onMouseDown={(e) => handleUpdate(e)}
                  />
                </div>
                <div className='user-profile-logout-container'>
                  {authUser?.is_staff && (
                    <button
                      className='admin-button'
                      onMouseDown={(e) => handleAdmin(e)}
                    >
                      {isAdminLoading ? (
                        <LinearProgress color='inherit' />
                      ) : (
                        staffText
                      )}
                    </button>
                  )}
                  <button
                    className='logout-button'
                    onMouseDown={(e) => handleLogout(e)}
                    style={{ width: `{}` }}
                  >
                    {logoutText}
                  </button>
                </div>
              </div>
              <div className='user-phone-edit-icons'>
                {authUser?.phone && <ScissorsIcon className='scissors-icon' />}
                <GlueIcon className='glue-icon' />
              </div>
            </div>
          </div>
          <div className='user-membership-container'>
            <MembershipStatus />
            <div className='user-membership-icon-container'>
              <Paperclip2
                className='paperclip-icon'
                style={{ fill: 'var(--clr-toute)' }}
              />
              <Paperclip1
                className='paperclip-icon'
                style={{ fill: 'var(--clr-moyenne)' }}
              />
            </div>
          </div>
        </div>
        <div className='user-checked-out-container'>
          <CheckedOut />
          <div className='profile-mini-list-container'>
            <div className='mini-list-books-link-container'>
              <p
                className='mini-list-books-link-text'
                onMouseDown={(e) => handleBooksLink(e)}
              >
                {noBookMemberSubText}
              </p>
              <PointingIcon
                className='pointing-icon'
                onMouseDown={(e) => handleBooksLink(e)}
              />
            </div>
            <MiniBookList />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className='page-container'>
      <div className='input-token-container'>
        <p>4b18a318c3a0aef247808a7d4fbacbf329a8f4d9</p>
        <div className='input-token-input'>
          <input
            type='text'
            name='token'
            value={adminToken}
            onChange={(e) => setAdminToken(e.target.value)}
            required
            placeholder={
              authToken && authUser?.is_staff ? `${authToken}` : 'Token'
            }
            className='token-input'
          />
          <div className='token-button' onClick={handleAdminTokenSet}>
            adm
          </div>
        </div>
        <p>d0e5985c2ce3645d7a5137a0ea3710589a40547b</p>
        <div className='input-token-input'>
          <input
            type='text'
            name='token'
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            placeholder={
              authToken && !authUser?.is_staff ? `${authToken}` : 'Token'
            }
            className='token-input'
          />
          <div className='token-button' onClick={handleTokenSet}>
            user
          </div>
        </div>
      </div>
      <div className='user-profile-container'>
        <header className='user-profile-header'>
          <div className='user-profile-header-title'>
            <Leaf1 className='title-flair-leaf-left' />
            <p className='user-profile-title-text'>{headerText}</p>
            <Leaf1 className='title-flair-leaf-right' />
          </div>
        </header>
        <section className='user-profile-main'>
          <div className='user-profile-info-container'>
            {authUser ? renderUserInfo() : renderPlaceholders()}
          </div>
          <svg className='profile-line-divider'>
            <line x1='0' y1='50%' x2='100%' y2='50%' />
          </svg>
          <div className='user-profile-history'>
            <RentalHistory />
          </div>
        </section>
        <div className='user-info-options'>
          <button onMouseDown={(e) => handleAddBook(e)}>Add Book</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

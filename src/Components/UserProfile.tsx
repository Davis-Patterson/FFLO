import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import UserIcon from 'Svgs/UserIcon';
import TitleFlair from 'Svgs/TitleFlair';
import 'Styles/UserProfile.css';

const UserProfile: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, setShowAuth, setShowEdit, setShowAddBookWindow, language } =
    context;

  // Translations
  const headerText = language === 'EN' ? 'Profile' : 'Profil';
  const nameText = language === 'EN' ? 'Name' : 'Nom';
  const emailText = language === 'EN' ? 'Email' : 'Courriel';
  const phoneText = language === 'EN' ? 'Phone' : 'Téléphone';
  const noBookText =
    language === 'EN'
      ? 'No book currently checked out.'
      : 'Aucun livre actuellement extrait.';
  const noRentalHistoryText =
    language === 'EN'
      ? 'No rental history available.'
      : 'Aucun historique de location disponible.';

  const handleUpdate = () => {
    setShowEdit(true);
  };

  const handleAddBook = () => {
    setShowAddBookWindow(true);
  };

  const handleLogout = () => {
    setShowAuth(true);
  };

  const renderUserInfo = () => (
    <>
      <div className='user-info'>
        {authUser?.image?.image_url ? (
          <div className='user-profile-image-container'>
            <img
              src={authUser.image.image_url}
              alt='User'
              className='user-profile-image'
            />
          </div>
        ) : (
          <UserIcon className='user-profile-icon' />
        )}

        {authUser?.first_name && (
          <p className='user-name'>
            {authUser.first_name} {authUser.last_name}
          </p>
        )}
        {authUser?.email && <p className='user-email'>{authUser.email}</p>}
        {authUser?.phone && <p className='user-phone'>{authUser.phone}</p>}
      </div>
      <div className='user-info-options'>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleAddBook}>Add Book</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );

  const renderCheckedOutBook = () => {
    if (authUser?.checked_out?.length) {
      const book = authUser.checked_out[0];
      return (
        <div className='checked-out-book'>
          <h3>Currently Checked Out</h3>
          <p>{book.title}</p>
          <p>Checked out on: {book.rental_date}</p>
        </div>
      );
    } else {
      return <p className='no-checked-out'>{noBookText}</p>;
    }
  };

  const renderRentalHistory = () => {
    if (authUser?.book_history?.length) {
      return (
        <div className='rental-history'>
          <h3>Rental History</h3>
          <ul>
            {authUser.book_history.map((book, index) => (
              <li key={index}>
                <p>{book.title}</p>
                <p>Rented on: {book.rental_date}</p>
                <p>Returned on: {book.return_date || 'Not returned yet'}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p className='no-history'>{noRentalHistoryText}</p>;
    }
  };

  const renderPlaceholders = () => (
    <div className='user-info'>
      {/* Default User Icon */}
      <UserIcon className='user-profile-icon' />

      {/* Placeholder Text */}
      <p className='user-name'>{nameText}</p>
      <p className='user-email'>{emailText}</p>
      <p className='user-phone'>{phoneText}</p>
    </div>
  );

  return (
    <div className='user-profile-container'>
      <header className='user-profile-header'>
        <div className='user-profile-header-title'>
          <TitleFlair className='title-flair-left' />
          <p className='user-profile-title-text'>{headerText}</p>
          <TitleFlair className='title-flair-right' />
        </div>
      </header>
      <section className='user-profile-main'>
        <div className='user-profile-left'>
          {authUser ? renderUserInfo() : renderPlaceholders()}
        </div>
        <div className='user-profile-right'>
          {authUser ? (
            <>
              {renderCheckedOutBook()}
              {renderRentalHistory()}
            </>
          ) : (
            <>
              <p>{noBookText}</p>
              <p>{noRentalHistoryText}</p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;

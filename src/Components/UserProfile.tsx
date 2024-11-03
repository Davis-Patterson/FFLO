import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import MiniBookList from 'Components/MiniBookList';
import UserIcon from 'Svgs/UserIcon';
import LeafIcon from 'Svgs/LeafIcon';
import GearIcon from 'Svgs/GearIcon';
import TacksIcon from 'Svgs/TacksIcon';
import ScissorsIcon from 'Svgs/ScissorsIcon';
import GlueIcon from 'Svgs/GlueIcon';
import Paperclip1 from 'Svgs/Paperclip1';
import Paperclip2 from 'Svgs/Paperclip2';
import BookClipart from 'Svgs/BookClipart';
import PointingIcon from 'Svgs/PointingIcon';
import Pencil2 from 'Svgs/Pencil2';
import RulerIcon from 'Svgs/RulerIcon';
import TapeIcon from 'Svgs/TapeIcon';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/UserProfile.css';

const UserProfile: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, setShowAuth, setShowEdit, setShowAddBookWindow, language } =
    context;

  const [isLoading, setIsLoading] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(false);

  const navigate = useNavigate();

  // Translations
  const headerText = language === 'EN' ? 'Profile' : 'Profil';
  const nameText = language === 'EN' ? 'Name' : 'Nom';
  const emailText = language === 'EN' ? 'Email' : 'Courriel';
  const phoneText = language === 'EN' ? 'Phone' : 'Téléphone';
  const logoutText = language === 'EN' ? 'Logout' : 'Déconnexion';
  const staffText = language === 'EN' ? 'Staff' : 'Personnelle';
  const noBookText =
    language === 'EN'
      ? 'No book currently checked out.'
      : 'Aucun livre actuellement extrait.';
  const noBookMemberSubText =
    language === 'EN'
      ? 'Explore our library to find your next read!'
      : 'Explorez pour trouver votre prochaine lecture !';
  const noRentalHistoryText =
    language === 'EN'
      ? 'No rental history available.'
      : 'Aucun historique de location disponible.';
  const editCategoriesToggleText =
    language === 'EN' ? 'Update Profile' : 'Mettre à jour le profil';
  const activeMembershipText =
    language === 'EN' ? 'Active Membership' : 'Adhésion active';
  const subscriptionRenewText =
    language === 'EN'
      ? 'Subscription Renews:'
      : "Renouvellement de l'abonnement :";
  const subscriptionEndText =
    language === 'EN' ? 'Subscription Ends:' : "Fin de l'abonnement :";
  const bookUsedThisMonthText =
    language === 'EN' ? 'Book Used This Month' : 'Livre utilisé ce mois-ci';
  const booksUsedThisMonthText =
    language === 'EN' ? 'Books Used This Month' : 'Livres utilisés ce mois-ci';
  const manageSubscriptionText =
    language === 'EN' ? 'Manage Subscription' : "Gérer l'abonnement";

  const months: { [key: number]: string } = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = months[date.getMonth() + 1];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

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

  const handleCancel = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    setTimeout(() => {
      console.log('Handle Cancel.');
      setIsLoading(false);
    }, 1000);
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

    navigate('/Books');
  };

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
            {authUser?.membership?.active ? (
              <div className='membership-status'>
                <div className='membership-left'>
                  <p className='active-membership'>{activeMembershipText}</p>
                  <div>
                    {authUser.membership.recurrence ? (
                      <div className='user-membership-dates-container'>
                        <p className='user-membership-dates-text'>
                          {subscriptionRenewText}
                        </p>
                        <p className='user-membership-dates'>
                          {formatDate(authUser.membership.recurrence)}
                        </p>
                      </div>
                    ) : authUser.membership.end_date ? (
                      <div className='user-membership-dates-container'>
                        <p className='user-membership-dates-text'>
                          {subscriptionEndText}
                        </p>
                        <p className='user-membership-dates'>
                          {formatDate(authUser.membership.end_date)}
                        </p>
                      </div>
                    ) : null}
                    <Link to='/membership'>
                      <button
                        className='manage-button'
                        onMouseDown={(e) => handleCancel(e)}
                      >
                        {isLoading ? (
                          <LinearProgress color='inherit' />
                        ) : (
                          manageSubscriptionText
                        )}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className='membership-right'>
                  <div className='memebership-books-count-container'>
                    <p className='membership-books-count'>
                      {authUser.membership.monthly_books}
                    </p>
                  </div>
                  <p className='membership-books-text'>
                    {authUser.membership.monthly_books === 1
                      ? bookUsedThisMonthText
                      : booksUsedThisMonthText}
                  </p>
                </div>
              </div>
            ) : (
              <p>No active membership</p>
            )}
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
          {renderCheckedOutBook()}
        </div>
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
      return (
        <>
          <div className='no-checked-out-header'>
            <BookClipart className='book-clipart' />
            <p className='no-checked-out-header-text'>{noBookText}</p>
            <div className='no-checked-out-header-icons'>
              <Pencil2 className='pencil-icon' />
              <TapeIcon className='tape-icon' />
              <RulerIcon className='ruler-icon' />
            </div>
          </div>
          <div className='no-ckecked-out-content'>
            <div className='no-checked-out-books-link-container'>
              <p
                className='no-checked-out-text'
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
        </>
      );
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
    <div className='page-container'>
      <div className='user-profile-container'>
        <header className='user-profile-header'>
          <div className='user-profile-header-title'>
            <LeafIcon className='title-flair-leaf-left' />
            <p className='user-profile-title-text'>{headerText}</p>
            <LeafIcon className='title-flair-leaf-right' />
          </div>
        </header>
        <section className='user-profile-main'>
          <div className='user-profile-info-container'>
            {authUser ? renderUserInfo() : renderPlaceholders()}
          </div>
          <div className='user-profile-history'>
            {authUser ? (
              <>{renderRentalHistory()}</>
            ) : (
              <>
                <p>{noBookText}</p>
                <p>{noRentalHistoryText}</p>
              </>
            )}
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

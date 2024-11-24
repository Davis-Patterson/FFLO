import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Utils/MembershipStatus.css';

const MembershipStatus: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, language, formatDate } = context;

  const [isLoading, setIsLoading] = useState(false);

  // Translations
  const activeMembershipText =
    language === 'EN' ? 'Active Membership' : 'Adhésion active';
  const noMembershipText =
    language === 'EN' ? 'No Membership' : "Pas d'adhésion";
  const expiringMembershipText =
    language === 'EN' ? 'Expiring Membership' : 'Adhésion expirée';
  const subscriptionRenewText = language === 'EN' ? 'Renews:' : 'Renouvelle :';
  const subscriptionEndText =
    language === 'EN' ? 'Subscription Ends:' : "Fin de l'abonnement :";
  const bookUsedThisMonthText =
    language === 'EN' ? 'Book Used This Month' : 'Livre utilisé ce mois-ci';
  const booksUsedThisMonthText =
    language === 'EN' ? 'Books Used This Month' : 'Livres utilisés ce mois-ci';
  const manageSubscriptionText =
    language === 'EN' ? 'Manage Subscription' : "Gérer l'abonnement";
  const createAccountText =
    language === 'EN'
      ? 'Login or create an account to reserve books from the library.'
      : 'Connectez-vous ou créez un compte pour réserver des livres de la bibliothèque.';
  const becomeMemberText =
    language === 'EN'
      ? 'Become a member to reserve books from the library.'
      : 'Devenez membre pour réserver des livres de la bibliothèque.';
  const membershipText = language === 'EN' ? 'Membership' : 'Adhésion';

  const handleManageMembership = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  if (!authUser) {
    return (
      <>
        <div className='membership-status'>
          <div className='membership-left'>
            <p className='no-membership'>{noMembershipText}</p>
            <div>
              <p className='user-membership-dates-text'>{createAccountText}</p>
            </div>
          </div>
          <div className='membership-right'>
            <div className='memebership-books-count-container'>
              <p className='no-membership-books-count'>0</p>
            </div>
            <p className='membership-books-text'>{booksUsedThisMonthText}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {authUser && authUser.membership?.recurrence && (
        <div className='membership-status'>
          <div className='membership-left'>
            <p className='active-membership'>{activeMembershipText}</p>
            <div>
              <div className='user-membership-dates-container'>
                <p className='user-membership-dates-text'>
                  {subscriptionRenewText}
                </p>
                <p className='user-membership-dates'>
                  {formatDate(authUser?.membership?.recurrence)}
                </p>
              </div>
              <Link to='/membership'>
                <button
                  className='manage-button'
                  onMouseDown={(e) => handleManageMembership(e)}
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
                {authUser?.membership?.monthly_books}
              </p>
            </div>
            <p className='membership-books-text'>
              {authUser?.membership?.monthly_books === 1
                ? bookUsedThisMonthText
                : booksUsedThisMonthText}
            </p>
          </div>
        </div>
      )}
      {authUser && authUser.membership?.end_date && (
        <div className='membership-status'>
          <div className='membership-left'>
            <p className='expiring-membership'>{expiringMembershipText}</p>
            <div>
              <div className='user-membership-dates-container'>
                <p className='user-membership-dates-text'>
                  {subscriptionEndText}
                </p>
                <p className='user-membership-dates'>
                  {formatDate(authUser?.membership?.end_date)}
                </p>
              </div>
              <Link to='/membership'>
                <button
                  className='manage-button'
                  onMouseDown={(e) => handleManageMembership(e)}
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
                {authUser?.membership?.monthly_books}
              </p>
            </div>
            <p className='membership-books-text'>
              {authUser?.membership?.monthly_books === 1
                ? bookUsedThisMonthText
                : booksUsedThisMonthText}
            </p>
          </div>
        </div>
      )}
      {authUser &&
        (!authUser.membership?.active || authUser.membership === null) && (
          <div className='membership-status'>
            <div className='membership-left'>
              <p className='no-membership'>{noMembershipText}</p>
              <div>
                <div>
                  <p className='user-membership-dates-text'>
                    {becomeMemberText}
                  </p>
                </div>
                <Link to='/membership'>
                  <button
                    className='manage-button'
                    onMouseDown={(e) => handleManageMembership(e)}
                  >
                    {isLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      membershipText
                    )}
                  </button>
                </Link>
              </div>
            </div>
            <div className='membership-right'>
              <div className='membership-books-count-container'>
                <p className='no-membership-books-count'>0</p>
              </div>
              <p className='membership-books-text'>{booksUsedThisMonthText}</p>
            </div>
          </div>
        )}
    </>
  );
};

export default MembershipStatus;

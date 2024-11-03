import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import 'Styles/Utils/RentalHistory.css';

const RentalHistory: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, language } = context;

  // Translations
  const noRentalHistoryText =
    language === 'EN'
      ? 'No rental history available.'
      : 'Aucun historique de location disponible.';

  if (
    !authUser ||
    !authUser.book_history ||
    authUser.book_history.length === 0
  ) {
    return <p className='no-history'>{noRentalHistoryText}</p>;
  }

  return (
    <>
      <div className='rental-history'>
        <h3>Rental History</h3>
        <ul>
          {authUser.book_history.map((historyItem, index) => (
            <li key={index}>
              <p>{historyItem.book.title}</p>
              <p>Rented on: {historyItem.rental_date}</p>
              <p>
                Returned on: {historyItem.return_date || 'Not returned yet'}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RentalHistory;

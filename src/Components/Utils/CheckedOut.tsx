import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import BookClipart from 'Svgs/BookClipart';
import Pencil2 from 'Svgs/Pencil2';
import RulerIcon from 'Svgs/RulerIcon';
import TapeIcon from 'Svgs/TapeIcon';
import 'Styles/Utils/CheckedOut.css';

const CheckedOut: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, language } = context;

  // Translations
  const noBookText =
    language === 'EN'
      ? 'No book currently checked out.'
      : 'Aucun livre actuellement extrait.';

  if (!authUser?.checked_out || authUser.checked_out.length === 0) {
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
      </>
    );
  }

  const checkedOutBook = authUser.checked_out[0].book;

  return (
    <>
      <div className='checked-out-header'>
        <div className='checked-out-book'>
          <h3>Currently Checked Out</h3>
          <p>{checkedOutBook.title}</p>
          <p>Checked out on: {authUser.checked_out[0].rental_date}</p>
        </div>
        <div className='no-checked-out-header-icons'>
          <Pencil2 className='pencil-icon' />
          <TapeIcon className='tape-icon' />
          <RulerIcon className='ruler-icon' />
        </div>
      </div>
    </>
  );
};

export default CheckedOut;

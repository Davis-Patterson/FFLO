import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import 'Styles/MiniBookList.css';
import ChevronRight from 'Svgs/ChevronRight';

const MiniBookList: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { allBooks } = context;

  // Translations
  // const headerText = language === 'EN' ? 'Profile' : 'Profil';

  const filteredBookList = allBooks.filter((book) => {});

  return (
    <>
      <div className='mini-list-container'>
        <div className='mini-list-container-prev'>
          <ChevronRight className='mini-list-prev' />
        </div>
        <div className='mini-list-slider'></div>
        <div className='mini-list-container-next'>
          <ChevronRight className='mini-list-next' />
        </div>
      </div>
    </>
  );
};

export default MiniBookList;

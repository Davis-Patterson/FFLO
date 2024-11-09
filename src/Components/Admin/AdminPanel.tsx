import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import 'Styles/Admin/AdminPanel.css';

const AdminPanel: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language } = context;

  // Translations
  const adminHeaderText = language === 'EN' ? 'Admin' : '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='admin-panel-header'>
          <div className='admin-panel-header-title'>
            <TitleFlair className='admin-panel-title-flair left' />
            <h1 className='admin-panel-title-text'>{adminHeaderText}</h1>
            <TitleFlair className='admin-panel-title-flair right' />
          </div>
        </header>
        <div className='admin-panel-container'></div>
      </main>
    </>
  );
};

export default AdminPanel;

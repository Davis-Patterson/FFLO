import { useContext } from 'react';
import { AppContext } from 'contexts/AppContext';
import { Routes, Route } from 'react-router-dom';
import Menu from 'utils/Menu';
import Fullscreen from 'utils/Fullscreen';
import Nav from 'components/Nav';
import Home from 'components/Home';
import NotFound from 'utils/NotFound';
import Footer from 'components/Footer';
import 'styles/App.css';

const App: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('App must be used within an AppProvider');
  }
  const { showFullscreen } = context;

  return (
    <>
      <Menu />
      {showFullscreen && <Fullscreen />}
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </>
  );
};

export default App;

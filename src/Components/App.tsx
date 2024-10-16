import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Routes, Route } from 'react-router-dom';
import Menu from 'Utils/Menu';
import Fullscreen from 'Utils/Fullscreen';
import Nav from 'Components/Nav';
import Home from 'Components/Home';
import NotFound from 'Utils/NotFound';
import Footer from 'Components/Footer';
import 'Styles/App.css';

const App: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
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

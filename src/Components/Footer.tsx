import React from 'react';
import { Link } from 'react-router-dom';
import ffloLogo from 'Assets/Logos/fflo-logo.webp';
import 'Styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer-container'>
      <section className='footer-header'>
        <div className='footer-logo'>
          <Link to='/'>
            <img src={ffloLogo} alt='FFLO Logo' className='logo-img' />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

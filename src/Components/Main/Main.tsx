import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from 'Contexts/AppContext.jsx';
import App from 'Components/Main/App';
import 'Styles/Main/Main.css';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(
      (registration) => {
        console.log(
          'ServiceWorker registered with scope: ',
          registration.scope
        );
      },
      (error) => {
        console.log('ServiceWorker registration failed: ', error);
      }
    );
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);

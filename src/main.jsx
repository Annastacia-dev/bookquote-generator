import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QuoteProvider } from './context/Quote.jsx';
import { QuoteCardProvider } from './context/QuoteCard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuoteProvider>
      <QuoteCardProvider>
        <App />
      </QuoteCardProvider>
    </QuoteProvider>
  </StrictMode>
);

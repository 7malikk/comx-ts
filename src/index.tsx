import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MarketProvider } from './context/MarketContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MarketProvider>
    <App />
  </MarketProvider>
);

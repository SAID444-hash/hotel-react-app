import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // our App.js
import './style.css';     // use your style.css instead of index.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
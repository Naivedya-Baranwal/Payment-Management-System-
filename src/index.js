import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: Use 'react-dom/client' instead of 'react-dom'
import App from './App';

// Create a root element using the new React 18 method
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

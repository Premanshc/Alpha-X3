import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.addEventListener('load', function() {
  document.querySelector('.content').classList.add('fade-in');
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

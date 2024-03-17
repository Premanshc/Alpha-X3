import React from 'react';
import '../components/NavigationBar.css';

function NavigationBar() {
  return (
    <nav>
      <h3>Re<span id='flow'>Flow</span> Technologies</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;

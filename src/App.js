import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
        <NavigationBar />
        <Body />
        <Footer />
      </div>
  );
}

export default App;

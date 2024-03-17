import React from 'react';
import '../components/Body.css'; // Import your CSS file containing the animation styles

class Body extends React.Component {
  render() {
    return (
      <div>
      <div className='container'>
      <div className='image-container'>
        <img id='x3' src='/images/withoutbg.png' alt='x3'/>
      </div>
        <div className='flexbox'>
        <div className='firstline'>
          <h1>ALPHA X3</h1>
        </div>
        <div className='secondLine'>
        <p><span id='iot'>IOT:</span> Powering Industry <span id='four'>4.0</span> Transformation</p>
        </div>
        <div className='thirdline'>
        <p>Powered by <span id='reflow'>ReFlow</span> Tech.</p>
        </div>
        <div className='fourthline'>
        <button className='sky-blue-button'>Order Now</button>
        </div>
        
      </div>
      </div>
      </div>
    );
  }
}

export default Body;

import React from 'react';
import hero from '/jewelbeetles.jpg';

function Hero() {
    return (
     <>
     <h1 style={{ fontSize: '3rem' }}>Welcome to Bug Box!</h1>
     <img src={hero}></img>
     </>
    );
  }
  
  export default Hero;
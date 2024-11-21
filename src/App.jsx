import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <Products />
      <About />
      <Contact />
    </div>
  );
}

export default App;
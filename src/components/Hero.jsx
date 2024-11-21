import React from 'react';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Kasbekar Enterprise</h1>
        <p className="text-xl md:text-2xl mb-8">Your one-stop shop for all daily needs and beauty essentials</p>
        <Link
          to="products"
          smooth={true}
          duration={500}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 cursor-pointer"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
}

export default Hero;

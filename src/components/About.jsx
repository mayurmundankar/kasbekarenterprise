import React from 'react';

function About() {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://placehold.co/200x200"
              alt="Owner"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Kasbekar Sons</h3>
            <p className="text-gray-600 mb-4">Owner & Founder</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            We're your friendly neighborhood store, offering a wide range of products to cater to your daily needs. From household essentials to cosmetics and personal care items, we've got you covered.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We pride ourselves on providing quality products at affordable prices, along with exceptional customer service. We believe in building strong relationships with our customers and strive to make your shopping experience a pleasant one.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
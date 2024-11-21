import React from 'react';
import { FaStar } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: "Organic Face Cream",
    description: "Natural ingredients based face cream for all skin types",
    price: "$15.99 - $29.99",
    category: "Cosmetics",
    rating: 4.5
  },
  {
    id: 2,
    name: "Daily Essentials Pack",
    description: "Bundle of daily household items at best price",
    price: "$24.99",
    category: "General",
    rating: 4.8
  },
  {
    id: 3,
    name: "Natural Shampoo",
    description: "Chemical-free shampoo for healthy hair",
    price: "$12.99",
    category: "Cosmetics",
    rating: 4.3
  },
  // Add more products as needed
];

function Products() {
  return (
    <div id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <div className="text-sm font-semibold text-blue-600 mb-2">{product.category}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-400" />
                  <span className="ml-2">{product.rating}</span>
                </div>
                <div className="text-lg font-bold text-blue-600">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
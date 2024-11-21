import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-4 text-xl md:text-2xl" />
                <span className="text-sm md:text-base">+91-8149567385</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-4 text-xl md:text-2xl" />
                <span className="text-sm md:text-base">contact@example.com</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mr-4 text-xl md:text-2xl mt-1" />
                <span className="text-sm md:text-base">Pundalik Nagar Road, near Pahade Corner, Garkheda Parisar, Chh. Sambhajinagar</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Feedback Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="mt-16 text-center text-gray-600 text-sm">
        <p>Copyright © Kasbekar Enterprise | 2024 | Developed with 💖 by Mayur M</p>
      </footer>
    </div>
  );
}

export default Contact;

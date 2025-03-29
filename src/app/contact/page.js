'use client';

import ImageBackground from '../../components/background';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main className="relative min-h-screen">
      {/* Make background non-interactive */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageBackground />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center p-4 pt-24 md:pt-32">
        {/* Increase z-index and add pointer-events-auto */}
        <div className="relative z-[1000] bg-black/40 backdrop-blur-md p-8 rounded-xl w-full max-w-md border border-white/10 pointer-events-auto">
          <h1 className="text-4xl font-mono text-white mb-8 typing-line">Contact Us</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-white/90 font-mono">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-white/90 font-mono">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-white/90 font-mono">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Your message"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-4 mt-4 font-mono text-white border-2 border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

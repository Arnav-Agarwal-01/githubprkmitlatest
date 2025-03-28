'use client';

import { useState, useRef, useEffect } from 'react';

import ImageBackground from '@/components/background';
import { SplashCursor } from '@/components/ui/splash-cursor';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Set typing state to true when user starts typing
    setIsTyping(true);
    
    // Clear any existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    // Set a timeout to turn off typing state after user stops typing for 1 second
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store message in localStorage
    const newMessage = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    
    // Get existing messages or initialize empty array
    const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    
    // Add new message to array
    existingMessages.push(newMessage);
    
    // Save back to localStorage
    localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <main style={styles.main}>
      {!isTyping && (
        <SplashCursor 
          BACK_COLOR={{ r: 0, g: 0, b: 0 }}
          SPLAT_FORCE={8000}
          COLOR_UPDATE_SPEED={15}
          style={{ 
            pointerEvents: 'none',
            zIndex: 999
          }}
        />
      )}

      {/* Moving Background */}
      <ImageBackground />

      {/* Contact Form */}
      <div style={styles.content} className="flex justify-center items-center pt-20 sm:pt-0 pb-16 sm:pb-0">
        <div className="bg-black/70 p-8 rounded-lg shadow-xl w-full max-w-md" style={{ position: 'relative', zIndex: 4001 }}>
          <h1 className="text-4xl font-mono text-white mb-6 text-center">Contact Us</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none z-[4001]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none z-[4001]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none z-[4001]"
              ></textarea>
            </div>
            
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full
                  bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 z-[4001]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'auto',
    scrollBehavior: 'smooth',
    zIndex: 4001, // Needs to be above navbar's 4000
  },
  content: {
    zIndex: 4001, // Higher than navbar's 4000
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    pointerEvents: 'auto',
  },
};
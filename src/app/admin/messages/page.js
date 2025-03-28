'use client';

import { useState, useEffect } from 'react';
import { SplashCursor } from '@/components/ui/splash-cursor';
import ImageBackground from '@/components/background';
import Link from 'next/link';

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Simple authentication
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in a real app, use proper authentication
    if (password === 'prkmit2024') { // Simple password for demo purposes
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Retrieve messages from localStorage
      const storedMessages = localStorage.getItem('contactMessages');
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    }
  }, [isAuthenticated]);

  return (
    <main style={styles.main}>
      <SplashCursor 
        BACK_COLOR={{ r: 0, g: 0, b: 0 }}
        SPLAT_FORCE={8000}
        COLOR_UPDATE_SPEED={15}
      />

      {/* Moving Background */}
      <ImageBackground />

      {/* Content */}
      <div style={styles.content} className="flex justify-center items-center">
        <div className="bg-black/70 p-8 rounded-lg shadow-xl w-full max-w-4xl">
          <h1 className="text-4xl font-mono text-white mb-6 text-center">Admin Messages</h1>
          
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-white mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="flex justify-center">
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <Link href="/" className="text-blue-400 hover:text-blue-300">
                  ← Back to Home
                </Link>
              </div>
              
              {messages.length === 0 ? (
                <p className="text-white text-center">No messages yet.</p>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded border border-gray-700">
                      <div className="flex justify-between">
                        <h3 className="text-white font-bold">{msg.name}</h3>
                        <span className="text-gray-400">{new Date(msg.timestamp).toLocaleString()}</span>
                      </div>
                      <p className="text-gray-300">{msg.email}</p>
                      <p className="text-white mt-2">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
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
  },
  content: {
    zIndex: 1000,
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
};
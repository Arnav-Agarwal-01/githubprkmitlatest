'use client';

import ImageBackground from '../../components/background';

export default function Contact() {
  return (
    <main className="relative min-h-screen">
      <ImageBackground />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl w-full max-w-md border border-white/10">
          <h1 className="text-4xl font-mono text-white mb-8 typing-line">Contact Us</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-white/90 font-mono">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-white/90 font-mono">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-white/90 font-mono">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Your message"
              ></textarea>
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

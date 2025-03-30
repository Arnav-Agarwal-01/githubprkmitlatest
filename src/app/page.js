'use client'; // If using app router

import ImageBackground from '../components/background';
import { SplashCursor } from '@/components/ui/splash-cursor';
import Link from 'next/link'

export default function Home() {
  return (
    <main style={styles.main}>
      <SplashCursor 
        BACK_COLOR={{ r: 0, g: 0, b: 0 }}
        SPLAT_FORCE={8000}
        COLOR_UPDATE_SPEED={15}
      />

      {/* Moving Background */}
      <ImageBackground />

      {/* Foreground Content - Updated z-index and text color */}
      <div style={styles.content} className='justify-center w-full flex items-center'>
        <div className="typing-container flex flex-col w-full max-w-full px-2 xs:px-3 sm:px-6 md:px-8 mx-auto overflow-hidden">
          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono text-white typing-line'>PR KMIT</h1>
          <h3 className='text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl font-mono text-white/70 typing-line delay-2000 mt-2 sm:mt-4 px-1 sm:px-2 md:px-0 leading-relaxed max-w-full break-words hyphens-auto'>
            We know what's cooking, We know what's trending
          </h3>
          <div className="mt-12 animate-fadeIn" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 text-xl font-mono text-white border-2 border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// Update styles to ensure proper layering
const styles = {
  main: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'auto',
    scrollBehavior: 'smooth',
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    animation: 'moveBackground 40s infinite alternate linear',
  },
  imageWrapper: {
    width: '150px',
    height: '150px',
    margin: '5px',
    filter: 'blur(5px)',
    opacity: 0.7,
    position: 'relative',
  },
  content: {
    zIndex: 1000,  // Increased from 1 to 1000
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
    padding: '20px',
    width: '100%',
    maxWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselSection: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    zIndex: 2,
    marginTop: '10vh',
    overflow: 'visible',
  },
};

// Global keyframe animation (injects into the document)
if (typeof window !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes moveBackground {
      0% { transform: translateY(0); }
      100% { transform: translateY(-100px); }
    }
  `, styleSheet.cssRules.length);

  // Add blinking cursor animation
  styleSheet.insertRule(`
    @keyframes blink {
      0% { opacity: 0; }
      50% { opacity: 1; }
      100% { opacity: 0; }
    }
  `, styleSheet.cssRules.length);

  // Add typing cursor styles
  // Replace the problematic insertRule with these separate declarations
  styleSheet.insertRule(`
    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }
  `, styleSheet.cssRules.length);
  
  styleSheet.insertRule(`
    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50% { border-color: white; }
    }
  `, styleSheet.cssRules.length);
  
  styleSheet.insertRule(`
    .typing-line::after {
      content: "|";
      margin-left: 2px;
      animation: blink 1s infinite;
      color: white;
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    .animate-fadeIn {
      animation: fadeIn 1s ease-out forwards;
      opacity: 0;
    }
  `, styleSheet.cssRules.length);
}
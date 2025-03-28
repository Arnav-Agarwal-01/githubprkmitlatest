"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function PosterCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Middle poster is active initially
  const [posters, setPosters] = useState([]);
  const carouselRef = useRef(null);
  
  // Reduced to only 6 slides with custom content for each
  const posterData = [
    {
      image: '/images/img1.jpeg',
      title: 'PR KMIT Events',
      description: 'Organizing campus-wide events and activities'
    },
    {
      image: '/images/img5.jpeg',
      title: 'Media Coverage',
      description: 'Handling press and media relations for KMIT'
    },
    {
      image: '/images/img8.jpeg',
      title: 'Student Outreach',
      description: 'Connecting with students across departments'
    },
    {
      image: '/images/img10.jpeg',
      title: 'Social Media',
      description: 'Managing KMITs online presence and engagement'
    },
    {
      image: '/images/img14.jpeg',
      title: 'Alumni Relations',
      description: 'Building networks with KMIT graduates lmaoo ded xd'
    },
    {
      image: '/images/img17.jpeg',
      title: 'Community Service',
      description: 'Leading initiatives for social responsibility'
    },
  ];
  
  // For easier access in the component
  const posterImages = posterData.map(item => item.image);

  // Initialize posters with only 3 visible at once (plus 2 for smooth transitions)
  useEffect(() => {
    // Initialize with first 5 posters from the data
    setPosters([
      { 
        id: 0, 
        src: posterData[0].image,
        title: posterData[0].title,
        description: posterData[0].description,
        position: 'entry'
      },
      { 
        id: 1, 
        src: posterData[1].image,
        title: posterData[1].title,
        description: posterData[1].description,
        position: 'right'
      },
      { 
        id: 2, 
        src: posterData[2].image,
        title: posterData[2].title,
        description: posterData[2].description,
        position: 'active'
      },
      { 
        id: 3, 
        src: posterData[3].image,
        title: posterData[3].title,
        description: posterData[3].description,
        position: 'left'
      },
      { 
        id: 4, 
        src: posterData[4].image,
        title: posterData[4].title,
        description: posterData[4].description,
        position: 'exit'
      },
    ]);
  }, []);



  // Handle scroll events with optimized performance and reduced lag
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;
    let lastScrollTime = 0;
    // Adaptive cooldown based on device type
    const scrollCooldown = window.innerWidth <= 768 ? 400 : 600; // Shorter cooldown on mobile
    const touchThreshold = window.innerWidth <= 480 ? 5 : 10; // Lower threshold on mobile for easier swiping
    let scrollDirection = null;
    let scrollHandler = null;
    let touchTimeout = null;
    
    const handleScroll = (e) => {
      const now = Date.now();
      
      // Prevent scroll events from firing too rapidly
      if (isScrolling || now - lastScrollTime < scrollCooldown) {
        e.preventDefault();
        return;
      }
      
      // Determine scroll direction
      const direction = e.deltaY > 0 ? 'next' : 'prev';
      
      // Only proceed if we're not already scrolling
      if (!isScrolling) {
        // Set scrolling flag and update last scroll time
        isScrolling = true;
        lastScrollTime = now;
        scrollDirection = direction;
        
        // Clear any existing timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        // Use requestAnimationFrame for smoother visual updates
        // and debounce the actual rotation to prevent performance issues
        if (scrollHandler) {
          cancelAnimationFrame(scrollHandler);
        }
        
        scrollHandler = requestAnimationFrame(() => {
          rotatePosters(direction);
          
          // Reset scrolling flag after cooldown
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
            scrollDirection = null;
          }, scrollCooldown);
        });
      }
      
      e.preventDefault();
    };

    // Enhanced touch support for mobile devices
    let touchStartY = 0;
    let touchStartX = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e) => {
      if (isScrolling) return;
      
      const touchEndY = e.touches[0].clientY;
      const touchEndX = e.touches[0].clientX;
      const diffY = touchStartY - touchEndY;
      const diffX = touchStartX - touchEndX;
      
      // Debounce touch events for smoother transitions
      if (touchTimeout) clearTimeout(touchTimeout);
      
      touchTimeout = setTimeout(() => {
        // Check if vertical swipe is more significant than horizontal
        if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > touchThreshold) {
          const direction = diffY > 0 ? 'next' : 'prev';
          handleScroll({ deltaY: diffY, preventDefault: () => {} });
          touchStartY = touchEndY;
          touchStartX = touchEndX;
        }
        // Also support horizontal swipes for mobile
        else if (Math.abs(diffX) > touchThreshold) {
          const direction = diffX > 0 ? 'prev' : 'next'; // Reversed for intuitive swiping
          handleScroll({ deltaY: direction === 'next' ? 100 : -100, preventDefault: () => {} });
          touchStartY = touchEndY;
          touchStartX = touchEndX;
        }
      }, 30); // Reduced timeout for more responsive touch
    };

    // Use wheel event with passive: false to allow preventDefault
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      if (scrollHandler) {
        cancelAnimationFrame(scrollHandler);
      }
    };
  }, []);

  // Function to rotate posters based on scroll direction with improved animation flow
  const rotatePosters = (direction) => {
    setPosters(prevPosters => {
      const newPosters = [...prevPosters];
      
      if (direction === 'next') {
        // Calculate the next image index
        const nextImageIndex = (activeIndex + 1) % posterData.length;
        
        // Shift all posters one position back
        newPosters.shift(); // Remove the first poster
        
        // Add new poster at the end
        newPosters.push({
          id: newPosters[newPosters.length - 1].id + 1,
          src: posterData[nextImageIndex].image,
          title: posterData[nextImageIndex].title,
          description: posterData[nextImageIndex].description,
          position: 'entry' // Start off-screen at bottom right
        });
        
        // Update positions for all posters - flow from right to center to left
        newPosters[0].position = 'exit'; // Move to exit position (bottom left)
        newPosters[1].position = 'left'; // Move to left position
        newPosters[2].position = 'active'; // Move to center position
        newPosters[3].position = 'right'; // Move to right position
        
        // Update active index
        setActiveIndex((activeIndex + 1) % posterData.length);
      } else {
        // Calculate the previous image index
        const prevImageIndex = (activeIndex - 1 + posterData.length) % posterData.length;
        
        // Shift all posters one position forward
        newPosters.pop(); // Remove the last poster
        
        // Add new poster at the beginning
        newPosters.unshift({
          id: newPosters[0].id - 1,
          src: posterData[prevImageIndex].image,
          title: posterData[prevImageIndex].title,
          description: posterData[prevImageIndex].description,
          position: 'exit' // Start off-screen at bottom left
        });
        
        // Update positions for all posters - flow from left to center to right
        newPosters[1].position = 'right'; // Move to right position
        newPosters[2].position = 'active'; // Move to center position
        newPosters[3].position = 'left'; // Move to left position
        newPosters[4].position = 'entry'; // Move to entry position (bottom right)
        
        // Update active index
        setActiveIndex((activeIndex - 1 + posterData.length) % posterData.length);
      }
      
      return newPosters;
    });
  };

  return (
    <div className="poster-carousel" ref={carouselRef} style={{ perspective: '1500px', transformStyle: 'preserve-3d', height: '100%' }}>
      {posters.map((poster) => (
        <div 
          key={poster.id} 
          className={`poster ${poster.position}`}
        >
          <div className="poster-content">
            <Image
              src={poster.src}
              alt={`${poster.title}`}
              width={400}
              height={600}
              className="poster-image"
              priority={poster.position === 'active'}
            />
            <div className="poster-overlay">
              <h3 className="poster-title">{poster.title}</h3>
              <p className="poster-description">{poster.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        .poster-carousel {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1500px;
          z-index: 1;
          perspective-origin: 50% 50%;
          overflow: visible;
          transform-style: preserve-3d;
          top: -10vh; /* Move carousel up to prevent slides appearing at bottom */
        }
        
        /* Mobile adjustments for the carousel container */
        @media (max-width: 768px) {
          .poster-carousel {
            top: -5vh; /* Less offset on mobile */
            perspective: 1200px; /* Slightly reduced perspective for mobile */
          }
        }
        
        .poster {
          position: absolute;
          width: 280px;
          height: 420px;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          overflow: hidden;
          will-change: transform, opacity;
          pointer-events: none;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          margin: 0 30px; /* Add horizontal margin for more space between slides */
        }
        
        /* Mobile adjustments for poster size */
        @media (max-width: 768px) {
          .poster {
            width: 220px; /* Smaller width on mobile */
            height: 330px; /* Smaller height on mobile */
            margin: 0 15px; /* Less margin on mobile */
          }
        }
        
        /* Small mobile adjustments */
        @media (max-width: 480px) {
          .poster {
            width: 180px; /* Even smaller on small devices */
            height: 270px;
            margin: 0 10px;
          }
        }
        
        .poster-content {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .poster-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .poster-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 25px 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.6) 80%, transparent);
          color: white;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .active .poster-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        
        .poster-title {
          font-size: 1.5rem;
          margin-bottom: 8px;
          font-weight: bold;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .poster-description {
          font-size: 1rem;
          opacity: 0.9;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }
        
        /* Mobile adjustments for overlay text */
        @media (max-width: 768px) {
          .poster-overlay {
            padding: 20px 15px;
          }
          
          .poster-title {
            font-size: 1.2rem;
            margin-bottom: 5px;
          }
          
          .poster-description {
            font-size: 0.9rem;
          }
        }
        
        /* Small mobile adjustments */
        @media (max-width: 480px) {
          .poster-overlay {
            padding: 15px 10px;
          }
          
          .poster-title {
            font-size: 1rem;
            margin-bottom: 3px;
          }
          
          .poster-description {
            font-size: 0.8rem;
          }
        }
        
        /* Position-specific styles with improved transitions */
        .entry {
          transform: translateX(-200%) scale(0.5) translateZ(-400px) rotateY(25deg);
          opacity: 0;
          z-index: 0;
        }
        .exit {
          transform: translateX(200%) scale(0.5) translateZ(-400px) rotateY(-25deg);
          opacity: 0;
          z-index: 0;
        }
        .left {
          transform: translateX(-120%) scale(0.8) translateZ(-150px) rotateY(15deg);
          opacity: 0.8;
          z-index: 1;
          filter: brightness(0.8);
        }
        .right {
          transform: translateX(120%) scale(0.8) translateZ(-150px) rotateY(-15deg);
          opacity: 0.8;
          z-index: 1;
          filter: brightness(0.8);
        }
        .active {
          transform: translateX(0) scale(1) translateZ(0) rotateY(0);
          opacity: 1;
          z-index: 2;
          pointer-events: auto;
          filter: brightness(1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }
        
        /* Mobile adjustments for poster positions */
        @media (max-width: 768px) {
          .left {
            transform: translateX(-100%) scale(0.7) translateZ(-120px) rotateY(12deg);
          }
          .right {
            transform: translateX(100%) scale(0.7) translateZ(-120px) rotateY(-12deg);
          }
        }
        
        /* Small mobile adjustments for poster positions */
        @media (max-width: 480px) {
          .left {
            transform: translateX(-85%) scale(0.6) translateZ(-100px) rotateY(10deg);
          }
          .right {
            transform: translateX(85%) scale(0.6) translateZ(-100px) rotateY(-10deg);
          }
        }
      `}</style>
    </div>
  );
}
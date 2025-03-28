"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageBackground() {
  const [positions, setPositions] = useState([]);

  const images = [
    '/images/img1.jpeg',
    '/images/img2.jpeg',
    '/images/img3.jpeg',
    '/images/img4.jpeg',
    '/images/img5.jpeg',
    '/images/img6.jpeg',
    '/images/img7.jpeg',
    '/images/img8.jpeg',
    '/images/img9.jpeg',
    '/images/img10.jpeg',
    '/images/img11.jpeg',
    '/images/img12.jpeg',
    '/images/img13.jpeg',
    '/images/img14.jpeg',
    '/images/img15.jpeg',
    '/images/img16.jpeg',
    '/images/img17.jpeg',
    '/images/img18.jpeg',
  ];

  useEffect(() => {
    // Divide the screen into grid sections to ensure better distribution
    const gridSize = Math.ceil(Math.sqrt(images.length));
    const cellWidth = 100 / gridSize;
    const cellHeight = 100 / gridSize;
    
    // Create positions with better distribution
    const initialPositions = images.map((_, index) => {
      // Calculate grid position
      const gridX = index % gridSize;
      const gridY = Math.floor(index / gridSize);
      
      // Add randomness within the grid cell
      const top = (gridY * cellHeight) + (Math.random() * (cellHeight * 0.7));
      const left = (gridX * cellWidth) + (Math.random() * (cellWidth * 0.7));
      
      return {
        top: top,
        left: left,
        rotate: Math.random() * 20 - 10, // Random rotation between -10 and 10 degrees
        scale: 0.3 + Math.random() * 0.4, // Random scale between 0.3 and 0.7
        zIndex: Math.floor(Math.random() * 10),
      };
    });
    
    setPositions(initialPositions);

    // Upward movement effect
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((pos) => ({
          top: (pos.top - 5 + 100) % 100, // Move up by 5% each interval
          left: pos.left, // Keep horizontal position constant
          rotate: pos.rotate, // Keep rotation constant
          scale: pos.scale, // Keep scale constant
          zIndex: pos.zIndex,
        }))
      );
    }, 3000); // Faster interval for smoother movement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background">
      {images.map((src, index) => (
        <div 
          key={index} 
          className="image-container"
          style={{
            top: `${positions[index]?.top}%`,
            left: `${positions[index]?.left}%`,
            transform: `rotate(${positions[index]?.rotate}deg) scale(${positions[index]?.scale})`,
            zIndex: positions[index]?.zIndex,
            backgroundColor: index % 3 === 0 ? 'rgba(255, 100, 50, 0.2)' : 
                           index % 3 === 1 ? 'rgba(30, 144, 255, 0.2)' : 
                           'rgba(200, 200, 200, 0.2)',
          }}
        >
          <Image
            src={src}
            alt={`Background ${index}`}
            width={240}
            height={180}
            className="floating-image"
          />
        </div>
      ))}
      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: -1;
          background: rgb(0, 0, 0);
          filter: blur(1px);
        }
        .image-container {
          position: absolute;
          padding: 10px;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 5s ease;
          overflow: hidden;
        }
        .floating-image {
          width: 100%;
          height: auto;
          opacity: 0.6;
          object-fit: cover;
          filter: blur(10px);
        }
      `}</style>
    </div>
  );
}
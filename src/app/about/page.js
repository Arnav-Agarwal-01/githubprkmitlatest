import ImageBackground from '@/components/background'
import { FocusCards } from '@/components/ui/focus-cards'
import React from 'react'

function page() {
  const cards = [
    { src: '/images/about1.png', title: 'Sponsorships' },
    { src: '/images/about2.png', title: 'Promotions and Passes' },
    { src: '/images/about3.png', title: 'Media and Communication' },
    { src: '/images/about4.png', title: 'Student Relation' }
  ];

  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <ImageBackground />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center p-4 pt-24 md:pt-32">
        <div className="relative z-[1000] w-full max-w-5xl">
          <FocusCards cards={cards} />
        </div>
      </div>
    </main>
  );
}

export default page
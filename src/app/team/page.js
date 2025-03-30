'use client';

import React from 'react';
import InteractiveBentoGallery from '@/components/blocks/interactive-bento-gallery';
import { SplashCursor } from '@/components/ui/splash-cursor';

function TeamPage() {
  // Team members data for the interactive bento gallery
  const teamMembers = [
    {
      id: 1,
      type: 'image',
      url: '/images/img1.jpeg',
      title: 'Rishi Krovvidi',
      desc: 'PR Head ',
      span: 'row-span-2 col-span-1'
    },
    {
      id: 2,
      type: 'image',
      url: '/images/img2.jpeg',
      title: 'Vardaan Arora Bhatia',
      desc: 'WebDev , Spons Manager , Video Editor',
      span: 'row-span-1 col-span-1'
    },
    {
      id: 3,
      type: 'image',
      url: '/images/img3.jpeg',
      title: 'Sandeep Ade',
      desc: 'Graphic Designer',
      span: 'row-span-2 col-span-1'
    },
    {
      id: 4,
      type: 'image',
      url: '/images/img4.jpeg',
      title: 'Nithya Reddy',
      desc: 'Social Media Handler',
      span: 'row-span-1 col-span-2'
    },
    {
      id: 5,
      type: 'image',
      url: '/images/img5.jpeg',
      title: 'Jishnu Attanti',
      desc: 'Content Creator',
      span: 'row-span-1 col-span-1'
    },
    {
      id: 6,
      type: 'image',
      url: '/images/img6.jpeg',
      title: 'Akshaya Pothani',
      desc: 'Documentation Incharge',
      span: 'row-span-2 col-span-1'
    },
    {
      id: 7,
      type: 'image',
      url: '/images/img7.jpeg',
      title: 'Sreekruthi',
      desc: 'Content Creator',
      span: 'row-span-1 col-span-1'
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Add the splash cursor effect consistent with other pages */}
      <SplashCursor 
        BACK_COLOR={{ r: 0, g: 0, b: 0 }}
        SPLAT_FORCE={8000}
        COLOR_UPDATE_SPEED={15}
      />
      
      {/* Header section */}
      <div className="pt-32 pb-8 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          The creative minds behind PR KMIT, working together to showcase the best of our college
        </p>
      </div>

      {/* Interactive Bento Gallery */}
      <div className="relative z-10">
        <InteractiveBentoGallery 
          mediaItems={teamMembers}
          title="PR KMIT Team Members"
          description="Drag, click, and interact with our team gallery"
        />
      </div>

      
    </main>
  );
}

export default TeamPage
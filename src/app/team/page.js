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
      title: 'Arjun Sharma',
      desc: 'PR Head | Specializes in event management and media relations',
      span: 'row-span-2 col-span-1'
    },
    {
      id: 2,
      type: 'image',
      url: '/images/img2.jpeg',
      title: 'Priya Patel',
      desc: 'Social Media Manager | Creates engaging content for all platforms',
      span: 'row-span-1 col-span-1'
    },
    {
      id: 3,
      type: 'image',
      url: '/images/img3.jpeg',
      title: 'Rahul Verma',
      desc: 'Content Writer | Crafts compelling stories and press releases',
      span: 'row-span-2 col-span-1'
    },
    {
      id: 4,
      type: 'image',
      url: '/images/img4.jpeg',
      title: 'Ananya Desai',
      desc: 'Graphic Designer | Creates visual assets for campaigns',
      span: 'row-span-1 col-span-2'
    },
    {
      id: 5,
      type: 'image',
      url: '/images/img5.jpeg',
      title: 'Vikram Singh',
      desc: 'Photographer | Captures moments at all college events',
      span: 'row-span-1 col-span-1'
    },
    {
      id: 6,
      type: 'image',
      url: '/images/img6.jpeg',
      title: 'Neha Gupta',
      desc: 'Event Coordinator | Manages logistics for PR activities',
      span: 'row-span-2 col-span-1'
    },
    {
      id: 7,
      type: 'image',
      url: '/images/img7.jpeg',
      title: 'Karan Malhotra',
      desc: 'Video Editor | Creates promotional videos and reels',
      span: 'row-span-1 col-span-1'
    },
    {
      id: 8,
      type: 'image',
      url: '/images/img8.jpeg',
      title: 'Riya Kapoor',
      desc: 'Public Relations Officer | Handles external communications',
      span: 'row-span-1 col-span-2'
    },
    {
      id: 9,
      type: 'image',
      url: '/images/img9.jpeg',
      title: 'Aditya Kumar',
      desc: 'Digital Marketing Specialist | Manages online campaigns',
      span: 'row-span-2 col-span-1'
    },
    {
      id: 10,
      type: 'image',
      url: '/images/img10.jpeg',
      title: 'Shreya Reddy',
      desc: 'Community Manager | Builds relationships with student body',
      span: 'row-span-1 col-span-1'
    }
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
      <div className="pt-24 pb-8 px-4 text-center">
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

      {/* Additional information */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
        <p className="text-gray-300 mb-6">
          Interested in being part of PR KMIT? We're always looking for creative and passionate individuals to join our team.
        </p>
        <a 
          href="/contact" 
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
}

export default TeamPage
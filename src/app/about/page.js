import ImageBackground from '@/components/background'
import { FocusCards } from '@/components/ui/focus-cards'
import { LogoCarousel } from '@/components/ui/logo-carousel'
import { GoogleLogo, MicrosoftLogo, AmazonLogo, MetaLogo, IBMLogo } from '@/components/ui/sponsor-logos'
import { SplashCursor } from '@/components/ui/splash-cursor'
import Link from 'next/link'
import React from 'react'

function page() {
  const cards = [
    { src: '/images/about1.png', title: 'Sponsorships' },
    { src: '/images/about2.png', title: 'Promotions and Passes' },
    { src: '/images/about3.png', title: 'Media and Communication' },
    { src: '/images/about4.png', title: 'Student Relation' }
  ];

  // Sample sponsor logos data
  const sponsorLogos = [
    { id: 1, img: GoogleLogo },
    { id: 2, img: MicrosoftLogo },
    { id: 3, img: AmazonLogo },
    { id: 4, img: MetaLogo },
    { id: 5, img: IBMLogo }
  ];

  return (
    <main className="relative min-h-screen overflow-y-auto">
      <SplashCursor 
        BACK_COLOR={{ r: 0, g: 0, b: 0 }}
        SPLAT_FORCE={8000}
        COLOR_UPDATE_SPEED={15}
      />
      <div className="fixed inset-0 pointer-events-none">
        <ImageBackground />
      </div>
      
      <div className="relative flex flex-col items-center justify-start p-4 pt-32 md:pt-40 w-full">
        <h1 className="text-4xl font-mono text-white mb-16 text-center">ABOUT US</h1>
        <div className="w-full max-w-7xl mx-auto mb-24">
          <FocusCards cards={cards} />
        </div>
        
        <div className="w-full max-w-7xl mx-auto mt-16 mb-16 bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10">
          <h2 className="text-3xl font-mono text-white mb-8 text-center">Our Sponsors</h2>
          <div className="flex justify-center mb-8">
            <LogoCarousel logos={sponsorLogos} columnCount={3} />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/contact">
              <button className="px-6 py-4 font-mono text-white border-2 border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105">
                Sponsor Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page
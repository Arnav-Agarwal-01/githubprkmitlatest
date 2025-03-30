"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const INSTAGRAM_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex items-center space-x-4 mb-4 md:mb-0 group">
          <Image 
            src="/images/img1.jpeg" 
            alt="PR KMIT Logo" 
            width={48} 
            height={48} 
            className="rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
            Made with ❤️ by PR KMIT
          </span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link 
            href="https://www.instagram.com/pr.kmit/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition-colors duration-300 text-xl"
          >
            {INSTAGRAM_ICON}
          </Link>
          
          <Link
            href="/contact"
            className={cn(
              "px-6 py-3 rounded-lg text-sm font-medium tracking-wider",
              "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            )}
          >
            Sponsor Us
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PR KMIT. All rights reserved.
      </div>
    </footer>
  );
}
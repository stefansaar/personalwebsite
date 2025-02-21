'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import BackButton from '@/components/BackButton';

export default function CarProject() {
  const [isSliding, setIsSliding] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`relative min-h-screen bg-nav-bg transform transition-all duration-300 ease-in-out ${
        isSliding ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
      }`}
    >
      {/* Parallax Header Section */}
      <div className="relative w-full h-[45vh] md:h-[45vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/placeholder-cover.jpg')] bg-cover bg-center scale-125"
          style={{ 
            backgroundAttachment: 'fixed',
            transform: `translateY(${scrollY * 0.3}px) scale(1.25)`,
            transition: 'transform 0.1s ease-out',
            top: '-10%',
            height: '110%',
            pointerEvents: 'none'
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />
        
        <BackButton />

        <div className="relative z-10 flex flex-col items-center justify-start h-full pt-24 md:pt-32">
          <h1 className="text-6xl font-bold text-white text-center mb-6">[Project Title]</h1>
          <p className="text-white text-lg text-justify md:text-center mx-12 mb-12 md:mx-36">
            [Brief project description - 2-3 sentences about the project context, collaborators, and main goal]
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-4 flex flex-col-reverse md:flex-row items-center justify-center px-8 md:px-48">
        <div className="mt-10 flex justify-center w-full md:w-1/2">
          <Image
            src="/placeholder-project-image.jpg"
            alt="Project Image"
            width={500}
            height={500}
            className="shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:ml-8 text-white">
          <h2 className="text-4xl text-center font-bold mb-4">[Project Name]</h2>
          <p className="mt-8 text-lg text-justify">
            [Detailed project description. Include information about:
            - The problem you were solving
            - Your approach and methodology
            - Key features or innovations
            - Technical details
            - Outcomes or results]
          </p>
        </div>
      </div>

      {/* Optional Additional Content Section */}
      <div className="py-16 px-8 md:px-36">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">[Additional Content Section]</h2>
        {/* Add any additional content sections here (videos, galleries, etc.) */}
      </div>

      {/* PDF Section */}
      <div className="py-8 px-8">
        <a 
          href="/path-to-your-pdf.pdf"
          download="project-document.pdf"
          className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            View the Project PDF
          </h2>
        </a>
        <div className="flex justify-center">
          <iframe
            src="/path-to-your-pdf.pdf"
            className="w-full md:max-w-4xl h-screen"
            title="Project PDF"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

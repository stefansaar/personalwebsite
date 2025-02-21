'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import BackButton from '@/components/BackButton';

export default function NestAssured() {
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
          className="absolute inset-0 bg-[url('/nestaesthetic.png')] bg-cover bg-center scale-125"
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
          <h1 className="text-6xl font-bold text-white text-center mb-6">Nest Assured</h1>
          <p className="text-white text-lg text-justify md:text-center mx-12 mb-12 md:mx-36">
            Nest Assured was developed as part of an Industrial Design Engineering module during 
            my 2nd year of studying Design Engineering at Imperial College London. 
            This group project was created in collaboration with Anne Lee, Arancha Ramirez, and Josh Williams.
          </p>
        </div>
      </div>

      {/* Rest of your content remains the same */}
      <div className="mt-4 flex flex-col-reverse md:flex-row items-center justify-center px-8 md:px-48">
        <div className="mt-10 flex justify-center w-full md:w-1/2">
          <Image
            src="/nestproject.png"
            alt="Nest Assured"
            width={500}
            height={500}
            className="shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:ml-8 text-white">
          <h2 className="text-4xl text-center font-bold mb-4">About Nest Assured</h2>
          <p className="mt-8 text-lg text-justify">
            Nest Assured is an Ultra High Frequency (UHF) RFID-based tracking module, 
            developed as a group project for the 2nd-year Industrial Design Engineering module. 
            Created with a user-centered approach, it addresses forgetfulness, particularly for people with ADHD, 
            by reducing the stress of managing everyday items. The system features a rotary dial controller 
            and an RFID detection module to check the presence of categorized items using RFID stickers, 
            offering an efficient and intuitive solution for item tracking.
          </p>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="py-16 px-8 md:px-36">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Watch Our Video</h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/iS23X2kF1yc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="py-8 px-8">
        <a 
          href="/IDE_NestAssured_Group16.pdf"
          download="IDE_NestAssured_Group16.pdf"
          className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            View the Project PDF
          </h2>
        </a>
        <div className="flex justify-center">
          <iframe
            src="/IDE_NestAssured_Group16.pdf"
            className="w-full md:max-w-4xl h-screen"
            title="Nest Assured PDF"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

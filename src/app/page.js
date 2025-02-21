'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Main Container */}
      <div className="bg-[url('/profilebg.png')] bg-cover lg:px-24 md:px-8 pt-4 flex flex-col-reverse md:flex-row md:max-h-[500px] items-center">
        {/* Profile Image */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Image
              src="/stefanpng.png"
              alt="Profile"
              width={1050}
              height={1078}
              className="flex-shrink-0 max-h-[250px] sm:max-h-[350px] md:max-h-[500px] max-w-[250px] sm:max-w-[350px] md:max-w-[500px]"
            />
          </div>

          {/* About me section */}
        <div className="mt-8 md:mt-0 md:ml-0 mx-12 text-center md:text-left md:mx-20">
          <h1 className="text-6xl font-bold mb-4 text-nav-bg">About me.</h1>
          <p className="text-xl md:max-h-[200px] text-gray-600 md:py-4">
          Hi, I’m Stefan Saar, a design engineering student driven by a passion 
          for innovation at the intersection of mechanical and electrical engineering, 
          robotics, and user-centered design.
          </p>
        </div>
      </div>

      {/* Career Section with conditional parallax effect */}
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/stefstarship.png')] bg-cover bg-center"
          style={{
            backgroundAttachment: isMobile ? 'scroll' : 'fixed',
            ...(isMobile && {
              transform: `translateY(${scrollY * 0.3}px) scale(1.75)`,
              top: '-10%',
              height: '110%',
              pointerEvents: 'none',
              willChange: 'transform',
              WebkitWillChange: 'transform'
            })
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-6xl font-bold mb-16 mt-16 text-center">Career</h1>
          <p className="text-xl mx-8 pb-16 relative text-center text-white max-w-4xl">
            My journey reflects a passion for engineering and innovation, with experiences 
            spanning design, robotics, and interdisciplinary problem-solving. 
            Explore my career highlights to see how I’ve applied creativity and 
            technical expertise to tackle real-world challenges and drive impactful results.
          </p>
        </div>
      </div>

      <div className="bg-cover h-96 w-full flex items-center justify-center">
        <div className="flex items-center just">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Under Construction...</h1>
          <span className="ml-4 text-5xl">🚧</span>
        </div>
      </div>

      <div className="bg-white h-96 w-full">
      </div>
    </div>
  );
}

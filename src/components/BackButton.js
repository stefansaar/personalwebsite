'use client'

import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';

export default function BackButton() {
  const router = useRouter();
  const [isSliding, setIsSliding] = useState(false);

  const handleBack = useCallback(() => {
    setIsSliding(true);
    setTimeout(() => {
      router.back();
    }, 300);
  }, [router]);

  return (
    <button 
      onClick={handleBack}
      className="absolute top-8 left-6 md:left-24 z-50 p-2 bg-black/30 hover:bg-black/50 transition-all duration-300 cursor-pointer"
      aria-label="Go back"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-10 w-10 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 19l-7-7m0 0l7-7m-7 7h18" 
        />
      </svg>
    </button>
  );
}

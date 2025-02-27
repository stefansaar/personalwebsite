'use client'

import BackButton from '@/components/BackButton';

export default function Blackjack() {
  return (
    <div className="relative min-h-screen bg-nav-bg">
      <BackButton />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex items-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Under Construction...</h1>
          <span className="ml-4 text-5xl">🚧</span>
        </div>
      </div>
    </div>
  );
}

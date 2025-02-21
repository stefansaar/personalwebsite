'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'About me' },
    { href: '/projects', label: 'Projects' },
    { href: '/videos', label: 'Videos' },
    { href: '/blog', label: 'Blog' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex justify-end md:justify-end items-center md:items-start">
      {/* Mobile menu button - Keep on the right */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`w-48 text-center px-6 py-4 text-2xl border border-white rounded-none transition-all duration-200 ${
              (pathname === item.href || (item.href === '/projects' && pathname.startsWith('/projects')))
                ? 'bg-white text-black'
                : 'bg-transparent text-white hover:bg-nav-hover hover:text-nav-bg hover:text-nav-text hover:bg-gradient-to-t from-white to-nav-bg to-80%'
            }`}
            onClick={toggleMenu} // Close menu on link click
          >
            {item.label}
          </Link>
        ))}
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2 text-lg border border-white rounded-none transition-all duration-200 ${
              (pathname === item.href || (item.href === '/projects' && pathname.startsWith('/projects')))
                ? 'bg-white text-black'
                : 'bg-transparent text-white hover:bg-nav-hover hover:text-nav-bg hover:text-nav-text hover:bg-gradient-to-t from-white to-nav-bg to-80%'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

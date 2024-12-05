import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Information</h1>
        <p className="text-xl mb-2">
          Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a>
        </p>
        <p className="text-xl">
          Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a>
        </p>
      </div>
    </div>
  );
}

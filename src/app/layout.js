import "./globals.css";
import Image from 'next/image';
import Navigation from './components/navigation';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify the weights you need
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* Apply the bg-transparent class for transparency */}
        <nav className="bg-transparent w-full mx-auto flex items-center justify-between px-12 py-4 md:px-20 md:py-8">
          <div className="flex justify-between items-center w-full">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="md:w-[100px] md:h-[100px]" />
            <Navigation/>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
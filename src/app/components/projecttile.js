import Image from 'next/image';
import Link from 'next/link';

export default function ProjectTile({ imageSrc, title, link }) {
  return (
    <Link href={link}>
      <div className="relative w-80 h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl group">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-30">
          <h2 className="text-white text-4xl text-center font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

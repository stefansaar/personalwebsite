import Image from 'next/image';
import Link from 'next/link';

export default function ProjectTile({ imageSrc, title, link }) {
  return (
    <Link href={link}>
      <div className="relative w-80 h-80 overflow-hidden shadow-lg cursor-pointer">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl text-center font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import ProjectTile from '../components/projecttile';

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-nav-bg">
      {/* Projects Page Container */}
        {/* Projects Header */}
      <div className="bg-[url('/projectcover.png')] bg-cover bg-center w-full py-16">
        <h1 className="text-6xl font-bold text-white text-center mb-8">Projects</h1>
        <p className="text-white text-lg text-center mx-8 md:mx-36">
        My projects represent a blend of creativity, engineering, and innovation, 
        tackling challenges across robotics, design, and technology. 
        Each project highlights my commitment to pushing boundaries, exploring new ideas, 
        and delivering practical, impactful solutions.
        </p>
      </div>
      <div className='mx-8 mt-16'>
        {/* Projects Tiles Section */}
        <div className="grid place-items-center grid-cols-1 justify-center gap-16 sm:grid-cols-2 lg:grid-cols-3 md:px-20">
          <ProjectTile imageSrc="/nestproject.jpg" title="Nest Assured" link="/projects/nestassured" />
          <ProjectTile imageSrc="/carproject.png" title="Aero-2S" link="/projects/carproject" />
          <ProjectTile imageSrc="/multibodysimproject.png" title="Multibody Simulation" link="/projects/multibodysim" />
          <ProjectTile imageSrc="/blackjackproject.png" title="Blackjack+" link="/projects/blackjack" />
          <ProjectTile imageSrc="/selfbalancingproject.png" title="Self-balancing robot" link="/projects/selfbalancing" />
          <ProjectTile imageSrc="/wordlestproject.png" title="WorldEST" link="/projects/wordlest" />
          <ProjectTile imageSrc="/wifircproject.jpg" title="WiFi RC car" link="/projects/wifirc" />
        </div>
      </div>
    </div>
  );
}

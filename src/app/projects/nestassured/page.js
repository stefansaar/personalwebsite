import Image from 'next/image';

export default function NestAssured() {
  return (
    <div className="relative min-h-screen bg-nav-bg">
      {/* Nest Assured Page Container */}
      <div className="relative z-10 mx-auto">
        {/* Page Header with Parallax Effect */}
        <div
          className="relative bg-cover w-full py-24"
          style={{
            backgroundImage: "url('/nestaesthetic.jpg')",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center 100%', // Adjust the vertical starting point
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
          <div className="relative z-10">
            <h1 className="text-6xl font-bold text-white text-center mb-8">Nest Assured</h1>
            <p className="text-white text-lg text-justify md:text-center mx-8 md:mx-36">
            Nest Assured was developed as part of an Industrial Design Engineering module during 
            my 2nd year of studying Design Engineering at Imperial College London. 
            This group project was created in collaboration with Anne Lee, Arancha Ramirez, and Josh Williams.
            </p>
          </div>
        </div>

        {/* Image and Text Section */}
        <div className="mt-4 flex flex-col-reverse md:flex-row items-center justify-center px-8 md:px-48">
          <div className="mt-10 flex justify-center w-full md:w-1/2">
            <Image
              src="/nestproject.jpg"
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
        <div className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">View the Project PDF</h2>
            <div className="flex justify-center">
              <iframe
                src="/IDE_NestAssured_Group16.pdf"
                className="w-full md:max-w-4xl h-screen"
                title="Nest Assured PDF"
              ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

const Frame3 = () => {
  return (
    <div
      className="w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-6 flex flex-col justify-between items-center bg-transparent overflow-visible"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')", // Add your image path here
        backgroundSize: "cover", // Ensures the image covers the full screen
        backgroundPosition: "center", // Centers the image
      }}
    >
      {/* Header Section */}
      <div className="w-full flex justify-center items-center mb-10 translate-y-[-85px]">
        <div className="text-center">
        <div className="text-[#3be174] text-xs sm:text-sm md:text-lg font-medium font-['Exo'] uppercase">
            role
          </div>
          <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-['Kodchasan'] uppercase">
            role
          </div>
         
        </div>

      </div>
      <div className="w-[200px] h-[50px] mx-auto translate-y-[-120px]">
            <Image
              src="/campusambassador/style2/design_persian.svg" // Update the path to your Persian design SVG
              alt="Design Persian"
              width={100} // Adjust to match size of "role" text
              height={100} // Adjust to match size of "role" text
            />
          </div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 w-full max-w-[1552px] mb-10">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-center text-[#727070] text-xl sm:text-2xl md:text-3xl font-bold font-['Kodchasan'] uppercase">
            your ideate
          </div>
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full relative">
            <Image
              className="rounded-full"
              src="/campusambassador/style2/role_img1.png"
              alt="Your Ideate"
              width={350}
              height={350}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col justify-center items-center gap-4 translate-y-[-75px] relative">
          <div className="text-center text-[#727070] text-xl sm:text-2xl md:text-3xl font-bold font-['Kodchasan'] uppercase translate-y-[-0px]">
            your represent
          </div>
          <div className="w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full relative">
            {/* Green Blur Circle behind the image */}
            <div
              className="absolute inset-0 z-[-1] bg-green-500 rounded-full blur-[30px] opacity-50"
              style={{
                filter: "blur(30px)", // Adds blur effect
              }}
            ></div>

            {/* Side Circle SVG Image above the central image and fully visible */}
            <div
              className="absolute inset-0 z-[1]"
              style={{
                top: "0%", // Slightly move the side circle upwards
                left: "30%", // Center the image horizontally
                transform: "translateX(-50%)", // Adjust for perfect centering
              }}
            >
              <Image
                className="rounded-full"
                src="/campusambassador/style2/side_circle.svg" // Update the path for your SVG image
                alt="Side Circle"
                width={380} // Adjust size as needed
                height={380} // Adjust size as needed
                objectFit="cover"
              />
            </div>

            {/* Number 01 behind the image */}
            <div
              className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 text-white text-[300px] sm:text-[300px] md:text-[300px] font-bold z-0 translate-y-[-110px]"
              style={{ opacity: 0.15 }}
            >
              01
            </div>

            <Image
              className="rounded-full"
              src="/campusambassador/style2/role_img2.png"
              alt="Your Represent"
              width={380}
              height={380}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-center text-[#727070] text-xl sm:text-2xl md:text-3xl font-bold font-['Kodchasan'] uppercase">
            your promote
          </div>
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full relative">
            <Image
              className="rounded-full"
              src="/campusambassador/style2/role_img3.png"
              alt="Your Promote"
              width={350}
              height={350}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center text-[#d8d8d8] text-sm sm:text-base md:text-lg leading-6 md:leading-8 px-4 md:px-0 max-w-[1200px]">
        Teleport to the 27th Edition of Techfest and celebrate the interplay
        between Magic, Science & Technology. Step into the realm of wonders
        where the frontiers of imagination are translated into real-world
        possibilities.
      </div>
    </div>
  );
};

export default Frame3;

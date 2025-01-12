"use client";
import { useState } from "react";
import Image from "next/image";

const Frame3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      text: "your ideate",
      imgSrc: "/campusambassador/style2/role_img1.png",
      number: "01",
    },
    {
      text: "your represent",
      imgSrc: "/campusambassador/style2/role_img2.png",
      number: "02",
    },
    {
      text: "your promote",
      imgSrc: "/campusambassador/style2/role_img3.png",
      number: "03",
    },
  ];

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const getPositionClass = (index) => {
    const positions = ["center", "left", "right"];
    return positions[(index - currentIndex + data.length) % data.length];
  };

  return (
    <div
    className="w-full min-h-[75vh] px-3 sm:px-6 md:px-8 lg:px-16 py-4 flex flex-col justify-between items-center bg-transparent overflow-visible"

      style={{
        backgroundImage: "url('/path-to-your-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
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

      {/* Main Content Section */}
      <div className="flex justify-center items-center gap-6 sm:gap-10 w-full max-w-[1552px] mb-10 relative">
        {data.map((item, index) => (
          <div
            key={index}
            className={`absolute flex flex-col items-center transition-all duration-500 ${getPositionClass(
              index
            )}`}
            onClick={index === currentIndex ? handleImageClick : null}
            style={{
              cursor: index === currentIndex ? "pointer" : "default",
              zIndex: index === currentIndex ? 10 : 1,
              opacity: index === currentIndex ? 1 : 0.5,
            }}
          >
            <div className="text-center text-[#727070] text-lg sm:text-xl md:text-2xl font-bold font-['Kodchasan'] uppercase mb-6">
              {item.text}
            </div>
            <div className="w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full relative">
              {/* Green Blur Circle behind the active image */}
              {index === currentIndex && (
                <div
                  className="absolute inset-0 z-[-1] bg-green-500 rounded-full blur-[30px] opacity-50"
                  style={{
                    filter: "blur(30px)",
                  }}
                ></div>
              )}

              {/* Number behind the active image */}
              <div
                className={`absolute top-[-80px] left-1/2 transform -translate-x-1/2 text-white text-[300px] sm:text-[300px] md:text-[300px] font-bold z-0 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-30 translate-y-[-33%]"
                    : "opacity-0"
                }`}
                style={{
                  pointerEvents: "none", // Prevent interaction
                }}
              >
                {item.number}
              </div>

              <Image
                className="rounded-full"
                src={item.imgSrc}
                alt={item.text}
                width={380}
                height={380}
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-center text-[#d8d8d8] text-sm sm:text-base md:text-lg leading-6 md:leading-8 px-4 md:px-0 max-w-[1200px]">
        Teleport.
      </div>

      <style jsx>{`
        .center {
          transform: translateX(0);
        }
        .left {
          transform: translateX(-300px) scale(0.8);
        }
        .right {
          transform: translateX(300px) scale(0.8);
        }
      `}</style>
    </div>
  );
};

export default Frame3;

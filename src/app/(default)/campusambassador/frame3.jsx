"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Frame3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(0);
  const [endTouch, setEndTouch] = useState(0);
  const [startDrag, setStartDrag] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingDistance, setDraggingDistance] = useState(0); // track the distance dragged
  const dragThreshold = 50; // minimum distance to consider as a valid swipe

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
    {
      text: "your engage",
      imgSrc: "/campusambassador/style2/role_img3.png",
      number: "04",
    },
  ];

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Touch start and end (for mobile swipe)
  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setEndTouch(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (startTouch - endTouch > dragThreshold) {
      // Swiped Left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    } else if (endTouch - startTouch > dragThreshold) {
      // Swiped Right
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
    }
  };

  // Mouse drag handling
  const handleMouseDown = (e) => {
    setStartDrag(e.clientX);
    setIsDragging(true);
    setDraggingDistance(0); // Reset dragging distance at the start of drag
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const diff = startDrag - e.clientX;
      setDraggingDistance(diff);

      // Only trigger change if the distance is greater than the threshold
      if (Math.abs(diff) > dragThreshold) {
        if (diff > 0) {
          // Swiped Left
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        } else {
          // Swiped Right
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + data.length) % data.length
          );
        }
        // Reset drag position to avoid multiple changes
        setStartDrag(e.clientX);
        setIsDragging(false); // End dragging after one change
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const getPositionClass = (index) => {
    const relativeIndex = (index - currentIndex + data.length) % data.length;
    if (relativeIndex === 0) return "center";
    if (relativeIndex === 1) return "far-right";
    if (relativeIndex === data.length - 1) return "far-left";
    return "hidden"; // Hide the image if it's not visible
  };

  useEffect(() => {
    // To prevent mouse events on mobile devices
    if (typeof window !== "undefined" && window.ontouchstart !== undefined) {
      document.body.style.touchAction = "none";
    }
  }, []);

  return (
    <div
      className="w-full min-h-[75vh] px-6 sm:px-12 md:px-20 py-8 flex flex-col justify-between items-center bg-transparent overflow-visible"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
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
      <div className="flex justify-center items-center gap-12 w-full max-w-[1552px] mb-12 relative">
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
              opacity: index === currentIndex ? 1 : 0.6,
            }}
          >
            <div className="text-center text-[#727070] text-lg sm:text-xl md:text-2xl font-bold font-['Kodchasan'] uppercase mb-6">
              {item.text}
            </div>
            <div className="w-[320px] h-[320px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-full relative">
              {index === currentIndex && (
                <div
                  className="absolute inset-0 z-[-1] bg-green-500 rounded-full blur-[30px] opacity-50"
                  style={{
                    filter: "blur(30px)",
                  }}
                ></div>
              )}

              <div
                className={`absolute top-[-80px] left-1/2 transform -translate-x-1/2 text-white text-[300px] sm:text-[300px] md:text-[300px] font-bold z-0 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-30 translate-y-[-33%]"
                    : "opacity-0"
                }`}
                style={{
                  pointerEvents: "none",
                }}
              >
                {item.number}
              </div>

              <Image
                className="rounded-full"
                src={item.imgSrc}
                alt={item.text}
                width={400}
                height={400}
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
        .far-left {
          transform: translateX(-500px) scale(0.8);
        }
        .far-right {
          transform: translateX(500px) scale(0.8);
        }
        .hidden {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Frame3;

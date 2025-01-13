"use client";
import { useEffect, useState } from "react";

const NavigationPointer = () => {
  const sections = ["section1", "section2", "section3", "section4", "section5", "section6"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const offsets = sections.map((id) => {
      const element = document.getElementById(id);
      return element ? element.offsetTop : 0;
    });

    const currentPosition = window.scrollY + window.innerHeight / 2;

    const index = offsets.findIndex(
      (offset, idx) =>
        currentPosition >= offset &&
        (idx === offsets.length - 1 || currentPosition < offsets[idx + 1])
    );

    if (index !== -1) setActiveIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-50"
      style={{
        width: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {sections.map((_, index) => (
        <div
          key={index}
          className={`relative w-4 h-4 flex items-center justify-center ${
            activeIndex === index ? "opacity-100" : "opacity-50"
          }`}
        >
          <div
            className={`absolute w-full h-full rounded-full ${
              activeIndex === index ? "bg-green-500 blur-md" : ""
            }`}
            style={{ filter: activeIndex === index ? "blur(2px)" : "none" }}
          ></div>
          <div
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: activeIndex === index ? "#44F480" : "#FFFFFF",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default NavigationPointer;

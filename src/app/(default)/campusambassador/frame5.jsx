// Add the "use client" directive at the top
"use client";

import React, { useState } from "react";

const Frame5 = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-transparent">
      <div className="max-w-7xl w-full p-8 space-y-12 text-center">
        {/* Header Section */}
        <div className="text-center">
          <div className="text-[#3be174] text-lg font-medium uppercase font-[Exo]">
            FAQ’S
          </div>
          <div className="text-white text-4xl sm:text-6xl font-bold uppercase font-[Kodchasan]">
            Frequently Asked Questions
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-10">
          {/* First FAQ */}
          <div className="relative p-5 bg-transparent rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div className="text-white text-xl sm:text-2xl font-medium font-[Kodchasan] capitalize">
                When will we receive our admit card for Phase 2?
              </div>
              <button
                onClick={() => toggleFAQ(0)}
                className="w-10 h-10 bg-[#3be174] rounded-full flex items-center justify-center text-white font-semibold cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110"
              >
                +
              </button>
            </div>
            {open === 0 && (
              <div className="text-white text-lg mt-4 font-medium font-[Kodchasan]">
                The admit cards will be sent out one week before the phase 2 exam date.
              </div>
            )}
          </div>

          {/* Second FAQ with Description */}
          <div className="relative p-5 bg-transparent rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div className="text-[#36d66d] text-xl sm:text-2xl font-medium font-[Kodchasan] capitalize">
                What is the Syllabus for TSP Open Olympiad?
              </div>
              <button
                onClick={() => toggleFAQ(1)}
                className="w-10 h-10 bg-[#3be174] rounded-full flex items-center justify-center text-white font-semibold cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110"
              >
                +
              </button>
            </div>
            {open === 1 && (
              <div className="text-white text-lg mt-4 font-medium font-[Kodchasan]">
                The exam is filled with fascinating and intriguing questions that will test your logical reasoning and thinking skills. For detailed information, please look into the attachment.
              </div>
            )}
          </div>

          {/* Third FAQ */}
          <div className="relative p-5 bg-transparent rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div className="text-white text-xl sm:text-2xl font-medium font-[Kodchasan] capitalize">
                What are the prerequisites to appear in TSP?
              </div>
              <button
                onClick={() => toggleFAQ(2)}
                className="w-10 h-10 bg-[#3be174] rounded-full flex items-center justify-center text-white font-semibold cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110"
              >
                +
              </button>
            </div>
            {open === 2 && (
              <div className="text-white text-lg mt-4 font-medium font-[Kodchasan]">
                There are no prerequisites, but familiarity with basic programming concepts will help.
              </div>
            )}
          </div>
        </div>

        {/* Decorative Buttons */}
        <div className="flex justify-center items-center gap-10 mt-10">
          <button className="w-24 h-24 bg-gradient-to-b from-[#43f27f] to-[#09772f] rounded-full flex justify-center items-center cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110">
            <div className="w-16 h-16 bg-[#1c1c1c] rounded-full flex justify-center items-center text-white font-semibold">
              →
            </div>
          </button>
          <button className="w-24 h-24 bg-gradient-to-b from-[#43f27f] to-[#09772f] rounded-full flex justify-center items-center cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110">
            <div className="w-16 h-16 bg-[#1c1c1c] rounded-full flex justify-center items-center text-white font-semibold">
              ←
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frame5;

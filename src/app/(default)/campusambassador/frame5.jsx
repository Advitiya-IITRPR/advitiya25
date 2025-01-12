"use client";

import React, { useState } from "react";

const Frame5 = ({ goPrev, goNext }) => {
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
              <div
                className={`${
                  open === 0 ? "text-[#36d66d]" : "text-white"
                } text-xl sm:text-2xl font-medium font-[Kodchasan] capitalize`}
              >
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

          {/* Second FAQ */}
          <div className="relative p-5 bg-transparent rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div
                className={`${
                  open === 1 ? "text-[#36d66d]" : "text-white"
                } text-xl sm:text-2xl font-medium font-[Kodchasan] capitalize`}
              >
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
              <div
                className={`${
                  open === 2 ? "text-[#36d66d]" : "text-white"
                } text-xl sm:text-2xl font-medium font-[Kodchasan] capitalize`}
              >
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

        {/* Navigation Buttons */}
        <div className="sm:flex hidden justify-center items-center gap-20 mt-10">
          <div
            className="text-white bg-green-500 p-5 pb-6 pr-2 font-bold text-center rounded-l-full hover:cursor-pointer"
            onClick={goPrev}
          >
            &lt;
          </div>
          <div
            className="text-white bg-green-500 p-5 pl-2 font-bold text-center rounded-r-full hover:cursor-pointer"
            onClick={goNext}
          >
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame5;

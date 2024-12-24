import React from "react";

export default function CardComponent() {
    return (
        <div className="w-72 h-80 bg-[#141C23] rounded-3xl border-t-4 border-t-[#40EC7B] border-l-4 border-l-[#40EC7B] shadow-lg p-6 flex flex-col justify-start gap-4 items-center">
            {/* Top Section */}
            <div className="flex justify-center">
                <div className="bg-[#1E282F] border border-1 border-[#40EC7B] text-[#40EC7B] px-4 py-1 rounded-full text-sm font-medium">
                    TSP Head
                </div>
            </div>

            {/* Name Section */}
            <div className="text-white text-xl font-semibold">
                Chena Ram Kumawat
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#40EC7B"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                >
                    <path d="M22.613 16.855l-5.646-1.412a2.016 2.016 0 0 0-2.021.73l-1.271 1.554a15.035 15.035 0 0 1-6.622-6.62l1.553-1.272a2.01 2.01 0 0 0 .729-2.021L7.145 1.387A2.008 2.008 0 0 0 5.171.035L1.513.655a2.005 2.005 0 0 0-1.682 2.219c.545 4.408 2.536 8.5 5.656 11.621 3.121 3.121 7.213 5.111 11.621 5.656.13.016.259.023.387.023.926 0 1.803-.643 2.219-1.682l.62-3.658a2.004 2.004 0 0 0-1.041-2.979z" />
                </svg>
                <span className="text-white text-lg font-medium">
                    +91 98556 30374
                </span>
            </div>
        </div>
    );
}
